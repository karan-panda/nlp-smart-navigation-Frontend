"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft, FaMapMarkerAlt, FaUserShield, FaCheckCircle, FaShieldAlt, FaHeartbeat, FaHospital, FaMedkit } from "react-icons/fa";

export default function ElevateHealthInsurance() {
  const [pincode, setPincode] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [agree, setAgree] = useState(false);
  const options = ["Self", "Spouse", "Child", "Parents", "Parents-in-law", "Others"];

  // Features list for the insurance card
  const features = [
    { text: "Enhanced Coverage" },
    { text: "Lifetime Renewability" },
    { text: "Cashless Hospitalization" },
    { text: "Pre & Post Care" },
    { text: "No Medical Tests" },
    { text: "Tax Benefits" }
  ];

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  return (
    <div className="container py-4" style={{ maxWidth: "800px", backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #f6f7fb 100%)' }}>
      {/* Header */}
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
          Premium Coverage
        </div>
      </div>

      <motion.div 
        className="mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h3 className="fw-bold mb-2" style={{color: '#333'}}><span style={{color: '#FF6600'}}>Elevate</span> Health Insurance</h3>
        <p className="text-muted">Enhanced protection for you and your loved ones</p>
      </motion.div>

      {/* Main Card */}
      <div className="card border-0 shadow-sm mb-5" style={{ borderRadius: "16px", overflow: "hidden" }}>
        {/* Card Header with Features */}
        <div className="text-white p-4" style={{ background: 'linear-gradient(135deg, #FF6600 0%, #FF9A00 100%)' }}>
          <div className="d-flex align-items-center mb-2">
            <FaShieldAlt className="me-2" size={20} />
            <h5 className="mb-0 fw-bold">Comprehensive Health Protection</h5>
          </div>
          <p className="mb-3">A premium health insurance policy designed for complete peace of mind.</p>
          <div className="row mt-2">
            {features.map((feature, index) => (
              <div key={index} className="col-md-4 mb-2">
                <div className="d-flex align-items-center">
                  <FaCheckCircle className="me-2" size={14} />
                  <small>{feature.text}</small>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3">
            <span className="badge bg-white text-dark p-2" style={{borderRadius: "8px"}}>Starting at ₹1,749/year*</span>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-4">
          {/* Pincode Input */}
          <div className="mb-4">
            <h6 className="fw-bold mb-3 d-flex align-items-center" style={{color: '#333'}}>
              <div className="icon-gradient me-2 d-flex align-items-center justify-content-center" 
                style={{width: '30px', height: '30px', borderRadius: '8px', background: 'rgba(255, 102, 0, 0.1)'}}>
                <FaMapMarkerAlt style={{color: '#FF6600'}} />
              </div>
              Where do you live?
            </h6>
            <div className="input-group">
              <input 
                type="text" 
                className="form-control" 
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
            </div>
            <small className="text-muted mt-2 d-block">Enter your 6-digit pincode for accurate coverage details</small>
          </div>

          {/* Insurance Selection */}
          <div className="mb-4">
            <h6 className="fw-bold mb-3 d-flex align-items-center" style={{color: '#333'}}>
              <div className="icon-gradient me-2 d-flex align-items-center justify-content-center" 
                style={{width: '30px', height: '30px', borderRadius: '8px', background: 'rgba(255, 102, 0, 0.1)'}}>
                <FaUserShield style={{color: '#FF6600'}} />
              </div>
              Who do you want to insure?
            </h6>
            <div className="row">
              {options.map((option, index) => (
                <div key={index} className="col-6 col-md-4 mb-3">
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

          {/* Terms Agreement */}
          <div className="mb-4">
            <div className="p-3 rounded-3" style={{background: 'rgba(255, 102, 0, 0.05)', border: '1px dashed rgba(255, 102, 0, 0.3)'}}>
              <div className="form-check d-flex align-items-center">
                <input
                  type="checkbox"
                  className="form-check-input me-3"
                  checked={agree}
                  onChange={() => setAgree(!agree)}
                  style={{
                    cursor: 'pointer',
                    borderColor: '#FF6600',
                  }}
                />
                <div>
                  <span className="d-flex align-items-center">
                    <FaCheckCircle color="#FF6600" className="me-2" size={14} />
                    <small>
                      By clicking on View Policy, you agree to our{' '}
                      <Link href="/disclaimer" className="text-decoration-none" style={{color: '#FF6600', fontWeight: 'bold'}}>
                        Disclaimer
                      </Link>
                      {' '}and{' '}
                      <Link href="/terms" className="text-decoration-none" style={{color: '#FF6600', fontWeight: 'bold'}}>
                        Terms & Conditions
                      </Link>
                    </small>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* View Policy Button */}
          <motion.div 
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <button 
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
              View Policy
            </button>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
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
    </div>
  );
}
