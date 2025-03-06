import React, { useState } from 'react';
import { Search, Filter, MessageSquare, Phone, Mail, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import AdminNavbar from '~/components/AdminNavbar';

// Mock data
const inquiries = [
  {
    id: 1,
    name: 'David Wilson',
    email: 'david@example.com',
    phone: '(123) 456-7890',
    date: '2025-07-10',
    eventType: 'Anniversary',
    message: 'Looking to host our 25th anniversary celebration. Would like information on packages and availability.',
    received: '2023-04-10T14:30:00',
    status: 'New'
  },
  {
    id: 2,
    name: 'Jennifer Lee',
    email: 'jennifer@example.com',
    phone: '(234) 567-8901',
    date: '2025-08-15',
    eventType: 'Wedding',
    message: 'Planning our wedding for about 150 guests. Interested in your wedding packages and if you have availability in August 2025.',
    received: '2023-04-09T10:15:00',
    status: 'Responded'
  },
  {
    id: 3,
    name: 'Robert Brown',
    email: 'robert@example.com',
    phone: '(345) 678-9012',
    date: '2025-06-20',
    eventType: 'Corporate',
    message: 'We are organizing a corporate retreat and would like to know about your facilities and catering options.',
    received: '2023-04-08T16:45:00',
    status: 'New'
  }
];

const InquiriesPage: React.FC = () => {
  const [expandedInquiry, setExpandedInquiry] = useState<number | null>(null);

  const toggleInquiry = (id: number) => {
    setExpandedInquiry(expandedInquiry === id ? null : id);
  };

  return (
    <>
    <AdminNavbar/>
    <div className="p-4 sm:p-6">
      
      
      {/* Search and Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search inquiries..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search size={18} className="absolute left-3 top-2.5 text-gray-500" />
        </div>
        <button className="flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
          <Filter size={18} className="mr-2 text-gray-700" />
          <span className="text-sm font-medium">Filter</span>
        </button>
      </div>
      
      {/* Inquiries List */}
      <div className="space-y-4">
        {inquiries.map((inquiry) => (
          <div key={inquiry.id} className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium text-gray-900">{inquiry.name}</p>
                <p className="text-sm text-gray-600">{inquiry.eventType} - {new Date(inquiry.date).toLocaleDateString()}</p>
                <p className="text-xs text-gray-500 mt-1">
                  Received {new Date(inquiry.received).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </p>
              </div>
              <span className={`px-2 py-1 inline-flex text-xs leading-4 font-semibold rounded-full ${
                inquiry.status === 'New' 
                  ? 'bg-blue-100 text-blue-800' 
                  : 'bg-green-100 text-green-800'
              }`}>
                {inquiry.status}
              </span>
            </div>
            
            {/* Expandable Section */}
            {expandedInquiry === inquiry.id && (
              <div className="mt-4 space-y-3">
                <div className="flex items-center space-x-4">
                  <a href={`mailto:${inquiry.email}`} className="flex items-center text-sm text-gray-700 hover:text-blue-600">
                    <Mail size={16} className="mr-2" />
                    <span>{inquiry.email}</span>
                  </a>
                  <a href={`tel:${inquiry.phone}`} className="flex items-center text-sm text-gray-700 hover:text-blue-600">
                    <Phone size={16} className="mr-2" />
                    <span>{inquiry.phone}</span>
                  </a>
                </div>
                <div className="text-sm text-gray-700">
                  <p className="font-medium">Message:</p>
                  <p className="mt-1">{inquiry.message}</p>
                </div>
              </div>
            )}
            
            {/* Actions */}
            <div className="mt-4 flex items-center justify-between">
              <button
                onClick={() => toggleInquiry(inquiry.id)}
                className="flex items-center text-sm text-blue-600 hover:text-blue-800"
              >
                {expandedInquiry === inquiry.id ? (
                  <>
                    <ChevronUp size={16} className="mr-1" />
                    <span>Show Less</span>
                  </>
                ) : (
                  <>
                    <ChevronDown size={16} className="mr-1" />
                    <span>Show More</span>
                  </>
                )}
              </button>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-white border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                  View Details
                </button>
                {inquiry.status === 'New' && (
                  <button className="px-3 py-1 bg-blue-600 rounded-md text-sm text-white hover:bg-blue-700">
                    Respond
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default InquiriesPage;