import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


import img3D1 from '../assets/showcase/3D/3D-1.jpg';
import img3D2 from '../assets/showcase/3D/3D-2.jpg';
import img3D3 from '../assets/showcase/3D/3D-3.jpg';
import img3D4 from '../assets/showcase/3D/3D-4.jpg';
import img3D5 from '../assets/showcase/3D/3D-5.jpg';
import img3D6 from '../assets/showcase/3D/3D-6.jpg';
import img3D7 from '../assets/showcase/3D/3D-7.jpg';
import img3D8 from '../assets/showcase/3D/3D-8.jpg';
import img3D9 from '../assets/showcase/3D/3D-9.jpg';
import img3D10 from '../assets/showcase/3D/3D-10.jpg';
import img3D11 from '../assets/showcase/3D/3D-11.jpg';
import img3D12 from '../assets/showcase/3D/3D-12.jpg';
import img3D13 from '../assets/showcase/3D/3D-13.jpg';

import imgliving1 from '../assets/showcase/Living room/living-1.jpg';
import imgliving2 from '../assets/showcase/Living room/living-2.jpg';
import imgliving3 from '../assets/showcase/Living room/living-3.jpg';
import imgliving4 from '../assets/showcase/Living room/living-4.jpg';
import imgliving5 from '../assets/showcase/Living room/living-5.jpg';
import imgliving6 from '../assets/showcase/Living room/living-6.jpg';
import imgliving7 from '../assets/showcase/Living room/living-7.jpg';
import imgliving8 from '../assets/showcase/Living room/living-8.jpg';
import imgliving9 from '../assets/showcase/Living room/living-9.jpg';
import imgliving10 from '../assets/showcase/Living room/living-10.jpg';
import imgliving11 from '../assets/showcase/Living room/living-11.jpg';

import imgbedroom1 from '../assets/showcase/Bed room/bedroom-1.jpg'
import imgbedroom2 from '../assets/showcase/Bed room/bedroom-2.jpg'
import imgbedroom3 from '../assets/showcase/Bed room/bedroom-3.jpg'
import imgbedroom4 from '../assets/showcase/Bed room/bedroom-4.jpg'
import imgbedroom5 from '../assets/showcase/Bed room/bedroom-5.jpg'
import imgbedroom6 from '../assets/showcase/Bed room/bedroom-6.jpg'
import imgbedroom7 from '../assets/showcase/Bed room/bedroom-7.jpg'
import imgbedroom8 from '../assets/showcase/Bed room/bedroom-8.jpg'
import imgbedroom9 from '../assets/showcase/Bed room/bedroom-9.jpg'
import imgbedroom10 from '../assets/showcase/Bed room/bedroom-10.jpg'
import imgbedroom11 from '../assets/showcase/Bed room/bedroom-11.jpg'
import imgbedroom12 from '../assets/showcase/Bed room/bedroom-12.jpg'

import imgkichen1 from '../assets/showcase/Kitchen/Kitchen-1.jpg'
import imgkichen2 from '../assets/showcase/Kitchen/Kitchen-2.jpg'
import imgkichen3 from '../assets/showcase/Kitchen/Kitchen-3.jpg'
import imgkichen4 from '../assets/showcase/Kitchen/Kitchen-4.jpg'
import imgkichen5 from '../assets/showcase/Kitchen/Kitchen-5.jpg'
import imgkichen6 from '../assets/showcase/Kitchen/Kitchen-6.jpg'
import imgkichen7 from '../assets/showcase/Kitchen/Kitchen-7.jpg'
import imgkichen8 from '../assets/showcase/Kitchen/Kitchen-8.jpg'
import imgkichen9 from '../assets/showcase/Kitchen/Kitchen-9.jpg'
import imgkichen10 from '../assets/showcase/Kitchen/Kitchen-10.jpg'

import imgdining1 from '../assets/showcase/Dining room/Dining-1.jpg'
import imgdining2 from '../assets/showcase/Dining room/Dining-2.jpg'
import imgdining3 from '../assets/showcase/Dining room/Dining-3.jpg'
import imgdining4 from '../assets/showcase/Dining room/Dining-4.jpg'
import imgdining5 from '../assets/showcase/Dining room/Dining-5.jpg'
import imgdining6 from '../assets/showcase/Dining room/Dining-6.jpg'
import imgdining7 from '../assets/showcase/Dining room/Dining-7.jpg'
import imgdining8 from '../assets/showcase/Dining room/Dining-8.jpg'
import imgdining9 from '../assets/showcase/Dining room/Dining-9.jpg'
import imgdining10 from '../assets/showcase/Dining room/Dining-10.jpg'

import imgstair1 from '../assets/showcase/Stair/Stair-1.jpg'
import imgstair2 from '../assets/showcase/Stair/Stair-2.jpg'
import imgstair3 from '../assets/showcase/Stair/Stair-3.jpg'
import imgstair4 from '../assets/showcase/Stair/Stair-4.jpg'
import imgstair5 from '../assets/showcase/Stair/Stair-5.jpg'
import imgstair6 from '../assets/showcase/Stair/Stair-6.jpg'
import imgstair7 from '../assets/showcase/Stair/Stair-7.jpg'
import imgstair8 from '../assets/showcase/Stair/Stair-8.jpg'
import imgstair9 from '../assets/showcase/Stair/Stair-9.jpg'
import imgstair10 from '../assets/showcase/Stair/Stair-10.jpg'
import imgstair11 from '../assets/showcase/Stair/Stair-11.jpg'
const allImages = [
  { src: img3D1, category: '3D' },
  { src: img3D2, category: '3D' },
  { src: img3D3, category: '3D' },
  { src: img3D4, category: '3D' },
  { src: img3D5, category: '3D' },
  { src: img3D6, category: '3D' },
  { src: img3D7, category: '3D' },
  { src: img3D8, category: '3D' },
  { src: img3D9, category: '3D' },
  { src: img3D10, category: '3D' },
  { src: img3D11, category: '3D' },
  { src: img3D12, category: '3D' },
  { src: img3D13, category: '3D' },
  
  { src: imgliving1, category: 'Living Room' },
  { src: imgliving2, category: 'Living Room' },
  { src: imgliving3, category: 'Living Room' },
  { src: imgliving4, category: 'Living Room' },
  { src: imgliving5, category: 'Living Room' },
  { src: imgliving6, category: 'Living Room' },
  { src: imgliving7, category: 'Living Room' },
  { src: imgliving8, category: 'Living Room' },
  { src: imgliving9, category: 'Living Room' },
  { src: imgliving10, category: 'Living Room' },
  { src: imgliving11, category: 'Living Room' },
  
  { src: imgbedroom1, category: 'Bedroom' },
  { src: imgbedroom2, category: 'Bedroom' },
  { src: imgbedroom3, category: 'Bedroom' },
  { src: imgbedroom4, category: 'Bedroom' },
  { src: imgbedroom5, category: 'Bedroom' },
  { src: imgbedroom6, category: 'Bedroom' },
  { src: imgbedroom7, category: 'Bedroom' },
  { src: imgbedroom8, category: 'Bedroom' },
  { src: imgbedroom9, category: 'Bedroom' },
  { src: imgbedroom10, category: 'Bedroom' },
  { src: imgbedroom11, category: 'Bedroom' },
  { src: imgbedroom12, category: 'Bedroom' },
  
  { src: imgkichen1, category: 'Kitchen' },
  { src: imgkichen2, category: 'Kitchen' },
  { src: imgkichen3, category: 'Kitchen' },
  { src: imgkichen4, category: 'Kitchen' },
  { src: imgkichen5, category: 'Kitchen' },
  { src: imgkichen6, category: 'Kitchen' },
  { src: imgkichen7, category: 'Kitchen' },
  { src: imgkichen8, category: 'Kitchen' },
  { src: imgkichen9, category: 'Kitchen' },
  { src: imgkichen10, category: 'Kitchen' },
  
  { src: imgdining1, category: 'Dining' },
  { src: imgdining2, category: 'Dining' },
  { src: imgdining3, category: 'Dining' },
  { src: imgdining4, category: 'Dining' },
  { src: imgdining5, category: 'Dining' },
  { src: imgdining6, category: 'Dining' },
  { src: imgdining7, category: 'Dining' },
  { src: imgdining8, category: 'Dining' },
  { src: imgdining9, category: 'Dining' },
  { src: imgdining10, category: 'Dining' },
  
  { src: imgstair1, category: 'Stairs' },
  { src: imgstair2, category: 'Stairs' },
  { src: imgstair3, category: 'Stairs' },
  { src: imgstair4, category: 'Stairs' },
  { src: imgstair5, category: 'Stairs' },
  { src: imgstair6, category: 'Stairs' },
  { src: imgstair7, category: 'Stairs' },
  { src: imgstair8, category: 'Stairs' },
  { src: imgstair9, category: 'Stairs' },
  { src: imgstair10, category: 'Stairs' },
  { src: imgstair11, category: 'Stairs' },
];

const categories = ['All', 'Bedroom', 'Living Room', 'Kitchen', 'Dining', '3D', 'Stairs'];

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages =
    selectedCategory === 'All'
      ? allImages
      : allImages.filter((img) => img.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow px-4 py-10 bg-gray-50 md:px-12">
        <h1 className="mb-6 text-4xl font-bold text-center text-gray-800">Our Works</h1>

        
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedCategory === cat
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        
        <div className="gap-4 space-y-4 columns-1 sm:columns-2 md:columns-3">
          {filteredImages.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.category}
              className="w-full mb-4 rounded-lg shadow-md cursor-pointer hover:opacity-90"
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Gallery;
