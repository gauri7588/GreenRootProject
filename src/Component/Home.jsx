import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import ProductsPreview from "./ProductsPreview";
import Testimonials from "./Testimonials";
import OrganicLearning from "./OrganicLearning";
import Register from "./Register";

const Home = () => {
  return (
    <>
      <Hero />
       <Features />
        <ProductsPreview />
        <Testimonials />
         <OrganicLearning />
         <Register/>
    </>
  );
};

export default Home;