import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const OrganicLearning = () => {
  return (
    <section className="py-5 bg-light">
      <Container>

        <Row className="align-items-center">

          {/* LEFT IMAGE */}
          <Col md={6} className="mb-4 mb-md-0 text-center">
            <img
              src="https://i.pinimg.com/736x/7d/72/3b/7d723ba065505aec3d926993b228f7d2.jpg"
              alt="Organic Farming"
              className="img-fluid rounded shadow"
            />
          </Col>

          {/* RIGHT CONTENT */}
          <Col md={6}>
            <h2 className="fw-bold text-success">
              Learn Organic Farming
            </h2>

            <p className="text-muted mt-3">
              Organic farming is a natural way of growing crops without 
              harmful chemicals. It improves soil health and provides 
              nutritious food.
            </p>

            <ul className="mt-3 text-muted">
              <li>✔ Natural fertilizers & compost</li>
              <li>✔ Bio pesticides instead of chemicals</li>
              <li>✔ Soil fertility improvement techniques</li>
              <li>✔ Sustainable & eco-friendly farming</li>
            </ul>

            <Button
              as={Link}
              to="/learn"
              variant="success"
              className="mt-3 px-4"
            >
              Start Learning
            </Button>

          </Col>

        </Row>

      </Container>
    </section>
  );
};

export default OrganicLearning;