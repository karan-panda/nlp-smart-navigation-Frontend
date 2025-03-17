import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react'
import NavBar from "../components/NavBar";

const Blogs = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-column align-items-center justify-content-center p-4">
      <NavBar/>
      <h2 className="text-center mb-4">Latest Insurance Blogs</h2>
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Understanding Health Insurance</h5>
                <p className="card-text">A comprehensive guide to choosing the right health insurance.</p>
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Top 5 Life Insurance Myths</h5>
                <p className="card-text">Debunking the common misconceptions about life insurance.</p>
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Why You Need Travel Insurance</h5>
                <p className="card-text">How travel insurance can save you from unexpected expenses.</p>
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Home Insurance: A Must-Have?</h5>
                <p className="card-text">Understanding the benefits of home insurance for homeowners.</p>
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Business Insurance Basics</h5>
                <p className="card-text">Why every business should invest in a solid insurance policy.</p>
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Car Insurance Explained</h5>
                <p className="card-text">Everything you need to know about vehicle insurance policies.</p>
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs