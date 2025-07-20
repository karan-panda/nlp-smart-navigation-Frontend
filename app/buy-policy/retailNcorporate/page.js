"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowLeft, FaBuilding, FaHome, FaShieldAlt, FaCheckCircle, FaChartLine, FaUsers } from "react-icons/fa";

export default function InsuranceSelection() {
  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Animation variants for items
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const retailFeatures = [
    { icon: <FaHome />, text: "Home & Property Coverage" },
    { icon: <FaShieldAlt />, text: "Personal Liability Protection" },
    { icon: <FaCheckCircle />, text: "Simple Claims Process" }
  ];

  const corporateFeatures = [
    { icon: <FaBuilding />, text: "Business Assets Protection" },
    { icon: <FaUsers />, text: "Employee Benefits Coverage" },
    { icon: <FaChartLine />, text: "Business Interruption Insurance" }
  ];

  return (
    <div className="container py-4" style={{maxWidth: "800px", backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #f6f7fb 100%)'}}>
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between mb-4">
        <Link href="/buy-policy">
          <motion.div 
            whileHover={{ x: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="btn btn-light me-3 d-flex align-items-center shadow-sm" style={{transition: 'all 0.3s', borderRadius: '50px', padding: '8px 16px', border: 'none'}}>
              <FaArrowLeft className="me-2" /> Back
            </button>
          </motion.div>
        </Link>
        
        <div className="badge" style={{
          background: 'rgba(255, 102, 0, 0.1)', 
          color: '#FF6600', 
          padding: '8px 12px', 
          borderRadius: '8px',
          fontSize: '0.8rem'
        }}>
          Insurance Selection
        </div>
      </div>
      
      <motion.div 
        className="mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h3 className="fw-bold mb-2" style={{color: '#333'}}>Choose Your <span style={{color: '#FF6600'}}>Insurance</span> Type</h3>
        <p className="text-muted">Select the right plan for your needs</p>
      </motion.div>
      
      {/* Insurance Options */}
      <motion.div 
        className="row g-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Retail Insurance Card */}
        <motion.div className="col-md-6" variants={itemVariants}>
          <div className="card border-0 shadow-sm h-100" style={{borderRadius: "16px", overflow: "hidden"}}>
            <div className="text-white p-4" style={{ background: 'linear-gradient(135deg, #FF6600 0%, #FF9A00 100%)' }}>
              <div className="d-flex align-items-center mb-3">
                <div className="p-2 bg-white rounded-circle me-3" style={{width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center"}}>
                  <FaHome size={24} style={{color: "#FF6600"}} />
                </div>
                <h5 className="mb-0 fw-bold">Retail Insurance</h5>
              </div>
              <p className="mb-3">Comprehensive coverage designed for individuals and families</p>
            </div>
            
            <div className="card-body p-4">
              <div className="mb-4">
                <h6 className="fw-bold mb-3">Key Benefits</h6>
                {retailFeatures.map((feature, index) => (
                  <div key={index} className="d-flex align-items-center mb-3">
                    <div className="icon-gradient me-3 d-flex align-items-center justify-content-center" 
                      style={{width: '32px', height: '32px', minWidth: '32px', borderRadius: '8px', background: 'rgba(255, 102, 0, 0.1)'}}>
                      <div style={{color: '#FF6600'}}>
                        {feature.icon}
                      </div>
                    </div>
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/buy-policy/retail" className="text-decoration-none">
                <motion.div 
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button className="btn w-100 py-3" style={{
                    background: "linear-gradient(135deg, #FF6600 0%, #FF9A00 100%)",
                    color: "white",
                    borderRadius: "10px",
                    fontWeight: "600",
                    border: "none",
                    boxShadow: "0 4px 10px rgba(255, 102, 0, 0.3)"
                  }}>
                    Select Retail Insurance
                  </button>
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.div>
        
        {/* Corporate Insurance Card */}
        <motion.div className="col-md-6" variants={itemVariants}>
          <div className="card border-0 shadow-sm h-100" style={{borderRadius: "16px", overflow: "hidden"}}>
            <div className="text-white p-4" style={{ background: 'linear-gradient(135deg, #3949AB 0%, #5C6BC0 100%)' }}>
              <div className="d-flex align-items-center mb-3">
                <div className="p-2 bg-white rounded-circle me-3" style={{width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center"}}>
                  <FaBuilding size={24} style={{color: "#3949AB"}} />
                </div>
                <h5 className="mb-0 fw-bold">Corporate Insurance</h5>
              </div>
              <p className="mb-3">Tailored solutions for businesses of all sizes</p>
            </div>
            
            <div className="card-body p-4">
              <div className="mb-4">
                <h6 className="fw-bold mb-3">Key Benefits</h6>
                {corporateFeatures.map((feature, index) => (
                  <div key={index} className="d-flex align-items-center mb-3">
                    <div className="icon-gradient me-3 d-flex align-items-center justify-content-center" 
                      style={{width: '32px', height: '32px', minWidth: '32px', borderRadius: '8px', background: 'rgba(57, 73, 171, 0.1)'}}>
                      <div style={{color: '#3949AB'}}>
                        {feature.icon}
                      </div>
                    </div>
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/buy-policy/corporate" className="text-decoration-none">
                <motion.div 
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button className="btn w-100 py-3" style={{
                    background: "linear-gradient(135deg, #3949AB 0%, #5C6BC0 100%)",
                    color: "white",
                    borderRadius: "10px",
                    fontWeight: "600",
                    border: "none",
                    boxShadow: "0 4px 10px rgba(57, 73, 171, 0.3)"
                  }}>
                    Select Corporate Insurance
                  </button>
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Informational Section */}
      <motion.div 
        className="mt-5 p-4 rounded-4 shadow-sm"
        style={{background: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(10px)'}}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
      >
        <h5 className="fw-bold mb-3" style={{color: '#333'}}>Not sure which to choose?</h5>
        <p className="mb-3">
          <strong>Retail insurance</strong> is ideal for individuals and families looking to protect their personal assets.
        </p>
        <p className="mb-0">
          <strong>Corporate insurance</strong> provides comprehensive coverage for businesses, including property, liability, and employee benefits.
        </p>
      </motion.div>
      
      {/* Footer */}
      <div className="footer mt-5">
        <div className="d-flex justify-content-between align-items-center py-3 px-4 rounded-3" style={{background: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(10px)', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)'}}>
          <div className="d-flex align-items-center">
            <div className="icon-gradient me-2 d-flex align-items-center justify-content-center" style={{width: '30px', height: '30px', borderRadius: '8px', background: 'linear-gradient(135deg, #FF6600 0%, #FF9A00 100%)'}}>
              <FaShieldAlt style={{color:'white', fontSize: '0.9rem'}} />
            </div>
            <small className="fw-medium" style={{color: "#666"}}>ICICI Insurance</small>
          </div>
          <div className="d-flex gap-3">
            <Link href="#" className="text-decoration-none hover-link" style={{color: "#FF6600", transition: 'all 0.3s'}}>
              <small className="fw-semibold">Help</small>
            </Link>
            <Link href="#" className="text-decoration-none hover-link" style={{color: "#FF6600", transition: 'all 0.3s'}}>
              <small className="fw-semibold">Terms</small>
            </Link>
            <Link href="#" className="text-decoration-none hover-link" style={{color: "#FF6600", transition: 'all 0.3s'}}>
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
