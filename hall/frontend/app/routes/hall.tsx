import React from 'react';
import ImageGallery from '../components/ImageGallery';
import FAQSection from '../components/FAQSection';
import CallToAction from '../components/CallToAction';
import { MapPin, Clock, Users, Check } from 'lucide-react';
import Navbar from '~/components/Navbar';
import Footer from '~/components/footer';

const HallDetailsPage: React.FC = () => {
  return (
    <div>
      {/* Header Banner */}
      <Navbar/>
      <div className="relative bg-blue-900 text-white py-24 px-6 md:px-12">
  {/* Background Image with Gradient Overlay */}
  <div 
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  ></div>

  {/* Content */}
  <div className="relative z-10 max-w-4xl mx-auto text-center">
    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
      Hall Details
    </h1>
    <p className="text-lg md:text-xl text-blue-200 leading-relaxed">
      Discover the perfect venue for your special events, designed with elegance and equipped with modern amenities.
    </p>
  </div>
</div>

      <ImageGallery />
      
      
      {/* Main Content */}
      <div className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Details */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-6">About Our Venue</h2>
          <p className="text-gray-700 mb-4">
            GrandHall offers a spacious 3,500 sq. ft. venue with elegant chandeliers,
            customizable seating, and premium amenities for up to 250 guests.
          </p>
          <h3 className="text-2xl font-bold mt-6 mb-4">Amenities & Services</h3>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {["Spacious hall", "250 Guests Capacity", "Sound System", "Dimmable Lighting",
              "Climate Control", "100+ Parking Spaces", "Catering Kitchen", "Bridal Suite",
              "Flexible Seating", "Wheelchair Access", "High-speed Wi-Fi", "Projector & Screen"
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-2">
                <Check size={20} className="text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <h3 className="text-2xl font-bold mt-6 mb-4">Floor Plan</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[{ title: "Theater", capacity: "250 guests", use: "Presentations, ceremonies" },
              { title: "Banquet", capacity: "200 guests", use: "Weddings, galas" },
              { title: "Classroom", capacity: "150 guests", use: "Workshops, training" },
              { title: "Cocktail", capacity: "300 guests", use: "Receptions, parties" }
            ].map((layout, index) => (
              <div key={index} className="p-4 bg-gray-100 rounded-lg">
                <h4 className="font-semibold text-lg">{layout.title} Style</h4>
                <p className="text-gray-600">{layout.capacity}</p>
                <p className="text-gray-600">{layout.use}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Right Column - Venue Info */}
        <div>
          <div className="p-6 bg-white shadow-md rounded-lg sticky top-24">
            <h3 className="text-xl font-bold mb-4">Venue Information</h3>
            {[{ icon: MapPin, label: "Location", value: "123 Event Street, City, State" },
              { icon: Clock, label: "Hours", value: "Mon-Sun: 9 AM - 11 PM" },
              { icon: Users, label: "Capacity", value: "250 seated, 300 standing" }
            ].map((info, index) => (
              <div key={index} className="flex items-start space-x-3 mb-4">
                <info.icon size={20} className="text-blue-600" />
                <div>
                  <p className="font-medium">{info.label}</p>
                  <p className="text-gray-600">{info.value}</p>
                </div>
              </div>
            ))}
            {/* Google Maps Embed */}
            <div className="rounded-lg overflow-hidden mb-4">
              <iframe 
                src="https://www.google.com/maps/embed?..."
                width="100%" height="200" style={{ border: 0 }}
                allowFullScreen loading="lazy" title="GrandHall Location"
              ></iframe>
            </div>
            <a href="https://maps.google.com/?q=123+Event+Street" target="_blank" rel="noopener noreferrer"
               className="block bg-gray-200 text-center py-2 rounded-lg mb-2">
              Get Directions
            </a>
            <a href="tel:+11234567890" className="block bg-blue-600 text-white text-center py-2 rounded-lg">
              Call for Inquiry
            </a>
          </div>
        </div>
      </div>
    </div>
      
      {/* Image Gallery */}
     
      
      {/* FAQs */}
      <FAQSection />
      
      {/* Call to Action */}
      <CallToAction />
      <Footer/>
    </div>
  );
};

export default HallDetailsPage;