"use client";
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { FaHistory, FaHeartbeat, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function HealthScan() {
  return (
    <Container className="text-center p-4 d-flex flex-column align-items-center justify-content-center" style={{ backgroundColor: '#FFF4E5', minHeight: '100vh' }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-3"
      >
        <h4 className="fw-bold" style={{ color: '#FF6600' }}><FaHeartbeat /> Know Your Health</h4>
        <p className="text-muted">Know your health vitals with a face scan <span>*</span></p>
      </motion.div>
      
      <Row className="justify-content-center my-3 w-100">
        <Col md={8}>
          <Form.Group controlId="username">
            <Form.Label className="fw-semibold text-dark"><FaUser className="me-2" />User Name</Form.Label>
            <Form.Select className="shadow-sm">
              <option>Rohit</option>
              <option>John</option>
              <option>Emma</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      
      <Row className="justify-content-center my-3 w-100">
        <Col md={8} className="text-center">
          <a href="#" style={{ color: '#FF6600', textDecoration: 'none', fontWeight: 'bold' }}>Learn about your health parameters</a>
          <p className="text-muted small mt-2">
            <strong className="d-block">Disclaimer:</strong> This is not intended to be a substitute for professional medical advice or diagnosis.
            Always seek the advice of your physician or other qualified health provider for any medical concerns.
          </p>
          <p className="text-muted small">
            <span>*</span> CDSCO approved, classified under class B medical device
          </p>
        </Col>
      </Row>
      
      <Row className="justify-content-center my-3 w-100">
        <Col xs={5} className="text-center">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn w-100 py-2 fw-bold shadow-sm rounded-3" style={{ background: "#FF6600", color: "white" }}>
            <FaHistory className="me-2" /> My History
          </motion.button>
        </Col>
        <Col xs={5} className="text-center">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn w-100 py-2 fw-bold shadow-sm rounded-3" style={{ background: "#FF6600", color: "white" }}>
            <FaHeartbeat className="me-2" /> Scan
          </motion.button>
        </Col>
      </Row>
      <div style={{height:'100px'}}></div>
    </Container>
  );
}