import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      text: "GreenRoots products are always fresh and chemical-free. My family loves it!",
    },
    {
      id: 2,
      name: "Rohit Patil",
      text: "Fast delivery and best quality vegetables. Highly recommended!",
    },
    {
      id: 3,
      name: "Anjali Verma",
      text: "I feel healthier after switching to GreenRoots organic products.",
    },
  ];

  return (
    <section className="py-5 bg-white">
      <Container>

        <div className="text-center mb-5">
          <h2 className="fw-bold text-success">What Our Customers Say</h2>
          <p className="text-muted">
            Trusted by hundreds of happy families.
          </p>
        </div>

        <Row>
          {reviews.map((review) => (
            <Col md={4} key={review.id} className="mb-4">
              <Card className="testimonial-card border-0 p-4 h-100 text-center">
                <Card.Body>
                  <p className="text-muted">"{review.text}"</p>
                  <h6 className="fw-bold text-success mt-3">
                    — {review.name}
                  </h6>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

      </Container>
    </section>
  );
};

export default Testimonials;