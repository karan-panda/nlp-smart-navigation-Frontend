"use client";
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaUserShield, FaIdCard, FaCalendarAlt, FaPlusCircle } from 'react-icons/fa';

export default function AddPolicy() {
  const router = useRouter();
  return (
    <div className="container-fluid bg-light min-vh-100 p-4 d-flex flex-column align-items-center">
      <motion.header 
        className="d-flex align-items-center mb-3 w-100"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/" className="btn btn-light me-3"><FaArrowLeft /></Link>
        <h1 className="h4 fw-bold mb-0 " style={{color:"#FF6600"}}>Add Policy</h1>
      </motion.header>

      <motion.section 
        className="bg-white p-4 rounded shadow w-100" 
        style={{ maxWidth: '600px' }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="h5 fw-bold mb-3" style={{color:"#FF6600"}}>Select Policy</h2>
        <div className="btn-group d-flex mb-3" role="group">
          <button className="btn btn-warning" style={{background:"#FF6600"}} onClick={() => router.push('/add-policy/health')}>Health</button>
          <button className="btn btn-light" onClick={() => router.push('/add-policy/vehicle')}>Vehicle</button>
          <button className="btn btn-light" onClick={() => router.push('/add-policy/travel')}>Travel</button>
          <button className="btn btn-light" onClick={() => router.push('/add-policy/home')}>Home</button>
        </div>

        <h2 className="h6 fw-bold">Policy Type</h2>
        <div className="mb-3">
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="policyType" id="corporate" style={{color:"#FF6600"}} />
            <label className="form-check-label" htmlFor="corporate">Corporate</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="policyType" id="retail" style={{color:"#FF6600"}}/>
            <label className="form-check-label" htmlFor="retail">Retail</label>
          </div>
        </div>

        <form>
          <div className="mb-3">
            <label className="form-label"><FaUserShield className="me-2 "style={{color:"#FF6600"}} /> Policy Number (Required)</label>
            <input type="text" className="form-control" placeholder="000x/000000000/00/000" />
          </div>

          <div className="mb-3">
            <label className="form-label"><FaIdCard className="me-2" style={{color:"#FF6600"}} /> UID Number/Card Number (Required)</label>
            <input type="text" className="form-control" />
          </div>

          <div className="mb-3">
            <label className="form-label"><FaCalendarAlt className="me-2 " style={{color:"#FF6600"}} /> Date of Birth (Required)</label>
            <input type="date" className="form-control" />
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
      <div style={{height:"80px"}}> </div>
    </div>
  );
}