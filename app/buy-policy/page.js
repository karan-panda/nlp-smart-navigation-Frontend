"use client";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function BuyInsurance() {
  return (
    <div className="container-fluid p-4">
      <header className="d-flex align-items-center mb-3">
        <Link href="/">
          <button className="btn btn-light me-2">←</button>
        </Link>
        <h1 className="h4 fw-bold mb-0">Buy</h1>
      </header>

      <section>
        <h5 className="fw-bold">Health <span style={{color:"#FF6600"}}>Insurance</span></h5>
        <Link href="/buy-policy/health">
          <div className="card p-4 mb-3 text-center shadow-sm">
            {/* <img src="/icons/health.png" alt="Health Insurance" width="40" /> */}
            <p className="mt-2 mb-0 fs-5">Health Insurance</p>
          </div>
        </Link>
      </section>

      <section>
        <h5 className="fw-bold">Vehicle <span style={{color:"#FF6600"}}>Insurance</span></h5>
        <div className="d-flex gap-2">
          <Link href="/buy-policy/car" className="flex-fill">
            <div className="card p-3 text-center shadow-sm">
              {/* <img src="/icons/car.png" alt="Car Insurance" width="40" /> */}
              <p className="mt-2 mb-0 fs-5">Car Insurance</p>
            </div>
          </Link>
          <Link href="/buy-policy/bike" className="flex-fill">
            <div className="card p-3 text-center shadow-sm">
              {/* <img src="/icons/bike.png" alt="Bike Insurance" width="40" /> */}
              <p className="mt-2 mb-0 fs-5">Bike Insurance</p>
            </div>
          </Link>
        </div>
      </section>

      <section>
        <h5 className="fw-bold">Travel <span style={{color:"#FF6600"}}>Insurance</span></h5>
        <Link href="/buy-policy/travel">
          <div className="card p-4 mb-3 text-center shadow-sm">
            {/* <img src="/icons/travel.png" alt="Travel Insurance" width="40" /> */}
            <p className="mt-2 mb-0 fs-5">TripSecure+</p>
          </div>
        </Link>
      </section>

      <section>
        <h5 className="fw-bold">Other <span style={{color:"#FF6600"}}>Products</span></h5>
        <div className="d-flex gap-2">
          <Link href="/buy-policy/home" className="flex-fill">
            <div className="card p-3 text-center shadow-sm">
              {/* <img src="/icons/home.png" alt="Home Insurance" width="40" /> */}
              <p className="mt-2 mb-0 fs-5">Home Insurance</p>
            </div>
          </Link>
          <Link href="buy-policy/retailNcorporate" className="flex-fill">
            <div className="card p-3 text-center shadow-sm">
              {/* <img src="/icons/retail.png" alt="Retail & Corporate" width="40" /> */}
              <p className="mt-2 mb-0 fs-5">Retail & Corporate</p>
            </div>
          </Link>
        </div>
      </section>

      <div className="d-flex justify-content-between mt-4">
        <Link href="/disclaimer" style={{color:"#FF6600"}}>Disclaimer</Link>
        <Link href="/product-details" style={{color:"#FF6600"}}>Product details →</Link>
      </div>

      <nav className="navbar fixed-bottom bg-white shadow">
        <div className="container d-flex justify-content-around">
          <Link href="/home" className="nav-link active">Home</Link>
          <Link href="/policies" className="nav-link">Policies</Link>
          <Link href="/benefits" className="nav-link">Benefits</Link>
          <Link href="/buy-policy" className="nav-link">Buy</Link>
          <Link href="/help" className="nav-link">Help</Link>
        </div>
      </nav>
    </div>
  );
}
