"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const InsuranceForm = () => {
  const [pincode, setPincode] = useState("");
  const [self, setSelf] = useState(false);
  const [spouse, setSpouse] = useState(false);
  const [child, setChild] = useState(false);
  const [parents, setParents] = useState(false);

  return (
    <div className="container mt-4">
      <h3>Maxprotect Booster</h3>
      <div className="alert alert-info d-flex align-items-center">
        <span className="me-2">🩺</span>
        <span>
          ICICI Lombard's Activate Booster policy is designed to cater to your
          health journey at all stages. <a href="#">Know more</a>
        </span>
      </div>
      <p>One step away from securing your family's health.</p>

      <div className="mb-3">
        <label className="form-label">Where do you live?</label>
        <input
          type="text"
          className="form-control"
          placeholder="Pincode"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        />
      </div>

      <label className="form-label">Who do you want to insure?</label>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          checked={self}
          onChange={() => setSelf(!self)}
        />
        <label className="form-check-label">Self</label>
      </div>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          checked={spouse}
          onChange={() => setSpouse(!spouse)}
        />
        <label className="form-check-label">Spouse</label>
      </div>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          checked={child}
          onChange={() => setChild(!child)}
        />
        <label className="form-check-label">Child</label>
      </div>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          checked={parents}
          onChange={() => setParents(!parents)}
        />
        <label className="form-check-label">Parents</label>
      </div>

      <button className="btn w-100 mt-3" style={{background:"#ff6600"}}>View Policy</button>
    </div>
  );
};

export default InsuranceForm;