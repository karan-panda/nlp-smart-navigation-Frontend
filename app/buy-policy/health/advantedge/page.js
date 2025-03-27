"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
// import { FaUser, FaArrowLeft } from 'react-icons/fa';

export default function HealthAdvantEdge() {
    const [pincode, setPincode] = useState('');
    const [selectedOptions, setSelectedOptions] = useState([]);
    const options = ['Self', 'Spouse', 'Child'];

    const handleCheckboxChange = (option) => {
        setSelectedOptions((prev) =>
            prev.includes(option)
                ? prev.filter((item) => item !== option)
                : [...prev, option]
        );
    };

    return (
        <Container className="p-4 text-white" style={{ backgroundColor: '#00264d', minHeight: '100vh' }}>
            <div className="d-flex align-items-center mb-3">
                {/* <FaArrowLeft className="me-2" color="orange" size={20} /> */}
                <h5 className="text-orange">Health AdvantEdge</h5>
            </div>
            <Card className="p-3 mb-3">
                <p className="mb-0">
                    <strong>A comprehensive policy designed to cater to your healthcare needs</strong>
                    <span className="text-orange"> Know more</span>
                </p>
            </Card>
            <h6>One step away from securing your family’s health</h6>
            <p className="text-muted">Help us with a few details to find the right plan</p>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Where do you live?</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Pincode"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Who do you want to insure?</Form.Label>
                    {options.map((option, index) => (
                        <Form.Check
                            key={index}
                            type="checkbox"
                            // label={<><FaUser className="me-2" /> {option}</>}
                            checked={selectedOptions.includes(option)}
                            onChange={() => handleCheckboxChange(option)}
                        />
                    ))}
                </Form.Group>
                <Form.Group className="mb-3 d-flex align-items-center">
                    <Form.Check type="checkbox" className="me-2" />
                    <span>
                        By clicking on Proceed, you agree to our <span className="text-warning">Disclaimer</span> and <span className="text-warning">Terms & Conditions</span>
                    </span>
                </Form.Group>
                <Button className="w-100" style={{ backgroundColor: 'orange', borderColor: 'orange' }}>
                    View Plans
                </Button>
            </Form>
        </Container>
    );
}
