"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react'
import NavBar from "../components/NavBar";

const BuyPolicy = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-column align-items-center justify-content-center p-4">
      <NavBar/>
      <h2 className="text-center mb-4">Buy a Policy</h2>
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">Health Insurance</h5>
                <p className="card-text">Comprehensive coverage for medical expenses.</p>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">Life Insurance</h5>
                <p className="card-text">Financial security for your loved ones.</p>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">Vehicle Insurance</h5>
                <p className="card-text">Protection for your car or bike.</p>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">Travel Insurance</h5>
                <p className="card-text">Cover your trips against unexpected events.</p>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">Home Insurance</h5>
                <p className="card-text">Secure your home from damages and risks.</p>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">Business Insurance</h5>
                <p className="card-text">Protect your business from potential risks.</p>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyPolicy