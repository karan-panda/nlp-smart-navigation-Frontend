"use client";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/NavBar";

export default function Claim() {
  return (
    <div className="container-fluid min-vh-100 d-flex flex-column align-items-center justify-content-center p-4" style={{ backgroundColor: "#FFF4E5" }}>
     
      <header className="p-4 bg-white shadow-sm rounded text-center w-100">
        <h1 className="h4 fw-bold" style={{ color: "#FF6600" }}>Insurance Claims</h1>
        <p className="text-muted">Easily file and track your insurance claims</p>
      </header>
      
      <div className="container mt-4">
        <div className="row g-4">
          {[
            { id: 1, title: "Health Insurance Claim", description: "Submit medical bills and get reimbursement." },
            { id: 2, title: "Life Insurance Claim", description: "Claim benefits for policyholders." },
            { id: 3, title: "Vehicle Insurance Claim", description: "Report damages and get compensation." },
            { id: 4, title: "Travel Insurance Claim", description: "Get refunds for trip cancellations or delays." },
            { id: 5, title: "Home Insurance Claim", description: "Claim coverage for home damages." },
            { id: 6, title: "Business Insurance Claim", description: "File claims for business losses or damages." }
          ].map(claim => (
            <div key={claim.id} className="col-md-4">
              <div className="card shadow-sm border-0" style={{ backgroundColor: "white" }}>
                <div className="card-body text-center">
                  <h5 className="card-title" style={{ color: "#FF6600" }}>{claim.title}</h5>
                  <p className="card-text text-muted">{claim.description}</p>
                  <button className="btn fw-bold w-100" style={{ backgroundColor: "#FF6600", color: "white" }}>Claim Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{height:"100px"}}>

      </div>
    </div>
  );
}