import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What is the capacity of the hall?',
    answer: 'Our hall can comfortably accommodate up to 250 guests for a seated dinner event and up to 300 for a standing reception. We offer flexible seating arrangements to suit your specific needs.'
  },
  {
    question: 'Do you provide catering services?',
    answer: 'We work with several preferred catering partners who offer a variety of cuisine options. You can choose from our list of partners or bring your own caterer for an additional fee. All external caterers must be licensed and insured.'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Bookings cancelled more than 90 days before the event date receive a full refund minus a 10% administrative fee. Cancellations between 30-90 days receive a 50% refund. Cancellations less than 30 days before the event are non-refundable. We recommend event insurance for unexpected circumstances.'
  },
  {
    question: 'Is parking available?',
    answer: 'Yes, we offer complimentary parking for up to 100 vehicles. For larger events, we can arrange valet parking services at an additional cost. There is also street parking available nearby.'
  },
  {
    question: 'Can we bring our own alcohol?',
    answer: 'Yes, you can bring your own alcohol. However, you will need to obtain a temporary liquor license and hire licensed bartenders. We can recommend bartending services that are familiar with our venue. A corkage fee may apply.'
  },
  {
    question: 'What is the booking process?',
    answer: 'To secure your date, we require a signed contract and a 25% non-refundable deposit. The remaining balance is due 30 days before your event. We also collect a refundable security deposit that will be returned after the event, provided there are no damages.'
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our venue, services, and booking process.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button 
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp size={20} className="text-blue-600" />
                ) : (
                  <ChevronDown size={20} className="text-gray-600" />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;