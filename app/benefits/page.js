"use client";
import { Heart, Car, Activity, ShieldCheck, Moon, Footprints, Clock, BarChart3, Shield } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/navigation";

export default function BenefitsPage() {
  const router = useRouter();
  
  // Custom orange color for Lombard theme
  const orangeColor = "#FF6B35";

  return (
    <div className="container py-4">
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
        <button className="btn tab-button custom-orange text-white shadow" onClick={() => router.push("/benefits/featured")}>
          <BarChart3 className="me-2" size={18} /> Featured
        </button>
        <button className="btn tab-button bg-white shadow" onClick={() => router.push("/benefits/health")}>
          <Heart className="me-2 text-danger" size={18} /> Health
        </button>
        <button className="btn tab-button bg-white shadow" onClick={() => router.push("/benefits/motor")}>
          <Car className="me-2 text-primary" size={18} /> Motor
        </button>
      </div>
      
      {/* Driving Score */}
      <div className="custom-card bg-white p-4 shadow d-flex align-items-center gap-4 mb-5" onClick={() => router.push("/driving-score")}>
        <div className="icon-container" style={{backgroundColor: 'rgba(0, 123, 255, 0.1)'}}>
          <Car className="text-primary" size={30} />
        </div>
        <div>
          <h2 className="h5 mb-2">Driving <span className="custom-orange-text">Score</span></h2>
          <div className="d-flex align-items-center gap-2 mb-1">
            <div className="progress flex-grow-1" style={{height: '8px'}}>
              <div className="progress-bar" style={{width: '85%', backgroundColor: orangeColor}} role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <span className="fw-bold custom-orange-text">85/100</span>
          </div>
          <p className="text-muted mb-0">Great driving! Your score reflects safe and smart driving habits.</p>
        </div>
      </div>
      
      {/* Health Highlights */}
      <div className="custom-card bg-white p-4 shadow mb-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="h5 d-flex align-items-center gap-2 mb-0">
            <div className="icon-container" style={{backgroundColor: 'rgba(220, 53, 69, 0.1)'}}>
              <Activity className="text-danger" size={24} />
            </div>
            Your <span className="custom-orange-text">Activity</span>
          </h3>
          <span className="badge bg-success p-2">+12% this week</span>
        </div>
        <p className="text-muted mb-4">Run errands on feet! Walking to the grocery store can help hit your step goal.</p>
        <div className="row g-3 mt-1">
          <div className="col-md-4">
            <div className="metric-card bg-light p-3 rounded shadow-sm">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="text-muted mb-1">Active Hours</p>
                  <h4 className="mb-0 fw-bold">8.2 <small className="text-muted fw-normal">hrs</small></h4>
                </div>
                <Clock className="custom-orange-text" size={28} />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="metric-card bg-light p-3 rounded shadow-sm">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="text-muted mb-1">Sleep Time</p>
                  <h4 className="mb-0 fw-bold">7.5 <small className="text-muted fw-normal">hrs</small></h4>
                </div>
                <Moon className="text-primary" size={28} />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="metric-card bg-light p-3 rounded shadow-sm">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="text-muted mb-1">Daily Steps</p>
                  <h4 className="mb-0 fw-bold">8,423</h4>
                </div>
                <Footprints className="text-info" size={28} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Face Scan */}
      <div className="custom-card bg-white p-4 shadow mb-5" onClick={() => router.push("/face-scan")}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="h5 d-flex align-items-center gap-2 mb-0">
            <div className="icon-container" style={{backgroundColor: `rgba(255, 107, 53, 0.1)`}}>
              <ShieldCheck className="custom-orange-text" size={24} />
            </div>
            Face Scan <span className="badge ms-2 text-white" style={{backgroundColor: orangeColor}}>Updated</span>
          </h3>
          <button className="btn btn-sm btn-outline-primary">View Report</button>
        </div>
        <p className="text-muted mb-4">Regular checkups are your best defense against unexpected health challenges.</p>
        <div className="row g-3">
          <div className="col-md-4">
            <div className="metric-card bg-white border p-3 rounded shadow-sm text-center h-100">
              <div className="icon-container mx-auto mb-2" style={{backgroundColor: 'rgba(220, 53, 69, 0.1)'}}>
                <Heart className="text-danger" size={22} />
              </div>
              <p className="fw-bold h3 mb-0 custom-orange-text">57</p>
              <p className="fw-bold text-primary mb-1">BPM</p>
              <p className="text-muted small mb-0">Heart Rate</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="metric-card bg-white border p-3 rounded shadow-sm text-center h-100">
              <div className="icon-container mx-auto mb-2" style={{backgroundColor: 'rgba(220, 53, 69, 0.1)'}}>
                <Activity className="text-danger" size={22} />
              </div>
              <p className="fw-bold h3 mb-0 custom-orange-text">13</p>
              <p className="fw-bold text-primary mb-1">BPM</p>
              <p className="text-muted small mb-0">Respiratory Rate</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="metric-card bg-white border p-3 rounded shadow-sm text-center h-100">
              <div className="icon-container mx-auto mb-2" style={{backgroundColor: 'rgba(220, 53, 69, 0.1)'}}>
                <ShieldCheck className="text-danger" size={22} />
              </div>
              <p className="fw-bold h3 mb-0 custom-orange-text">67</p>
              <p className="fw-bold text-primary mb-1">MS</p>
              <p className="text-muted small mb-0">Heart Rate Variability</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* ABHA ID */}
      <div className="custom-card bg-white p-4 shadow">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="h5 d-flex align-items-center gap-2 mb-0">
            <div className="icon-container" style={{backgroundColor: 'rgba(0, 123, 255, 0.1)'}}>
              <Shield className="text-primary" size={24} />
            </div>
            Get your <span className="custom-orange-text">ABHA ID</span>
          </h3>
          <span className="badge bg-primary">Recommended</span>
        </div>
        <p className="text-muted mb-4">Secure digital access to health records and healthcare services.</p>
        
        <div className="row g-3 mb-4">
          <div className="col-md-4">
            <div className="metric-card bg-light p-3 rounded shadow-sm h-100">
              <div className="d-flex align-items-center mb-2">
                <div className="rounded-circle p-2 me-2" style={{backgroundColor: 'rgba(0, 123, 255, 0.1)'}}>
                  <ShieldCheck className="text-primary" size={20} />
                </div>
                <h6 className="mb-0 fw-bold">Unified Records</h6>
              </div>
              <p className="text-muted small mb-0">Access all your health records in one place securely</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="metric-card bg-light p-3 rounded shadow-sm h-100">
              <div className="d-flex align-items-center mb-2">
                <div className="rounded-circle p-2 me-2" style={{backgroundColor: 'rgba(40, 167, 69, 0.1)'}}>
                  <Activity className="text-success" size={20} />
                </div>
                <h6 className="mb-0 fw-bold">Seamless Access</h6>
              </div>
              <p className="text-muted small mb-0">Quick healthcare access across multiple providers</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="metric-card bg-light p-3 rounded shadow-sm h-100">
              <div className="d-flex align-items-center mb-2">
                <div className="rounded-circle p-2 me-2" style={{backgroundColor: 'rgba(0, 123, 255, 0.1)'}}>
                  <ShieldCheck className="text-primary" size={20} />
                </div>
                <h6 className="mb-0 fw-bold">Enhanced Security</h6>
              </div>
              <p className="text-muted small mb-0">Your health data protected with industry-leading encryption</p>
            </div>
          </div>
        </div>
        
        <button className="btn text-white w-100 py-2" style={{backgroundColor: orangeColor, borderColor: orangeColor}}>
          Register Now
        </button>
      </div>
      
      {/* Additional Lombard branding */}
      <div className="text-center mt-4">
        <p className="text-muted small">© 2025 Lombard Insurance. All rights reserved.</p>
      </div>
    </div>
  );
}
