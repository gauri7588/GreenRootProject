import React from "react";
import "./Product.css";

const products = [
  {
    id: 1,
    name: "Organic Wheat",
    price: "₹500 / 10kg",
    img: "https://i.pinimg.com/736x/b9/9c/88/b99c88f2e26bcbe255da2e7bb0ccc2e2.jpg"
  },
  {
    id: 2,
    name: "Fresh Vegetables",
    price: "₹400 / basket",
    img: "https://i.pinimg.com/1200x/bb/bc/86/bbbc861b24fd7f3597047c7f8f855035.jpg"
  },
  {
    id: 3,
    name: "Organic Fruits",
    price: "₹550 / box",
    img: "https://i.pinimg.com/1200x/f4/f5/dc/f4f5dcecafbc99ff70c0811ed5bb1f2c.jpg"
  }
];

const Product = () => {
  return (
    <div className="product-page">
      <h2>Our Organic Products 🌿</h2>

      <div className="product-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;