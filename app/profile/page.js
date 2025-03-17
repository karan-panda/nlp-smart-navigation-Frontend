import React from 'react'
import NavBar from "../components/NavBar";

const Profile = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-column align-items-center justify-content-center p-4">
      <NavBar/>
      <h2 className="text-center mb-4">User Profile</h2>
      <div className="container d-flex justify-content-center">
        <div className="card shadow-sm p-4" style={{ width: "400px" }}>
          <div className="text-center">
            <img
              src="icici.jpg"
              alt="User Avatar"
              className="rounded-circle mb-1 "
              style={{ width: "50px", height: "50px" }}
            />
            <h4 className="card-title">John Doe</h4>
            <p className="card-text text-muted">john.doe@example.com</p>
          </div>
          <hr />
          <div className="card-body">
            <p><strong>Phone:</strong> +123 456 7890</p>
            <p><strong>Address:</strong> 123 Main Street, City, Country</p>
            <p><strong>Policies Owned:</strong> Health, Life, Car</p>
            <div className="d-flex justify-content-center">
              <button className="btn btn-primary me-2">Edit Profile</button>
              <button className="btn btn-danger">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Profile