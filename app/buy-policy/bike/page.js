import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TwoWheelerInsurance = () => {
  return (
    <div className="container p-3">
      <h2 className="text-center fw-bold">Two Wheeler Insurance</h2>
      <div className="card p-3 mt-3">
        <div className="text-white p-3 rounded" style={{ backgroundColor: "#FF9A00" }}>
          <h5>Bike Insurance that is right for you</h5>
          <p className="mb-0">Price starting at just ₹538*</p>
          <ul className="list-unstyled mt-2">
            <li>✅ 24x7 Claim Support</li>
            <li>✅ No Claim Bonus</li>
          </ul>
          <p className="mb-0">Asia's most trusted brand 2022 in General Insurance</p>
        </div>
        <div className="mt-3">
          <label className="form-label">Enter bike registration number</label>
          <input type="text" className="form-control" placeholder="Enter here" />
        </div>
        <div className="form-check mt-2">
          <input className="form-check-input" type="checkbox" id="agree" />
          <label className="form-check-label" htmlFor="agree">
            By clicking here, I agree to the <a href="#">Disclaimer</a> and <a href="#">Terms & Conditions</a>
          </label>
        </div>
        <button className="btn btn-warning w-100 mt-3" style={{background:"#FF6600"}}>Get Bike Details</button>
        <p className="text-center mt-2">
          <a href="#">New bike? or I don't know my bike details</a>
        </p>
      </div>
    </div>
  );
};

export default TwoWheelerInsurance;
