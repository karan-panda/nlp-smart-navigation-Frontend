'use client';
import React from "react";
import { Stethoscope, Activity, ShieldCheck, Footprints, Heart, FileHeart, Newspaper, ScanFace, BookOpen, BarChart3, Car, PulseIcon, Flame } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/navigation";

export default function BenefitsHealthPage() {
  const router = useRouter();
  
  // Custom orange color for Lombard theme
  const orangeColor = "#FF6B35";
  
  // State for modal
  const [showModal, setShowModal] = React.useState(false);
  const [modalContent, setModalContent] = React.useState({
    title: '',
    description: '',
    icon: null,
    stats: []
  });
  
  // Handle card click to show modal with appropriate content
  const handleCardClick = (type) => {
    const content = {
      steps: {
        title: 'Daily Steps Tracker',
        description: 'Track your daily steps and physical activity. Regular walking helps improve cardiovascular health and weight management.',
        icon: Footprints,
        stats: [
          { label: 'Today', value: '6,423 steps' },
          { label: 'Weekly Average', value: '7,845 steps' },
          { label: 'Monthly Goal', value: '250,000 steps' }
        ]
      },
      healthQuotient: {
        title: 'Health Quotient Score',
        description: 'Your personalized health score based on activity, diet, sleep, and vitals. Improve your score for better health and insurance benefits.',
        icon: Heart,
        stats: [
          { label: 'Current Score', value: '82/100' },
          { label: 'Previous Month', value: '76/100' },
          { label: 'Improvement', value: '+6 points' }
        ]
      },
      abhaID: {
        title: 'ABHA ID Management',
        description: 'Your Ayushman Bharat Health Account provides secure access to your health records across healthcare providers.',
        icon: FileHeart,
        stats: [
          { label: 'ID Status', value: 'Active' },
          { label: 'Last Updated', value: 'July 15, 2025' },
          { label: 'Linked Records', value: '7 documents' }
        ]
      },
      faceScan: {
        title: 'Face Scan Health Analysis',
        description: 'Advanced facial scanning technology to assess vital health parameters like heart rate, stress levels, and more.',
        icon: ScanFace,
        stats: [
          { label: 'Heart Rate', value: '72 BPM' },
          { label: 'Blood Oxygen', value: '98%' },
          { label: 'Stress Level', value: 'Low' }
        ]
      },
      blogs: {
        title: 'Health & Wellness Blogs',
        description: 'Stay informed with the latest health tips, research findings, and wellness advice from medical experts.',
        icon: Newspaper,
        stats: [
          { label: 'New Articles', value: '8 this week' },
          { label: 'Popular Topic', value: 'Immunity Boosting' },
          { label: 'Reading Time', value: '~5 mins' }
        ]
      },
      healthRecords: {
        title: 'Digital Health Records',
        description: 'Securely store and access your medical history, prescriptions, lab reports, and vaccination records.',
        icon: BookOpen,
        stats: [
          { label: 'Records Available', value: '23 documents' },
          { label: 'Last Updated', value: 'July 17, 2025' },
          { label: 'Storage Used', value: '14 MB' }
        ]
      }
    };
    
    setModalContent(content[type]);
    setShowModal(true);
  };
  
  return (
    <div className="container py-5">
      {/* Custom CSS for styling */}
      <style jsx>{`
        .custom-orange {
          background-color: ${orangeColor};
          border-color: ${orangeColor};
        }
        .custom-orange-text {
          color: ${orangeColor} !important;
        }
        .custom-card {
          border-radius: 12px;
          transition: all 0.3s ease;
          overflow: hidden;
          border: none;
        }
        .custom-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
          cursor: pointer;
        }
        .tab-button {
          border-radius: 25px;
          padding: 8px 20px;
          font-weight: 500;
          transition: all 0.3s ease;
          border: none;
        }
        .tab-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        .metric-card {
          border-radius: 10px;
          transition: all 0.3s ease;
        }
        .metric-card:hover {
          transform: scale(1.05);
        }
        .icon-container {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }
      `}</style>
      
      {/* Tabs */}
      <div className="d-flex gap-3 mb-5">
        <button className="btn tab-button bg-white shadow" onClick={() => router.push("/benefits/featured")}>
          <BarChart3 className="me-2" size={18} /> Featured
        </button>
        <button className="btn tab-button custom-orange text-white shadow" onClick={() => router.push("/benefits/health")}>
          <Heart className="me-2 text-white" size={18} /> Health
        </button>
        <button className="btn tab-button bg-white shadow" onClick={() => router.push("/benefits/motor")}>
          <Car className="me-2 text-primary" size={18} /> Motor
        </button>
      </div>

      {/* No Benefits */}
      <div className="custom-card bg-white p-5 rounded text-center mb-5 shadow">
        <div className="icon-container mx-auto mb-3" style={{backgroundColor: `rgba(255, 107, 53, 0.1)`, width: '80px', height: '80px'}}>
          <Stethoscope className="custom-orange-text" size={40} />
        </div>
        <p className="fs-4 fw-bold mt-3">No premium benefits found</p>
        <p className="text-muted mb-4">Add your health policy to unlock premium benefits</p>
        <div className="d-flex justify-content-center mt-3">
          <div className="input-group w-75">
            <input
              type="text"
              placeholder="Can't see your policy?"
              className="form-control shadow-sm"
            />
            <button className="btn text-white px-4" style={{backgroundColor: orangeColor, borderColor: orangeColor}}>
              Add policy +
            </button>
          </div>
        </div>
      </div>

      {/* App Features */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="h4 d-flex align-items-center gap-2 mb-0">
          <div className="icon-container" style={{backgroundColor: `rgba(255, 107, 53, 0.1)`}}>
            <Heart className="custom-orange-text" size={24} />
          </div>
          Health <span className="custom-orange-text">Features</span>
        </h3>
        <button className="btn btn-sm" style={{backgroundColor: orangeColor, color: 'white'}}>View All</button>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <FeatureCard 
            icon={Footprints} 
            title="Steps" 
            desc="Keep track of your daily steps" 
            onClick={() => handleCardClick('steps')}
            badge="6,423 today"
          />
        </div>
        <div className="col-md-4">
          <FeatureCard 
            icon={Heart} 
            title="Health Quotient" 
            desc="Track your health score" 
            onClick={() => handleCardClick('healthQuotient')}
            badge="82/100"
          />
        </div>
        <div className="col-md-4">
          <FeatureCard 
            icon={FileHeart} 
            title="ABHA ID" 
            desc="Secure digital access to health records" 
            onClick={() => handleCardClick('abhaID')}
            badge="Active"
          />
        </div>
        <div className="col-md-4">
          <FeatureCard 
            icon={ScanFace} 
            title="Face Scan" 
            desc="Check the status on your health vitals" 
            onClick={() => handleCardClick('faceScan')}
            badge="New"
          />
        </div>
        <div className="col-md-4">
          <FeatureCard 
            icon={Newspaper} 
            title="Blogs" 
            desc="Read blogs from experts" 
            onClick={() => handleCardClick('blogs')}
          />
        </div>
        <div className="col-md-4">
          <FeatureCard 
            icon={BookOpen} 
            title="Health Records" 
            desc="Access your health data easily" 
            onClick={() => handleCardClick('healthRecords')}
            badge="23 docs"
          />
        </div>
      </div>
      
      {/* Additional Lombard branding */}
      <div className="text-center mt-5">
        <p className="text-muted small">© 2025 Lombard Insurance. All rights reserved.</p>
      </div>

      {/* Feature Modal */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 shadow">
              <div className="modal-header border-0" style={{backgroundColor: `rgba(255, 107, 53, 0.1)`}}>
                <div className="d-flex align-items-center gap-3">
                  <div className="icon-container" style={{backgroundColor: 'white'}}>
                    {modalContent.icon && <modalContent.icon className="custom-orange-text" size={24} />}
                  </div>
                  <h5 className="modal-title">{modalContent.title}</h5>
                </div>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setShowModal(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body p-4">
                <p className="mb-4">{modalContent.description}</p>
                
                {/* Health stats */}
                {modalContent.stats && modalContent.stats.map((stat, index) => (
                  <div key={index} className="bg-light p-3 rounded mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="fw-medium">{stat.label}</span>
                      <span className={stat.label === 'Improvement' ? 'text-success fw-bold' : ''}>
                        {stat.value}
                      </span>
                    </div>
                  </div>
                ))}
                
                {/* Activity chart placeholder */}
                {modalContent.title === 'Daily Steps Tracker' && (
                  <div className="bg-light p-3 rounded mb-3">
                    <p className="fw-medium mb-2">Weekly Activity</p>
                    <div className="d-flex justify-content-between align-items-end mt-4" style={{height: "80px"}}>
                      {[65, 40, 85, 70, 55, 60, 90].map((height, i) => (
                        <div key={i} style={{width: '12%'}}>
                          <div style={{
                            height: `${height}%`, 
                            backgroundColor: i === 6 ? orangeColor : `rgba(255, 107, 53, 0.${i + 2})`,
                            borderRadius: '4px 4px 0 0'
                          }}></div>
                          <div className="text-center mt-1 small">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-light" 
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button 
                  type="button" 
                  className="btn text-white" 
                  style={{backgroundColor: orangeColor, borderColor: orangeColor}}
                >
                  {modalContent.title === 'Face Scan Health Analysis' ? 'Scan Now' : 
                    modalContent.title === 'Health & Wellness Blogs' ? 'Read More' : 
                    'View Details'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function FeatureCard({ icon: Icon, title, desc, onClick, badge }) {
  // Custom orange color for Lombard theme
  const orangeColor = "#FF6B35";
  
  return (
    <div 
      className="custom-card bg-white shadow p-4 text-center h-100 position-relative" 
      onClick={onClick}
      style={{cursor: 'pointer'}}
    >
      {badge && (
        <span 
          className="position-absolute badge" 
          style={{
            top: '10px', 
            right: '10px', 
            backgroundColor: orangeColor,
            color: 'white'
          }}
        >
          {badge}
        </span>
      )}
      <div className="icon-container mx-auto mb-3" style={{backgroundColor: `rgba(255, 107, 53, 0.1)`}}>
        <Icon className="custom-orange-text" size={30} />
      </div>
      <h3 className="fs-5 fw-bold mt-3">{title}</h3>
      <p className="text-muted mt-2 mb-0">{desc}</p>
      <div className="mt-3">
        <button 
          className="btn btn-sm btn-light border" 
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          View Details
        </button>
      </div>
    </div>
  );
}
