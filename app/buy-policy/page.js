"use client";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { 
  FaArrowLeft, FaHeartbeat, FaCar, FaMotorcycle, FaPlane, 
  FaHome, FaBuilding, FaShoppingCart, FaShieldAlt, 
  FaChevronRight, FaArrowRight, FaMedkit, FaBusinessTime 
} from "react-icons/fa";

export default function BuyInsurance() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  // Features list
  const insuranceFeatures = [
    { text: "Instant policy issuance", color: "#FF6600" },
    { text: "Cashless claims", color: "#3A7BD5" },
    { text: "24/7 support", color: "#11998e" }
  ];

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container-fluid p-4 min-vh-100" 
      style={{backgroundColor: '#f8f9fa', backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #f6f7fb 100%)'}}
    >
      <header className="d-flex align-items-center mb-4 pb-2">
        <Link href="/">
          <motion.button 
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-light me-3 d-flex align-items-center shadow-sm" 
            style={{transition: 'all 0.3s', borderRadius: '50px', padding: '8px 16px', border: 'none'}}
          >
            <FaArrowLeft className="me-2" /> Back
          </motion.button>
        </Link>
        <div className="d-flex align-items-center">
          <div className="icon-gradient me-2 d-flex align-items-center justify-content-center" 
               style={{width: '45px', height: '45px', borderRadius: '12px', background: 'linear-gradient(135deg, #FF6600 0%, #FF8C42 100%)'}}
          >
            <FaShieldAlt style={{color:'white', fontSize: '1.3rem'}} />
          </div>
          <div>
            <h1 className="h3 fw-bold mb-0" style={{color:'#333', letterSpacing: '0.5px'}}>Buy Insurance</h1>
            <p className="text-muted mb-0" style={{fontSize: '0.9rem'}}>Choose the right coverage for your needs</p>
          </div>
        </div>
      </header>
      
      {/* Features bar */}
      <motion.div
        variants={itemVariants}
        className="d-flex flex-wrap justify-content-around align-items-center mb-4 py-2 px-3 bg-white rounded-4 shadow-sm"
        style={{border: '1px solid rgba(0,0,0,0.05)'}}
      >
        {insuranceFeatures.map((feature, index) => (
          <div key={index} className="d-flex align-items-center py-2">
            <div style={{width: '8px', height: '8px', borderRadius: '50%', backgroundColor: feature.color, marginRight: '10px'}}></div>
            <span className="text-muted" style={{fontSize: '0.9rem'}}>{feature.text}</span>
          </div>
        ))}
      </motion.div>

      {/* Health Insurance Section */}
      <motion.section variants={itemVariants} className="mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="fw-bold" style={{color: '#333', fontSize: '1.1rem'}}>
            <span style={{borderBottom: '2px solid #FF6600', paddingBottom: '4px'}}>Health</span>
            <span style={{color: '#FF6600'}}> Insurance</span>
          </h5>
          <Link href="/buy-policy/health" className="text-decoration-none">
            <small className="d-flex align-items-center" style={{color: '#FF6600', fontWeight: '500'}}>
              View all <FaChevronRight size={10} className="ms-1" />
            </small>
          </Link>
        </div>
        <Link href="/buy-policy/health" className="text-decoration-none">
          <motion.div 
            whileHover={{ y: -5, boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}
            whileTap={{ scale: 0.98 }}
            className="card p-4 mb-1 bg-white" 
            style={{transition: 'all 0.3s ease', borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.05)'}}
          >
            <div className="d-flex align-items-center">
              <div className="icon-gradient d-flex align-items-center justify-content-center me-4" 
                   style={{width: '70px', height: '70px', borderRadius: '14px', background: 'linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%)'}}
              >
                <FaHeartbeat className="text-white fs-2" />
              </div>
              <div className="text-start flex-grow-1">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <p className="mb-1 fs-5 fw-bold" style={{color: '#333'}}>Health Insurance</p>
                    <small className="text-muted">Comprehensive coverage for you and your family</small>
                  </div>
                  <motion.div 
                    whileHover={{ x: 3 }}
                    className="d-none d-md-block"
                  >
                    <FaArrowRight style={{color: '#FF6600'}} />
                  </motion.div>
                </div>
                <div className="mt-2 d-flex flex-wrap gap-2">
                  <span className="badge rounded-pill" style={{backgroundColor: 'rgba(255, 102, 0, 0.1)', color: '#FF6600', padding: '5px 12px'}}>Popular</span>
                  <span className="badge rounded-pill" style={{backgroundColor: 'rgba(255, 102, 0, 0.05)', color: '#FF6600', padding: '5px 12px'}}>Family Coverage</span>
                  <span className="badge rounded-pill" style={{backgroundColor: 'rgba(255, 102, 0, 0.05)', color: '#FF6600', padding: '5px 12px'}}>Pre-existing Conditions</span>
                </div>
              </div>
            </div>
          </motion.div>
        </Link>
      </motion.section>

      {/* Vehicle Insurance Section */}
      <motion.section variants={itemVariants} className="mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="fw-bold" style={{color: '#333', fontSize: '1.1rem'}}>
            <span style={{borderBottom: '2px solid #FF6600', paddingBottom: '4px'}}>Vehicle</span>
            <span style={{color: '#FF6600'}}> Insurance</span>
          </h5>
          <Link href="#" className="text-decoration-none">
            <small className="d-flex align-items-center" style={{color: '#FF6600', fontWeight: '500'}}>
              Compare <FaChevronRight size={10} className="ms-1" />
            </small>
          </Link>
        </div>
        <div className="d-flex flex-column flex-md-row gap-4">
          <Link href="/buy-policy/car" className="flex-fill text-decoration-none">
            <motion.div 
              whileHover={{ y: -5, boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}
              whileTap={{ scale: 0.98 }}
              className="card p-3 bg-white" 
              style={{transition: 'all 0.3s ease', borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', height: '100%'}}
            >
              <div className="d-flex align-items-center">
                <div className="icon-gradient d-flex align-items-center justify-content-center me-3" 
                     style={{width: '60px', height: '60px', borderRadius: '12px', background: 'linear-gradient(135deg, #3A7BD5 0%, #00D2FF 100%)'}}
                >
                  <FaCar className="text-white fs-2" />
                </div>
                <div className="text-start">
                  <p className="mb-0 fs-5 fw-bold" style={{color: '#333'}}>Car Insurance</p>
                  <small className="text-muted">Protection for your vehicle</small>
                  <div className="mt-2">
                    <span className="badge rounded-pill" style={{backgroundColor: 'rgba(58, 123, 213, 0.1)', color: '#3A7BD5', padding: '5px 12px'}}>From ₹2094/yr</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
          <Link href="/buy-policy/bike" className="flex-fill text-decoration-none">
            <motion.div 
              whileHover={{ y: -5, boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}
              whileTap={{ scale: 0.98 }}
              className="card p-3 bg-white" 
              style={{transition: 'all 0.3s ease', borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', height: '100%'}}
            >
              <div className="d-flex align-items-center">
                <div className="icon-gradient d-flex align-items-center justify-content-center me-3" 
                     style={{width: '60px', height: '60px', borderRadius: '12px', background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)'}}
                >
                  <FaMotorcycle className="text-white fs-2" />
                </div>
                <div className="text-start">
                  <p className="mb-0 fs-5 fw-bold" style={{color: '#333'}}>Bike Insurance</p>
                  <small className="text-muted">Coverage for two-wheelers</small>
                  <div className="mt-2">
                    <span className="badge rounded-pill" style={{backgroundColor: 'rgba(17, 153, 142, 0.1)', color: '#11998e', padding: '5px 12px'}}>From ₹1299/yr</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </motion.section>

      {/* Travel Insurance Section */}
      <motion.section variants={itemVariants} className="mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="fw-bold" style={{color: '#333', fontSize: '1.1rem'}}>
            <span style={{borderBottom: '2px solid #FF6600', paddingBottom: '4px'}}>Travel</span>
            <span style={{color: '#FF6600'}}> Insurance</span>
          </h5>
        </div>
        <Link href="/buy-policy/travel" className="text-decoration-none">
          <motion.div 
            whileHover={{ y: -5, boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}
            whileTap={{ scale: 0.98 }}
            className="card p-4 mb-1 bg-white" 
            style={{transition: 'all 0.3s ease', borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.05)'}}
          >
            <div className="d-flex align-items-center">
              <div className="icon-gradient d-flex align-items-center justify-content-center me-4" 
                   style={{width: '70px', height: '70px', borderRadius: '14px', background: 'linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)'}}
              >
                <FaPlane className="text-white fs-2" />
              </div>
              <div className="text-start flex-grow-1">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <p className="mb-1 fs-5 fw-bold" style={{color: '#333'}}>TripSecure+</p>
                    <small className="text-muted">Travel with peace of mind</small>
                  </div>
                  <motion.div 
                    whileHover={{ x: 3 }}
                    className="d-none d-md-block"
                  >
                    <FaArrowRight style={{color: '#2193b0'}} />
                  </motion.div>
                </div>
                <div className="mt-2 d-flex flex-wrap gap-2">
                  <span className="badge rounded-pill" style={{backgroundColor: 'rgba(33, 147, 176, 0.1)', color: '#2193b0', padding: '5px 12px'}}>International</span>
                  <span className="badge rounded-pill" style={{backgroundColor: 'rgba(33, 147, 176, 0.05)', color: '#2193b0', padding: '5px 12px'}}>Medical Coverage</span>
                  <span className="badge rounded-pill" style={{backgroundColor: 'rgba(33, 147, 176, 0.05)', color: '#2193b0', padding: '5px 12px'}}>Trip Cancellation</span>
                </div>
              </div>
            </div>
          </motion.div>
        </Link>
      </motion.section>

      {/* Other Products Section */}
      <motion.section variants={itemVariants} className="mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="fw-bold" style={{color: '#333', fontSize: '1.1rem'}}>
            <span style={{borderBottom: '2px solid #FF6600', paddingBottom: '4px'}}>Other</span>
            <span style={{color: '#FF6600'}}> Products</span>
          </h5>
        </div>
        <div className="d-flex flex-column flex-md-row gap-4">
          <Link href="/buy-policy/home" className="flex-fill text-decoration-none">
            <motion.div 
              whileHover={{ y: -5, boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}
              whileTap={{ scale: 0.98 }}
              className="card p-3 bg-white" 
              style={{transition: 'all 0.3s ease', borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', height: '100%'}}
            >
              <div className="d-flex align-items-center">
                <div className="icon-gradient d-flex align-items-center justify-content-center me-3" 
                     style={{width: '60px', height: '60px', borderRadius: '12px', background: 'linear-gradient(135deg, #F09819 0%, #EDDE5D 100%)'}}
                >
                  <FaHome className="text-white fs-2" />
                </div>
                <div className="text-start">
                  <p className="mb-0 fs-5 fw-bold" style={{color: '#333'}}>Home Insurance</p>
                  <small className="text-muted">Protect your property</small>
                </div>
              </div>
            </motion.div>
          </Link>
          <Link href="/buy-policy/retailNcorporate" className="flex-fill text-decoration-none">
            <motion.div 
              whileHover={{ y: -5, boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}
              whileTap={{ scale: 0.98 }}
              className="card p-3 bg-white" 
              style={{transition: 'all 0.3s ease', borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', height: '100%'}}
            >
              <div className="d-flex align-items-center">
                <div className="icon-gradient d-flex align-items-center justify-content-center me-3" 
                     style={{width: '60px', height: '60px', borderRadius: '12px', background: 'linear-gradient(135deg, #4B6CB7 0%, #182848 100%)'}}
                >
                  <FaBuilding className="text-white fs-2" />
                </div>
                <div className="text-start">
                  <p className="mb-0 fs-5 fw-bold" style={{color: '#333'}}>Retail & Corporate</p>
                  <small className="text-muted">Business protection</small>
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </motion.section>

      {/* Popular Searches */}
      <motion.div variants={itemVariants} className="mt-5 mb-4 p-3 rounded-4 bg-white shadow-sm">
        <h6 className="fw-bold mb-3" style={{color: '#666', fontSize: '0.9rem'}}>Popular Searches</h6>
        <div className="d-flex flex-wrap gap-2">
          <Link href="/buy-policy/health" className="text-decoration-none">
            <span className="badge rounded-pill" style={{backgroundColor: 'rgba(255, 102, 0, 0.08)', color: '#FF6600', padding: '8px 15px', fontSize: '0.85rem'}}>
              <FaMedkit className="me-1" size={12} /> Family Health Cover
            </span>
          </Link>
          <Link href="/buy-policy/car" className="text-decoration-none">
            <span className="badge rounded-pill" style={{backgroundColor: 'rgba(58, 123, 213, 0.08)', color: '#3A7BD5', padding: '8px 15px', fontSize: '0.85rem'}}>
              <FaCar className="me-1" size={12} /> Third Party Car
            </span>
          </Link>
          <Link href="/buy-policy/corporate" className="text-decoration-none">
            <span className="badge rounded-pill" style={{backgroundColor: 'rgba(75, 108, 183, 0.08)', color: '#4B6CB7', padding: '8px 15px', fontSize: '0.85rem'}}>
              <FaBusinessTime className="me-1" size={12} /> Group Health
            </span>
          </Link>
          <Link href="/buy-policy/travel" className="text-decoration-none">
            <span className="badge rounded-pill" style={{backgroundColor: 'rgba(33, 147, 176, 0.08)', color: '#2193b0', padding: '8px 15px', fontSize: '0.85rem'}}>
              <FaPlane className="me-1" size={12} /> International Travel
            </span>
          </Link>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div 
        variants={itemVariants}
        className="footer mt-5 pt-4 pb-2"
      >
        <div className="d-flex justify-content-between align-items-center py-3 px-4" 
             style={{background: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(10px)', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)'}}
        >
          <Link href="/disclaimer" className="text-decoration-none hover-link d-flex align-items-center" style={{color: '#FF6600', transition: 'all 0.3s'}}>
            <span className="fw-semibold">Disclaimer</span>
          </Link>
          <Link href="/product-details" className="text-decoration-none hover-link d-flex align-items-center" style={{color: '#FF6600', transition: 'all 0.3s'}}>
            <span className="fw-semibold">Product Details</span>
            <FaChevronRight size={12} className="ms-2" />
          </Link>
        </div>
      </motion.div>

      <style jsx global>{`
        .hover-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.07) !important;
          cursor: pointer;
        }
        .hover-link:hover {
          transform: translateX(3px);
        }
        .hover-effect:hover {
          transform: translateX(-2px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.08) !important;
        }
        .icon-gradient {
          transition: all 0.3s ease;
        }
        .hover-card:hover .icon-gradient {
          transform: scale(1.1);
        }
        @media (max-width: 768px) {
          .d-flex.gap-4 {
            flex-direction: column;
          }
          .d-flex.gap-4 .flex-fill {
            margin-bottom: 15px;
          }
        }
        @media (max-width: 576px) {
          .card .d-flex.align-items-center {
            flex-direction: column;
            text-align: center;
          }
          .card .d-flex.align-items-center .icon-gradient {
            margin-right: 0 !important;
            margin-bottom: 15px;
          }
          .card .text-start {
            text-align: center !important;
          }
          .footer .d-flex {
            flex-direction: column;
            gap: 15px;
          }
          header .d-flex.align-items-center {
            flex-direction: row;
          }
        }
      `}</style>
      
      <div style={{ minHeight: "60px" }}></div>
      
    </motion.div>
  );
}
