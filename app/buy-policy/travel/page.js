"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";
import { 
  FaPlaneDeparture, 
  FaCalendarAlt, 
  FaUsers, 
  FaCheckCircle, 
  FaArrowLeft, 
  FaGlobe, 
  FaMapMarkerAlt,
  FaShieldAlt,
  FaSuitcaseRolling,
  FaPlane,
  FaMedkit,
  FaPhone
} from "react-icons/fa";

const TravelInsurance = () => {
  // States
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [travelers, setTravelers] = useState(1);
  const [agreed, setAgreed] = useState(false);
  const [activeTab, setActiveTab] = useState("international");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        duration: 0.5
      } 
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  // Travel coverage features
  const coverageFeatures = [
    { icon: <FaMedkit />, title: "Medical Expenses", description: "Up to $500,000", color: "#FF6600" },
    { icon: <FaSuitcaseRolling />, title: "Baggage Loss", description: "Up to $2,500", color: "#3A7BD5" },
    { icon: <FaPlane />, title: "Trip Cancellation", description: "Up to $5,000", color: "#11998e" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Travel Insurance Quote Generated!");
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container-fluid p-4" 
      style={{
        backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #f6f7fb 100%)',
        minHeight: '100vh'
      }}
    >
      {/* Header Section */}
      <header className="d-flex align-items-center mb-4 pb-2">
        <Link href="/buy-policy">
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
               style={{width: '45px', height: '45px', borderRadius: '12px', background: 'linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)'}}
          >
            <FaPlane style={{color:'white', fontSize: '1.3rem'}} />
          </div>
          <div>
            <h1 className="h3 fw-bold mb-0" style={{color:'#333', letterSpacing: '0.5px'}}>TripSecure+</h1>
            <p className="text-muted mb-0" style={{fontSize: '0.9rem'}}>Travel with confidence</p>
          </div>
        </div>
      </header>
      
      <Container className="px-0" style={{maxWidth: "900px"}}>
        <Row className="g-4">
          {/* Left Column - Form */}
          <Col lg={6}>
            <motion.div variants={itemVariants}>
              <Card className="border-0 shadow-sm" style={{borderRadius: "16px", overflow: "hidden"}}>
                <div className="text-white p-4" style={{ background: 'linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)' }}>
                  <div className="d-flex align-items-center mb-2">
                    <FaShieldAlt className="me-2" size={20} />
                    <h5 className="mb-0 fw-bold">Get Your Travel Coverage</h5>
                  </div>
                  <p className="mb-0">Fill in your travel details below</p>
                </div>
                
                {/* Tab Navigation for International/Domestic */}
                <div className="p-3 border-bottom">
                  <div className="d-flex">
                    <div 
                      className={`flex-grow-1 text-center py-2 cursor-pointer ${activeTab === 'international' ? 'fw-bold' : 'text-muted'}`}
                      style={{
                        borderBottom: activeTab === 'international' ? '2px solid #2193b0' : 'none',
                        cursor: 'pointer'
                      }}
                      onClick={() => setActiveTab('international')}
                    >
                      <FaGlobe className="me-1" /> International
                    </div>
                    <div 
                      className={`flex-grow-1 text-center py-2 cursor-pointer ${activeTab === 'domestic' ? 'fw-bold' : 'text-muted'}`}
                      style={{
                        borderBottom: activeTab === 'domestic' ? '2px solid #2193b0' : 'none',
                        cursor: 'pointer'
                      }}
                      onClick={() => setActiveTab('domestic')}
                    >
                      <FaMapMarkerAlt className="me-1" /> Domestic
                    </div>
                  </div>
                </div>
                
                {/* Form */}
                <div className="p-4">
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-medium" style={{color: '#555'}}>
                        <FaPlaneDeparture className="me-2 text-info" /> Destination
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter destination country"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        required
                        style={{
                          borderRadius: "10px",
                          border: "1px solid #e0e0e0",
                          padding: "12px 15px"
                        }}
                      />
                    </Form.Group>

                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="fw-medium" style={{color: '#555'}}>
                            <FaCalendarAlt className="me-2 text-info" /> Start Date
                          </Form.Label>
                          <Form.Control
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            required
                            style={{
                              borderRadius: "10px",
                              border: "1px solid #e0e0e0",
                              padding: "12px 15px"
                            }}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="fw-medium" style={{color: '#555'}}>
                            <FaCalendarAlt className="me-2 text-info" /> End Date
                          </Form.Label>
                          <Form.Control
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            required
                            style={{
                              borderRadius: "10px",
                              border: "1px solid #e0e0e0",
                              padding: "12px 15px"
                            }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-4">
                      <Form.Label className="fw-medium" style={{color: '#555'}}>
                        <FaUsers className="me-2 text-info" /> Number of Travelers
                      </Form.Label>
                      <div className="d-flex align-items-center">
                        <Button 
                          variant="outline-secondary" 
                          onClick={() => setTravelers(Math.max(1, travelers - 1))}
                          style={{borderRadius: "10px 0 0 10px"}}
                        >
                          -
                        </Button>
                        <Form.Control
                          type="number"
                          min="1"
                          value={travelers}
                          onChange={(e) => setTravelers(parseInt(e.target.value) || 1)}
                          required
                          className="text-center border-start-0 border-end-0"
                          style={{
                            borderRadius: "0",
                          }}
                        />
                        <Button 
                          variant="outline-secondary" 
                          onClick={() => setTravelers(travelers + 1)}
                          style={{borderRadius: "0 10px 10px 0"}}
                        >
                          +
                        </Button>
                      </div>
                    </Form.Group>
                    
                    <div className="d-flex align-items-center p-3 mb-4 bg-light" style={{borderRadius: "10px"}}>
                      <FaPhone className="text-info me-3" />
                      <small>Need assistance? Call <span className="fw-bold">1800-200-3344</span> (Toll-free)</small>
                    </div>

                    <Form.Group className="mb-4">
                      <Form.Check
                        type="checkbox"
                        id="terms-checkbox"
                        label={<><FaCheckCircle className="me-2 text-info" /> I agree to the <Link href="#" className="text-decoration-none" style={{color: "#2193b0"}}>Terms & Conditions</Link></>}
                        className="fw-medium"
                        checked={agreed}
                        onChange={() => setAgreed(!agreed)}
                        required
                      />
                    </Form.Group>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button 
                        type="submit" 
                        className="w-100 py-3"
                        disabled={!agreed}
                        style={{
                          background: "linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)",
                          color: "white",
                          borderRadius: "10px",
                          fontWeight: "600",
                          border: "none",
                          boxShadow: "0 4px 10px rgba(33, 147, 176, 0.3)"
                        }}
                      >
                        Get Quote
                      </Button>
                    </motion.div>
                  </Form>
                </div>
              </Card>
            </motion.div>
          </Col>
          
          {/* Right Column - Information */}
          <Col lg={6}>
            {/* Coverage Features */}
            <motion.div variants={itemVariants} className="mb-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold" style={{color: '#333', fontSize: '1.1rem'}}>
                  <span style={{borderBottom: '2px solid #2193b0', paddingBottom: '4px'}}>Coverage</span>
                  <span style={{color: '#2193b0'}}> Highlights</span>
                </h5>
              </div>
              
              <Card className="border-0 shadow-sm" style={{borderRadius: "16px"}}>
                <div className="p-4">
                  {coverageFeatures.map((feature, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ x: 5 }}
                      className="d-flex align-items-center p-3 mb-3 rounded" 
                      style={{
                        background: `rgba(${index === 0 ? '255, 102, 0' : index === 1 ? '58, 123, 213' : '17, 153, 142'}, 0.05)`,
                        borderLeft: `3px solid ${feature.color}`
                      }}
                    >
                      <div className="me-3 d-flex align-items-center justify-content-center" 
                           style={{
                             width: '45px', 
                             height: '45px', 
                             borderRadius: '12px', 
                             background: `rgba(${index === 0 ? '255, 102, 0' : index === 1 ? '58, 123, 213' : '17, 153, 142'}, 0.1)`
                           }}
                      >
                        {feature.icon}
                      </div>
                      <div>
                        <p className="mb-0 fw-bold" style={{color: '#333'}}>{feature.title}</p>
                        <small className="text-muted">{feature.description}</small>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
            
            {/* Why Choose Us */}
            <motion.div variants={itemVariants}>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold" style={{color: '#333', fontSize: '1.1rem'}}>
                  <span style={{borderBottom: '2px solid #2193b0', paddingBottom: '4px'}}>Why</span>
                  <span style={{color: '#2193b0'}}> Choose Us</span>
                </h5>
              </div>
              
              <Card className="border-0 shadow-sm" style={{borderRadius: "16px"}}>
                <div className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="me-3 rounded-circle d-flex align-items-center justify-content-center" 
                         style={{width: '30px', height: '30px', background: 'rgba(33, 147, 176, 0.1)'}}>
                      <span className="fw-bold" style={{color: '#2193b0'}}>1</span>
                    </div>
                    <p className="mb-0 fw-medium">Global Coverage Network</p>
                  </div>
                  
                  <div className="d-flex align-items-center mb-3">
                    <div className="me-3 rounded-circle d-flex align-items-center justify-content-center" 
                         style={{width: '30px', height: '30px', background: 'rgba(33, 147, 176, 0.1)'}}>
                      <span className="fw-bold" style={{color: '#2193b0'}}>2</span>
                    </div>
                    <p className="mb-0 fw-medium">24/7 Emergency Assistance</p>
                  </div>
                  
                  <div className="d-flex align-items-center mb-3">
                    <div className="me-3 rounded-circle d-flex align-items-center justify-content-center" 
                         style={{width: '30px', height: '30px', background: 'rgba(33, 147, 176, 0.1)'}}>
                      <span className="fw-bold" style={{color: '#2193b0'}}>3</span>
                    </div>
                    <p className="mb-0 fw-medium">Instant Policy Issuance</p>
                  </div>
                  
                  <div className="d-flex align-items-center">
                    <div className="me-3 rounded-circle d-flex align-items-center justify-content-center" 
                         style={{width: '30px', height: '30px', background: 'rgba(33, 147, 176, 0.1)'}}>
                      <span className="fw-bold" style={{color: '#2193b0'}}>4</span>
                    </div>
                    <p className="mb-0 fw-medium">Cashless Hospitalization</p>
                  </div>
                </div>
                
                <div className="card-footer border-0 p-4 bg-white">
                  <div className="bg-light p-3 rounded-3 d-flex align-items-center">
                    <FaCheckCircle className="text-success me-2" />
                    <small className="fw-medium">Trusted by over 2 million travelers</small>
                  </div>
                </div>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
      
      {/* Footer */}
      <motion.div 
        variants={itemVariants}
        className="footer mt-5 pt-4 pb-2"
      >
        <div className="d-flex justify-content-between align-items-center py-3 px-4" 
             style={{background: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(10px)', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)'}}
        >
          <div className="d-flex align-items-center">
            <div className="icon-gradient me-2 d-flex align-items-center justify-content-center" 
                 style={{width: '30px', height: '30px', borderRadius: '8px', background: 'linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)'}}
            >
              <FaPlane style={{color:'white', fontSize: '0.9rem'}} />
            </div>
            <small className="fw-medium" style={{color: "#666"}}>TripSecure+ by ICICI</small>
          </div>
          <div className="d-flex gap-3">
            <Link href="#" className="text-decoration-none hover-link" style={{color: "#2193b0", transition: 'all 0.3s'}}>
              <small className="fw-semibold">Help</small>
            </Link>
            <Link href="#" className="text-decoration-none hover-link" style={{color: "#2193b0", transition: 'all 0.3s'}}>
              <small className="fw-semibold">Support</small>
            </Link>
            <Link href="/disclaimer" className="text-decoration-none hover-link" style={{color: "#2193b0", transition: 'all 0.3s'}}>
              <small className="fw-semibold">Privacy</small>
            </Link>
          </div>
        </div>
      </motion.div>
      
      <style jsx global>{`
        .form-control:focus {
          box-shadow: 0 0 0 3px rgba(33, 147, 176, 0.2);
          border-color: #2193b0;
        }
        .hover-link:hover {
          opacity: 0.8;
          transform: translateY(-1px);
        }
        
        @media (max-width: 992px) {
          .container {
            padding-left: 15px;
            padding-right: 15px;
          }
          .g-4 {
            --bs-gutter-y: 1.5rem;
          }
        }
        
        @media (max-width: 576px) {
          .footer .d-flex {
            flex-direction: column;
            gap: 10px;
          }
          .footer .d-flex.gap-3 {
            flex-direction: row;
          }
          header .d-flex.align-items-center {
            flex-direction: row;
          }
        }
      `}</style>
      
      <div style={{ minHeight: "40px" }}></div>
    </motion.div>
  );
};

export default TravelInsurance;
