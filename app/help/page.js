"use client";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { 
  FaQuestionCircle, 
  FaRobot, 
  FaChevronRight,
  FaArrowLeft,
  FaHome,
  FaFileAlt,
  FaGift,
  FaShoppingCart,
  FaLifeRing
} from "react-icons/fa";

export default function Help() {
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

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container-fluid min-vh-100 p-4 d-flex flex-column align-items-center"
      style={{backgroundColor: '#f8f9fa', backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #f6f7fb 100%)'}}
    >
      {/* Header */}
      <header className="d-flex align-items-center mb-5 w-100">
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
      </header>

      <motion.h2 
        className="fw-bold mb-4 text-center" 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        style={{ color: "#FF6600" }}
      >
        Help & Support
      </motion.h2>
      
      {/* Help Options */}
      <div className="row w-100 d-flex justify-content-center" style={{ maxWidth: "600px" }}>
        {/* FAQ Card */}
        <motion.div 
          className="col-12 mb-4"
          whileHover={{ scale: 1.03 }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link href="/help/faq" className="text-decoration-none">
            <div className="card p-4 bg-white shadow-sm" 
                 style={{borderRadius: '16px', border: 'none', transition: 'all 0.3s ease'}}>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="icon-gradient d-flex align-items-center justify-content-center me-4" 
                       style={{width: '60px', height: '60px', borderRadius: '14px', background: 'linear-gradient(135deg, #FF6600 0%, #FF9A00 100%)'}}
                  >
                    <FaQuestionCircle className="text-white fs-2" />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1">Frequently Asked Questions</h5>
                    <p className="text-muted mb-0">Find answers to your queries</p>
                  </div>
                </div>
                <FaChevronRight size={24} style={{color: "#FF6600"}} />
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Ask RIA Card */}
        <motion.div 
          className="col-12"
          whileHover={{ scale: 1.03 }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link href="/help/ria" className="text-decoration-none">
            <div className="card p-4 bg-white shadow-sm" 
                 style={{borderRadius: '16px', border: 'none', transition: 'all 0.3s ease'}}>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="icon-gradient d-flex align-items-center justify-content-center me-4" 
                       style={{width: '60px', height: '60px', borderRadius: '14px', background: 'linear-gradient(135deg, #3A7BD5 0%, #00D2FF 100%)'}}
                  >
                    <FaRobot className="text-white fs-2" />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1">Ask RIA</h5>
                    <p className="text-muted mb-0">Ask your queries to our chatbot</p>
                  </div>
                </div>
                <FaChevronRight size={24} style={{color: "#3A7BD5"}} />
              </div>
            </div>
          </Link>
        </motion.div>
      </div>

      {/* Navigation Bar */}
      <motion.nav 
        variants={itemVariants}
        className="navbar fixed-bottom bg-white shadow"
        style={{backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255,255,255,0.9)'}}
      >
        <div className="container d-flex justify-content-around">
          <Link href="/" className="nav-link text-center d-flex flex-column align-items-center">
            <FaHome className="mb-1" style={{color: '#666'}} />
            <small style={{fontSize: '0.7rem', color: '#666'}}>Home</small>
          </Link>
          <Link href="/policies" className="nav-link text-center d-flex flex-column align-items-center">
            <FaFileAlt className="mb-1" style={{color: '#666'}} />
            <small style={{fontSize: '0.7rem', color: '#666'}}>Policies</small>
          </Link>
          <Link href="/benefits" className="nav-link text-center d-flex flex-column align-items-center">
            <FaGift className="mb-1" style={{color: '#666'}} />
            <small style={{fontSize: '0.7rem', color: '#666'}}>Benefits</small>
          </Link>
          <Link href="/buy-policy" className="nav-link text-center d-flex flex-column align-items-center">
            <FaShoppingCart className="mb-1" style={{color: '#666'}} />
            <small style={{fontSize: '0.7rem', color: '#666'}}>Buy</small>
          </Link>
          <Link href="/help" className="nav-link text-center d-flex flex-column align-items-center">
            <FaLifeRing className="mb-1" style={{color: '#FF6600'}} />
            <small style={{fontSize: '0.7rem', color: '#FF6600', fontWeight: '600'}}>Help</small>
          </Link>
        </div>
      </motion.nav>

      <style jsx global>{`
        .card {
          box-shadow: 0 5px 15px rgba(0,0,0,0.05) !important;
        }
        .card:hover {
          box-shadow: 0 10px 30px rgba(0,0,0,0.1) !important;
        }
        .nav-link {
          transition: all 0.3s ease;
        }
        .nav-link:hover {
          transform: translateY(-2px);
        }
        @media (max-width: 576px) {
          .card .d-flex.align-items-center:first-child {
            flex-direction: column;
            text-align: center;
          }
          .card .d-flex.align-items-center .icon-gradient {
            margin-right: 0 !important;
            margin-bottom: 15px;
          }
          .card .d-flex.align-items-center.justify-content-between {
            flex-direction: row;
          }
        }
      `}</style>
      
      <div style={{ minHeight: "100px" }}></div>
    </motion.div>
  );
}
