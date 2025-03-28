"use client";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function InsuranceSelection() {
  return (
    <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center bg-light">
      <header className="p-3 bg-white shadow-sm rounded text-center w-100">
        <h1 className="h4 fw-bold">Choose Your Insurance Type</h1>
        <p className="text-muted">Select the right plan for you</p>
      </header>

      <div className="mt-4 w-100 d-flex flex-column align-items-center">
        <Link href="/buy-policy/retail" className="btn btn-warning w-75 p-3 mb-3 shadow">
          🏠 Retail Insurance
        </Link>
        <Link href="/buy-policy/corporate" className="btn btn-primary w-75 p-3 shadow">
          🏢 Corporate Insurance
        </Link>
      </div>

      <nav className="navbar fixed-bottom bg-white shadow">
        <div className="container d-flex justify-content-around">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/policies" className="nav-link">Policies</Link>
          <Link href="/benefits" className="nav-link">Benefits</Link>
          <Link href="/buy-policy" className="nav-link active">Buy</Link>
          <Link href="/help" className="nav-link">Help</Link>
        </div>
      </nav>
    </div>
  );
}
