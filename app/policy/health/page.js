import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react'
import NavBar from "../../components/NavBar";

const Health = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-column align-items-center justify-content-center p-4">
      <NavBar/>
      <h2 className="text-center mb-4">Different Types of Health Policies</h2>
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Individual Health Insurance</h5>
                <p className="card-text">Covers medical expenses for a single person.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Family Floater Insurance</h5>
                <p className="card-text">Covers the entire family under a single policy.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Senior Citizen Health Insurance</h5>
                <p className="card-text">Designed specifically for individuals above 60 years.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Critical Illness Insurance</h5>
                <p className="card-text">Provides coverage for life-threatening diseases.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Group Health Insurance</h5>
                <p className="card-text">Offered by employers for employees.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Maternity Health Insurance</h5>
                <p className="card-text">Covers maternity-related medical expenses.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Health