import "./App.css";
import Grid from "./components/Grid";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ProductDetails from "./components/ProductDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container pt-4">
        <Routes>
          <Route exact path="/" element={<Grid />} />
          <Route exact path="/electronics" element={<Grid category="electronics" />} />
          <Route exact path="/jewelery" element={<Grid category="jewelery" />} />
          <Route exact path="/clothing/men" element={<Grid category="men's clothing" />} />
          <Route exact path="/clothing/women" element={<Grid category="women's clothing" />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
