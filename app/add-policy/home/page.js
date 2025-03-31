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

        <h2 className="h5 fw-bold mb-3">Select Policy</h2>
        <div className="btn-group d-flex mb-3" role="group">
          <button className="btn btn-light" onClick={() => router.push('/add-policy/health')}>Health</button>
          <button className="btn btn-light" onClick={() => router.push('/add-policy/vehicle')}>Vehicle</button>
          <button className="btn btn-light" onClick={() => router.push('/add-policy/travel')}>Travel</button>
          <button className="btn btn-warning" style={{background:"#FF6600"}} onClick={() => router.push('/add-policy/home')}>Home</button>
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
