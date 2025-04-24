import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Linkedin,
} from "lucide-react";
import "./Footer.css";
import ScrollToTop from "./ScrollToTop";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.1385184440724!2d72.52810701542692!3d23.020497384952847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f2b25b5b1f%3A0xf6a3e1773e2e3b5d!2sShivalik%20Plaza!5e0!3m2!1sen!2sin!4v1710441988885!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="footer-bg">
        <Container>
          <Row className="text-center " style={{ color: "#666" }}>
            <Col md={4} className="footer-item">
              <MapPin size={15} />
              <p>
                <strong>Our Address:</strong>
                <br />
                08, Shivalik Plaza, Opp. AMA, ATIRA, Polytechnic Gulbai Tekra,
                Ahmedabad, Gujarat, India - 380015
              </p>
            </Col>

            <Col md={4} className="footer-item">
              <Phone size={15} />
              <p>
                <strong>Call Us:</strong> 12345 67890
                <br />
                <strong>Fax:</strong> 09-123 555 6666
              </p>
            </Col>

            <Col md={4} className="footer-item">
              <Mail size={15} />
              <p>
                <strong>Email Us:</strong>
                <br />
                <a
                  href="mailto:indhira.d@aeternusenergy.com"
                  style={{ color: "#666" }}
                >
                  indhira.d@aeternusenergy.com
                </a>
              </p>
            </Col>
          </Row>

          <Row className="text-center text-black">
            <Col>
              <a href="#" className="social-icon">
                <Linkedin size={15} />
              </a>
              <a href="#" className="social-icon">
                <Facebook size={15} />
              </a>
              <a href="#" className="social-icon">
                <Instagram size={15} />
              </a>
            </Col>
          </Row>

          <Row className="text-center pt-2" style={{ color: "#666" }}>
            <Col className="copy">
              <p>© 2025 Copyright All rights reserved by KINTECH</p>
              <a href="#" className="footer-link">
                Privacy Policy
              </a>{" "}
              |
              <a href="#" className="footer-link">
                {" "}
                Terms & Conditions
              </a>
            </Col>
          </Row>
          <ScrollToTop />
        </Container>
      </div>
    </footer>
  );
}
