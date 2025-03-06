import React, { useState } from 'react';
import HeroSection from '~/components/HeroSection';
import FeaturesSection from '~/components/FeaturesSection';
import TestimonialsSection from '~/components/Testimonial';
import CallToAction from '~/components/CallToAction';
import { NavLink } from '@remix-run/react';
import Navbar from '~/components/Navbar';
import Footer from '~/components/footer';

const imageUrls = [
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
];

const HomePage: React.FC = () => {
  const [images, setImages] = useState(imageUrls);

  const handleImageClick = (index: number) => {
    const updatedImages = [...images];
    const clickedImage = updatedImages.splice(index, 1)[0]; // Remove clicked image
    updatedImages.push(clickedImage); // Move it to the last position
    setImages(updatedImages);
  };

  return (
    <div>
      <Navbar/>
      <HeroSection />
      <FeaturesSection />
      
      {/* About Section */}
       <section className="pt-16 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className='items-start h-full w-full'>
            <h2 className="section-title">About GrandHall</h2>
            <p className="text-gray-600 mb-4">
              GrandHall is the perfect venue for your special occasions, 
              offering a luxurious setting with modern amenities.
            </p>
            <p className="text-gray-600">
              From weddings to corporate events, we provide an elegant space 
              tailored to your needs.
            </p>
          </div>

          {/* Dynamic Stacked Images */}
          <div className="relative flex justify-center items-start h-[300px] md:h-[400px]">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Event image ${index + 1}`}
                className={`absolute w-4/5 rounded-lg shadow-md transition-transform duration-500 cursor-pointer
                  ${index % 2 === 0 ? "rotate-[5deg]" : "rotate-[-5deg]"}
                  ${index === 0 ? "z-10 scale-110" : `z-${10 - index} translate-y-${index * 2}`}
                `}
                onClick={() => handleImageClick(index)}
                style={{ zIndex: images.length - index }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
      <Footer/>
    </div>
              
  );
};

export default  HomePage;