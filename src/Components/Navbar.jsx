import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-[#ffffff] shadow-md">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex-shrink-0">
            <img src="src/assets/logonav.png" alt="Logo" className="h-10" />
          </div>

          
          <div className="hidden space-x-4 text-base font-semibold md:flex">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-md ${location.pathname === "/" ? "text-[#ac6b25]" : "text-gray-800 hover:text-[#ac6b25]"}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`px-3 py-2 rounded-md ${location.pathname === "/about" ? "text-[#ac6b25]" : "text-gray-800 hover:text-[#ac6b25]"}`}
            >
              About
            </Link>
            <Link 
              to="/service" 
              className={`px-3 py-2 rounded-md ${location.pathname === "/work" ? "text-[#ac6b25]" : "text-gray-800 hover:text-[#ac6b25]"}`}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className={`px-3 py-2 rounded-md ${location.pathname === "/contact" ? "text-[#ac6b25]" : "text-gray-800 hover:text-[#ac6b25]"}`}
            >
              Contact
            </Link>
            <Link 
              to="/gallery" 
              className={`px-3 py-2 rounded-md ${location.pathname === "/gallery" ? "text-[#ac6b25]" : "text-gray-800 hover:text-[#ac6b25]"}`}
            >
              Gallery
            </Link>
          </div>

          
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      
      {isOpen && (
        <div className="bg-gray-100 border-t md:hidden">
          <ul className="flex flex-col items-center py-4 space-y-4">
            <li>
              <Link 
                to="/" 
                className={`block px-4 py-2 rounded-md ${location.pathname === "/" ? "text-[#ac6b25]" : "text-gray-800 hover:text-[#ac6b25]"}`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`block px-4 py-2 rounded-md ${location.pathname === "/about" ? "text-[#ac6b25]" : "text-gray-800 hover:text-[#ac6b25]"}`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/work" 
                className={`block px-4 py-2 rounded-md ${location.pathname === "/work" ? "text-[#ac6b25]" : "text-gray-800 hover:text-[#ac6b25]"}`}
              >
                Work
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`block px-4 py-2 rounded-md ${location.pathname === "/contact" ? "text-[#ac6b25]" : "text-gray-800 hover:text-[#ac6b25]"}`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link 
                to="/gallery" 
                className={`block px-4 py-2 rounded-md ${location.pathname === "/gallery" ? "text-[#ac6b25]" : "text-gray-800 hover:text-[#ac6b25]"}`}
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
