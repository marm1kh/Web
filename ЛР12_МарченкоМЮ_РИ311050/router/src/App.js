import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Services from "./pages/Services.js";
import Products from "./pages/Products.js";
import About_us from "./pages/About_us.js";
import Portfolio from "./pages/Portfolio.js";
import FAQ from "./pages/FAQ.js";
import Contacts from "./pages/Contacts.js";
import Nav from "./layout/Nav.jsx";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/services" element={<Services/>}>
        </Route>
        <Route path="/products" element={<Products/>}>
        </Route>
        <Route path="/about" element={<About_us/>}>
        </Route>
        <Route path="/portfolio" element={<Portfolio/>}>
        </Route>
        <Route path="/faq" element={<FAQ/>}>
        </Route>
        <Route path="/contacts" element={<Contacts/>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
