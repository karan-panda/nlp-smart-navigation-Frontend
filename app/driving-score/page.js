"use client";
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { FaHistory, FaCar, FaRoad } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function DrivingScore() {
  return (
    <Container className="text-center p-4 d-flex flex-column align-items-center justify-content-center" style={{ backgroundColor: '#FFF4E5', minHeight: '100vh' }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-3"
      >
        <h2 className="fw-bold" style={{ color: '#FF6600' }}><FaRoad /> Know Your Driving Score</h2>
        <p className="text-muted">Evaluate your driving performance and improve your safety <span>*</span></p>
      </motion.div>
      
      <Row className="justify-content-center my-3 w-100">
        <Col md={8}>
          <Form.Group controlId="modelName">
            <Form.Label className="fw-semibold text-dark"><FaCar className="me-2" />Select Your Car Model</Form.Label>
            <Form.Select className="shadow-sm">
              <option>BMW</option>
              <option>Scorpio</option>
              <option>Mahindra</option>
              <option>Tata</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      
      <Row className="justify-content-center my-3 w-100">
        <Col md={8} className="text-center">
          <a href="#" style={{ color: '#FF6600', textDecoration: 'none', fontWeight: 'bold' }}>Learn about your driving score parameters</a>
          <p className="text-muted small mt-2">
            <strong className="d-block">Disclaimer:</strong> This is an AI-driven score and should be used for reference only. Safe driving is always advised.
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
            <FaRoad className="me-2" /> Get Score
          </motion.button>
        </Col>
      </Row>
    </Container>
  );
}
