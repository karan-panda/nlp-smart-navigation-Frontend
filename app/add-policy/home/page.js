"use client";
import { useState } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function HomePolicy() {
  const [policyNumber, setPolicyNumber] = useState("");

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
        <Link href="/add-policy/travel" className="btn btn-outline-secondary mx-2">Travel</Link>
        <button className="btn btn-warning">Home</button>
      </div>

      <form>
        <div className="mb-3">
          <label className="form-label">Policy Number</label>
          <input
            type="text"
            name="policyNumber"
            className="form-control"
            placeholder="000x/000000000/00/000"
            value={policyNumber}
            onChange={(e) => setPolicyNumber(e.target.value)}
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
