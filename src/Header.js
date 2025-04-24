import { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { List, X } from "lucide-react";
import "./Header.css";
import Logo from "./assets/logo.jpeg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar
      expand="md"
      variant="dark"
      fixed="top"
      className="shadow-sm bg-gradient header-navbar"
      style={{ background: "linear-gradient(90deg, #007bff, #6610f2)" }}
    >
      <Container>
        <Navbar.Brand href="#">
          <img
            src={Logo}
            alt="Logo"
            height="40"
            className="d-inline-block align-top"
          />
          <span className="ms-2 " style={{ color: "#000000" }}>
            Aeternus Energy
          </span>
        </Navbar.Brand>
        <Button
          variant="light"
          className="d-md-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <List size={24} />}
        </Button>
        <Navbar.Collapse className={isOpen ? "show" : ""}>
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className="nav-hover"
              style={{ fontSize: "0.9rem" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className="nav-hover"
              style={{ fontSize: "0.9rem" }}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#services"
              className="nav-hover"
              style={{ fontSize: "0.9rem" }}
            >
              Services
            </Nav.Link>
            {/* <Nav.Link
              href="#testimonials"
              className="nav-hover"
              style={{ fontSize: "0.9rem" }}
            >
              Testimonials
            </Nav.Link> */}
            <Nav.Link
              href="#contactus"
              className="nav-hover"
              style={{ fontSize: "0.9rem" }}
            >
              Contact us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
