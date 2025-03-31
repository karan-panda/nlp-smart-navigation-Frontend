"use client";
import { useState } from "react";
import Link from "next/link";
import { FaArrowLeft, FaMapMarkerAlt, FaUserShield, FaCheckCircle } from "react-icons/fa";

export default function ElevateHealthInsurance() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [agree, setAgree] = useState(false);
  const options = ["Self", "Spouse", "Child", "Parents", "Parents-in-law", "Others"];

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  return (
    <div className="container py-4" style={{ maxWidth: "600px" }}>
      {/* Header */}
      <div className="d-flex align-items-center mb-3">
        <Link href="/buy" className="text-dark me-2">
          <FaArrowLeft size={22} />
        </Link>
        <h4 className="fw-bold mb-0">Elevate - Health Insurance</h4>
      </div>

      {/* Pincode Input */}
      <div className="mb-4">
        <label className="fw-semibold mb-2">Where do you live?</label>
        <div className="input-group shadow-sm">
          <span className="input-group-text bg-white">
            <FaMapMarkerAlt color="#ff6600" />
          </span>
          <input type="text" className="form-control" placeholder="Enter Pincode" />
        </div>
      </div>

      {/* Insurance Selection */}
      <div className="mb-4">
        <label className="fw-semibold mb-2">Who do you want to insure?</label>
        <div className="card p-3 border-0 shadow-sm">
          {options.map((option, index) => (
            <div key={index} className="form-check d-flex align-items-center mb-2">
              <input
                type="checkbox"
                className="form-check-input me-2"
                checked={selectedOptions.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
              <FaUserShield color="#ff6600" className="me-2" />
              <span>{option}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer & Submit Button */}
      <div className="fixed-bottom bg-white shadow p-3" style={{ maxWidth: "600px", margin: "auto" }}>
        <div className="d-flex align-items-center mb-2">
          <input
            type="checkbox"
            className="form-check-input me-2"
            checked={agree}
            onChange={() => setAgree(!agree)}
          />
          <FaCheckCircle color="#ff6600" className="me-2" />
          <small>
            By clicking on View Policy, you agree to our
            <Link href="/disclaimer" className="text-warning ms-1">Disclaimer</Link>
            &nbsp;and
            <Link href="/terms" className="text-warning ms-1">Terms & Conditions</Link>
          </small>
        </div>
        <button className="btn w-100 text-white fw-bold" style={{ backgroundColor: "#ff6600" }} disabled={!agree}>
          View Policy
        </button>
      </div>
    </div>
  );
}