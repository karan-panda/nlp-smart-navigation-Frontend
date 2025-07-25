"use client";
import Link from 'next/link';
import { motion } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  FaQuestionCircle, 
  FaArrowLeft, 
  FaChevronDown, 
  FaChevronUp,
  FaHome,
  FaFileAlt,
  FaGift,
  FaShoppingCart,
  FaLifeRing,
  FaSearch,
  FaInfoCircle,
  FaClipboardList,
  FaHandHoldingUsd,
  FaShieldAlt
} from "react-icons/fa";
import { useState } from 'react';

export default function FAQs() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('General');

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

  // FAQ categories with their respective questions and icons
  const faqCategories = [
    {
      name: "General",
      icon: <FaInfoCircle />,
      color: "#FF6600",
      faqs: [
        { 
          question: "What is insurance?", 
          answer: "Insurance is a contract, represented by a policy, in which an individual or entity receives financial protection or reimbursement against losses from an insurance company. The company pools clients' risks to make payments more affordable for the insured." 
        },
        { 
          question: "How do I buy a policy?", 
          answer: "You can buy a policy online through our website or mobile app. Simply navigate to the 'Buy Policy' section, select the type of insurance you need, fill in your details, and complete the payment. For assistance, you can also call our customer service at 1800-200-3344." 
        },
      ]
    },
    {
      name: "Policy Management",
      icon: <FaClipboardList />,
      color: "#3A7BD5",
      faqs: [
        { 
          question: "Can I cancel my policy?", 
          answer: "Yes, you can cancel your policy within the cooling-off period, which is typically 15 days from the date of receipt of the policy document. For cancellations after this period, please refer to the cancellation terms in your policy document or contact customer support." 
        },
        { 
          question: "What documents are required?", 
          answer: "It depends on the type of policy, but usually an ID proof (Aadhar, PAN card, passport) and address proof are needed. For health insurance, medical history may be required, and for auto insurance, vehicle registration and driving license are necessary." 
        },
      ]
    },
    {
      name: "Claims",
      icon: <FaHandHoldingUsd />,
      color: "#11998e",
      faqs: [
        { 
          question: "How do I file a claim?", 
          answer: "To file a claim, log in to your account on our website or app, navigate to the 'Claims' section, and follow the guided process. You'll need to provide details about the incident and upload relevant documents. Alternatively, you can call our claims hotline at 1800-300-4455." 
        },
        { 
          question: "How long does claim processing take?", 
          answer: "Standard claims are typically processed within 7-10 business days once all required documentation has been received. Complex cases may take longer. You can track your claim status through our website or mobile app." 
        },
      ]
    },
    {
      name: "Coverage",
      icon: <FaShieldAlt />,
      color: "#9A56FF",
      faqs: [
        { 
          question: "What does my health insurance cover?", 
          answer: "Our standard health insurance covers hospitalization expenses, pre and post hospitalization care, day-care procedures, ambulance charges, and more. Premium plans may include additional coverage like maternity benefits, critical illness, and preventive health check-ups. Please refer to your specific policy document for detailed coverage information." 
        },
        { 
          question: "Are pre-existing conditions covered?", 
          answer: "Pre-existing conditions are typically covered after a waiting period of 2-4 years, depending on your policy. Some premium health plans may offer reduced waiting periods. Always check your policy document for specific terms related to pre-existing conditions." 
        },
      ]
    }
  ];
  
  // Toggle the expanded state of a FAQ item
  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  
  // Filter FAQs based on search term
  const filteredFAQs = searchTerm 
    ? faqCategories.map(category => ({
        ...category,
        faqs: category.faqs.filter(faq => 
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })).filter(category => category.faqs.length > 0)
    : faqCategories;

  // Get currently active category for display
  const activeCategoryData = faqCategories.find(cat => cat.name === activeCategory);

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container-fluid min-vh-100 p-4"
      style={{backgroundColor: '#f8f9fa', backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #f6f7fb 100%)'}}
    >
      {/* Header */}
      <header className="d-flex align-items-center mb-4">
        <Link href="/help">
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
            <FaQuestionCircle style={{color:'white', fontSize: '1.3rem'}} />
          </div>
          <div>
            <h1 className="h3 fw-bold mb-0" style={{color:'#333', letterSpacing: '0.5px'}}>Frequently Asked Questions</h1>
            <p className="text-muted mb-0" style={{fontSize: '0.9rem'}}>Find answers to common questions</p>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <motion.div 
        variants={itemVariants} 
        className="mb-4 mx-auto" 
        style={{maxWidth: "800px"}}
      >
        <div className="input-group shadow-sm">
          <span className="input-group-text bg-white border-end-0" style={{borderRadius: "50px 0 0 50px"}}>
            <FaSearch className="text-muted" />
          </span>
          <input 
            type="text" 
            className="form-control border-start-0" 
            placeholder="Search questions..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              borderRadius: "0 50px 50px 0", 
              padding: "12px 20px",
              boxShadow: "none"
            }}
          />
        </div>
      </motion.div>

      {/* Category Selection Grid */}
      {!searchTerm && (
        <motion.div 
          variants={itemVariants}
          className="mx-auto mb-4"
          style={{maxWidth: "800px"}}
        >
          <div className="row g-3">
            {faqCategories.map((category, index) => (
              <div key={index} className="col-md-6">
                <motion.div 
                  whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                  onClick={() => setActiveCategory(category.name)}
                  className={`card border-0 p-3 ${activeCategory === category.name ? 'border-3 border-start' : ''}`}
                  style={{
                    cursor: 'pointer',
                    borderRadius: '16px',
                    backgroundColor: activeCategory === category.name ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.7)',
                    borderLeftColor: category.color,
                    boxShadow: activeCategory === category.name ? '0 10px 20px rgba(0,0,0,0.1)' : '0 5px 15px rgba(0,0,0,0.05)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div className="d-flex align-items-center">
                    <div className="me-3 rounded-circle d-flex align-items-center justify-content-center" 
                         style={{
                           width: '45px', 
                           height: '45px', 
                           background: `rgba(${
                             category.color === "#FF6600" ? '255, 102, 0' : 
                             category.color === "#3A7BD5" ? '58, 123, 213' : 
                             category.color === "#11998e" ? '17, 153, 142' :
                             '154, 86, 255'
                           }, 0.1)`,
                           color: category.color,
                           fontSize: '1.2rem'
                         }}
                    >
                      {category.icon}
                    </div>
                    <div>
                      <h5 className="mb-0 fw-bold" style={{color: activeCategory === category.name ? category.color : '#333'}}>
                        {category.name}
                      </h5>
                      <small className="text-muted">{category.faqs.length} Questions</small>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* FAQ Content */}
      <div className="mx-auto" style={{maxWidth: "800px"}}>
        {searchTerm && filteredFAQs.length === 0 ? (
          <motion.div 
            variants={itemVariants}
            className="text-center p-5"
          >
            <p className="fs-5 fw-bold text-muted">No questions found for "{searchTerm}"</p>
            <button 
              className="btn btn-outline-primary mt-2" 
              onClick={() => setSearchTerm('')}
            >
              Clear search
            </button>
          </motion.div>
        ) : (
          searchTerm ? (
            // Show search results
            filteredFAQs.map((category, categoryIndex) => (
              category.faqs.length > 0 && (
                <motion.div 
                  key={categoryIndex}
                  variants={itemVariants}
                  className="mb-4"
                >
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="fw-bold" style={{color: '#333', fontSize: '1.1rem'}}>
                      <span style={{borderBottom: `2px solid ${category.color}`, paddingBottom: '4px'}}>{category.name}</span>
                      <span style={{color: category.color}}> Questions</span>
                    </h5>
                  </div>
                  
                  <div className="card border-0 shadow-sm bg-white" style={{borderRadius: "16px", overflow: "hidden"}}>
                    {category.faqs.map((faq, index) => {
                      const isExpanded = expandedIndex === `${categoryIndex}-${index}`;
                      
                      return (
                        <div key={index} className={`border-bottom ${index === category.faqs.length - 1 ? 'border-0' : ''}`}>
                          <motion.div 
                            className="p-4 d-flex justify-content-between align-items-center cursor-pointer"
                            onClick={() => toggleExpand(`${categoryIndex}-${index}`)}
                            style={{cursor: 'pointer'}}
                            whileHover={{ backgroundColor: `rgba(${
                              category.color === "#FF6600" ? '255, 102, 0' : 
                              category.color === "#3A7BD5" ? '58, 123, 213' : 
                              category.color === "#11998e" ? '17, 153, 142' :
                              '154, 86, 255'
                            }, 0.03)` }}
                          >
                            <div className="d-flex align-items-center">
                              <div className="me-3 rounded-circle d-flex align-items-center justify-content-center" 
                                   style={{
                                     minWidth: '32px', 
                                     height: '32px', 
                                     background: isExpanded ? category.color : `rgba(${
                                       category.color === "#FF6600" ? '255, 102, 0' : 
                                       category.color === "#3A7BD5" ? '58, 123, 213' : 
                                       category.color === "#11998e" ? '17, 153, 142' :
                                       '154, 86, 255'
                                     }, 0.1)`,
                                     color: isExpanded ? 'white' : category.color,
                                     transition: 'all 0.3s ease'
                                   }}
                              >
                                <span className="fw-bold" style={{fontSize: '0.8rem'}}>{index + 1}</span>
                              </div>
                              <h6 className="mb-0 fw-bold" style={{color: isExpanded ? category.color : '#333'}}>
                                {faq.question}
                              </h6>
                            </div>
                            <div>
                              {isExpanded ? 
                                <FaChevronUp size={16} style={{color: category.color}} /> : 
                                <FaChevronDown size={16} style={{color: '#999'}} />
                              }
                            </div>
                          </motion.div>
                          
                          {isExpanded && (
                            <motion.div 
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="px-4 pb-4"
                              style={{paddingLeft: '60px'}}
                            >
                              <p className="mb-0 text-muted">{faq.answer}</p>
                            </motion.div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )
            ))
          ) : (
            // Show selected category
            <motion.div variants={itemVariants} className="mb-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold" style={{color: '#333', fontSize: '1.1rem'}}>
                  <span style={{borderBottom: `2px solid ${activeCategoryData.color}`, paddingBottom: '4px'}}>{activeCategoryData.name}</span>
                  <span style={{color: activeCategoryData.color}}> Questions</span>
                </h5>
              </div>
              
              <div className="card border-0 shadow-sm bg-white" style={{borderRadius: "16px", overflow: "hidden"}}>
                {activeCategoryData.faqs.map((faq, index) => {
                  const isExpanded = expandedIndex === `active-${index}`;
                  
                  return (
                    <div key={index} className={`border-bottom ${index === activeCategoryData.faqs.length - 1 ? 'border-0' : ''}`}>
                      <motion.div 
                        className="p-4 d-flex justify-content-between align-items-center cursor-pointer"
                        onClick={() => toggleExpand(`active-${index}`)}
                        style={{cursor: 'pointer'}}
                        whileHover={{ backgroundColor: `rgba(${
                          activeCategoryData.color === "#FF6600" ? '255, 102, 0' : 
                          activeCategoryData.color === "#3A7BD5" ? '58, 123, 213' : 
                          activeCategoryData.color === "#11998e" ? '17, 153, 142' :
                          '154, 86, 255'
                        }, 0.03)` }}
                      >
                        <div className="d-flex align-items-center">
                          <div className="me-3 rounded-circle d-flex align-items-center justify-content-center" 
                               style={{
                                 minWidth: '32px', 
                                 height: '32px', 
                                 background: isExpanded ? activeCategoryData.color : `rgba(${
                                   activeCategoryData.color === "#FF6600" ? '255, 102, 0' : 
                                   activeCategoryData.color === "#3A7BD5" ? '58, 123, 213' : 
                                   activeCategoryData.color === "#11998e" ? '17, 153, 142' :
                                   '154, 86, 255'
                                 }, 0.1)`,
                                 color: isExpanded ? 'white' : activeCategoryData.color,
                                 transition: 'all 0.3s ease'
                               }}
                          >
                            <span className="fw-bold" style={{fontSize: '0.8rem'}}>{index + 1}</span>
                          </div>
                          <h6 className="mb-0 fw-bold" style={{color: isExpanded ? activeCategoryData.color : '#333'}}>
                            {faq.question}
                          </h6>
                        </div>
                        <div>
                          {isExpanded ? 
                            <FaChevronUp size={16} style={{color: activeCategoryData.color}} /> : 
                            <FaChevronDown size={16} style={{color: '#999'}} />
                          }
                        </div>
                      </motion.div>
                      
                      {isExpanded && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-4 pb-4"
                          style={{paddingLeft: '60px'}}
                        >
                          <p className="mb-0 text-muted">{faq.answer}</p>
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )
        )}
      </div>

      {/* Additional Help */}
      <motion.div 
        variants={itemVariants}
        className="text-center mt-5 mb-4 p-3 mx-auto" 
        style={{
          maxWidth: "600px", 
          background: 'rgba(255,255,255,0.7)', 
          borderRadius: '16px', 
          boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
        }}
      >
        <p className="mb-1 fw-medium" style={{color: '#666'}}>Can't find what you're looking for?</p>
        <Link href="/help/ria" className="btn btn-sm" style={{backgroundColor: '#FF6600', color: 'white', borderRadius: '50px', padding: '6px 15px'}}>
          Ask RIA
        </Link>
      </motion.div>

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
        .nav-link {
          transition: all 0.3s ease;
        }
        .nav-link:hover {
          transform: translateY(-2px);
        }
        .form-control:focus {
          box-shadow: 0 0 0 3px rgba(255, 102, 0, 0.2);
          border-color: #FF6600;
        }
        @media (max-width: 768px) {
          .col-md-6 {
            margin-bottom: 10px;
          }
        }
      `}</style>
      
      <div style={{ minHeight: "100px" }}></div>
    </motion.div>
  );
}
