import "./App.css";
import Offcanvas from "./components/Offcanvas";
import Grid from "./components/Grid";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ProductDetails from "./components/ProductDetails";
import Loginbox from "./components/Loginbox";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <Router>
      <CartProvider>
        <AuthProvider>
          <Navbar />
          <Offcanvas />
          <div className="container" style={{ paddingTop: "85px" }}>
            <Routes>
              <Route exact path="/" element={<Grid />} />
              <Route exact path="/electronics" element={<Grid category="electronics" />} />
              <Route exact path="/jewelery" element={<Grid category="jewelery" />} />
              <Route exact path="/clothing/men" element={<Grid category="men's clothing" />} />
              <Route exact path="/clothing/women" element={<Grid category="women's clothing" />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/products/:id" element={<ProductDetails />} />
              <Route exact path="/login" element={<Loginbox />} />
            </Routes>
          </div>
        </AuthProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
