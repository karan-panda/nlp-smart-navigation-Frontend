"use client";
import { useState } from "react";
import Link from "next/link";

export default function ElevateHealthInsurance() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [agree, setAgree] = useState(false);

  const options = ["Self", "Spouse", "Child", "Parents", "Parents in law", "Others"];

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  return (
    <div className="container-fluid min-vh-100 bg-light">
      {/* Header */}
      <div className="d-flex align-items-center p-3">
        <Link href="/buy">
          <span className="text-dark fs-4">&larr;</span>
        </Link>
        <h2 className="ms-3 fw-bold mb-0">Elevate - Health Insurance</h2>
      </div>

      {/* Pincode Input */}
      <div className="container">
        <label className="fw-semibold">Where do you live?</label>
        <input type="text" className="form-control my-2" placeholder="Pincode" />
      </div>

      {/* Insurance Selection */}
      <div className="container mt-3">
        <label className="fw-semibold">Who do you want to insure?</label>
        <div className="card p-3 border-0 shadow-sm">
          {options.map((option, index) => (
            <div key={index} className="form-check d-flex align-items-center mb-2">
              <input
                type="checkbox"
                className="form-check-input me-2"
                checked={selectedOptions.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
              <span>{option}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer and View Policy */}
      <div className="fixed-bottom bg-white shadow p-3">
        <div className="d-flex align-items-center mb-2">
          <input
            type="checkbox"
            className="form-check-input me-2"
            checked={agree}
            onChange={() => setAgree(!agree)}
          />
          <small>
            By clicking on View policy, you agree to our{" "}
            <Link href="/disclaimer" className="text-warning">Disclaimer</Link> and{" "}
            <Link href="/terms" className="text-warning">Terms & Conditions</Link>
          </small>
        </div>
        <button className="btn btn-warning text-white w-100 fw-bold" disabled={!agree}>
          View Policy
        </button>
      </div>
    </div>
  );
}
