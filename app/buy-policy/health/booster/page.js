"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';

export default function ActivateBooster() {
  const [pincode, setPincode] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <Container className="p-4">
      <Button variant="link" className="text-dark">&larr; Back</Button>
      <h4 className="fw-bold">Activate Booster (Combo*)</h4>
      <Card className="p-3 mb-3" style={{ backgroundColor: '#E8F7FE' }}>
        <div className="d-flex align-items-center">
          <img src="/icon.png" alt="icon" style={{ width: 40, height: 40, marginRight: 10 }} />
          <div>
            <p className="mb-0">
              ICICI Lombard's Activate Booster (Combo*) policy is designed to cater to your health journey at all stages.
            </p>
            <a href="#" className="text-primary fw-bold">Know more</a>
          </div>
        </div>
      </Card>
      <p className="fw-bold">Where do you live?</p>
      <Form.Control
        type="text"
        placeholder="Pincode"
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
        className="mb-3"
      />
      <p className="fw-bold">Who do you want to insure?</p>
      <div className="mb-3">
        {['Self', 'Spouse', 'Child', 'Parents'].map((option) => (
          <Form.Check
            key={option}
            type="checkbox"
            label={option}
            checked={selectedOptions.includes(option)}
            onChange={() => handleCheckboxChange(option)}
          />
        ))}
      </div>
      <Button className="w-100" style={{ backgroundColor: '#F57C00', border: 'none' }}>View Policy</Button>
    </Container>
  );
}