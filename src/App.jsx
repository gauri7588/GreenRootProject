import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Headers from "./Layout/Headers";
import Home from "./Component/Home";
import Footers from "./Layout/Footers";
import Contact from "./Layout/Contact";
import Product from "./Component/Product";
import Learn from "./Component/Learn";
import Register from "./Component/Register";
import Login from "./Component/Pages/Login";

function App() {
  return (
    <Router>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Product />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/register"element={<Register/>}/>
        <Route path="/login" element={<Login />} />
        
      </Routes>
      <Footers />
    </Router>
  );
}

export default App;

