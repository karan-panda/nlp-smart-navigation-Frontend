"use client";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { FaBuilding, FaShieldAlt, FaUserShield, FaGavel, FaLaptop } from "react-icons/fa";

export default function CorporateInsurance() {
  const corporatePlans = [
    { id: 1, name: "Group Health Insurance", description: "Comprehensive health coverage for employees.", icon: <FaShieldAlt />, link: "/buy-policy/group-health" },
    { id: 2, name: "Business Liability Insurance", description: "Protect your business from unforeseen risks.", icon: <FaGavel />, link: "/buy-policy/business-liability" },
    { id: 3, name: "Employee Benefits Insurance", description: "Provide financial security to your employees.", icon: <FaUserShield />, link: "/buy-policy/employee-benefits" },
    { id: 4, name: "Property Insurance", description: "Cover your business assets and properties.", icon: <FaBuilding />, link: "/buy-policy/property" },
    { id: 5, name: "Cyber Insurance", description: "Safeguard your company from cyber threats.", icon: <FaLaptop />, link: "/buy-policy/cyber" }
  ];

  return (
    <div className="container-fluid min-vh-100 p-4 bg-light">
      <motion.header 
        className="p-3 bg-white shadow-sm rounded text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="h4 fw-bold" style={{ color: "#FF6600" }}>🏢 Corporate Insurance</h1>
        <p className="text-muted">Secure your business with the right insurance plan</p>
      </motion.header>

      <div className="row mt-4">
        {corporatePlans.map(plan => (
          <motion.div 
            key={plan.id} 
            className="col-6 col-md-4 mb-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href={plan.link} className="btn w-100 p-3 shadow text-start border rounded" style={{ borderColor: "#FF6600", background: "#FFF4E5" }}>
              <span className="fs-4" style={{ color: "#FF6600" }}>{plan.icon}</span> <br />
              <strong className="text-dark">{plan.name}</strong>
              <p className="text-muted small mb-0">{plan.description}</p>
            </Link>
          </motion.div>
        ))}
      </div>

      
    </div>
  );
}
