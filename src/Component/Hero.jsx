import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-light py-5">
      <Container fluid className="px-5">

        <Row className="align-items-center min-vh-100">

          {/* LEFT SIDE TEXT */}
          <Col md={6}>
            <h1 className="display-4 fw-bold text-success">
              Fresh & Organic Products
            </h1>

            <p className="lead text-muted mt-3">
              Directly from Farmers to Your Home.  
              Healthy Living Starts with GreenRoots.
            </p>

            <div className="mt-4">
              <Button
                as={Link}
                to="/products"
                variant="success"
                size="lg"
                className="me-3 px-4"
              >
                Shop Now
              </Button>

              <Button
                as={Link}
                to="/learn"
                variant="outline-success"
                size="lg"
                className="px-4"
              >
                Learn Organic
              </Button>
            </div>
          </Col>

          {/* RIGHT SIDE IMAGE */}
          <Col md={6} className="text-center mt-5 mt-md-0">
            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
              alt="Organic Farm"
              className="img-fluid rounded"
            />
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Hero;