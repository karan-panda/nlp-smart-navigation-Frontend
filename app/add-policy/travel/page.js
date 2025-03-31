"use client";
import { useState } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function TravelPolicy() {
  const [formData, setFormData] = useState({
    policyNumber: "",
    passportNumber: "",
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
          <button className="btn btn-light"  onClick={() => router.push('/add-policy/health')}>Health</button>
          <button className="btn btn-light" onClick={() => router.push('/add-policy/vehicle')}>Vehicle</button>
          <button className="btn btn-warning" style={{background:"#FF6600"}} onClick={() => router.push('/add-policy/travel')}>Travel</button>
          <button className="btn btn-light" onClick={() => router.push('/add-policy/home')}>Home</button>
        </div>

      <form>
        <div className="mb-3">
          <label className="form-label">Policy Number</label>
          <input
            type="text"
            name="policyNumber"
            className="form-control"
            placeholder="eg. 000x/0000000000/00/000"
            value={formData.policyNumber}
            onChange={handleChange}
          />
        </div>

        <div className="text-center my-3">
          <hr className="w-25 d-inline-block" /> <span className="mx-2">or</span> <hr className="w-25 d-inline-block" />
        </div>

        <div className="mb-3">
          <label className="form-label">Passport Number</label>
          <input
            type="text"
            name="passportNumber"
            className="form-control"
            value={formData.passportNumber}
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
