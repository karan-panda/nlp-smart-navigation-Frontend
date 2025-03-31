"use client";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowLeft, FaHeartbeat, FaCar, FaMotorcycle, FaPlane, FaHome, FaBuilding, FaShoppingCart } from "react-icons/fa";

export default function BuyInsurance() {
  return (
    <div className="container-fluid p-4 bg-light min-vh-100">
      <header className="d-flex align-items-center mb-4">
        <Link href="/">
          <button className="btn btn-outline-dark me-2 d-flex align-items-center">
            <FaArrowLeft className="me-1" /> Back
          </button>
        </Link>
        <h1 className="h4 fw-bold mb-0 " style={{color:'#FF6600'}}>Buy Insurance</h1>
      </header>

      <section>
        <h5 className="fw-bold text-dark">Health <span className="text-danger">Insurance</span></h5>
        <Link href="/buy-policy/health">
          <div className="card p-4 mb-3 text-center shadow-sm bg-white">
            <FaHeartbeat className="text-danger fs-2" />
            <p className="mt-2 mb-0 fs-5 fw-semibold">Health Insurance</p>
          </div>
        </Link>
      </section>

      <section>
        <h5 className="fw-bold text-dark">Vehicle <span className="text-danger">Insurance</span></h5>
        <div className="d-flex gap-3">
          <Link href="/buy-policy/car" className="flex-fill">
            <div className="card p-3 text-center shadow-sm bg-white">
              <FaCar className="text-primary fs-2" />
              <p className="mt-2 mb-0 fs-5 fw-semibold">Car Insurance</p>
            </div>
          </Link>
          <Link href="/buy-policy/bike" className="flex-fill">
            <div className="card p-3 text-center shadow-sm bg-white">
              <FaMotorcycle className="text-success fs-2" />
              <p className="mt-2 mb-0 fs-5 fw-semibold">Bike Insurance</p>
            </div>
          </Link>
        </div>
      </section>

      <section>
        <h5 className="fw-bold text-dark">Travel <span className="text-danger">Insurance</span></h5>
        <Link href="/buy-policy/travel">
          <div className="card p-4 mb-3 text-center shadow-sm bg-white">
            <FaPlane className="text-info fs-2" />
            <p className="mt-2 mb-0 fs-5 fw-semibold">TripSecure+</p>
          </div>
        </Link>
      </section>

      <section>
        <h5 className="fw-bold text-dark">Other <span className="text-danger">Products</span></h5>
        <div className="d-flex gap-3">
          <Link href="/buy-policy/home" className="flex-fill">
            <div className="card p-3 text-center shadow-sm bg-white">
              <FaHome className="text-warning fs-2" />
              <p className="mt-2 mb-0 fs-5 fw-semibold">Home Insurance</p>
            </div>
          </Link>
          <Link href="/buy-policy/retailNcorporate" className="flex-fill">
            <div className="card p-3 text-center shadow-sm bg-white">
              <FaBuilding className="text-secondary fs-2" />
              <p className="mt-2 mb-0 fs-5 fw-semibold">Retail & Corporate</p>
            </div>
          </Link>
        </div>
      </section>

      <div className="d-flex justify-content-between mt-4">
        <Link href="/disclaimer" className="text-danger fw-bold">Disclaimer</Link>
        <Link href="/product-details" className="text-danger fw-bold">Product Details →</Link>
      </div>

       <div style={{ minHeight: "150px" }}>

       </div>
      
    </div>
  );
}
