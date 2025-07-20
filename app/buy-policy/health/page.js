"use client";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { FaArrowLeft, FaInfoCircle, FaShoppingCart, FaHeartbeat, FaCheckCircle, FaShieldAlt, FaRegHospital, FaClock, FaUserMd } from "react-icons/fa";
import { motion } from "framer-motion";

export default function HealthBuyPolicy() {
  const router = useRouter();

  const policies = [
    {
      title: "Elevate - Health Insurance",
      tag: "Most Popular",
      description: [
        "Hospitalisation & Day Care Treatment cover",
        "Reset of SI unlimited times",
        "Customisable waiting periods",
      ],
      route: "/buy-policy/health/elevate"
    },
    {
      title: "MaxProtect",
      description: [
        "Unlimited Sum Insured product",
        "Affordable Pricing",
        "Unlimited Teleconsultation",
      ],
      route: "/buy-policy/health/maxprotect"
    },
    {
      title: "Activate Booster (Combo*)",
      description: [
        "Covers pre & post-hospitalisation medical expenses**",
        "Covers day care procedures/treatments",
        "Unlimited teleconsultations#",
      ],
      route: "/buy-policy/health/active-booster-combo"
    },
    {
      title: "Activate Booster",
      description: [
        "Flexible coverage",
        "Higher sum insured at affordable premium",
        "In-patient treatment cover",
      ],
      route: "/buy-policy/health/active-booster"
    },
    {
      title: "Health AdvantEdge",
      description: [
        "24/7 Video/Teleconsultation",
        "Personal accident cover",
        "Health rewards and many more",
      ],
      route: "/buy-policy/health/advantedge"
    },
  ];

  return (
    <div className="container py-4" style={{maxWidth: "900px", backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #f6f7fb 100%)'}}>
      {/* Header */}
      <div className="d-flex align-items-center mb-4">
        <Link href="/buy-policy">
          <button className="btn btn-light me-3 d-flex align-items-center shadow-sm" style={{transition: 'all 0.3s', borderRadius: '50px', padding: '8px 16px', border: 'none'}}>
            <FaArrowLeft className="me-2" /> Back
          </button>
        </Link>
      </div>
      
      <motion.div 
        className="text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="icon-gradient mx-auto mb-2 d-flex align-items-center justify-content-center" style={{width: '80px', height: '80px', borderRadius: '18px', background: 'linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%)'}}>
          <FaHeartbeat style={{color:'white', fontSize: '2.5rem'}} />
        </div>
        <h2 className="fw-bold" style={{color: '#333'}}>Health Insurance</h2>
        <p className="text-muted">Choose the perfect health plan for you and your family</p>
      </motion.div>
      
      <div className="card border-0 shadow-sm mb-5" style={{borderRadius: '16px'}}>
        <div className="card-body p-4">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h5 className="fw-bold mb-3" style={{color: '#FF6600'}}>Why choose our health insurance?</h5>
              <div className="d-flex mb-2">
                <FaCheckCircle className="me-2 mt-1" style={{color: '#FF6600'}} />
                <div>
                  <p className="mb-0 fw-medium">24/7 cashless hospitalization</p>
                  <small className="text-muted">At over 10,000+ network hospitals</small>
                </div>
              </div>
              <div className="d-flex mb-2">
                <FaCheckCircle className="me-2 mt-1" style={{color: '#FF6600'}} />
                <div>
                  <p className="mb-0 fw-medium">No medical check-up required</p>
                  <small className="text-muted">Up to 45 years of age</small>
                </div>
              </div>
              <div className="d-flex">
                <FaCheckCircle className="me-2 mt-1" style={{color: '#FF6600'}} />
                <div>
                  <p className="mb-0 fw-medium">Tax benefits under Section 80D</p>
                  <small className="text-muted">Save up to ₹75,000 annually</small>
                </div>
              </div>
            </div>
            <div className="col-md-5 mt-md-0 mt-4">
              <div className="bg-light p-3 rounded-3 text-center">
                <h6 className="fw-bold">Coverage starting at</h6>
                <h3 className="display-6 fw-bold" style={{color: '#FF6600'}}>₹5/day</h3>
                <p className="text-muted">Protect yourself & your family today</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Policy Cards */}
      <h5 className="fw-bold mb-3" style={{color: '#333'}}>Choose Your Health Insurance Plan</h5>
      <div className="py-2">
        {policies.map((policy, index) => (
          <motion.div 
            key={index} 
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="card border-0 shadow-sm" style={{borderRadius: "16px", overflow: "hidden"}}>
              <div className="card-body p-0">
                <div className="p-4">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h5 className="fw-bold mb-1" style={{color: '#333'}}>{policy.title}</h5>
                      <p className="text-muted small mb-3">Comprehensive health coverage for all your needs</p>
                    </div>
                    {policy.tag && (
                      <span className="badge rounded-pill" style={{ background: "linear-gradient(135deg, #FF6600 0%, #FF9A00 100%)", color: "white", padding: "6px 12px" }}>
                        {policy.tag}
                      </span>
                    )}
                  </div>
                  
                  <div className="row mt-3">
                    {policy.description.map((point, i) => (
                      <div key={i} className="col-md-6 mb-2">
                        <div className="d-flex align-items-start">
                          <div className="me-2 mt-1">
                            <FaCheckCircle style={{ color: '#FF6600' }} />
                          </div>
                          <p className="mb-0 small">{point}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="card-footer bg-light p-3 d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    {index === 0 && (
                      <div className="d-flex align-items-center me-3">
                        <FaRegHospital className="me-1 text-muted" />
                        <small className="text-muted">10,000+ Hospitals</small>
                      </div>
                    )}
                    {index === 1 && (
                      <div className="d-flex align-items-center me-3">
                        <FaUserMd className="me-1 text-muted" />
                        <small className="text-muted">Unlimited Consultations</small>
                      </div>
                    )}
                    {index === 2 && (
                      <div className="d-flex align-items-center me-3">
                        <FaClock className="me-1 text-muted" />
                        <small className="text-muted">Quick Claim Process</small>
                      </div>
                    )}
                  </div>
                  
                  <div className="d-flex">
                    <Link href="/know-more" className="btn btn-outline-secondary btn-sm me-2 d-flex align-items-center">
                      <FaInfoCircle className="me-1" /> Details
                    </Link>
                    <button
                      className="btn btn-sm text-white d-flex align-items-center"
                      style={{ 
                        background: "linear-gradient(135deg, #FF6600 0%, #FF9A00 100%)",
                        border: "none",
                        boxShadow: "0 4px 10px rgba(255, 102, 0, 0.3)",
                        padding: "0.5rem 1rem"
                      }}
                      onClick={() => router.push(policy.route)}
                    >
                      <FaShoppingCart className="me-2" /> Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="footer mt-5">
        <div className="d-flex justify-content-between align-items-center py-3 px-4 rounded-3" style={{background: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(10px)', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)'}}>
          <div className="d-flex align-items-center">
            <div className="icon-gradient me-2 d-flex align-items-center justify-content-center" style={{width: '30px', height: '30px', borderRadius: '8px', background: 'linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%)'}}>
              <FaShieldAlt style={{color:'white', fontSize: '0.9rem'}} />
            </div>
            <small className="fw-medium" style={{color: "#666"}}>ICICI Health Insurance</small>
          </div>
          <div className="d-flex gap-3">
            <Link href="#" className="text-decoration-none hover-link" style={{color: "#FF6600", transition: 'all 0.3s'}}>
              <small className="fw-semibold">Help</small>
            </Link>
            <Link href="#" className="text-decoration-none hover-link" style={{color: "#FF6600", transition: 'all 0.3s'}}>
              <small className="fw-semibold">Claims</small>
            </Link>
            <Link href="/disclaimer" className="text-decoration-none hover-link" style={{color: "#FF6600", transition: 'all 0.3s'}}>
              <small className="fw-semibold">FAQ</small>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center text-secondary small py-4">
        *Activate Booster, when purchased along with Elevate base plan.
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
          .card-footer {
            flex-direction: column;
            gap: 10px;
          }
          .card-footer .d-flex {
            width: 100%;
            justify-content: center !important;
          }
        }
      `}</style>
      
      <div style={{ minHeight: "40px" }}></div>
    </div>
  );
}