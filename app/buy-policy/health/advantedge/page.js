"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';
import { FaUser, FaArrowLeft, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

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
        <Container className="py-4">
            <div className="d-flex align-items-center mb-3">
                <FaArrowLeft className="me-2 text-warning" size={22} />
                <h4 className="fw-bold">Health AdvantEdge</h4>
            </div>
            <Card className="p-3 mb-4 shadow-sm border-0">
                <p className="mb-0 fw-semibold">
                    A comprehensive policy designed to cater to your healthcare needs
                    <span className="text-warning ms-2" style={{ cursor: 'pointer', fontWeight: 'bold' }}>Know more</span>
                </p>
            </Card>
            <h5 className="fw-bold">One step away from securing your family’s health</h5>
            <p className="text-muted">Help us with a few details to find the right plan</p>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold"><FaMapMarkerAlt className="me-2 text-warning" />Where do you live?</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Pincode"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold"><FaUser className="me-2 text-warning" />Who do you want to insure?</Form.Label>
                    <Row>
                        {options.map((option, index) => (
                            <Col key={index} xs={6} md={4}>
                                <Form.Check
                                    type="checkbox"
                                    label={option}
                                    checked={selectedOptions.includes(option)}
                                    onChange={() => handleCheckboxChange(option)}
                                />
                            </Col>
                        ))}
                    </Row>
                </Form.Group>
                <Form.Group className="mb-3 d-flex align-items-center">
                    <Form.Check type="checkbox" className="me-2" />
                    <span>
                        By clicking on Proceed, you agree to our <span className="text-warning fw-bold">Disclaimer</span> and <span className="text-warning fw-bold">Terms & Conditions</span>
                    </span>
                </Form.Group>
                <Button className="w-100 fw-semibold" style={{ backgroundColor: '#ff6600', borderColor: '#ff6600' }}>
                    <FaCheckCircle className="me-2" />View Plans
                </Button>
            </Form>
        </Container>
    );
}