"use client";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Help() {
  return (
    <div className="container-fluid bg-light min-vh-100 p-4">
      {/* Header */}
      <h2 className="fw-bold">Help</h2>

      {/* Help Options */}
      <div className="row mt-4">
        {/* FAQ Card */}
        
        <div className="col-6">
        <Link href="/help/faq">
          <div className="p-3 bg-primary bg-opacity-10 rounded shadow-sm">
            <div className="d-flex align-items-center justify-content-between">
              <img src="/FAQ.jfif" alt="FAQ" width={150} height={150} style={{margin:"auto"}} />
              
                <button className="btn btn-sm btn-primary rounded-circle">›</button>
              
            </div>
            <h6 className="fw-bold mt-2">Frequently Asked Questions</h6>
            <p className="text-muted mb-0">Find answers to your queries</p>
          </div>
          </Link>
        </div>
        

        {/* Ask RIA Card */}
        <div className="col-6">
        <Link href="/help/ria">
          <div className="p-3 bg-warning bg-opacity-10 rounded shadow-sm">
            <div className="d-flex align-items-center justify-content-between">
              <img src="/Ria.jfif" alt="Ask RIA" width={150} height={150} style={{margin:"auto"}}/>
              
                <button className="btn btn-sm btn-warning rounded-circle">›</button>
              
            </div>
            <h6 className="fw-bold mt-2">Ask RIA</h6>
            <p className="text-muted mb-0">Ask your queries to our chatbot</p>
          </div>
          </Link>
        </div>
        
      </div>

      
      <nav className="navbar fixed-bottom bg-white shadow">
        <div className="container d-flex justify-content-around">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/policies" className="nav-link">Policies</Link>
          <Link href="/benefits" className="nav-link">Benefits</Link>
          <Link href="/buy-policy" className="nav-link">Buy</Link>
          <Link href="/help" className="nav-link active">Help</Link>
        </div>
      </nav>
    </div>
  );
}
