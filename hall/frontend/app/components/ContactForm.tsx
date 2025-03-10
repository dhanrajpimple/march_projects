import React, { useState } from 'react';
import { Send, Phone, MessageSquare } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { addInquiry } from '../features/inquirySlice'; // Fixed import

interface FormData {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  eventType: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    message: '',
  });

  const dispatch = useDispatch<AppDispatch>(); // Removed extra `/`

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);
  const { inquires, loading: inquiryLoading } = useSelector((state: RootState) => state.inquiries);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await dispatch(addInquiry(formData)).unwrap(); // Unwrap for proper error handling
      setSubmitStatus({ success: true, message: 'Inquiry submitted successfully!' });
      setFormData({ name: '', email: '', phone: '', eventDate: '', eventType: '', message: '' }); // Reset form
    } catch (error) {
      setSubmitStatus({ success: false, message: (error as Error).message || 'Failed to submit inquiry.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent('Hello, I would like to inquire about booking your hall.');
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 min-w-full mx-auto border border-gray-200">
      {submitStatus ? (
        <div className={`p-4 mb-6 rounded-lg text-center ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          <p className="font-medium">{submitStatus.message}</p>
          {submitStatus.success && (
            <button className="mt-4 text-blue-600 hover:text-blue-800 font-semibold" onClick={() => setSubmitStatus(null)}>
              Send another inquiry
            </button>
          )}
        </div>
      ) : (
        <>
          <h3 className="text-3xl font-bold text-center mb-6 text-gray-900">Get in Touch</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="Full Name" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="Email Address" />
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="Phone Number" />
            <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" min={new Date().toISOString().split('T')[0]} />
            <select name="eventType" value={formData.eventType} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <option value="">Select Event Type</option>
              <option value="Wedding">Wedding</option>
              <option value="Corporate">Corporate Event</option>
              <option value="Birthday">Birthday Party</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Conference">Conference</option>
              <option value="Other">Other</option>
            </select>
            <textarea name="message" value={formData.message} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" rows={4} placeholder="Your message..."></textarea>

            <button type="submit" disabled={isSubmitting} className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg flex justify-center items-center transition-all duration-200">
              {isSubmitting ? 'Sending...' : (<><Send size={18} className="mr-2" /> Send Inquiry</>)}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">Or contact us directly:</p>
            <div className="mt-4 flex gap-4 justify-center">
              <a href="tel:+11234567890" className="py-3 px-6 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center gap-2 text-gray-800 font-medium transition-all duration-200">
                <Phone size={18} /> Call Now
              </a>
              <button onClick={openWhatsApp} className="py-3 px-6 bg-green-500 hover:bg-green-600 rounded-lg flex items-center gap-2 text-white font-medium transition-all duration-200">
                <MessageSquare size={18} /> WhatsApp
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ContactForm;
