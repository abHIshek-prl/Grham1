import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import FurnitureImg from '../assets/furniture.jpg';
import CraftImg from '../assets/craft.jpg';
import { motion } from 'framer-motion';

function Furniture() {
  return (
    <div className="text-gray-800 bg-gray-50">
      <Navbar />

      
      <section
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${FurnitureImg})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        <div className="relative z-10 px-4 text-center text-white">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-4xl font-bold md:text-5xl"
          >
            Elegant & Functional Furniture
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-xl"
          >
            Custom-made furniture that combines design, durability, and comfort.
          </motion.p>
        </div>
      </section>

      
      <section className="px-6 py-16 md:px-16">
        <h2 className="mb-10 text-3xl font-semibold text-center">Furniture We Offer</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Sofas & Seating",
              desc: "Stylish and cozy seating solutions tailored to your space.",
              icon: "🛋️",
            },
            {
              title: "Dining Tables",
              desc: "Beautiful tables for shared meals and memorable moments.",
              icon: "🍽️",
            },
            {
              title: "Beds & Headboards",
              desc: "Comfort-focused bedroom furniture crafted to last.",
              icon: "🛏️",
            },
            {
              title: "Storage Solutions",
              desc: "Smart and sleek cabinets, wardrobes, and shelves.",
              icon: "📦",
            },
            {
              title: "Study & Office Furniture",
              desc: "Ergonomic desks and chairs for productive spaces.",
              icon: "💼",
            },
            {
              title: "Custom Woodwork",
              desc: "Unique handcrafted pieces that express your style.",
              icon: "🪵",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 transition duration-300 bg-white shadow-md rounded-xl hover:shadow-lg"
            >
              <div className="mb-4 text-4xl">{item.icon}</div>
              <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      
      <section className="px-6 py-16 bg-white md:px-16">
        <h2 className="mb-10 text-3xl font-semibold text-center">Why Choose Our Furniture?</h2>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.ul
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 text-lg text-gray-700"
          >
            <li>✅ Premium Quality Materials</li>
            <li>✅ Handcrafted & Custom-Built Options</li>
            <li>✅ Ergonomic & Space-Saving Designs</li>
            <li>✅ Wide Range of Modern to Classic Styles</li>
            <li>✅ Seamless Finishing & Long-lasting Durability</li>
            <li>✅ Affordable Pricing with After-Sale Support</li>
          </motion.ul>

          <motion.img
            src={CraftImg}
            alt="Furniture Craftsmanship"
            className="object-cover w-full shadow-lg rounded-xl h-80"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Furniture;
