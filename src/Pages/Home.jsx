import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hme from "../assets/hmebg.png";

function Home() {
  return (
    <>
      <Navbar />

      
      <div className="relative w-full h-screen overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-center bg-cover"
          style={{ backgroundImage: `url(${Hme})` }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center bg-black bg-opacity-70">
            <p className="text-5xl font-extrabold leading-tight text-gray-300 shadow-md md:text-6xl lg:text-7xl">
              WE <span className="text-[#c0a06c]">SHAPE</span> YOUR <span className="text-[#c0a06c]">SPACES</span>
            </p>
            <p className="max-w-3xl mt-4 text-lg text-gray-400 md:text-xl">
              Transforming environments with design and innovation, tailored to your vision.
            </p>

            
            <Link
              to="/"
              className="px-6 py-3 mt-6 font-semibold text-black transition bg-yellow-400 rounded-lg shadow-lg hover:bg-yellow-500"
            >
              Explore
            </Link>
          </div>
        </div>
      </div>

      
      <section className="px-4 py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
          <p className="mt-2 text-lg text-gray-600">
            Explore our expert solutions for architectural, interior, and furniture design.
          </p>
        </div>

        
        <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto mt-10 sm:grid-cols-2 md:grid-cols-3">
          
          <Link to="/architech">
            <div className="p-6 transition bg-white shadow-md rounded-xl hover:shadow-lg">
              <h3 className="text-xl font-bold text-gray-900">Architecture</h3>
              <p className="mt-2 text-gray-600">
                Designing innovative and functional spaces with expert architectural solutions.
              </p>
            </div>
          </Link>

          
          <Link to="/interior">
            <div className="p-6 transition bg-white shadow-md rounded-xl hover:shadow-lg">
              <h3 className="text-xl font-bold text-gray-900">Interior</h3>
              <p className="mt-2 text-gray-600">
                interiors with creative and customized design solutions for every space.
              </p>
            </div>
          </Link>

          
          <Link to="/furniture">
            <div className="p-6 transition bg-white shadow-md rounded-xl hover:shadow-lg">
              <h3 className="text-xl font-bold text-gray-900">Furniture</h3>
              <p className="mt-2 text-gray-600">
                Crafting stylish and functional furniture that complements your unique lifestyle.
              </p>
            </div>
          </Link>
        </div>

        
        <div className="flex justify-center mt-10">
          <Link
            to="/service"
            className="px-6 py-3 font-semibold text-black transition bg-yellow-400 rounded-lg shadow-lg hover:bg-yellow-500"
          >
            View More
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
