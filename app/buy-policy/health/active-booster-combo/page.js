"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { FaArrowLeft, FaMapMarkerAlt, FaUserShield } from 'react-icons/fa';

export default function ActivateBooster() {
  const [pincode, setPincode] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  return (
    <Container className="p-4">
      <Button variant="link" className="text-dark d-flex align-items-center mb-3">
        <FaArrowLeft className="me-2" /> Back
      </Button>
      <h4 className="fw-bold text-dark">Activate Booster (Combo*)</h4>
      <Card className="p-3 mb-3 shadow-sm" style={{ borderLeft: '5px solid #F57C00' }}>
        <div className="d-flex align-items-center">
          <FaUserShield size={40} color="#F57C00" className="me-3" />
          <div>
            <p className="mb-1 text-dark">
              ICICI Lombard's Activate Booster (Combo*) policy is designed to cater to your health journey at all stages.
            </p>
            <a href="#" className="text-primary fw-bold">Know more</a>
          </div>
        </div>
      </Card>
      <p className="fw-bold text-dark">Where do you live?</p>
      <div className="input-group mb-3">
        <span className="input-group-text bg-light"><FaMapMarkerAlt color="#F57C00" /></span>
        <Form.Control
          type="text"
          placeholder="Enter Pincode"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        />
      </div>
      <p className="fw-bold text-dark">Who do you want to insure?</p>
      <div className="mb-3">
        {['Self', 'Spouse', 'Child', 'Parents'].map((option) => (
          <Form.Check
            key={option}
            type="checkbox"
            label={option}
            checked={selectedOptions.includes(option)}
            onChange={() => handleCheckboxChange(option)}
            className="mb-2"
          />
        ))}
      </div>
      <Button className="w-100 py-2 fw-bold text-white" style={{ backgroundColor: '#F57C00', border: 'none' }}>
        View Policy
      </Button>
    </Container>
  );
}