"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { Container, Card, Form, Button } from "react-bootstrap";
import { FaHome, FaFileContract, FaMoneyBillWave, FaShieldAlt, FaArrowLeft, FaCheckCircle, FaBolt, FaUmbrella } from "react-icons/fa";
import { motion } from "framer-motion";

const HomePolicy = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [propertyValue, setPropertyValue] = useState("");
  const [agree, setAgree] = useState(false);
  
  // Features list for the insurance card
  const features = [
    { icon: <FaShieldAlt />, text: "Comprehensive Coverage" },
    { icon: <FaMoneyBillWave />, text: "Affordable Premiums" },
    { icon: <FaFileContract />, text: "Quick & Easy Claims" },
    { icon: <FaBolt />, text: "Natural Disaster Coverage" },
    { icon: <FaUmbrella />, text: "Liability Protection" },
    { icon: <FaHome />, text: "Structure & Contents" },
  ];

  return (
    <Container className="py-4" style={{maxWidth: "800px", backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #f6f7fb 100%)'}}>
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
          Property Insurance
        </div>
      </div>

      <motion.div 
        className="mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h3 className="fw-bold mb-2" style={{color: '#333'}}><span style={{color: '#FF6600'}}>Home</span> Insurance Policy</h3>
        <p className="text-muted">Secure your home with our comprehensive coverage</p>
      </motion.div>
      
      {/* Main Card */}
      <Card className="border-0 shadow-sm mb-4" style={{borderRadius: "16px", overflow: "hidden"}}>
        <div className="text-white p-4" style={{ background: 'linear-gradient(135deg, #FF6600 0%, #FF9A00 100%)' }}>
          <div className="d-flex align-items-center mb-2">
            <FaHome className="me-2" size={20} />
            <h5 className="mb-0 fw-bold">Secure Your Home with Our Insurance Policy</h5>
          </div>
          <p className="mb-3">Protect what matters most with comprehensive home insurance coverage.</p>
          <div className="row mt-2">
            {features.map((feature, index) => (
              <div key={index} className="col-md-4 mb-2">
                <div className="d-flex align-items-center">
                  <div className="me-2">{feature.icon}</div>
                  <small>{feature.text}</small>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3">
            <span className="badge bg-white text-dark p-2" style={{borderRadius: "8px"}}>Starting at ₹2,499/year*</span>
          </div>
        </div>
        
        <div className="p-4">
          <Form>
            <div className="mb-4">
              <h6 className="fw-bold mb-3 d-flex align-items-center" style={{color: '#333'}}>
                <div className="icon-gradient me-2 d-flex align-items-center justify-content-center" 
                  style={{width: '30px', height: '30px', borderRadius: '8px', background: 'rgba(255, 102, 0, 0.1)'}}>
                  <FaFileContract style={{color: '#FF6600'}} />
                </div>
                Full Name
              </h6>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  borderRadius: "10px",
                  border: "1px solid #e0e0e0",
                  padding: "12px 15px",
                  fontSize: "1rem"
                }}
                required
              />
            </div>
            
            <div className="mb-4">
              <h6 className="fw-bold mb-3 d-flex align-items-center" style={{color: '#333'}}>
                <div className="icon-gradient me-2 d-flex align-items-center justify-content-center" 
                  style={{width: '30px', height: '30px', borderRadius: '8px', background: 'rgba(255, 102, 0, 0.1)'}}>
                  <FaHome style={{color: '#FF6600'}} />
                </div>
                Property Address
              </h6>
              <Form.Control
                type="text"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                style={{
                  borderRadius: "10px",
                  border: "1px solid #e0e0e0",
                  padding: "12px 15px",
                  fontSize: "1rem"
                }}
                required
              />
            </div>
            
            <div className="mb-4">
              <h6 className="fw-bold mb-3 d-flex align-items-center" style={{color: '#333'}}>
                <div className="icon-gradient me-2 d-flex align-items-center justify-content-center" 
                  style={{width: '30px', height: '30px', borderRadius: '8px', background: 'rgba(255, 102, 0, 0.1)'}}>
                  <FaMoneyBillWave style={{color: '#FF6600'}} />
                </div>
                Property Value (₹)
              </h6>
              <Form.Control
                type="number"
                placeholder="Enter estimated value"
                value={propertyValue}
                onChange={(e) => setPropertyValue(e.target.value)}
                style={{
                  borderRadius: "10px",
                  border: "1px solid #e0e0e0",
                  padding: "12px 15px",
                  fontSize: "1rem"
                }}
                required
              />
              <Form.Text className="text-muted">
                Providing accurate property value ensures appropriate coverage
              </Form.Text>
            </div>
            
            <div className="mb-4">
              <div className="p-3 rounded-3" style={{background: 'rgba(255, 102, 0, 0.05)', border: '1px dashed rgba(255, 102, 0, 0.3)'}}>
                <Form.Check
                  type="checkbox"
                  id="terms-checkbox"
                  checked={agree}
                  onChange={() => setAgree(!agree)}
                  label={
                    <span className="ms-2">
                      I agree to the <span style={{color: '#FF6600', fontWeight: 'bold', cursor: 'pointer'}}>Terms & Conditions</span>
                    </span>
                  }
                />
              </div>
            </div>
            
            <motion.div 
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <button 
                type="submit" 
                className="btn w-100 py-3" 
                disabled={!agree}
                style={{
                  background: agree ? "linear-gradient(135deg, #FF6600 0%, #FF9A00 100%)" : "#e0e0e0",
                  color: "white",
                  borderRadius: "10px",
                  fontWeight: "600",
                  border: "none",
                  boxShadow: agree ? "0 4px 10px rgba(255, 102, 0, 0.3)" : "none",
                  transition: "all 0.3s"
                }}
              >
                <FaCheckCircle className="me-2" /> Get a Quote
              </button>
            </motion.div>
          </Form>
        </div>
      </Card>
      
      {/* Why Choose Us Section */}
      <div className="mt-5 mb-4">
        <h5 className="fw-bold mb-3" style={{color: '#FF6600'}}>Why Choose Our Home Insurance?</h5>
        <div className="row g-3">
          <div className="col-md-4">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-3 h-100 rounded-3 shadow-sm" 
              style={{
                background: 'white', 
                border: '1px solid #eee'
              }}
            >
              <div className="d-flex flex-column align-items-center text-center">
                <div className="mb-3 p-3 rounded-circle" style={{background: 'rgba(255, 102, 0, 0.1)'}}>
                  <FaShieldAlt size={24} style={{color: '#FF6600'}} />
                </div>
                <h6 className="fw-bold">Comprehensive Coverage</h6>
                <p className="small text-muted">Protection against fire, theft, natural disasters, and more</p>
              </div>
            </motion.div>
          </div>
          <div className="col-md-4">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-3 h-100 rounded-3 shadow-sm" 
              style={{
                background: 'white', 
                border: '1px solid #eee'
              }}
            >
              <div className="d-flex flex-column align-items-center text-center">
                <div className="mb-3 p-3 rounded-circle" style={{background: 'rgba(255, 102, 0, 0.1)'}}>
                  <FaMoneyBillWave size={24} style={{color: '#FF6600'}} />
                </div>
                <h6 className="fw-bold">Affordable Premiums</h6>
                <p className="small text-muted">Customizable plans to fit your budget and needs</p>
              </div>
            </motion.div>
          </div>
          <div className="col-md-4">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-3 h-100 rounded-3 shadow-sm" 
              style={{
                background: 'white', 
                border: '1px solid #eee'
              }}
            >
              <div className="d-flex flex-column align-items-center text-center">
                <div className="mb-3 p-3 rounded-circle" style={{background: 'rgba(255, 102, 0, 0.1)'}}>
                  <FaFileContract size={24} style={{color: '#FF6600'}} />
                </div>
                <h6 className="fw-bold">Quick & Easy Claims</h6>
                <p className="small text-muted">Hassle-free process with 24/7 customer support</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="footer mt-5">
        <div className="d-flex justify-content-between align-items-center py-3 px-4 rounded-3" style={{background: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(10px)', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)'}}>
          <div className="d-flex align-items-center">
            <div className="icon-gradient me-2 d-flex align-items-center justify-content-center" style={{width: '30px', height: '30px', borderRadius: '8px', background: 'linear-gradient(135deg, #FF6600 0%, #FF9A00 100%)'}}>
              <FaHome style={{color:'white', fontSize: '0.9rem'}} />
            </div>
            <small className="fw-medium" style={{color: "#666"}}>ICICI Home Insurance</small>
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
      
      <div className="text-center text-muted small mt-4">
        *Premium may vary based on your property value, location, and coverage options.
      </div>
      
      <style jsx global>{`
        .form-control:focus {
          box-shadow: 0 0 0 3px rgba(255, 102, 0, 0.2);
          border-color: #FF6600;
        }
        .form-check-input:checked {
          background-color: #FF6600;
          border-color: #FF6600;
        }
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
    </Container>
  );
};

export default HomePolicy;
