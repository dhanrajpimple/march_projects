import React from "react";
import ContactForm from "~/components/ContactForm";
import BookingCalendar from "~/components/BookingCalender";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Navbar from "~/components/Navbar";
import Footer from "~/components/footer";

const ContactPage: React.FC = () => {
  return (
    <div>
      {/* Header Banner */}
      <Navbar />
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
      Contact Us
    </h1>
    <p className="text-lg md:text-xl text-blue-200 leading-relaxed">
      Have questions or ready to book? Get in touch with our team for personalized assistance.
    </p>
  </div>
</div>


      {/* Main Content */}
      <div className="min-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Left Column - Contact Form */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-lg">
           
            <ContactForm />
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-center">
                Contact Information
              </h3>

              <div className="space-y-4">
                {[
                  {
                    icon: <MapPin size={20} className="text-blue-600" />,
                    label: "Address",
                    value: "123 Event Street, City, State 12345",
                  },
                  {
                    icon: <Phone size={20} className="text-blue-600" />,
                    label: "Phone",
                    value: "(123) 456-7890",
                  },
                  {
                    icon: <Mail size={20} className="text-blue-600" />,
                    label: "Email",
                    value: "info@grandhall.com",
                  },
                  {
                    icon: <Clock size={20} className="text-blue-600" />,
                    label: "Office Hours",
                    value: (
                      <>
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 10:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                      </>
                    ),
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    {item.icon}
                    <div>
                      <p className="font-medium">{item.label}</p>
                      <p className="text-gray-600">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-center">Location</h3>

              <div className="rounded-lg overflow-hidden shadow-sm aspect-[16/9]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215151997223!2d-73.98784492426285!3d40.75798657138946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2us"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="GrandHall Location"
                ></iframe>
              </div>

              <a
                href="https://maps.google.com/?q=123+Event+Street,+City,+State+12345"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-600 text-white py-2 px-4 rounded-lg mt-4 text-center hover:bg-blue-700 transition"
              >
                Get Directions
              </a>
            </div>

            {/* Mini Calendar */}
           
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
