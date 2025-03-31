"use client";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { FaQuestionCircle, FaRobot, FaChevronRight } from "react-icons/fa";

export default function Help() {
  return (
    <div className="container-fluid bg-light min-vh-100 p-4 d-flex flex-column align-items-center">
      {/* Header */}
      <motion.h2 
        className="fw-bold mb-4 text-center" 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        style={{ color: "#FF6600" }}
      >
        Help & Support
      </motion.h2>

      {/* Help Options */}
      <div className="row w-100 d-flex justify-content-center" style={{ maxWidth: "600px" }}>
        {/* FAQ Card */}
        <motion.div 
          className="col-12 mb-3"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link href="/help/faq" className="text-decoration-none">
            <div className="p-4 bg-white rounded shadow-sm d-flex align-items-center justify-content-between border border-primary">
              <div className="d-flex align-items-center">
                <FaQuestionCircle className="text-primary fs-2 me-3" />
                <div>
                  <h6 className="fw-bold mb-1">Frequently Asked Questions</h6>
                  <p className="text-muted mb-0">Find answers to your queries</p>
                </div>
              </div>
              <FaChevronRight className="text-primary" />
            </div>
          </Link>
        </motion.div>

        {/* Ask RIA Card */}
        <motion.div 
          className="col-12"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link href="/help/ria" className="text-decoration-none">
            <div className="p-4 bg-white rounded shadow-sm d-flex align-items-center justify-content-between border border-warning">
              <div className="d-flex align-items-center">
                <FaRobot className="text-warning fs-2 me-3" />
                <div>
                  <h6 className="fw-bold mb-1">Ask RIA</h6>
                  <p className="text-muted mb-0">Ask your queries to our chatbot</p>
                </div>
              </div>
              <FaChevronRight className="text-warning" />
            </div>
          </Link>
        </motion.div>
      </div>

      {/* Navigation Bar */}
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