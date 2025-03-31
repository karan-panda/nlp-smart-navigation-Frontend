"use client";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function InsuranceSelection() {
  return (
    <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: "#FFF4E5" }}>
      <header className="p-4 bg-white shadow-sm rounded text-center w-100">
        <h1 className="h4 fw-bold" style={{ color: "#FF6600" }}>Choose Your Insurance Type</h1>
        <p className="text-muted">Select the right plan for you</p>
      </header>

      <div className="mt-4 w-100 d-flex flex-column align-items-center">
        <Link href="/buy-policy/retail" className="btn w-75 p-3 mb-3 shadow fw-bold" style={{ backgroundColor: "#FF6600", color: "white" }}>
          🏠 Retail Insurance
        </Link>
        <Link href="/buy-policy/corporate" className="btn w-75 p-3 shadow fw-bold" style={{ backgroundColor: "#FF6600", color: "white" }}>
          🏢 Corporate Insurance
        </Link>
      </div>

      
    </div>
  );
}