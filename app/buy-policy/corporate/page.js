"use client";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CorporateInsurance() {
  const corporatePlans = [
    { id: 1, name: "Group Health Insurance", description: "Comprehensive health coverage for employees.", icon: "🏥", link: "/buy-policy/group-health" },
    { id: 2, name: "Business Liability Insurance", description: "Protect your business from unforeseen risks.", icon: "⚖️", link: "/buy-policy/business-liability" },
    { id: 3, name: "Employee Benefits Insurance", description: "Provide financial security to your employees.", icon: "👨‍💼", link: "/buy-policy/employee-benefits" },
    { id: 4, name: "Property Insurance", description: "Cover your business assets and properties.", icon: "🏢", link: "/buy-policy/property" },
    { id: 5, name: "Cyber Insurance", description: "Safeguard your company from cyber threats.", icon: "💻", link: "/buy-policy/cyber" }
  ];

  return (
    <div className="container-fluid min-vh-100 p-4 bg-light">
      <header className="p-3 bg-white shadow-sm rounded text-center">
        <h1 className="h4 fw-bold">🏢 Corporate Insurance</h1>
        <p className="text-muted">Secure your business with the right insurance plan</p>
      </header>

      <div className="row mt-4">
        {corporatePlans.map(plan => (
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
