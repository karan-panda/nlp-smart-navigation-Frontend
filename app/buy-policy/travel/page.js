"use client";
import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";

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
    <Container className="mt-5">
      <Card className="p-4 shadow-lg">
        <h2 className="text-center">Travel Insurance</h2>
        <p className="text-center text-muted">Get your travel insurance quickly</p>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Destination</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Number of Travelers</Form.Label>
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
              label="I agree to the Terms & Conditions"
              style={{color:"#FF6600"}}
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              required
            />
          </Form.Group>

          <Button type="submit" className="w-100" disabled={!agreed} style={{background:"#FF6600"}}>
            Get Quote
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default TravelInsurance;