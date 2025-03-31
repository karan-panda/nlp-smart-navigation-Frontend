"use client";
import React, { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { FaHome, FaFileContract, FaMoneyBillWave, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const HomePolicy = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [propertyValue, setPropertyValue] = useState("");
  const [agree, setAgree] = useState(false);

  return (
    <Container className="mt-5">
      <motion.h2 
        className="text-center text-orange fw-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FaHome className="me-2" /> Secure Your Home with Our Insurance Policy
      </motion.h2>
      <Card className="p-4 shadow-lg border-0 mt-4" style={{ background: "#FFF3E0" }}>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold"><FaFileContract className="me-2" /> Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 border-orange rounded shadow-sm"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold"><FaHome className="me-2" /> Property Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="p-2 border-orange rounded shadow-sm"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold"><FaMoneyBillWave className="me-2" /> Property Value (₹)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter estimated value"
              value={propertyValue}
              onChange={(e) => setPropertyValue(e.target.value)}
              className="p-2 border-orange rounded shadow-sm"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label={
                <>
                  I agree to the <span className="text-orange fw-bold">Terms & Conditions</span>
                </>
              }
              checked={agree}
              onChange={() => setAgree(!agree)}
            />
          </Form.Group>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button type="submit" className="w-100 fw-bold text-white shadow-sm" style={{ background: "#FF6600", border: "none" }}>
              Get a Quote
            </Button>
          </motion.div>
        </Form>
      </Card>
      <h5 className="mt-4 text-orange fw-bold">Why Choose Us?</h5>
      <Card className="p-4 shadow-lg mt-2 border-0" style={{ background: "#FFF3E0" }}>
        <p className="fw-bold"><FaShieldAlt className="me-2" /> Comprehensive Coverage</p>
        <p className="fw-bold"><FaMoneyBillWave className="me-2" /> Affordable Premiums</p>
        <p className="fw-bold"><FaFileContract className="me-2" /> Quick & Easy Claims</p>
      </Card>
      <div style={{ minHeight: "250px" }}></div>
    </Container>
  );
};

export default HomePolicy;
