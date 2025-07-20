"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowLeft, FaHeartbeat, FaCar, FaMotorcycle, FaPlane, FaHome, FaShieldAlt } from "react-icons/fa";

export default function RetailInsurance() {
  // Updated insurance plans with React icons instead of emojis
  const insurancePlans = [
    { 
      id: 1, 
      name: "Health Insurance", 
      description: "Get the best health coverage for you and your family.", 
      icon: <FaHeartbeat />, 
      link: "/buy-policy/health",
      color: "#FF6600",
      gradient: "linear-gradient(135deg, #FF6600 0%, #FF9A00 100%)"
    },
    { 
      id: 2, 
      name: "Car Insurance", 
      description: "Protect your car with affordable insurance plans.", 
      icon: <FaCar />, 
      link: "/buy-policy/car",
      color: "#4CAF50",
      gradient: "linear-gradient(135deg, #4CAF50 0%, #8BC34A 100%)"
    },
    { 
      id: 3, 
      name: "Bike Insurance", 
      description: "Two-wheeler insurance for safe rides.", 
      icon: <FaMotorcycle />, 
      link: "/buy-policy/bike",
      color: "#3F51B5",
      gradient: "linear-gradient(135deg, #3F51B5 0%, #7986CB 100%)"
    },
    { 
      id: 4, 
      name: "Travel Insurance", 
      description: "Secure your trips with travel insurance.", 
      icon: <FaPlane />, 
      link: "/buy-policy/travel",
      color: "#009688",
      gradient: "linear-gradient(135deg, #009688 0%, #4DB6AC 100%)"
    },
    { 
      id: 5, 
      name: "Home Insurance", 
      description: "Keep your home safe from unexpected damages.", 
      icon: <FaHome />, 
      link: "/buy-policy/home",
      color: "#FF5722",
      gradient: "linear-gradient(135deg, #FF5722 0%, #FF8A65 100%)"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="container py-4" style={{maxWidth: "1000px", backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #f6f7fb 100%)'}}>
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
          Individual & Family Insurance
        </div>
      </div>

      <motion.div 
        className="mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h3 className="fw-bold mb-2" style={{color: '#333'}}><span style={{color: '#FF6600'}}>Retail</span> Insurance Plans</h3>
        <p className="text-muted">Choose the best insurance plan for your individual and family needs</p>
      </motion.div>
      
      {/* Insurance Plan Cards */}
      <motion.div 
        className="row g-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {insurancePlans.map(plan => (
          <motion.div key={plan.id} className="col-md-6 col-lg-4" variants={itemVariants}>
            <Link href={plan.link} className="text-decoration-none">
              <motion.div 
                className="card border-0 shadow-sm h-100" 
                style={{borderRadius: "16px", overflow: "hidden"}}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="text-white p-4" style={{ background: plan.gradient }}>
                  <div className="d-flex align-items-center mb-2">
                    <div className="me-2" style={{ fontSize: "1.5rem" }}>{plan.icon}</div>
                    <h5 className="mb-0 fw-bold">{plan.name}</h5>
                  </div>
                </div>
                <div className="card-body p-4">
                  <p className="mb-0">{plan.description}</p>
                </div>
                <div className="card-footer border-0 bg-white p-3">
                  <div className="d-flex align-items-center justify-content-end">
                    <span className="small fw-semibold" style={{ color: plan.color }}>View Options</span>
                    <span className="ms-2" style={{ color: plan.color }}>→</span>
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Featured Benefits */}
      <motion.div 
        className="mt-5 p-4 rounded-4 shadow-sm"
        style={{background: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(10px)'}}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
      >
        <h5 className="fw-bold mb-3" style={{color: '#333'}}>Why Choose Our Retail Insurance?</h5>
        
        <div className="row g-3">
          <div className="col-md-4">
            <div className="d-flex align-items-start">
              <div className="icon-gradient me-3 d-flex align-items-center justify-content-center" 
                style={{width: '32px', height: '32px', minWidth: '32px', borderRadius: '8px', background: 'rgba(255, 102, 0, 0.1)'}}>
                <FaShieldAlt style={{color: '#FF6600'}} />
              </div>
              <div>
                <h6 className="fw-bold mb-1">Comprehensive Coverage</h6>
                <p className="small text-muted mb-0">Protection against all major risks</p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="d-flex align-items-start">
              <div className="icon-gradient me-3 d-flex align-items-center justify-content-center" 
                style={{width: '32px', height: '32px', minWidth: '32px', borderRadius: '8px', background: 'rgba(255, 102, 0, 0.1)'}}>
                <FaHeartbeat style={{color: '#FF6600'}} />
              </div>
              <div>
                <h6 className="fw-bold mb-1">Family Protection</h6>
                <p className="small text-muted mb-0">Keep your loved ones secure</p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="d-flex align-items-start">
              <div className="icon-gradient me-3 d-flex align-items-center justify-content-center" 
                style={{width: '32px', height: '32px', minWidth: '32px', borderRadius: '8px', background: 'rgba(255, 102, 0, 0.1)'}}>
                <FaCar style={{color: '#FF6600'}} />
              </div>
              <div>
                <h6 className="fw-bold mb-1">Asset Protection</h6>
                <p className="small text-muted mb-0">Safeguard your valuable assets</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Footer */}
      <div className="footer mt-5 mb-5">
        <div className="d-flex justify-content-between align-items-center py-3 px-4 rounded-3" style={{background: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(10px)', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)'}}>
          <div className="d-flex align-items-center">
            <div className="icon-gradient me-2 d-flex align-items-center justify-content-center" style={{width: '30px', height: '30px', borderRadius: '8px', background: 'linear-gradient(135deg, #FF6600 0%, #FF9A00 100%)'}}>
              <FaShieldAlt style={{color:'white', fontSize: '0.9rem'}} />
            </div>
            <small className="fw-medium" style={{color: "#666"}}>ICICI Retail Insurance</small>
          </div>
          <div className="d-flex gap-3">
            <Link href="/help" className="text-decoration-none hover-link" style={{color: "#FF6600", transition: 'all 0.3s'}}>
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
      
      {/* Bottom Navigation */}
      <nav className="navbar fixed-bottom bg-white shadow py-2">
        <div className="container d-flex justify-content-around">
          <Link href="/" className="nav-link" style={{ color: "#777" }}>Home</Link>
          <Link href="/policies" className="nav-link" style={{ color: "#777" }}>Policies</Link>
          <Link href="/benefits" className="nav-link" style={{ color: "#777" }}>Benefits</Link>
          <Link href="/buy-policy" className="nav-link active fw-bold" style={{ color: "#FF6600" }}>Buy</Link>
          <Link href="/help" className="nav-link" style={{ color: "#777" }}>Help</Link>
        </div>
      </nav>
      
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
        .navbar .nav-link {
          font-size: 0.85rem;
          transition: all 0.3s;
        }
        .navbar .nav-link:hover {
          transform: translateY(-2px);
        }
      `}</style>
      
      <div style={{ minHeight: "60px" }}></div>
    </div>
  );
}
