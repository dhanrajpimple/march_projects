import React from 'react';
import { Link } from "@remix-run/react";
import { Calendar, Users, DollarSign, Clock, TrendingUp, CheckCircle, AlertCircle } from 'lucide-react';
import AdminNavbar from '~/components/AdminNavbar';

// Mock data
const upcomingBookings = [
  {
    id: 1,
    title: 'Wedding - Johnson Family',
    date: '2025-06-15',
    client: 'Sarah Johnson',
    status: 'Confirmed',
    type: 'Wedding'
  },
  {
    id: 2,
    title: 'Corporate Event - Tech Corp',
    date: '2025-05-05',
    client: 'Michael Chen',
    status: 'Confirmed',
    type: 'Corporate'
  },
  {
    id: 3,
    title: 'Birthday Party - Emily Rodriguez',
    date: '2025-04-22',
    client: 'Emily Rodriguez',
    status: 'Pending',
    type: 'Birthday'
  }
];

const recentInquiries = [
  {
    id: 1,
    name: 'David Wilson',
    date: '2025-07-10',
    eventType: 'Anniversary',
    received: '2 hours ago',
    status: 'New'
  },
  {
    id: 2,
    name: 'Jennifer Lee',
    date: '2025-08-15',
    eventType: 'Wedding',
    received: '1 day ago',
    status: 'Responded'
  },
  {
    id: 3,
    name: 'Robert Brown',
    date: '2025-06-20',
    eventType: 'Corporate',
    received: '2 days ago',
    status: 'Responded'
  }
];

const AdminDashboardPage: React.FC = () => {
  return (
    <div>

     <AdminNavbar/>
     <div className='p-4'>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
        {[
          { title: 'Total Bookings', value: '24', icon: Calendar, trend: '+8%', color: 'blue' },
          { title: 'New Inquiries', value: '12', icon: Users, trend: '+15%', color: 'orange' },
          { title: 'Revenue', value: '$42,500', icon: DollarSign, trend: '+12%', color: 'green' },
          { title: 'Availability', value: '75%', icon: Clock, trend: '25% days booked', color: 'purple' },
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h3 className="text-xs sm:text-sm text-gray-500 font-medium">{stat.title}</h3>
              <div className={`p-2 bg-${stat.color}-100 rounded-full`}>
                <stat.icon size={16} className={`text-${stat.color}-600`} />
              </div>
            </div>
            <p className="text-2xl sm:text-3xl font-bold">{stat.value}</p>
            <p className={`text-xs sm:text-sm ${stat.trend.includes('+') ? 'text-green-600' : 'text-red-600'} flex items-center mt-1 sm:mt-2`}>
              <TrendingUp size={12} className="mr-1" />
              <span>{stat.trend}</span>
            </p>
          </div>
        ))}
      </div>
      
      {/* Upcoming Bookings and Recent Inquiries */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Upcoming Bookings */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-4 sm:p-6">
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h2 className="text-lg font-semibold">Upcoming Bookings</h2>
            <Link to="/admin/calenderPage" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View Calendar
            </Link>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-2 sm:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Event
                  </th>
                  <th className="px-2 sm:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-2 sm:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Client
                  </th>
                  <th className="px-2 sm:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {upcomingBookings.map((booking) => (
                  <tr key={booking.id}>
                    <td className="px-2 sm:px-4 py-3 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{booking.title}</div>
                      <div className="text-xs sm:text-sm text-gray-500">{booking.type}</div>
                    </td>
                    <td className="px-2 sm:px-4 py-3 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {new Date(booking.date).toLocaleDateString('en-US', {
                          weekday: 'short',
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </div>
                    </td>
                    <td className="px-2 sm:px-4 py-3 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{booking.client}</div>
                    </td>
                    <td className="px-2 sm:px-4 py-3 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        booking.status === 'Confirmed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Recent Inquiries */}
        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h2 className="text-lg font-semibold">Recent Inquiries</h2>
            <Link to="/admin/" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View All
            </Link>
          </div>
          
          <div className="space-y-3">
            {recentInquiries.map((inquiry) => (
              <div key={inquiry.id} className="p-3 bg-gray-50 rounded-md">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-gray-900">{inquiry.name}</p>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {inquiry.eventType} - {new Date(inquiry.date).toLocaleDateString()}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Received {inquiry.received}</p>
                  </div>
                  <span className={`px-2 py-1 inline-flex text-xs leading-4 font-semibold rounded-full ${
                    inquiry.status === 'New' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {inquiry.status}
                  </span>
                </div>
                
                <div className="mt-3 flex space-x-2">
                  <button className="px-2 sm:px-3 py-1 bg-white border border-gray-300 rounded-md text-xs sm:text-sm text-gray-700 hover:bg-gray-50">
                    View Details
                  </button>
                  {inquiry.status === 'New' && (
                    <button className="px-2 sm:px-3 py-1 bg-blue-600 rounded-md text-xs sm:text-sm text-white hover:bg-blue-700">
                      Respond
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Tasks and Reminders */}
      <div className="mt-6 bg-white rounded-lg shadow-sm p-4 sm:p-6">
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <h2 className="text-lg font-semibold">Tasks & Reminders</h2>
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            Add New
          </button>
        </div>
        
        <div className="space-y-3">
          {[
            { icon: CheckCircle, color: 'green', title: 'Confirm catering for Johnson Wedding', due: 'May 15, 2025' },
            { icon: AlertCircle, color: 'red', title: 'Follow up on Tech Corp deposit payment', due: 'April 20, 2025' },
            { icon: Clock, color: 'blue', title: 'Schedule maintenance for sound system', due: 'April 30, 2025' },
          ].map((task, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-md">
              <task.icon size={16} className={`text-${task.color}-600 flex-shrink-0 mt-0.5`} />
              <div>
                <p className="font-medium text-gray-900">{task.title}</p>
                <p className="text-xs sm:text-sm text-gray-600">Due by: {task.due}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;