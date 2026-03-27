import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const Register = () => {
  return (
    <div
      style={{
        minHeight: "120vh",
        background: "linear-gradient(to right, #e8f5e9, #f1f8e9)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Card
              className="shadow-lg border-0"
              style={{
                borderRadius: "20px",
                backdropFilter: "blur(10px)",
              }}
            >
              <Card.Body className="p-5">

                {/* Heading */}
                <div className="text-center mb-4">
                  <h2 style={{ color: "#1b5e20", fontWeight: "bold" }}>
                    🌿 Join Green Root
                  </h2>
                  <p style={{ color: "gray" }}>
                    Create your account for fresh organic products
                  </p>
                </div>

                {/* Form */}
                <Form>

                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your full name"
                      style={{ borderRadius: "10px" }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      style={{ borderRadius: "10px" }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Mobile no</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter your Phone NO" 
                      style={{ borderRadius: "10px" }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Create password"
                      style={{ borderRadius: "10px" }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm password"
                      style={{ borderRadius: "10px" }}
                    />
                  </Form.Group>

                  <Button
                    variant="success"
                    className="w-100"
                    style={{
                      padding: "10px",
                      borderRadius: "12px",
                      fontWeight: "bold",
                      backgroundColor: "#2e7d32",
                      border: "none",
                    }}
                  >
                    Register 🌱
                  </Button>

                  <div className="text-center mt-3">
                    <small>
                      Already have an account?{" "}
                      <span style={{ color: "#2e7d32", fontWeight: "500", cursor: "pointer" }}>
                        Login
                      </span>
                    </small>
                  </div>

                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;