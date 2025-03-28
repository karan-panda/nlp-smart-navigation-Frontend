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
        <h5 className="fw-bold">Health <span className="text-warning">Insurance</span></h5>
        <Link href="/buy-policy/health">
          <div className="card p-4 mb-3 text-center shadow-sm">
            {/* <img src="/icons/health.png" alt="Health Insurance" width="40" /> */}
            <p className="mt-2 mb-0">Health Insurance</p>
          </div>
        </Link>
      </section>

      <section>
        <h5 className="fw-bold">Vehicle <span className="text-warning">Insurance</span></h5>
        <div className="d-flex gap-2">
          <Link href="/buy-policy/car" className="flex-fill">
            <div className="card p-3 text-center shadow-sm">
              {/* <img src="/icons/car.png" alt="Car Insurance" width="40" /> */}
              <p className="mt-2 mb-0">Car Insurance</p>
            </div>
          </Link>
          <Link href="/buy-policy/bike" className="flex-fill">
            <div className="card p-3 text-center shadow-sm">
              {/* <img src="/icons/bike.png" alt="Bike Insurance" width="40" /> */}
              <p className="mt-2 mb-0">Bike Insurance</p>
            </div>
          </Link>
        </div>
      </section>

      <section>
        <h5 className="fw-bold">Travel <span className="text-warning">Insurance</span></h5>
        <Link href="/buy-policy/travel">
          <div className="card p-4 mb-3 text-center shadow-sm">
            {/* <img src="/icons/travel.png" alt="Travel Insurance" width="40" /> */}
            <p className="mt-2 mb-0">TripSecure+</p>
          </div>
        </Link>
      </section>

      <section>
        <h5 className="fw-bold">Other <span className="text-warning">Products</span></h5>
        <div className="d-flex gap-2">
          <Link href="/buy-policy/home" className="flex-fill">
            <div className="card p-3 text-center shadow-sm">
              {/* <img src="/icons/home.png" alt="Home Insurance" width="40" /> */}
              <p className="mt-2 mb-0">Home Insurance</p>
            </div>
          </Link>
          <Link href="buy-policy/retailNcorporate" className="flex-fill">
            <div className="card p-3 text-center shadow-sm">
              {/* <img src="/icons/retail.png" alt="Retail & Corporate" width="40" /> */}
              <p className="mt-2 mb-0">Retail & Corporate</p>
            </div>
          </Link>
        </div>
      </section>

      <div className="d-flex justify-content-between mt-4">
        <Link href="/disclaimer" className="text-warning">Disclaimer</Link>
        <Link href="/product-details" className="text-warning">Product details →</Link>
      </div>
    </div>
  );
}
