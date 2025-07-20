"use client";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { FaBuilding, FaShieldAlt, FaUserShield, FaGavel, FaLaptop, FaArrowLeft } from "react-icons/fa";

export default function CorporateInsurance() {
  const corporatePlans = [
    { id: 1, name: "Group Health Insurance", description: "Comprehensive health coverage for employees.", icon: <FaShieldAlt />, link: "/buy-policy/group-health", gradient: "linear-gradient(135deg, #FF6600 0%, #FF9A00 100%)" },
    { id: 2, name: "Business Liability Insurance", description: "Protect your business from unforeseen risks.", icon: <FaGavel />, link: "/buy-policy/business-liability", gradient: "linear-gradient(135deg, #3A7BD5 0%, #00D2FF 100%)" },
    { id: 3, name: "Employee Benefits Insurance", description: "Provide financial security to your employees.", icon: <FaUserShield />, link: "/buy-policy/employee-benefits", gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)" },
    { id: 4, name: "Property Insurance", description: "Cover your business assets and properties.", icon: <FaBuilding />, link: "/buy-policy/property", gradient: "linear-gradient(135deg, #F09819 0%, #EDDE5D 100%)" },
    { id: 5, name: "Cyber Insurance", description: "Safeguard your company from cyber threats.", icon: <FaLaptop />, link: "/buy-policy/cyber", gradient: "linear-gradient(135deg, #4B6CB7 0%, #182848 100%)" }
  ];

  return (
    <div className="container py-4" style={{maxWidth: "900px", backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #f6f7fb 100%)'}}>
      <div className="d-flex align-items-center mb-4">
        <Link href="/buy-policy">
          <button className="btn btn-light me-3 d-flex align-items-center shadow-sm" style={{transition: 'all 0.3s', borderRadius: '50px', padding: '8px 16px', border: 'none'}}>
            <FaArrowLeft className="me-2" /> Back
          </button>
        </Link>
      </div>
      
      <motion.div 
        className="text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="icon-gradient mx-auto mb-2 d-flex align-items-center justify-content-center" style={{width: '80px', height: '80px', borderRadius: '18px', background: 'linear-gradient(135deg, #FF6600 0%, #FF9A00 100%)'}}>
          <FaBuilding style={{color:'white', fontSize: '2.5rem'}} />
        </div>
        <h2 className="fw-bold" style={{color: '#333'}}>Corporate Insurance</h2>
        <p className="text-muted">Secure your business with the right insurance plan</p>
      </motion.div>

      <div className="row mt-5">
        {corporatePlans.map(plan => (
          <motion.div 
            key={plan.id} 
            className="col-md-6 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: plan.id * 0.1 }}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href={plan.link} className="text-decoration-none">
              <div className="card border-0 shadow-sm h-100" style={{borderRadius: "16px", overflow: "hidden"}}>
                <div className="d-flex p-4">
                  <div className="me-3 d-flex align-items-center justify-content-center" style={{
                    width: '60px', 
                    height: '60px', 
                    borderRadius: '12px', 
                    background: plan.gradient
                  }}>
                    <span className="fs-4" style={{ color: "#FFFFFF" }}>{plan.icon}</span>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1" style={{color: '#333'}}>{plan.name}</h5>
                    <p className="text-muted mb-0">{plan.description}</p>
                  </div>
                </div>
                <div className="card-footer border-0 bg-white text-end">
                  <span className="badge rounded-pill" style={{
                    backgroundColor: 'rgba(255, 102, 0, 0.1)', 
                    color: '#FF6600', 
                    padding: '6px 12px'
                  }}>
                    View Details
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      
      <div className="footer mt-5">
        <div className="d-flex justify-content-between align-items-center py-3 px-4 rounded-3" style={{background: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(10px)', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)'}}>
          <div className="d-flex align-items-center">
            <div className="icon-gradient me-2 d-flex align-items-center justify-content-center" style={{width: '30px', height: '30px', borderRadius: '8px', background: 'linear-gradient(135deg, #FF6600 0%, #FF9A00 100%)'}}>
              <FaBuilding style={{color:'white', fontSize: '0.9rem'}} />
            </div>
            <small className="fw-medium" style={{color: "#666"}}>ICICI Corporate Solutions</small>
          </div>
          <div className="d-flex gap-3">
            <Link href="#" className="text-decoration-none hover-link" style={{color: "#FF6600", transition: 'all 0.3s'}}>
              <small className="fw-semibold">Contact Sales</small>
            </Link>
            <Link href="#" className="text-decoration-none hover-link" style={{color: "#FF6600", transition: 'all 0.3s'}}>
              <small className="fw-semibold">Support</small>
            </Link>
            <Link href="/disclaimer" className="text-decoration-none hover-link" style={{color: "#FF6600", transition: 'all 0.3s'}}>
              <small className="fw-semibold">Privacy</small>
            </Link>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        .hover-link:hover {
          opacity: 0.8;
          transform: translateY(-1px);
        }
        @media (max-width: 768px) {
          .container {
            padding-left: 15px;
            padding-right: 15px;
          }
          .footer .d-flex {
            flex-direction: column;
            gap: 10px;
          }
          .footer .d-flex.gap-3 {
            flex-direction: row;
          }
        }
      `}</style>
      
      <div style={{ minHeight: "40px" }}></div>
    </div>
  );
}
