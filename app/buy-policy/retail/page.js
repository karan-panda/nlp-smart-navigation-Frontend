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
        <h1 className="h4 fw-bold">🏦 Retail Insurance</h1>
        <p className="text-muted">Choose the best insurance plan for your needs</p>
      </header>

      <div className="row mt-4">
        {insurancePlans.map(plan => (
          <div key={plan.id} className="col-6 col-md-4 mb-3">
            <Link href={plan.link} className="btn btn-light w-100 p-3 shadow text-start">
              <span className="fs-4">{plan.icon}</span> <br />
              <strong>{plan.name}</strong>
              <p className="text-muted small mb-0">{plan.description}</p>
            </Link>
          </div>
        ))}
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
