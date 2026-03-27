import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaLeaf, FaTruck, FaSeedling } from "react-icons/fa";

const Features = () => {
  return (
    <section className="py-5 bg-white">
      <Container>

        <div className="text-center mb-5">
          <h2 className="fw-bold text-success">Why Choose GreenRoots?</h2>
          <p className="text-muted">
            We provide fresh and healthy organic products directly from farms.
          </p>
        </div>

        <Row>

          {/* Card 1 */}
          <Col md={4} className="mb-4">
            <Card className="feature-card border-0 text-center p-4 h-100">
              <div className="feature-icon mb-3">
                <FaLeaf size={40} className="text-success" />
              </div>
              <h5 className="fw-bold">100% Organic</h5>
              <p className="text-muted">
                Pure and chemical-free products for healthy living.
              </p>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col md={4} className="mb-4">
            <Card className="feature-card border-0 text-center p-4 h-100">
              <div className="feature-icon mb-3">
                <FaTruck size={40} className="text-success" />
              </div>
              <h5 className="fw-bold">Fast Delivery</h5>
              <p className="text-muted">
                Quick and safe delivery directly to your doorstep.
              </p>
            </Card>
          </Col>

          {/* Card 3 */}
          <Col md={4} className="mb-4">
            <Card className="feature-card border-0 text-center p-4 h-100">
              <div className="feature-icon mb-3">
                <FaSeedling size={40} className="text-success" />
              </div>
              <h5 className="fw-bold">Fresh from Farms</h5>
              <p className="text-muted">
                Direct sourcing from trusted local farmers.
              </p>
            </Card>
          </Col>

        </Row>

      </Container>
    </section>
  );
};

export default Features;
