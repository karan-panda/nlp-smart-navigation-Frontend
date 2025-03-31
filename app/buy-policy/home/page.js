import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePolicy = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Secure Your Home with Our Insurance Policy</h2>
      <div className="card p-4 shadow-sm">
        <form>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control" placeholder="Enter your name" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Property Address</label>
            <input type="text" className="form-control" placeholder="Enter your address" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Property Value (₹)</label>
            <input type="number" className="form-control" placeholder="Enter estimated value" required />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="terms" required />
            <label className="form-check-label" htmlFor="terms">
              I agree to the <a href="#" style={{color:"#FF6600"}}>Terms & Conditions</a>
            </label>
          </div>
          <button type="submit" className="btn w-100" style={{background:"#FF6600"}}>Get a Quote</button>
        </form>
      </div>
    </div>
  );
};

export default HomePolicy;