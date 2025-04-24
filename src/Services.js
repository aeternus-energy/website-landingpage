import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Services.css";
import s1 from "./assets/i1.png";
import s2 from "./assets/i2.png";
import s3 from "./assets/i3.png";
import s4 from "./assets/i5.jpg";
import s5 from "./assets/i4.png";
import s6 from "./assets/i6.jpg";

const services = [
  {
    id: 1,
    title: "Advanced Battery Pack & Module Enclosure Design",
    description:
      "We engineer high-performance, durable, and thermally optimized battery enclosures for various applications, ensuring safety, efficiency, and longevity.",
    image: s1,
  },
  {
    id: 2,
    title: "Battery Management System (BMS) Development",
    description:
      "Our intelligent BMS solutions monitor and control battery performance in real time, enhancing safety, reliability, and energy efficiency.",
    image: s6,
  },
  {
    id: 3,
    title: "Energy Storage Solutions",
    description:
      "From small residential battery storage to large utility-scale energy projects, we design and develop scalable storage systems to meet diverse energy needs.",
    image: s2,
  },
  {
    id: 4,
    title: "Custom Energy Management Software",
    description:
      "We create smart energy management platforms that optimize power usage, reduce costs, and maximize the efficiency of battery-powered systems.",
    image: s3,
  },
  {
    id: 5,
    title: "Renewable Energy Integration",
    description:
      "We seamlessly integrate battery storage with renewable energy sources like solar and wind, ensuring stable and sustainable power supply solutions.",
    image: s5,
  },
  {
    id: 6,
    title: "Industrial & Commercial Battery Solutions",
    description:
      "We provide tailored battery solutions for industrial automation, EV charging infrastructure, microgrids, and backup power applications.",
    image: s4,
  },
];

export default function Services() {
  return (
    <Container id="services" className="services-section py-5">
      <div className="text-center mb-4">
        <h2 className="service-t">Our Services</h2>
        <p className="service-t1">
          Delivering next-gen battery solutions with innovation and expertise.
        </p>
      </div>
      <Row className="g-4">
        {services.map((service) => (
          <Col key={service.id} md={6} lg={6}>
            <Card className="service-card shadow-sm">
              <Card.Img
                variant="top"
                src={service.image}
                className="service-img"
              />
              <Card.Body>
                <Card.Title className="service-title">
                  {service.title}
                </Card.Title>
                <Card.Text className="service-text">
                  {service.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
