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

        <h2 className="h5 fw-bold mb-3">Select Policy</h2>
        <div className="btn-group d-flex mb-3" role="group">
          <button className="btn btn-light" onClick={() => router.push('/add-policy/health')}>Health</button>
          <button className="btn btn-warning" style={{background:"#FF6600"}} onClick={() => router.push('/add-policy/vehicle')}>Vehicle</button>
          <button className="btn btn-light" onClick={() => router.push('/add-policy/travel')}>Travel</button>
          <button className="btn btn-light" onClick={() => router.push('/add-policy/home')}>Home</button>
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
