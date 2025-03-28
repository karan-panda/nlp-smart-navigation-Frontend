"use client";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Profile() {
  return (
    <div className="container-fluid min-vh-100 bg-light">
      {/* Header */}
      <header className="d-flex align-items-center p-3 bg-white shadow-sm">
        <Link href="/" className="text-dark fs-4 me-3">&#8592;</Link>
        <h1 className="h5 fw-bold mb-0">My Profile</h1>
      </header>

      {/* Profile Card */}
      <div className="bg-white rounded shadow-sm p-3 mt-3 mx-2">
        <div className="d-flex align-items-center">
          <div className="position-relative d-flex align-items-center">
            <div className="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: "50px", height: "50px", fontSize: "18px", fontWeight: "bold" }}>
              RY
            </div>
            <div className="position-absolute bottom-0 start-100 translate-middle badge bg-danger" style={{ fontSize: "12px", borderRadius: "10px", padding: "2px 5px" }}>
              60%
            </div>
          </div>
          <div className="ms-3">
            <h2 className="h6 fw-bold mb-0">Hello Rohit!</h2>
          </div>
          <Link href="/profile/edit-profile" className="ms-auto text-decoration-none text-warning fw-bold">Edit ✏️</Link>
        </div>
      </div>

      {/* Profile Options */}
      <div className="bg-white rounded shadow-sm mt-3 mx-2">
        <Link href="/profile/change-number" className="d-flex align-items-center p-3 border-bottom text-dark text-decoration-none">
          <img src="/icons/login.png" alt="Change Login" width="30" className="me-3" />
          <div>
            <p className="mb-0 fw-bold">Change login number</p>
            <small className="text-muted">You are logged in with 9619602970</small>
          </div>
          <span className="ms-auto text-warning">&gt;</span>
        </Link>

        <Link href="/profile/complete-your-kyc" className="d-flex align-items-center p-3 border-bottom text-dark text-decoration-none">
          <img src="/icons/kyc.png" alt="Complete KYC" width="30" className="me-3" />
          <div>
            <p className="mb-0 fw-bold">Complete your KYC</p>
            <small className="text-muted">Verify your KYC for easier claim</small>
          </div>
          <span className="ms-auto text-warning">&gt;</span>
        </Link>

        <Link href="/profile/settings" className="d-flex align-items-center p-3 border-bottom text-dark text-decoration-none">
          <img src="/icons/settings.png" alt="Settings" width="30" className="me-3" />
          <div>
            <p className="mb-0 fw-bold">Settings</p>
            <small className="text-muted">Manage app notifications and account</small>
          </div>
          <span className="ms-auto text-warning">&gt;</span>
        </Link>

        <Link href="/home" className="d-flex align-items-center p-3 text-danger text-decoration-none">
          <img src="/icons/logout.png" alt="Logout" width="30" className="me-3" />
          <p className="mb-0 fw-bold">Log out</p>
        </Link>
      </div>

      {/* Version Info */}
      <div className="text-center text-muted mt-3">
        <small>Version 4.0.8</small>
      </div>
    </div>
  );
}
