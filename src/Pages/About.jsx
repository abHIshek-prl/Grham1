import React, { useState } from "react";
import AboutImage from "../assets/aboutbg.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Abut from '../assets/aboutbg.png'

function About() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { question: "What architectural services do you offer?", answer: "We provide architectural planning, 3D designs, and complete building solutions." },
    { question: "Do you offer interior design services?", answer: "Yes, we specialize in premium interior designs tailored to your needs." },
    { question: "Can you help with furniture design?", answer: "Absolutely! We craft custom furniture that aligns with your space and style." },
    { question: "What types of materials do you use for construction?", answer: "We use high-quality materials ensuring durability and aesthetics." },
    { question: "Do you provide exterior design consultations?", answer: "Yes, we offer expert exterior design solutions for homes and offices." },
    { question: "How can I get a cost estimation for my project?", answer: "We provide detailed estimations based on your requirements and budget." },
  ];

  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center justify-center w-full px-6 py-12 bg-gray-100 md:py-16 lg:py-20">
        <div className="max-w-6xl overflow-hidden bg-white shadow-lg rounded-xl md:flex">
          
          <div className="w-full p-6 text-gray-700 md:w-1/2 md:p-12">
            <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
              ABOUT <span className="text-[#c0a06c]">US</span>
            </h2>
            <p className="mt-4 text-lg font-semibold text-gray-800">
              Transforming spaces with expertise in architectural planning, 3D designs, and interior excellence.
            </p>
            <p className="mt-4 text-gray-600">
              At <span className="font-semibold text-[#c0a06c]">Graham Builders</span>, we specialize in crafting exceptional environments. Whether it's architectural planning, detailed 3D designs, precise estimations, or premium interior designing, we bring innovation and craftsmanship together to shape inspiring spaces.
            </p>
            <p className="mt-4 text-gray-600">
              Our passion extends to furniture making, ensuring every piece aligns with your unique style and comfort. With attention to detail and a commitment to excellence, we turn visions into reality.
            </p>
          </div>

          
          <div className="w-full md:w-1/2">
            <img src={AboutImage} alt="About Graham Builders" className="object-cover w-full h-full" />
          </div>
        </div>
      </section>

      
      <section
  className="relative max-w-4xl p-6 mx-auto my-12 shadow-lg rounded-xl"
  style={{ backgroundImage: `url(${Abut})`, backgroundSize: "cover", backgroundPosition: "center" }}
>
  
  <div className="absolute inset-0 bg-black opacity-70 rounded-xl"></div>

  <div className="relative z-10">
    <h2 className="text-3xl font-bold text-center text-[#c0a06c] mb-6">Frequently Asked Questions</h2>
    <div className="divide-y divide-gray-300">
      {faqs.map((faq, index) => (
        <div key={index} className="py-4">
          <button
            onClick={() => toggleFAQ(index)}
            className="flex items-center justify-between w-full text-lg font-semibold text-white focus:outline-none"
          >
            {faq.question}
            <span className={`transform transition-transform ${openIndex === index ? "rotate-180" : "rotate-0"}`}>
              ▼
            </span>
          </button>
          {openIndex === index && <p className="mt-2 text-gray-200">{faq.answer}</p>}
        </div>
      ))}
    </div>
  </div>
</section>

      <Footer/>
    </>
  );
}

export default About;
