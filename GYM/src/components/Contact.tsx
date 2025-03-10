import React, { useState } from 'react';
import { Send, Instagram, Youtube, Disc as Discord } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formState);
  };

  return (
    <section className="py-20 px-4" id="contact">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-heading font-bold text-center mb-16">
          Join The <span className="text-sigma-green">Movement</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card-holographic p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-dark/50 border-b-2 border-sigma-green/50 px-4 py-2 focus:outline-none focus:border-sigma-green transition-colors"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-dark/50 border-b-2 border-sigma-green/50 px-4 py-2 focus:outline-none focus:border-sigma-green transition-colors"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-dark/50 border-b-2 border-sigma-green/50 px-4 py-2 focus:outline-none focus:border-sigma-green transition-colors"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className="neon-button w-full group">
                <span className="flex items-center justify-center">
                  Send Message
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="space-y-8">
            <div className="card-holographic p-8 rounded-lg">
              <h3 className="text-2xl font-heading font-bold mb-6">Connect With Us</h3>
              <div className="space-y-4">
                <a href="#" className="flex items-center group">
                  <Instagram className="w-6 h-6 text-sigma-green mr-4" />
                  <span className="group-hover:text-sigma-green transition-colors">@ironhustle</span>
                </a>
                <a href="#" className="flex items-center group">
                  <Youtube className="w-6 h-6 text-sigma-green mr-4" />
                  <span className="group-hover:text-sigma-green transition-colors">IronHustle TV</span>
                </a>
                <a href="#" className="flex items-center group">
                  <Discord className="w-6 h-6 text-sigma-green mr-4" />
                  <span className="group-hover:text-sigma-green transition-colors">Join our Discord</span>
                </a>
              </div>
            </div>

            <div className="card-holographic p-8 rounded-lg">
              <h3 className="text-2xl font-heading font-bold mb-4">Location</h3>
              <p className="text-gray-300 mb-2">123 Gains Street</p>
              <p className="text-gray-300 mb-2">Muscle City, MC 12345</p>
              <p className="text-gray-300">Open 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;