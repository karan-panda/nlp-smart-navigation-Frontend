"use client";
import { useState } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { FaArrowLeft, FaIdCard, FaPlusCircle } from "react-icons/fa";

export default function HomePolicy() {
  const [policyNumber, setPolicyNumber] = useState("");

  return (
    <div className="container-fluid bg-light min-vh-100 p-4 d-flex flex-column align-items-center">
      <motion.header 
        className="d-flex align-items-center mb-3 w-100"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/add-policy" className="btn btn-light me-3"><FaArrowLeft /></Link>
        <h1 className="h4 fw-bold mb-0" style={{color: "#FF6600"}}>Add Home Policy</h1>
      </motion.header>

      <motion.section 
        className="bg-white p-4 rounded shadow w-100" 
        style={{ maxWidth: "600px" }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="h5 fw-bold mb-3" style={{color: "#FF6600"}}>Select Policy</h2>
        <div className="btn-group d-flex mb-3" role="group">
          <button className="btn btn-light" onClick={() => router.push('/add-policy/health')}>Health</button>
          <button className="btn btn-light" onClick={() => router.push('/add-policy/vehicle')}>Vehicle</button>
          <button className="btn btn-light" onClick={() => router.push('/add-policy/travel')}>Travel</button>
          <button className="btn btn-warning" style={{ background: "#FF6600" }} onClick={() => router.push('/add-policy/home')}>Home</button>
        </div>

        <form>
          <div className="mb-3">
            <label className="form-label"><FaIdCard className="me-2" style={{color: "#FF6600"}} /> Policy Number</label>
            <input
              type="text"
              name="policyNumber"
              className="form-control"
              placeholder="000x/000000000/00/000"
              value={policyNumber}
              onChange={(e) => setPolicyNumber(e.target.value)}
            />
          </div>

          <motion.button 
            type="submit" 
            className="btn btn-secondary w-100 d-flex align-items-center justify-content-center" 
            disabled
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPlusCircle className="me-2" /> Add Policy
          </motion.button>
        </form>
      </motion.section>

      <motion.p 
        className="text-center mt-3" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        Can't add your policy? <Link href="/contact" className="text-primary">Contact Us</Link>
      </motion.p>
    </div>
  );
}