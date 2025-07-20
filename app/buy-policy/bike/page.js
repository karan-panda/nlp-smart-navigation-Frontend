"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { FaMotorcycle, FaArrowLeft, FaShieldAlt, FaCheckCircle, FaClock } from "react-icons/fa";

const TwoWheelerInsurance = () => {
  return (
    <div className="container py-4" style={{maxWidth: "700px"}}>
      <div className="d-flex align-items-center mb-4">
        <Link href="/buy-policy">
          <button className="btn btn-light me-3 d-flex align-items-center shadow-sm" style={{transition: 'all 0.3s', borderRadius: '50px', padding: '8px 16px', border: 'none'}}>
            <FaArrowLeft className="me-2" /> Back
          </button>
        </Link>
      </div>
      <div className="text-center mb-4">
        <div className="icon-gradient mx-auto mb-2 d-flex align-items-center justify-content-center" style={{width: '70px', height: '70px', borderRadius: '15px', background: 'linear-gradient(135deg, #FF6600 0%, #FF9A00 100%)'}}>
          <FaMotorcycle style={{color:'white', fontSize: '2rem'}} />
        </div>
        <h2 className="fw-bold" style={{color: '#333'}}>Two Wheeler Insurance</h2>
        <p className="text-muted">Protect your bike with our comprehensive coverage</p>
      </div>
      <div className="card border-0 shadow-sm" style={{borderRadius: "16px", overflow: "hidden"}}>
        <div className="text-white p-4" style={{ background: 'linear-gradient(135deg, #FF6600 0%, #FF9A00 100%)' }}>
          <div className="d-flex align-items-center mb-2">
            <FaShieldAlt className="me-2" size={20} />
            <h5 className="mb-0 fw-bold">Bike Insurance that is right for you</h5>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0 fs-5">Price starting at just <span className="fw-bold">₹538*</span></p>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <div className="d-flex align-items-center mb-2">
                <FaCheckCircle className="me-2" />
                <span>24x7 Claim Support</span>
              </div>
              <div className="d-flex align-items-center">
                <FaCheckCircle className="me-2" />
                <span>No Claim Bonus</span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mt-md-0 mt-3">
                <span className="badge bg-white text-dark p-2" style={{borderRadius: "8px"}}>Asia's most trusted brand 2022</span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="mb-3">
            <label className="form-label fw-medium" style={{color: '#555'}}>Enter bike registration number</label>
            <div className="input-group">
              <input 
                type="text" 
                className="form-control form-control-lg" 
                placeholder="MH01AB1234" 
                style={{
                  borderRadius: "10px",
                  border: "1px solid #e0e0e0",
                  padding: "12px 15px",
                  fontSize: "1rem"
                }}
              />
            </div>
            <small className="text-muted mt-1 d-block">Format: XX00XX0000 (e.g., MH01AB1234)</small>
          </div>
          
          <div className="d-flex align-items-center p-3 mb-3 bg-light" style={{borderRadius: "10px"}}>
            <FaClock className="text-warning me-2" />
            <small>Get your insurance details in less than 2 minutes</small>
          </div>
          
          <div className="form-check mb-4">
            <input className="form-check-input" type="checkbox" id="agree" style={{borderColor: "#FF6600"}} />
            <label className="form-check-label" htmlFor="agree" style={{fontSize: "0.9rem"}}>
              By clicking here, I agree to the <Link href="#" className="text-decoration-none" style={{color: "#FF6600"}}>Disclaimer</Link> and <Link href="#" className="text-decoration-none" style={{color: "#FF6600"}}>Terms & Conditions</Link>
            </label>
          </div>
          
          <button className="btn w-100 py-3" style={{
            background: "linear-gradient(135deg, #FF6600 0%, #FF9A00 100%)",
            color: "white",
            borderRadius: "10px",
            fontWeight: "600",
            border: "none",
            boxShadow: "0 4px 10px rgba(255, 102, 0, 0.3)"
          }}>
            Get Bike Details
          </button>
          
          <div className="text-center mt-4">
            <Link href="#" className="text-decoration-none d-inline-flex align-items-center" style={{color: "#FF6600", fontWeight: "500"}}>
              New bike? or I don't know my bike details
            </Link>
          </div>
        </div>
        
        <style jsx global>{`
          .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 15px rgba(255, 102, 0, 0.4) !important;
            transition: all 0.3s ease;
          }
          .form-control:focus {
            box-shadow: 0 0 0 3px rgba(255, 102, 0, 0.2);
            border-color: #FF6600;
          }
          .hover-link:hover {
            opacity: 0.8;
            transform: translateY(-1px);
          }
          @media (max-width: 576px) {
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
      </div>
      
      <div className="footer mt-5">
        <div className="d-flex justify-content-between align-items-center py-3 px-4 rounded-3" style={{background: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(10px)', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)'}}>
          <div className="d-flex align-items-center">
            <div className="icon-gradient me-2 d-flex align-items-center justify-content-center" style={{width: '30px', height: '30px', borderRadius: '8px', background: 'linear-gradient(135deg, #FF6600 0%, #FF9A00 100%)'}}>
              <FaMotorcycle style={{color:'white', fontSize: '0.9rem'}} />
            </div>
            <small className="fw-medium" style={{color: "#666"}}>ICICI Bike Insurance</small>
          </div>
          <div className="d-flex gap-3">
            <Link href="#" className="text-decoration-none hover-link" style={{color: "#FF6600", transition: 'all 0.3s'}}>
              <small className="fw-semibold">Help</small>
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
      
      <div style={{ minHeight: "40px" }}></div>
    </div>
  );
};

export default TwoWheelerInsurance;
