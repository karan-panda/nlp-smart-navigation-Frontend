import Image from 'next/image';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function HealthScan() {
  return (
    <Container className="text-center p-4" style={{ backgroundColor: '#FFFFFF', color: 'black', minHeight: '100vh' }}>
      <Row>
        <Col>
          <h5 style={{ color: '#FF6600' }}>Know your Score</h5>
          <h6>Know your Driving Score <span style={{ color: 'black' }}>*</span></h6>
        </Col>
      </Row>
      <Row className="justify-content-center my-3">
        <Col md={8}>
          <Card className="p-3">
            <Image src="/car.jfif" alt="Car Scan" width={500} height={300} />
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center my-3">
        <Col md={8}>
          <label htmlFor="username" style={{ color: 'black' }}>Model Name</label>
          <select id="username" className="form-control" defaultValue="Rohit">
            <option>BMW</option>
            <option>Scorpio</option>
            <option>Mahindra</option>
            <option>Tata</option>
          </select>
        </Col>
      </Row>
      
      <Row className="justify-content-center my-3">
        <Col xs={5}>
          <Button style={{background:"#FF6600"}} className="w-100">My history</Button>
        </Col>
        <Col xs={5}>
          <Button style={{background:"#FF6600"}} className="w-100">Score</Button>
        </Col>
      </Row>
    </Container>
  );
}
