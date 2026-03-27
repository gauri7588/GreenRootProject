import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const ProductsPreview = () => {
  const products = [
    {
      id: 1,
      name: "Organic Tomatoes",
      price: "₹80/kg",
      image: "https://i.pinimg.com/1200x/59/ef/2f/59ef2f5fca828f0fc4900bbba8b455f1.jpg"
    },
    {
      id: 2,
      name: "Fresh Spinach",
      price: "₹40/bunch",
      image: "https://i.pinimg.com/1200x/a2/f2/14/a2f214a36ebf2d0e5eb55dbc7acb4236.jpg"
    },
    {
      id: 3,
      name: "Natural Carrots",
      price: "₹60/kg",
      image: "https://i.pinimg.com/736x/03/78/b2/0378b2f99b9e2eb84900b58c51a9f6dc.jpg"
    },
    {
      id: 4,
      name: "Fresh Watermelon",
      price: "₹80/one",
      image: "https://i.pinimg.com/736x/4a/26/95/4a2695ca6635a17f240ca4b7fbb9f98a.jpg"
    },
    {
      id: 5,
      name: "Organic Avocodo",
      price: "₹100/kg",
      image: "https://i.pinimg.com/1200x/c1/0a/a6/c10aa669a12cf2b4ee201ecffa74c45c.jpg"
    },
    {
      id: 6,
      name: "Natural Mango",
      price: "₹90/kg",
      image: "https://i.pinimg.com/736x/bd/80/ed/bd80ed6e3c12eb654d2fc197edfd63ad.jpg"
    }

  ];

  return (
    <section className="py-5 bg-light">
      <Container>

        <div className="text-center mb-5">
          <h2 className="fw-bold text-success">Our Fresh Products</h2>
          <p className="text-muted">
            Handpicked organic vegetables delivered fresh.
          </p>
        </div>

        <Row>
          {products.map((product) => (
            <Col md={4} key={product.id} className="mb-4">
              <Card className="product-card border-0 h-100">

                <Card.Img 
                  variant="top" 
                  src={product.image} 
                  className="product-img"
                />

                <Card.Body className="text-center">
                  <h5 className="fw-bold">{product.name}</h5>
                  <p className="text-success fw-bold">{product.price}</p>

                  <Button variant="success" className="px-4">
                    Buy Now
                  </Button>
                </Card.Body>

              </Card>
            </Col>
          ))}
        </Row>

      </Container>
    </section>
  );
};

export default ProductsPreview;

