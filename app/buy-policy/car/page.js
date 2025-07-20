"use client";
import React, { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import Link from "next/link";
import { FaCar, FaArrowLeft, FaShieldAlt, FaCheckCircle, FaClock } from "react-icons/fa";

const CarInsurance = () => {
  const [registration, setRegistration] = useState("");
  const [agree, setAgree] = useState(false);

  return (
    <Container className="py-4" style={{maxWidth: "700px"}}>
      <div className="d-flex align-items-center mb-4">
        <Link href="/buy-policy">
          <button className="btn btn-light me-3 d-flex align-items-center shadow-sm" style={{transition: 'all 0.3s', borderRadius: '50px', padding: '8px 16px', border: 'none'}}>
            <FaArrowLeft className="me-2" /> Back
          </button>
        </Link>
      </div>
      
      <div className="text-center mb-4">
        <div className="icon-gradient mx-auto mb-2 d-flex align-items-center justify-content-center" style={{width: '70px', height: '70px', borderRadius: '15px', background: 'linear-gradient(135deg, #FF6600 0%, #FF9A00 100%)'}}>
          <FaCar style={{color:'white', fontSize: '2rem'}} />
        </div>
        <h2 className="fw-bold" style={{color: '#333'}}>Car Insurance</h2>
        <p className="text-muted">Protect your car with our comprehensive coverage</p>
      </div>
      
      <Card className="border-0 shadow-sm" style={{borderRadius: "16px", overflow: "hidden"}}>
        <div className="text-white p-4" style={{ background: 'linear-gradient(135deg, #FF6600 0%, #FF9A00 100%)' }}>
          <div className="d-flex align-items-center mb-2">
            <FaShieldAlt className="me-2" size={20} />
            <h5 className="mb-0 fw-bold">Car insurance that's right for you</h5>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0 fs-5">Starting at just <span className="fw-bold">₹2094/yr*</span></p>
          </div>
          <p className="text-white-50 small mt-1">*TP rates only.</p>
          
          <div className="row mt-3">
            <div className="col-md-6">
              <div className="d-flex align-items-center mb-2">
                <FaCheckCircle className="me-2" />
                <span>Instant Policy Issuance</span>
              </div>
              <div className="d-flex align-items-center">
                <FaCheckCircle className="me-2" />
                <span>Cashless Claims</span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mt-md-0 mt-3">
                <span className="badge bg-white text-dark p-2" style={{borderRadius: "8px"}}>Top-rated car insurer 2024</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-4">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="fw-medium" style={{color: '#555'}}>Enter car registration number</Form.Label>
              <Form.Control
                type="text"
                placeholder="MH01AB1234"
                value={registration}
                onChange={(e) => setRegistration(e.target.value)}
                style={{
                  borderRadius: "10px",
                  border: "1px solid #e0e0e0",
                  padding: "12px 15px",
                  fontSize: "1rem"
                }}
              />
              <Form.Text className="text-muted">
                Format: XX00XX0000 (e.g., MH01AB1234)
              </Form.Text>
            </Form.Group>
            
            <div className="d-flex align-items-center p-3 mb-3 bg-light" style={{borderRadius: "10px"}}>
              <FaClock className="text-warning me-2" />
              <small>Get your insurance quote in less than 2 minutes</small>
            </div>
            
            <Form.Check
              className="mb-4"
              type="checkbox"
              checked={agree}
              onChange={() => setAgree(!agree)}
              label={
                <>
                  By clicking here, I agree to the <Link href="#" className="text-decoration-none" style={{color: "#FF6600"}}>Disclaimer</Link> and <Link href="#" className="text-decoration-none" style={{color: "#FF6600"}}>Terms & Conditions</Link>
                </>
              }
              style={{fontSize: "0.9rem"}}
            />
            
            <Button 
              className="w-100 py-3"
              style={{
                background: "linear-gradient(135deg, #FF6600 0%, #FF9A00 100%)",
                color: "white",
                borderRadius: "10px",
                fontWeight: "600",
                border: "none",
                boxShadow: "0 4px 10px rgba(255, 102, 0, 0.3)"
              }}>
              Get Quote
            </Button>
            
            <div className="text-center mt-4">
              <Link href="#" className="text-decoration-none d-inline-flex align-items-center" style={{color: "#FF6600", fontWeight: "500"}}>
                Got a new car?
              </Link>
            </div>
          </Form>
        </div>
      </Card>
      
      <Card className="mt-4 border-0 shadow-sm" style={{borderRadius: "16px"}}>
        <div className="p-4">
          <h5 className="mb-3" style={{color: '#FF6600', fontWeight: '600'}}>Key Benefits</h5>
          
          <div className="d-flex align-items-center p-3 mb-3 rounded" style={{background: "rgba(255, 102, 0, 0.05)"}}>
            <div className="me-3 d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255, 102, 0, 0.1)'}}>
              ⚙
            </div>
            <div>
              <p className="mb-0 fw-bold">Doorstep Cashless Repairs <span className="badge" style={{background: "#FF6600", color: "white"}}>NEW</span></p>
              <small className="text-muted">Repairs at your convenience</small>
            </div>
          </div>
          
          <div className="d-flex align-items-center p-3 mb-3 rounded" style={{background: "rgba(255, 102, 0, 0.05)"}}>
            <div className="me-3 d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255, 102, 0, 0.1)'}}>
              🌟
            </div>
            <div>
              <p className="mb-0 fw-bold">Drive less? Pay less with PAYD</p>
              <small className="text-muted">Pay as you drive benefits</small>
            </div>
          </div>
          
          <div className="d-flex align-items-center p-3 rounded" style={{background: "rgba(255, 102, 0, 0.05)"}}>
            <div className="me-3 d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255, 102, 0, 0.1)'}}>
              💲
            </div>
            <div>
              <p className="mb-0 fw-bold">Up to 50% off with NCB</p>
              <small className="text-muted">No Claim Bonus discounts</small>
            </div>
          </div>
        </div>
      </Card>
      
      <div className="footer mt-5">
        <div className="d-flex justify-content-between align-items-center py-3 px-4 rounded-3" style={{background: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(10px)', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)'}}>
          <div className="d-flex align-items-center">
            <div className="icon-gradient me-2 d-flex align-items-center justify-content-center" style={{width: '30px', height: '30px', borderRadius: '8px', background: 'linear-gradient(135deg, #FF6600 0%, #FF9A00 100%)'}}>
              <FaShieldAlt style={{color:'white', fontSize: '0.9rem'}} />
            </div>
            <small className="fw-medium" style={{color: "#666"}}>ICICI Car Insurance</small>
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
      
      <div style={{ minHeight: "40px" }}></div>
    </Container>
  );
};

export default CarInsurance;
