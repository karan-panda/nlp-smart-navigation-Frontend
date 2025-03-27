"use client";
import { useState } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function VehiclePolicy() {
  const [formData, setFormData] = useState({
    registrationNumber: "",
    chassisNumber: "",
    engineNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container-fluid p-4">
      <header className="d-flex align-items-center mb-3">
        <Link href="/add-policy">
          <button className="btn btn-light me-2">←</button>
        </Link>
        <h1 className="h4 fw-bold mb-0">Add Policy</h1>
      </header>

      <div className="d-flex mb-3">
        <button className="btn btn-outline-secondary me-2">Health</button>
        <button className="btn btn-warning">Vehicle</button>
        <button className="btn btn-outline-secondary mx-2">Travel</button>
        <button className="btn btn-outline-secondary">Home</button>
      </div>

      <form>
        <div className="mb-3">
          <label className="form-label">Vehicle Registration Number (Required)</label>
          <input
            type="text"
            name="registrationNumber"
            className="form-control"
            value={formData.registrationNumber}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Last 5 Digits of Chassis Number (Required)</label>
          <input
            type="text"
            name="chassisNumber"
            className="form-control"
            value={formData.chassisNumber}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Engine Number (Required)</label>
          <input
            type="text"
            name="engineNumber"
            className="form-control"
            value={formData.engineNumber}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-secondary w-100" disabled>
          Add Policy
        </button>
      </form>

      <p className="text-center mt-3">
        Can't add your policy? <Link href="/contact">Contact Us</Link>
      </p>
    </div>
  );
}
