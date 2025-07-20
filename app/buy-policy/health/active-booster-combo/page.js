"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { FaArrowLeft, FaMapMarkerAlt, FaUserShield, FaCheckCircle, FaHeartbeat, FaHospital, FaMedkit, FaShieldAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ActivateBooster() {
  const [pincode, setPincode] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Features list for the insurance card
  const features = [
    { text: "Pre & post hospitalization expenses" },
    { text: "Covers day care procedures" },
    { text: "In-patient treatment cover" },
    { text: "Wellness Programs" },
    { text: "Cashless Hospitalization" },
    { text: "No Medical Tests" }
  ];

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  return (
    <Container className="py-4" style={{maxWidth: "800px", backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #f6f7fb 100%)'}}>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <Link href="/buy-policy/health">
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
          Active Booster Combo
        </div>
      </div>

      <motion.div 
        className="mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h3 className="fw-bold mb-3" style={{color: '#333'}}>Activate Booster <span style={{color: '#FF6600'}}>Combo*</span></h3>
      </motion.div>
      
      <Card className="border-0 shadow-sm mb-4" style={{borderRadius: "16px", overflow: "hidden"}}>
        <div className="text-white p-4" style={{ background: 'linear-gradient(135deg, #FF6600 0%, #FF9A00 100%)' }}>
          <div className="d-flex align-items-center mb-2">
            <FaShieldAlt className="me-2" size={20} />
            <h5 className="mb-0 fw-bold">ICICI Lombard's Activate Booster Combo</h5>
          </div>
          <p className="mb-0">Designed to cater to your health journey at all stages.</p>
          <div className="row mt-3">
            {features.map((feature, index) => (
              <div key={index} className="col-md-4 mb-2">
                <div className="d-flex align-items-center">
                  <FaCheckCircle className="me-2" />
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
          <div className="mb-4">
            <h6 className="fw-bold mb-3 d-flex align-items-center" style={{color: '#333'}}>
              <div className="icon-gradient me-2 d-flex align-items-center justify-content-center" 
                style={{width: '30px', height: '30px', borderRadius: '8px', background: 'rgba(255, 102, 0, 0.1)'}}>
                <FaMapMarkerAlt style={{color: '#FF6600'}} />
              </div>
              Where do you live?
            </h6>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Enter Pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                style={{
                  borderRadius: "10px",
                  border: "1px solid #e0e0e0",
                  padding: "12px 15px",
                  fontSize: "1rem"
                }}
              />
              <Form.Text className="text-muted">
                Enter your 6-digit pincode for accurate coverage details
              </Form.Text>
            </Form.Group>
          </div>
          
          <div className="mb-4">
            <h6 className="fw-bold mb-3 d-flex align-items-center" style={{color: '#333'}}>
              <div className="icon-gradient me-2 d-flex align-items-center justify-content-center" 
                style={{width: '30px', height: '30px', borderRadius: '8px', background: 'rgba(255, 102, 0, 0.1)'}}>
                <FaUserShield style={{color: '#FF6600'}} />
              </div>
              Who do you want to insure?
            </h6>
            <div className="row">
              {['Self', 'Spouse', 'Child', 'Parents'].map((option) => (
                <div key={option} className="col-6 col-md-3 mb-3">
                  <motion.div 
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div 
                      className="p-3 text-center rounded-3 cursor-pointer" 
                      style={{
                        background: selectedOptions.includes(option) ? 'rgba(255, 102, 0, 0.1)' : '#f8f9fa',
                        border: selectedOptions.includes(option) ? '1px solid #FF6600' : '1px solid #e0e0e0',
                        cursor: 'pointer',
                        transition: 'all 0.3s'
                      }}
                      onClick={() => handleCheckboxChange(option)}
                    >
                      <div className="d-flex flex-column align-items-center">
                        <div className="mb-2">
                          {selectedOptions.includes(option) ? (
                            <FaCheckCircle size={24} style={{color: '#FF6600'}} />
                          ) : (
                            <FaUserShield size={24} className="text-muted" />
                          )}
                        </div>
                        <span className={`fw-medium ${selectedOptions.includes(option) ? 'text-dark' : 'text-muted'}`}>
                          {option}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          
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
              View Policy
            </button>
          </motion.div>
        </div>
      </Card>
      
      <div className="footer mt-5">
        <div className="d-flex justify-content-between align-items-center py-3 px-4 rounded-3" style={{background: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(10px)', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)'}}>
          <div className="d-flex align-items-center">
            <div className="icon-gradient me-2 d-flex align-items-center justify-content-center" style={{width: '30px', height: '30px', borderRadius: '8px', background: 'linear-gradient(135deg, #FF6600 0%, #FF9A00 100%)'}}>
              <FaShieldAlt style={{color:'white', fontSize: '0.9rem'}} />
            </div>
            <small className="fw-medium" style={{color: "#666"}}>ICICI Health Insurance</small>
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
        *Premium may vary based on your age, location, and coverage options.
      </div>
      
      <style jsx global>{`
        .form-control:focus {
          box-shadow: 0 0 0 3px rgba(255, 102, 0, 0.2);
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
}