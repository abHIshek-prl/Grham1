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


import imgliving1 from '../assets/showcase/LivingRoom/living-1.jpg';
import imgliving2 from '../assets/showcase/LivingRoom/living-2.jpg';
import imgliving3 from '../assets/showcase/LivingRoom/living-3.jpg';
import imgliving4 from '../assets/showcase/LivingRoom/living-4.jpg';
import imgliving5 from '../assets/showcase/LivingRoom/living-5.jpg';
import imgliving6 from '../assets/showcase/LivingRoom/living-6.jpg';
import imgliving7 from '../assets/showcase/LivingRoom/living-7.jpg';
import imgliving8 from '../assets/showcase/LivingRoom/living-8.jpg';
import imgliving9 from '../assets/showcase/LivingRoom/living-9.jpg';
import imgliving10 from '../assets/showcase/LivingRoom/living-10.jpg';
import imgliving11 from '../assets/showcase/LivingRoom/living-11.jpg';

import imgBedroom1 from '../assets/showcase/BedRoom/bedroom-1.jpg';
import imgbedroom2 from '../assets/showcase/BedRoom/bedroom-2.jpg';
import imgbedroom3 from '../assets/showcase/BedRoom/bedroom-3.jpg';
import imgbedroom4 from '../assets/showcase/BedRoom/bedroom-4.jpg';
import imgbedroom5 from '../assets/showcase/BedRoom/bedroom-5.jpg';
import imgbedroom6 from '../assets/showcase/BedRoom/bedroom-6.jpg';
import imgbedroom7 from '../assets/showcase/BedRoom/bedroom-7.jpg';
import imgbedroom8 from '../assets/showcase/BedRoom/bedroom-8.jpg';
import imgbedroom9 from '../assets/showcase/BedRoom/bedroom-9.jpg';
import imgbedroom10 from '../assets/showcase/BedRoom/bedroom-10.jpg';
import imgbedroom11 from '../assets/showcase/BedRoom/bedroom-11.jpg';
import imgbedroom12 from '../assets/showcase/BedRoom/bedroom-12.jpg';

import imgKitchen2 from '../assets/showcase/Kitchen/kitchen-2.jpg';
import imgkitchen3 from '../assets/showcase/Kitchen/kitchen-3.jpg';
import imgkitchen4 from '../assets/showcase/Kitchen/kitchen-4.jpg';
import imgkitchen5 from '../assets/showcase/Kitchen/kitchen-5.jpg';
import imgkitchen6 from '../assets/showcase/Kitchen/kitchen-6.jpg';
import imgkitchen7 from '../assets/showcase/Kitchen/kitchen-7.jpg';
import imgkitchen8 from '../assets/showcase/Kitchen/kitchen-8.jpg';
import imgkitchen9 from '../assets/showcase/Kitchen/kitchen-9.jpg';
import imgkitchen10 from '../assets/showcase/Kitchen/kitchen-10.jpg';

import imgDining1 from '../assets/showcase/DiningRoom/Dining-1.jpg';

import imgdining2 from '../assets/showcase/DiningRoom/Dining-2.jpg';
import imgdining3 from '../assets/showcase/DiningRoom/Dining-3.jpg';
import imgdining4 from '../assets/showcase/DiningRoom/Dining-4.jpg';
import imgdining5 from '../assets/showcase/DiningRoom/Dining-5.jpg';
import imgdining6 from '../assets/showcase/DiningRoom/Dining-6.jpg';
import imgdining7 from '../assets/showcase/DiningRoom/Dining-7.jpg';
import imgdining8 from '../assets/showcase/DiningRoom/Dining-8.jpg';
import imgdining9 from '../assets/showcase/DiningRoom/Dining-9.jpg';
import imgdining10 from '../assets/showcase/DiningRoom/Dining-10.jpg';

import imgStair1 from '../assets/showcase/Stair/Stair-1.jpg';
import imgStair2 from '../assets/showcase/Stair/Stair-2.jpg';
import imgStair3 from '../assets/showcase/Stair/Stair-3.jpg';
import imgStair4 from '../assets/showcase/Stair/Stair-4.jpg';
import imgStair5 from '../assets/showcase/Stair/Stair-5.jpg';
import imgStair6 from '../assets/showcase/Stair/Stair-6.jpg';
import imgStair7 from '../assets/showcase/Stair/Stair-7.jpg';
import imgStair8 from '../assets/showcase/Stair/Stair-8.jpg';
import imgStair9 from '../assets/showcase/Stair/Stair-9.jpg';
import imgStair10 from '../assets/showcase/Stair/Stair-10.jpg';
import imgStair11 from '../assets/showcase/Stair/Stair-11.jpg';

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
  
  { src: imgBedroom1, category: 'Bedroom' },
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
  
  { src: imgKitchen2, category: 'Kitchen' },
  { src: imgkitchen3, category: 'Kitchen' },
  { src: imgkitchen4, category: 'Kitchen' },
  { src: imgkitchen5, category: 'Kitchen' },
  { src: imgkitchen6, category: 'Kitchen' },
  { src: imgkitchen7, category: 'Kitchen' },
  { src: imgkitchen8, category: 'Kitchen' },
  { src: imgkitchen9, category: 'Kitchen' },
  { src: imgkitchen10, category: 'Kitchen' },
  
  { src: imgDining1, category: 'Dining' },
  { src: imgdining2, category: 'Dining' },
  { src: imgdining3, category: 'Dining' },
  { src: imgdining4, category: 'Dining' },
  { src: imgdining5, category: 'Dining' },
  { src: imgdining6, category: 'Dining' },
  { src: imgdining7, category: 'Dining' },
  { src: imgdining8, category: 'Dining' },
  { src: imgdining9, category: 'Dining' },
  { src: imgdining10, category: 'Dining' },
  
  { src: imgStair1, category: 'Stairs' },
  { src: imgStair2, category: 'Stairs' },
  { src: imgStair3, category: 'Stairs' },
  { src: imgStair4, category: 'Stairs' },
  { src: imgStair5, category: 'Stairs' },
  { src: imgStair6, category: 'Stairs' },
  { src: imgStair7, category: 'Stairs' },
  { src: imgStair8, category: 'Stairs' },
  { src: imgStair9, category: 'Stairs' },
  { src: imgStair10, category: 'Stairs' },
  { src: imgStair11, category: 'Stairs' },
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
