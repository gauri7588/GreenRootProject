import React, { useState } from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";

const Login = () => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <Container style={{ marginTop: "80px", marginBottom: "80px" }}>
      <Row className="justify-content-center">
        <Col md={5}>

          <h3 className="text-center mb-4">Login</h3>

          <Form>

            {/* Email */}
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <i className="bi bi-envelope"></i>
                </InputGroup.Text>
                <Form.Control 
                  type="email" 
                  placeholder="Enter your email" 
                />
              </InputGroup>
            </Form.Group>

            {/* Password */}
            <Form.Group className="mb-2">
              <Form.Label>Password</Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <i className="bi bi-lock"></i>
                </InputGroup.Text>

                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                />

                <InputGroup.Text
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <i className={showPassword ? "bi bi-eye-slash" : "bi bi-eye"}></i>
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>

            {/* Forgot Password */}
            <div className="text-end mb-3">
              <small style={{ cursor: "pointer", color: "#2e7d32" }}>
                Forgot Password?
              </small>
            </div>

            {/* Login Button */}
            <Button variant="success" className="w-100">
              Login
            </Button>

            {/* Register Link */}
            <div className="text-center mt-3">
              <small>
                Don't have an account?{" "}
                <span style={{ color: "#2e7d32", cursor: "pointer" }}>
                  Register
                </span>
              </small>
            </div>

          </Form>

        </Col>
      </Row>
    </Container>
  );
};

export default Login;