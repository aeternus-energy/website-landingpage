import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Contactus.css";
import contactIllustration from "./assets/contactus.png";

export default function ContactUs() {
  return (
    <Container id="contactus" className="contactus-section py-3">
      <div className="text-center mb-4">
        <h2 className="contact-t">Contact Us</h2>
        <p className="contact-t1">
          Got any questions about the product or scaling on our platform? We're
          here to help.
        </p>
      </div>
      <Container className="contact-section py-3">
        <Row className="contact-box shadow-lg">
          <Col md={5} className="contact-form p-3">
            <h3 className="mb-4" style={{ textAlign: "center" }}>
              Get in Touch!
            </h3>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  className="input"
                  placeholder="Name"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  className="input"
                  placeholder="E-mail"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  className="input"
                  as="textarea"
                  rows={3}
                  placeholder="Message"
                />
              </Form.Group>
              <Button variant="primary" className="w-100">
                Submit
              </Button>
            </Form>
          </Col>

          <Col md={7} className="contact-image">
            <img
              src={contactIllustration}
              alt="Contact Illustration"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
