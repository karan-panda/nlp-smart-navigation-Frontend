"use client";
import React, { useState } from "react";
import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";
import { FaPlaneDeparture, FaCalendarAlt, FaUsers, FaCheckCircle } from "react-icons/fa";

const TravelInsurance = () => {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [travelers, setTravelers] = useState(1);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Travel Insurance Quote Generated!");
  };

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card className="p-4 shadow-lg w-100" style={{ maxWidth: "500px" }}>
        <h2 className="text-center text-primary fw-bold">Travel Insurance</h2>
        <p className="text-center text-muted">Secure your trip in just a few steps</p>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label><FaPlaneDeparture className="me-2 text-warning" /> Destination</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
            />
          </Form.Group>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label><FaCalendarAlt className="me-2 text-warning" /> Start Date</Form.Label>
                <Form.Control
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label><FaCalendarAlt className="me-2 text-warning" /> End Date</Form.Label>
                <Form.Control
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label><FaUsers className="me-2 text-warning" /> Number of Travelers</Form.Label>
            <Form.Control
              type="number"
              min="1"
              value={travelers}
              onChange={(e) => setTravelers(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label={<><FaCheckCircle className="me-2 text-warning" /> I agree to the Terms & Conditions</>}
              className="fw-semibold"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              required
            />
          </Form.Group>

          <Button type="submit" className="w-100 fw-bold text-white" disabled={!agreed} style={{ background: "#FF6600", border: "none" }}>
            Get Quote
          </Button>
        </Form>
      </Card>
      <div style={{ minHeight: "100px" }}></div>
    </Container>
  );
};

export default TravelInsurance;
