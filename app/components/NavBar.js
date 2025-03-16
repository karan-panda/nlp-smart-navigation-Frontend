"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

export default function NavigationBar() {
  return (
    <Navbar expand="lg" className="shadow-sm custom-navbar" fixed="top">
      <Container>
        {/* Brand/Logo */}
        <Navbar.Brand as={Link} href="/">
          <img
            src="/icici-logo.png"
            alt="ICICI Logo"
            width="150"
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        {/* Responsive Navbar Toggle Button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Policy Dropdown */}
            <NavDropdown title="Policy" id="policy-dropdown">
              <NavDropdown.Item as={Link} href="/policy/health">
                Health Insurance
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/policy/car">
                Car Insurance
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/policy/bike">
                Bike Insurance
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/policy/travel">
                Travel Insurance
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/policy/home">
                Home Insurance
              </NavDropdown.Item>
            </NavDropdown>

            {/* Other Navbar Links */}
            <Nav.Link as={Link} href="/add-policy">Add Policy</Nav.Link>
            <Nav.Link as={Link} href="/buy-policy">Buy Policy</Nav.Link>
            <Nav.Link as={Link} href="/claim">Claim</Nav.Link>
            <Nav.Link as={Link} href="/blogs">Blogs</Nav.Link>

            {/* Profile Section */}
            <NavDropdown title="Profile" id="profile-dropdown">
              <NavDropdown.Item as={Link} href="/profile">
                My Account
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}