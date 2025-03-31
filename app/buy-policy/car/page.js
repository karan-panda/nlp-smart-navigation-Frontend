"use client";
import React, { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";

const CarInsurance = () => {
  const [registration, setRegistration] = useState("");
  const [agree, setAgree] = useState(false);

  return (
    <Container className="mt-4">
      <h3>Car Insurance</h3>
      <Card className="p-3 shadow-sm">
        <h5>Car insurance starting @₹2094/yr*</h5>
        <p className="text-muted">*TP rates only.</p>
        <Form>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Car registration no."
              value={registration}
              onChange={(e) => setRegistration(e.target.value)}
            />
          </Form.Group>
          <Button className="mt-3 w-100" variant="warning" style={{background:"#FF6620"}}>
            Get quote
          </Button>
          <p className="mt-2 text-primary" style={{ cursor: "pointer" }}>
            Got a new car
          </p>
          <Form.Check
            className="mt-2"
            type="checkbox"
            label={
              <>
                By clicking here, I agree to the <span className="text-primary">Disclaimer</span> and <span className="text-primary">Terms & Conditions</span>
              </>
            }
            checked={agree}
            onChange={() => setAgree(!agree)}
          />
        </Form>
      </Card>
      <h5 className="mt-4">Key Benefits</h5>
      <Card className="p-3 shadow-sm mt-2">
        <p>⚙ Doorstep Cashless Repairs <span className="text-danger">NEW</span>
        </p>
        <p>🌟 Drive less? Pay less with PAYD</p>
        <p>💲 Up to 50% off with NCB</p>
      </Card>
    </Container>
  );
};

export default CarInsurance;
