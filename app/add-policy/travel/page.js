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

      <div className="d-flex mb-3">
        <Link href="/add-policy/health" className="btn btn-outline-secondary me-2">Health</Link>
        <Link href="/add-policy/vehicle" className="btn btn-outline-secondary mx-2">Vehicle</Link>
        <button className="btn btn-warning">Travel</button>
        <Link href="/add-policy/home" className="btn btn-outline-secondary mx-2">Home</Link>
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
