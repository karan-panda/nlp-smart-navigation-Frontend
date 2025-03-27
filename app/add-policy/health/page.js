"use client";
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/navigation';

export default function AddPolicy() {
  const router = useRouter();
  return (
    <div className="container-fluid bg-light min-vh-100 p-4">
      <header className="d-flex align-items-center mb-3">
        <Link href="/" className="btn btn-light me-3">&larr;</Link>
        <h1 className="h4 fw-bold mb-0">Add Policy</h1>
      </header>

      <section className="bg-white p-4 rounded shadow">
        <h2 className="h5 fw-bold mb-3">Select Policy</h2>
        <div className="btn-group d-flex mb-3" role="group">
          <button className="btn btn-warning" onClick={() => router.push('/add-policy/health')}>Health</button>
          <button className="btn btn-light" onClick={() => router.push('/add-policy/vehicle')}>Vehicle</button>
          <button className="btn btn-light" onClick={() => router.push('/add-policy/travel')}>Travel</button>
          <button className="btn btn-light" onClick={() => router.push('/add-policy/home')}>Home</button>
        </div>

        <h2 className="h6 fw-bold">Policy Type</h2>
        <div className="mb-3">
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="policyType" id="corporate" />
            <label className="form-check-label" htmlFor="corporate">Corporate</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="policyType" id="retail" />
            <label className="form-check-label" htmlFor="retail">Retail</label>
          </div>
        </div>

        <form>
          <div className="mb-3">
            <label className="form-label">Policy Number (Required)</label>
            <input type="text" className="form-control" placeholder="000x/000000000/00/000" />
          </div>

          <div className="mb-3">
            <label className="form-label">UID Number/Card Number (Required)</label>
            <input type="text" className="form-control" />
          </div>

          <div className="mb-3">
            <label className="form-label">Date of Birth (Required)</label>
            <input type="date" className="form-control" />
          </div>

          <button type="submit" className="btn btn-secondary w-100" disabled>
            Add Policy
          </button>
        </form>
      </section>

      <p className="text-center mt-3">
        Can't add your policy? <Link href="/contact">Contact Us</Link>
      </p>
    </div>
  );
}
