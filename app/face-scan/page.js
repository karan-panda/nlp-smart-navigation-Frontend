import Image from 'next/image';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function HealthScan() {
  return (
    <Container className="text-center p-4" style={{ backgroundColor: '#002A5C', color: 'white', minHeight: '100vh' }}>
      <Row>
        <Col>
          <h5 style={{ color: '#FF6600' }}>Know your health</h5>
          <h6>Know your health vitals with a face scan <span style={{ color: '#FF6600' }}>*</span></h6>
        </Col>
      </Row>
      <Row className="justify-content-center my-3">
        <Col md={8}>
          <Card className="p-3">
            <Image src="/scantheface.jfif" alt="Health Scan" width={500} height={300} />
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center my-3">
        <Col md={8}>
          <label htmlFor="username" style={{ color: 'white' }}>User name</label>
          <select id="username" className="form-control" defaultValue="Rohit">
            <option>Rohit</option>
            <option>John</option>
            <option>Emma</option>
          </select>
        </Col>
      </Row>
      <Row className="justify-content-center my-3">
        <Col md={8}>
          <a href="#" style={{ color: '#FF6600', textDecoration: 'none' }}>Learn about your health parameters</a>
          <p style={{ fontSize: '12px', marginTop: '10px' }}>
            <strong>Disclaimer:</strong> This is not intended to be a substitute for professional medical advice or diagnosis.
            Always seek the advice of your physician or other qualified health provider for any medical concerns.
          </p>
          <p style={{ fontSize: '12px' }}>
            <span style={{ color: '#FF6600' }}>*</span> CDSCO approved, classified under class B medical device
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center my-3">
        <Col xs={5}>
          <Button variant="warning" className="w-100">My history</Button>
        </Col>
        <Col xs={5}>
          <Button variant="warning" className="w-100">Scan</Button>
        </Col>
      </Row>
    </Container>
  );
}
