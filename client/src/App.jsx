import React from "react";
import Home from "./components/Pages/Home";
import ProductList from "./components/Pages/ProductList";
import Product from "./components/Pages/Product";
import About from "./components/Pages/About";
import Team from "./components/Pages/Team";
import Contact from "./components/Pages/Contact";
import Signup from "./components/Pages/Signup";
import Signiin from "./components/Pages/Signiin";
import Blog from "./components/Pages/Blog";
import { Routes, Route } from "react-router-dom";
import AuthRoutes from "./Routes/AuthRoutes";
import ProtectedRoutes from "./Routes/ProtecedRoutes";
const App = () => {
  return <div>
    <Routes>

      <Route element={<AuthRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/product-details/:id" element={<Product />} />
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/About" element={<About />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signiin" element={<Signiin />} />
        <Route path="/Blog" element={<Blog />} />
      </Route>


      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/About" element={<About />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Blog" element={<Blog />} />
      </Route>
    </Routes>

  </div>;
}

export default App;
