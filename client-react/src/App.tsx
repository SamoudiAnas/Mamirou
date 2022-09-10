import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Default UI/Layout";

//PAGES
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ShoppingCart from "./pages/ShoppingCart";
import SingleProduct from "./pages/SingleProduct";
import Wishlist from "./pages/Wishlist";

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
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
