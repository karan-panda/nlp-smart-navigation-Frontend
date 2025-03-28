"use client";
import { useState } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CompleteKYC() {
  const [documentType, setDocumentType] = useState("Aadhar");
  const [documentNumber, setDocumentNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`KYC submitted for ${documentType}: ${documentNumber}`);
  };

  return (
    <div className="container-fluid min-vh-100 bg-light">
      {/* Header */}
      <header className="d-flex align-items-center p-3 bg-white shadow-sm">
        <Link href="/profile" className="text-dark fs-4 me-3">&#8592;</Link>
        <h1 className="h5 fw-bold mb-0">Complete Your KYC</h1>
      </header>

      {/* Content */}
      <div className="bg-white rounded shadow-sm p-4 mt-4 mx-2">
        <h2 className="h6 fw-bold">Verify Your Identity</h2>
        <p className="text-muted">Submit your KYC details for an easier claim process</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Select Document Type</label>
            <select
              className="form-select"
              value={documentType}
              onChange={(e) => setDocumentType(e.target.value)}
              required
            >
              <option value="Aadhar">Aadhar Card</option>
              <option value="PAN">PAN Card</option>
              <option value="Passport">Passport</option>
              <option value="Voter ID">Voter ID</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Document Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter document number"
              value={documentNumber}
              onChange={(e) => setDocumentNumber(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-warning w-100 fw-bold">Submit KYC</button>
        </form>
      </div>
    </div>
  );
}
