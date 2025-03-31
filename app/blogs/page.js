"use client";
import Link from 'next/link';
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHome, FaClipboardList, FaGift, FaShoppingCart, FaQuestionCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import React from 'react';
import NavBar from "../components/NavBar";

const Blogs = () => {
  return (
    <div className="bg-light min-vh-90 d-flex flex-column align-items-center justify-content-center p-4">
      <motion.h2 className="text-center mb-4" 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}>
        Latest Insurance Blogs
      </motion.h2>
      <div className="container">
        <div className="row g-4">
          {[  
            { title: "Understanding Health Insurance", text: "A comprehensive guide to choosing the right health insurance." },
            { title: "Top 5 Life Insurance Myths", text: "Debunking the common misconceptions about life insurance." },
            { title: "Why You Need Travel Insurance", text: "How travel insurance can save you from unexpected expenses." },
            { title: "Home Insurance: A Must-Have?", text: "Understanding the benefits of home insurance for homeowners." },
            { title: "Business Insurance Basics", text: "Why every business should invest in a solid insurance policy." },
            { title: "Car Insurance Explained", text: "Everything you need to know about vehicle insurance policies." }
          ].map((blog, index) => (
            <div className="col-md-4" key={index}>
              <motion.div className="card shadow-sm border-0 rounded-3" 
                whileHover={{ scale: 1.05 }} 
                transition={{ duration: 0.3 }}>
                <div className="card-body">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text">{blog.text}</p>
                  <button className="btn text-white" style={{ background: "#FF6600" }}>Read More</button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      <nav className="navbar fixed-bottom bg-white shadow">
        <div className="container d-flex justify-content-around">
          <Link href="/home" className="nav-link active text-dark d-flex flex-column align-items-center">
            <FaHome size={20} /><span>Home</span>
          </Link>
          <Link href="/policies" className="nav-link text-dark d-flex flex-column align-items-center">
            <FaClipboardList size={20} /><span>Policies</span>
          </Link>
          <Link href="/benefits" className="nav-link text-dark d-flex flex-column align-items-center">
            <FaGift size={20} /><span>Benefits</span>
          </Link>
          <Link href="/buy-policy" className="nav-link text-dark d-flex flex-column align-items-center">
            <FaShoppingCart size={20} /><span>Buy</span>
          </Link>
          <Link href="/help" className="nav-link text-dark d-flex flex-column align-items-center">
            <FaQuestionCircle size={20} /><span>Help</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Blogs;
