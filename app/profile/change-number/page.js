"use client";
import { useState } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ChangeLogin() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`OTP sent to ${phoneNumber}`);
  };

  return (
    <div className="container-fluid min-vh-100 bg-light">
      {/* Header */}
      <header className="d-flex align-items-center p-3 bg-white shadow-sm">
        <Link href="/profile" className="text-dark fs-4 me-3">&#8592;</Link>
        <h1 className="h5 fw-bold mb-0">Change Login Number</h1>
      </header>

      {/* Content */}
      <div className="bg-white rounded shadow-sm p-4 mt-4 mx-2">
        <h2 className="h6 fw-bold">Enter New Mobile Number</h2>
        <p className="text-muted">We will send an OTP for verification</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Mobile Number</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Enter new mobile number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-warning w-100 fw-bold">Send OTP</button>
        </form>
      </div>
    </div>
  );
}
