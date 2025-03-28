"use client";
import { useState } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function EditProfile() {
  const [name, setName] = useState("Rohit");
  const [email, setEmail] = useState("rohit@example.com");
  const [phone, setPhone] = useState("9619602970");

  return (
    <div className="container-fluid min-vh-100 bg-light">
      {/* Header */}
      <header className="d-flex align-items-center p-3 bg-white shadow-sm">
        <Link href="/profile" className="text-dark fs-4 me-3">&#8592;</Link>
        <h1 className="h5 fw-bold mb-0">Edit Profile</h1>
      </header>

      {/* Profile Form */}
      <div className="bg-white rounded shadow-sm p-4 mt-4 mx-2">
        <h2 className="h6 fw-bold mb-3">Update Your Details</h2>

        {/* Profile Picture */}
        <div className="text-center mb-4">
          <div className="position-relative d-inline-block">
            <img src="/avatar.png" alt="Profile" className="rounded-circle" width="100" height="100" />
            <button className="btn btn-sm btn-warning position-absolute bottom-0 end-0">✏️</button>
          </div>
        </div>

        {/* Name */}
        <div className="mb-3">
          <label className="form-label fw-bold">Full Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label fw-bold">Email Address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Phone Number */}
        <div className="mb-3">
          <label className="form-label fw-bold">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {/* Save Button */}
        <button className="btn btn-warning w-100">Save Changes</button>
      </div>
    </div>
  );
}
