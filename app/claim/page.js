import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react'
import NavBar from "../components/NavBar";

const Claim = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-column align-items-center justify-content-center p-4">
      <NavBar/>
      <h2 className="text-center mb-4">Insurance Claims</h2>
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">Health Insurance Claim</h5>
                <p className="card-text">Submit medical bills and get reimbursement.</p>
                <button className="btn btn-primary">Claim Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">Life Insurance Claim</h5>
                <p className="card-text">Claim benefits for policyholders.</p>
                <button className="btn btn-primary">Claim Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">Vehicle Insurance Claim</h5>
                <p className="card-text">Report damages and get compensation.</p>
                <button className="btn btn-primary">Claim Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">Travel Insurance Claim</h5>
                <p className="card-text">Get refunds for trip cancellations or delays.</p>
                <button className="btn btn-primary">Claim Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">Home Insurance Claim</h5>
                <p className="card-text">Claim coverage for home damages.</p>
                <button className="btn btn-primary">Claim Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">Business Insurance Claim</h5>
                <p className="card-text">File claims for business losses or damages.</p>
                <button className="btn btn-primary">Claim Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Claim