import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import logo from "../assets/logonav.png";

function Footer() {
    return (
        <footer className="py-10 text-white bg-[#6f5f47] font-semibold">
            <div className="container px-6 mx-auto lg:px-20">
                <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-3 md:text-left">
                    
                    <div className="flex flex-col items-center md:items-start">
                        <img src={logo} alt="GRHAM Logo" className="mb-2 h-14" />
                    </div>

                    
                    <nav className="flex flex-col items-center space-y-3 text-sm font-semibold md:items-center">
                        <a href="/" className="hover:text-gray-400">
                            Home
                        </a>
                        <a href="/about" className="hover:text-gray-400">
                            About
                        </a>
                        
                        <a href="/gallery" className="hover:text-gray-400">
                            Gallery
                        </a>
                        <a href="/contact" className="hover:text-gray-400">
                            Contact
                        </a>
                    </nav>

                    
                    <div className="flex flex-col items-center space-y-2 text-base md:items-end">
                        <p className="flex items-center gap-2">
                            📞{" "}
                            <a href="tel:9544609027" className="hover:text-gray-400">
                                9544609027
                            </a>
                        </p>
                        <p className="flex items-center gap-2">
                            ✉️{" "}
                            <a href="mailto:grhaminterior@gmail.com" className="hover:text-gray-400">
                                grhaminterior@gmail.com
                            </a>
                        </p>
                        <span className="flex gap-5">
                            <a
                                href="https://www.instagram.com/grham_builders/?__pwa=1#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-[#ef556e]"
                            >
                                <FaInstagram size={30} />
                            </a>
                            <a
                                href="https://wa.me/9544609027"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-[#55e355]"
                            >
                                <FaWhatsapp size={30} />
                            </a>
                        </span>
                    </div>
                </div>

                
                <div className="mt-8 text-xs text-center text-[#d2d2d2]">
                    &copy; {new Date().getFullYear()} GRHAM Interior & Furnitures. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
