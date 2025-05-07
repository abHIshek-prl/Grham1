import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Intror from '../assets/interior.jpg';
import RoomImg from '../assets/room.jpg';
import { motion } from 'framer-motion';

function Interior() {
  return (
    <div className="text-gray-800 bg-gray-50">
      <Navbar />

      
      <section
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${Intror})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        <div className="relative z-10 px-4 text-center text-white">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-4xl font-bold md:text-5xl"
          >
            Stunning Interiors for Every Space
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-xl"
          >
            Personalized interior solutions blending elegance, comfort, and function.
          </motion.p>
        </div>
      </section>

      
      <section className="px-6 py-16 md:px-16">
        <h2 className="mb-10 text-3xl font-semibold text-center">Our Interior Services</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Living Room Design",
              desc: "Create cozy, elegant living spaces with a touch of modern aesthetics.",
              icon: "🛋️",
            },
            {
              title: "Kitchen Interiors",
              desc: "Functional and beautiful kitchens tailored to your lifestyle.",
              icon: "🍽️",
            },
            {
              title: "Office Interior",
              desc: "Boost productivity with smart, stylish workspace solutions.",
              icon: "💼",
            },
            {
              title: "Bedroom Interiors",
              desc: "Design serene and restful bedrooms tailored for comfort and style.",
              icon: "🛏️",
            },
            {
              title: "Dining Hall Design",
              desc: "Create inviting dining spaces perfect for family gatherings and entertaining guests.",
              icon: "🍴",
            },
            {
              title: "Staircase Styling",
              desc: "Transform staircases into stunning architectural features with creative design.",
              icon: "🌀",
            },
            {
              title: "Modular Wardrobes",
              desc: "Space-saving and stylish wardrobes designed to organize your life beautifully.",
              icon: "👗",
            },
            {
              title: "Kids Room Decor",
              desc: "Fun, colorful, and functional designs tailored to your child’s imagination.",
              icon: "🧸",
            },
            {
              title: "False Ceiling Design",
              desc: "Elegant ceiling concepts with lighting that elevate your interiors.",
              icon: "💡",
            }
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
        <h2 className="mb-10 text-3xl font-semibold text-center">Why Choose Our Interior Services?</h2>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.ul
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 text-lg text-gray-700"
          >
            <li>✅ Bespoke designs that match your personality</li>
            <li>✅ Use of high-quality, sustainable materials</li>
            <li>✅ On-time delivery and professional execution</li>
            <li>✅ 3D visualization before implementation</li>
            <li>✅ Coordination with contractors and craftsmen</li>
            <li>✅ Minimalist to luxury themes, all customized</li>
          </motion.ul>

          <motion.img
            src={RoomImg}
            alt="Interior Design Room"
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

export default Interior;
