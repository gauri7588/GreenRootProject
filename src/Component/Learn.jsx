import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Learn = () => {
    const navigate = useNavigate();
    return (
        <div style={{ backgroundColor: "#f4fff2" }}>


            <div
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "60vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    textAlign: "center",
                }}
            >
                <div style={{ background: "rgba(0,0,0,0.5)", padding: "40px", borderRadius: "10px" }}>
                    <h1 style={{ fontWeight: "bold", fontSize: "48px" }}>
                        🌿 What is Organic Farming?
                    </h1>
                    <p style={{ fontSize: "18px", maxWidth: "700px" }}>
                        Organic farming is a natural method of growing crops without chemical fertilizers and pesticides.
                        It focuses on soil health, biodiversity, and sustainable agriculture.
                    </p>
                </div>
            </div>

            <Container className="py-5">

                {/*  KEY FEATURES */}
                <h2 className="text-center mb-4" style={{ color: "#2e7d32" }}>
                    🌾 Key Features of Organic Farming
                </h2>

                <Row className="g-4">

                    {[
                        {
                            title: "Natural Fertilizers",
                            text: "Natural fertilizers are organic substances obtained from plants, animals, or minerals that improve soil fertility naturally. They release nutrients slowly, improve soil structure, and are eco-friendly. Unlike chemical fertilizers, they do not harm the environment and support sustainable agriculture.",
                            img: "https://i.pinimg.com/736x/52/ff/fd/52fffde2741d9f7266a35f4ad2ef45df.jpg"
                        },
                        {
                            title: "Natural Pest Control",
                            text: "At Green Root, we believe crops should be protected without harming nature. Our natural pest control methods help farmers manage pests safely while maintaining soil health and biodiversity. Instead of harmful chemical pesticides, we promote eco-friendly and sustainable solutions. Natural pest control uses biological, plant-based, and traditional methods to control insects and crop diseases without synthetic chemicals. These methods protect crops while keeping the environment safe.",
                            img: "https://images.unsplash.com/photo-1589927986089-35812388d1f4"
                        },
                        {
                            title: "Crop Rotation",
                            text: "At Green Root, we believe healthy soil is the foundation of sustainable farming. Crop rotation is one of the most effective natural techniques we promote to maintain soil fertility and control pests without chemicals. Crop rotation is the practice of growing different types of crops on the same land in different seasons or years. Instead of planting the same crop repeatedly, farmers rotate crops to maintain soil nutrients and reduce pest ",
                            img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef"
                        },
                        {
                            title: "No GMOs",
                            text: "At Green Root, we are committed to providing crops that are grown naturally, without the use of genetically modified organisms (GMOs). We believe food should be pure, safe, and as nature intended. Genetically Modified Organisms (GMOs) are plants or seeds that have been scientifically altered in a laboratory to change their natural characteristics, such as increasing resistance to pests or improving yield. While GMOs are used in some conventional farming systems, organic farming strictly avoids them.",
                            img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399"
                        },
                        {
                            title: "Soil Health Focus",
                            text: "At Green Root, we believe that healthy soil is the heart of successful agriculture. Everything begins from the ground up. That’s why our farming practices are designed to protect, nourish, and restore soil naturally. Soil is more than just dirt —it is a living ecosystem filled with microorganisms, nutrients, and organic matter that support plant growth. Healthy soil: Produces nutrient-rich crop ,Retains water effectively ,Reduces erosion and land degradation ,Supports beneficial microorganisms.",
                            img: "https://images.unsplash.com/photo-1492496913980-501348b61469"
                        },
                        {
                            title: "Eco-Friendly & Sustainable",
                            text: "At Green Root, sustainability is at the core of everything we do. We believe that agriculture should not only feed people but also protect the planet. Our ecofriendly farming approach ensures that we grow healthy crops while preserving natural resources for future generations. Sustainable farming is not a trend for us it is a long-term commitment to environmental responsibility, soil protection, and community well being.",
                            img: "https://i.pinimg.com/736x/3f/c4/04/3fc40470dfa67cee642a738313a61652.jpg"
                        }

                    ].map((item, index) => (
                        <Col md={4} key={index}>
                            <Card
                                className="shadow-sm h-100"
                                style={{
                                    transition: "0.3s",
                                    cursor: "pointer",
                                }}
                                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                            >
                                <Card.Img variant="top" src={item.img} height="200px" style={{ objectFit: "cover" }} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>{item.text}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* BENEFITS */}
                <h2 className="text-center mt-5 mb-4" style={{ color: "#2e7d32" }}>
                    🌍 Benefits of Organic Farming
                </h2>

                <Row className="g-4">
                    {[
                        "Better for Environment",
                        "Improves Soil Health",
                        "Produces Chemical-Free Food",
                        "Safer for Farmers and Consumers",
                        "Maintains Biodiversity"
                    ].map((benefit, index) => (
                        <Col md={4} key={index}>
                            <Card className="shadow-sm text-center h-100">
                                <Card.Body>
                                    <h5>✅ {benefit}</h5>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* FARMER TIPS SECTION */}
                <div className="mt-5 p-4 text-center" style={{ backgroundColor: "#e8f5e9", borderRadius: "10px" }}>
                    <h3 style={{ color: "#2e7d32" }}>👩‍🌾 Farmer Tips</h3>
                    <p>
                        Always test your soil before planting. Use organic compost regularly
                        and rotate crops every season to maintain soil fertility naturally.
                    </p>
                    <Button variant="success">Learn More Tips</Button>
                </div>
                <Button className="mt-5 p-4 text-center"
                    variant="success"
                    onClick={() => navigate("/products")}
                    style={{ padding: "10px 25px", fontWeight: "bold" }}
                >
                    🛒 Explore Organic Products
                </Button>

                {/* VIDEO SECTION */}
<div className="mt-5 text-center">
  <h3 style={{ color: "#2e7d32" }}>🎥 Learn Through Video</h3>

  {/* First Video */}
  <div className="mt-4 d-flex justify-content-center" style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
    <iframe
      src="https://www.youtube.com/embed/4OjtlispW0I"
      title="Organic Farming Video 1"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "70%",
        height: "70%",
        borderRadius: "10px"
      }}
      allowFullScreen
    ></iframe>
  </div>

  {/* Second Video */}
  <div className="mt-4 d-flex justify-content-center" style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
    <iframe
      src="https://www.youtube.com/embed/OVKO8pC1ACA"
      title="Organic Farming Video 2"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "70%",
        height: "70%",
        borderRadius: "10px"
      }}
      allowFullScreen
    ></iframe>
  </div>
</div>
                {/* 🌍 ORGANIC CERTIFICATION */}
<div className="mt-5 text-center">
  <h2 style={{ color: "#2e7d32" }}>🌍 Organic Certifications</h2>
  <p>
    Our products follow certified organic farming standards ensuring
    chemical-free and environmentally safe produce.
  </p>

  <Row className="mt-4">
    <Col md={4}>
      <div className="p-3 shadow-sm bg-white rounded">
        <h5>🌱 USDA Organic</h5>
        <p>International organic farming standard certification.</p>
      </div>
    </Col>

    <Col md={4}>
      <div className="p-3 shadow-sm bg-white rounded">
        <h5>🇮🇳 India Organic</h5>
        <p>Certified under Indian National Programme for Organic Production.</p>
      </div>
    </Col>

    <Col md={4}>
      <div className="p-3 shadow-sm bg-white rounded">
        <h5>🌍 ECOCERT</h5>
        <p> GLOBALG.A.P., Rainforest Alliance, and SCS Sustainably Grown.</p>
      </div>
    </Col>
  </Row>
</div>

            </Container>
        </div>
    );
};

export default Learn;