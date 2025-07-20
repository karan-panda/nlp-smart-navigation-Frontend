'use client';
import React from "react";
import { Car, FileText, MapPin, Settings, ShieldCheck, Truck, Activity, AlertTriangle, BarChart3, Heart } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/navigation";

export default function BenefitsMotorPage() {
  const router = useRouter();
  
  // Custom orange color for Lombard theme
  const orangeColor = "#FF6B35";
  
  // State for modal
  const [showModal, setShowModal] = React.useState(false);
  const [modalContent, setModalContent] = React.useState({
    title: '',
    description: '',
    icon: null
  });
  
  // Handle card click to show modal with appropriate content
  const handleCardClick = (type) => {
    const content = {
      licence: {
        title: 'Digital Driving Licence',
        description: 'Access your driving licence digitally anytime, anywhere. Valid proof of driving authorization across India.',
        icon: FileText
      },
      puc: {
        title: 'PUC Validity Check',
        description: 'Check and renew your Pollution Under Control certificate. Stay compliant with emission standards.',
        icon: ShieldCheck
      },
      challans: {
        title: 'Traffic Challans',
        description: 'View and pay your pending traffic challans online. Avoid penalties by staying updated.',
        icon: MapPin
      },
      drivesmart: {
        title: 'IL DriveSmart',
        description: 'Monitor your driving behavior and earn rewards for safe driving. Improve your score to get premium discounts.',
        icon: Truck
      },
      inspection: {
        title: 'Mobile Self Inspection',
        description: 'Report damages and file claims directly from your phone. Quick and easy inspection process.',
        icon: Settings
      },
      blogs: {
        title: 'Expert Blogs',
        description: 'Read the latest insights on vehicle maintenance, road safety, and insurance benefits from industry experts.',
        icon: Activity
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
        <button className="btn tab-button bg-white shadow" onClick={() => router.push("/benefits/health")}>
          <Heart className="me-2 text-danger" size={18} /> Health
        </button>
        <button className="btn tab-button custom-orange text-white shadow" onClick={() => router.push("/benefits/motor")}>
          <Car className="me-2 text-white" size={18} /> Motor
        </button>
      </div>

      {/* No Benefits */}
      <div className="custom-card bg-white p-5 rounded text-center mb-5 shadow">
        <div className="icon-container mx-auto mb-3" style={{backgroundColor: `rgba(255, 107, 53, 0.1)`, width: '80px', height: '80px'}}>
          <Car className="custom-orange-text" size={40} />
        </div>
        <p className="fs-4 fw-bold mt-3">No premium benefits found</p>
        <p className="text-muted mb-4">Add your vehicle policy to unlock premium benefits</p>
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
            <Car className="custom-orange-text" size={24} />
          </div>
          Motor <span className="custom-orange-text">Features</span>
        </h3>
        <button className="btn btn-sm" style={{backgroundColor: orangeColor, color: 'white'}}>View All</button>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <FeatureCard 
            icon={FileText} 
            title="Driving Licence" 
            desc="Get your digital driving licence" 
            onClick={() => handleCardClick('licence')}
            badge="Popular"
          />
        </div>
        <div className="col-md-4">
          <FeatureCard 
            icon={ShieldCheck} 
            title="PUC Validity" 
            desc="Check your PUC validity" 
            onClick={() => handleCardClick('puc')}
            badge="Required"
          />
        </div>
        <div className="col-md-4">
          <FeatureCard 
            icon={MapPin} 
            title="View Challans" 
            desc="View all your traffic challans" 
            onClick={() => handleCardClick('challans')}
          />
        </div>
        <div className="col-md-4">
          <FeatureCard 
            icon={Truck} 
            title="IL DriveSmart" 
            desc="Check your driving score" 
            onClick={() => handleCardClick('drivesmart')}
            badge="New"
          />
        </div>
        <div className="col-md-4">
          <FeatureCard 
            icon={Settings} 
            title="Mobile Self Inspection" 
            desc="Do a self inspection in case of brake-in" 
            onClick={() => handleCardClick('inspection')}
          />
        </div>
        <div className="col-md-4">
          <FeatureCard 
            icon={Activity} 
            title="Blogs" 
            desc="Read blogs from experts" 
            onClick={() => handleCardClick('blogs')}
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
                
                {/* Sample content based on feature */}
                <div className="bg-light p-3 rounded mb-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-medium">Status</span>
                    <span className="badge bg-success">Active</span>
                  </div>
                </div>
                
                <div className="bg-light p-3 rounded mb-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-medium">Last Updated</span>
                    <span>July 18, 2025</span>
                  </div>
                </div>
                
                <div className="bg-light p-3 rounded">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-medium">Document ID</span>
                    <span className="text-muted">LOMB-2025-78341</span>
                  </div>
                </div>
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
                  Take Action
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
