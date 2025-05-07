import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Arch from '../assets/arch.jpg';
import Down from '../assets/down.jpg';

function Architech() {
  return (
    <div className="text-gray-800 bg-gray-50">
      <Navbar />

      
      <section
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${Arch})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-4 text-center text-white"
        >
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Architecture That Inspires</h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl">
            Crafting innovative and functional spaces with precision and creativity.
          </p>
        </motion.div>
      </section>

      
      <section className="px-6 py-16 md:px-16">
        <motion.h2
          className="mb-10 text-3xl font-semibold text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          What We Offer
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: 'Residential Design',
              desc: 'Transforming homes with smart, aesthetic architecture that reflects your lifestyle.',
              icon: '🏠',
            },
            {
              title: 'Commercial Spaces',
              desc: 'Designing innovative workplaces that promote productivity and modern aesthetics.',
              icon: '🏢',
            },
            {
              title: 'Landscape Architecture',
              desc: 'Creating sustainable outdoor environments that blend beauty and function.',
              icon: '🌳',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 transition duration-300 bg-white shadow-md rounded-xl hover:shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 text-4xl">{item.icon}</div>
              <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

     
      <section className="px-6 py-16 bg-white md:px-16">
        <motion.h2
          className="mb-10 text-3xl font-semibold text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Why Choose Our Architecture Services?
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2">
          <motion.ul
            className="space-y-4 text-lg text-gray-700"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <li>✅ Experienced & Certified Architects</li>
            <li>✅ Sustainable and Eco-Friendly Designs</li>
            <li>✅ Innovative 3D Visualizations & Design Concepts</li>
            <li>✅ Timely Project Delivery with Budget Transparency</li>
            <li>✅ Integration of Smart & Modern Technology</li>
            <li>✅ Attention to Detail from Blueprint to Build</li>
            <li>✅ Award-Winning Design Team with Global Exposure</li>
            <li>✅ Seamless Coordination with Engineers & Contractors</li>
            <li>✅ Adaptive Designs for Future Expansion</li>
            <li>✅ Transparent Communication Throughout the Project</li>
            <li>✅ Tailored Solutions for Every Project</li>
            <li>✅ Client-Centered Collaboration Process</li>
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div
              className="bg-no-repeat bg-cover shadow-md h-80 rounded-xl"
              style={{ backgroundImage: `url(${Down})` }}
            ></div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Architech;
