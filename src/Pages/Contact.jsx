import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FaHome, FaPhoneAlt, FaEnvelope, FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import Poster from "../assets/Poster.jpg";

function Contact() {
    return (
        <div>
            <Navbar />

            <div className="relative h-[60vh] flex flex-col justify-center items-center text-white">
                <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: `url(${Poster})` }}></div>
                <div className="absolute inset-0 bg-black opacity-40"></div>

                <div className="relative z-10 text-center">
                    <h1 className="mb-2 text-4xl font-bold text-orange-500">CONTACT US</h1>
                    <p className="max-w-xl px-4 text-lg font-medium">
                        Need an expert? You are more than welcomed to leave your contact info and we will be in touch
                        shortly
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-8 px-6 py-16 text-center bg-white md:grid-cols-3">
                <div className="flex flex-col items-center">
                    <FaHome className="mb-4 text-4xl text-orange-500" />
                    <h3 className="mb-2 text-xl font-bold text-gray-800">VISIT US</h3>
                    <p className="mb-1 text-gray-600">Lorem ipsum dolor sit amet, consectetur</p>
                    <p className="font-semibold text-orange-600">aaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                </div>

                <div className="flex flex-col items-center">
                    <FaPhoneAlt className="mb-4 text-4xl text-orange-500" />
                    <h3 className="mb-2 text-xl font-bold text-gray-800">CALL US</h3>
                    <p className="mb-1 text-gray-600">Lorem ipsum dolor sit amet, consectetur</p>
                    <p className="font-semibold text-orange-600">1234567890</p>
                </div>

                <div className="flex flex-col items-center">
                    <FaEnvelope className="mb-4 text-4xl text-orange-500" />
                    <h3 className="mb-2 text-xl font-bold text-gray-800">CONTACT US</h3>
                    <p className="mb-1 text-gray-600">Lorem ipsum dolor sit amet, consectetur</p>
                    <p className="font-semibold text-orange-600">grhaminterior@gmail.com</p>
                </div>
            </div>

            <div className="flex justify-center gap-6 py-6 bg-gray-100">
                <a href="https://www.instagram.com/grham_builders/?__pwa=1#" className="text-2xl text-orange-500 hover:text-orange-600">
                    <FaInstagram />
                </a>
                <a href="https://wa.me/9544609027" className="text-2xl text-orange-500 hover:text-orange-600">
                    <FaWhatsapp />
                </a>
                <a href="#" className="text-2xl text-orange-500 hover:text-orange-600">
                    <FaFacebookF />
                </a>
            </div>

            <Footer />
        </div>
    );
}

export default Contact;
