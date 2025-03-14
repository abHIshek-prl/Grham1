import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Gallery from "../Pages/Gallery";
import Architech from "../Pages/Architech";
import Interior from "../Pages/Interior";
import Furniture from "../Pages/Furniture";
import Service from "../Pages/Service";

function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/architech" element={<Architech/>} />
      <Route path="/interior" element={<Interior/>} />
      <Route path="/furniture" element={<Furniture/>} />
    </Routes>
  );
}

export default RoutesConfig;
