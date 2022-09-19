import Layout from "./components/Default UI/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//PAGES
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import Wishlist from "./pages/Wishlist";
import ShoppingCart from "./pages/ShoppingCart";
import SingleProduct from "./pages/SingleProduct";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/my-cart" element={<ShoppingCart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/product" element={<SingleProduct />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
