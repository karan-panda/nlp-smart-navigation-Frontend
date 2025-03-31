"use client";
import React, { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";

const CarInsurance = () => {
  const [registration, setRegistration] = useState("");
  const [agree, setAgree] = useState(false);

  return (
    <Container className="mt-4">
      <h3 className="text-center text-orange fw-bold">🚗 Car Insurance</h3>
      <Card className="p-4 shadow-lg border-0" style={{ background: "#FFF3E0" }}>
        <h5 className="text-orange">Car insurance starting @₹2094/yr*</h5>
        <p className="text-muted">*TP rates only.</p>
        <Form>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Enter Car Registration No."
              value={registration}
              onChange={(e) => setRegistration(e.target.value)}
              className="p-2 border-orange rounded"
            />
          </Form.Group>
          <Button className="mt-3 w-100 fw-bold text-white" style={{ background: "#FF6600", border: "none" }}>
            Get Quote
          </Button>
          <p className="mt-2 text-orange fw-bold text-center" style={{ cursor: "pointer" }}>
            Got a new car?
          </p>
          <Form.Check
            className="mt-2"
            type="checkbox"
            label={
              <>
                By clicking here, I agree to the <span className="text-orange fw-bold">Disclaimer</span> and <span className="text-orange fw-bold">Terms & Conditions</span>
              </>
            }
            checked={agree}
            onChange={() => setAgree(!agree)}
          />
        </Form>
      </Card>
      <h5 className="mt-4 text-orange fw-bold">Key Benefits</h5>
      <Card className="p-4 shadow-lg mt-2 border-0" style={{ background: "#FFF3E0" }}>
        <p className="fw-bold">⚙ Doorstep Cashless Repairs <span className="text-danger">NEW</span></p>
        <p className="fw-bold">🌟 Drive less? Pay less with PAYD</p>
        <p className="fw-bold">💲 Up to 50% off with NCB</p>
      </Card>
    </Container>
  );
};

export default CarInsurance;
