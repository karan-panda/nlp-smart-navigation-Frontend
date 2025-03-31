"use client";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RetailInsurance() {
  const insurancePlans = [
    { id: 1, name: "Health Insurance", description: "Get the best health coverage for you and your family.", icon: "❤️", link: "/buy-policy/health" },
    { id: 2, name: "Car Insurance", description: "Protect your car with affordable insurance plans.", icon: "🚗", link: "/buy-policy/car" },
    { id: 3, name: "Bike Insurance", description: "Two-wheeler insurance for safe rides.", icon: "🏍️", link: "/buy-policy/bike" },
    { id: 4, name: "Travel Insurance", description: "Secure your trips with travel insurance.", icon: "✈️", link: "/buy-policy/travel" },
    { id: 5, name: "Home Insurance", description: "Keep your home safe from unexpected damages.", icon: "🏡", link: "/buy-policy/home" }
  ];

  return (
    <div className="container-fluid min-vh-100 p-4 bg-light">
      <header className="p-3 bg-white shadow-sm rounded text-center">
        <h1 className="h4 fw-bold" style={{ color: "#FF6600" }}>🏦 Retail Insurance</h1>
        <p className="text-muted">Choose the best insurance plan for your needs</p>
      </header>

      <div className="row mt-4">
        {insurancePlans.map(plan => (
          <div key={plan.id} className="col-6 col-md-4 mb-3">
            <Link href={plan.link} className="text-decoration-none">
              <div className="card p-3 shadow-sm text-center border-0" style={{ background: "#FFF3E0" }}>
                <span className="fs-2" style={{ color: "#FF6600" }}>{plan.icon}</span>
                <h5 className="fw-bold mt-2" style={{ color: "#FF6600" }}>{plan.name}</h5>
                <p className="text-muted small mb-0">{plan.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <nav className="navbar fixed-bottom bg-white shadow py-2">
        <div className="container d-flex justify-content-around">
          <Link href="/" className="nav-link" style={{ color: "#FF6600" }}>Home</Link>
          <Link href="/policies" className="nav-link" style={{ color: "#FF6600" }}>Policies</Link>
          <Link href="/benefits" className="nav-link" style={{ color: "#FF6600" }}>Benefits</Link>
          <Link href="/buy-policy" className="nav-link active" style={{ color: "#FF6600" }}>Buy</Link>
          <Link href="/help" className="nav-link" style={{ color: "#FF6600" }}>Help</Link>
        </div>
      </nav>
    </div>
  );
}
