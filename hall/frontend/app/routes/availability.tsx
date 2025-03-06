import React from 'react';
import BookingCalendar from '~/components/BookingCalender';
import CallToAction from '~/components/CallToAction';
import { Calendar, Clock, Info } from 'lucide-react';
import Navbar from '~/components/Navbar';
import Footer from '~/components/footer';

const AvailabilityPage: React.FC = () => {
  return (
    <div>
      {/* Header Banner */}
      <Navbar/>
      <div className="relative bg-blue-900 text-white py-24 px-6 md:px-12">
  {/* Background Image with Gradient Overlay */}
  <div 
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)),  url(https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  ></div>

  {/* Content */}
  <div className="relative z-10 max-w-4xl mx-auto text-center">
    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
      Check Availability
    </h1>
    <p className="text-lg md:text-xl text-blue-200 leading-relaxed">
      Find the perfect date for your event and check our hall's availability in real-time.
    </p>
  </div>
</div>

      
      {/* Main Content */}
      <div className="container-custom py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Calendar */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <Calendar size={24} className="text-blue-600" />
              <h2 className="text-xl font-bold">Availability Calendar</h2>
            </div>
            <p className="text-gray-700 text-sm mb-4">
              Check available dates below. Click on a date to inquire about booking.
            </p>
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-md mb-4">
              <Info size={20} className="text-blue-600 flex-shrink-0" />
              <p className="text-xs text-blue-800">
                Colored dates are booked. White dates are available.
              </p>
            </div>

            <BookingCalendar />
          </div>
        </div>

        {/* Right Column - Info */}
        <div>
          {/* Booking Information */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-lg font-bold mb-4">Booking Information</h3>
            <div className="space-y-4 mb-4">
              <div className="flex items-start space-x-3">
                <Clock size={20} className="text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Hours: 9 AM - 11 PM</p>
                  <p className="text-xs text-gray-500">Extended hours available</p>
                </div>
              </div>
            </div>
            <p className="font-medium mb-2">How to Book:</p>
            <ol className="list-decimal list-inside text-gray-700 text-sm space-y-1">
              <li>Check availability</li>
              <li>Submit an inquiry</li>
              <li>Receive confirmation</li>
              <li>Pay 25% deposit</li>
              <li>Finalize details</li>
            </ol>
          </div>

          {/* Pricing Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-4">Pricing</h3>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-md">
                <p className="font-medium">Weekday (Mon-Thu)</p>
                <p className="text-xl font-bold text-blue-600">$2,500</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-md">
                <p className="font-medium">Weekend (Fri-Sun)</p>
                <p className="text-xl font-bold text-blue-600">$3,500</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-md">
                <p className="font-medium">Hourly Rate</p>
                <p className="text-xl font-bold text-blue-600">$350/hr</p>
                <p className="text-xs text-gray-500">Min. 4 hours</p>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-2">
              * Discounts for non-profits & off-season.
            </p>
            <p className="text-xs text-gray-600">
              * Extra fees for extended hours & services.
            </p>
          </div>
        </div>
      </div>
    </div>
      
      {/* Call to Action */}
      <CallToAction />
      <Footer/>
    </div>
  );
};

export default AvailabilityPage;