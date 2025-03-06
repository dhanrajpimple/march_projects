import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { X } from 'lucide-react';

// Mock data for booked dates
const initialEvents = [
  {
    id: '1',
    title: 'Wedding - Johnson Family',
    start: new Date(new Date().getFullYear(), new Date().getMonth(), 15),
    end: new Date(new Date().getFullYear(), new Date().getMonth(), 16),
    backgroundColor: '#ef4444',
    borderColor: '#ef4444',
    extendedProps: {
      client: 'Sarah Johnson',
      phone: '(123) 456-7890',
      email: 'sarah@example.com',
      status: 'Confirmed',
      deposit: 'Paid',
      type: 'Wedding'
    },
    allDay: true
  },
  {
    id: '2',
    title: 'Corporate Event - Tech Corp',
    start: new Date(new Date().getFullYear(), new Date().getMonth(), 5),
    end: new Date(new Date().getFullYear(), new Date().getMonth(), 6),
    backgroundColor: '#3b82f6',
    borderColor: '#3b82f6',
    extendedProps: {
      client: 'Michael Chen',
      phone: '(234) 567-8901',
      email: 'michael@techcorp.com',
      status: 'Confirmed',
      deposit: 'Paid',
      type: 'Corporate'
    },
    allDay: true
  },
  {
    id: '3',
    title: 'Birthday Party - Emily Rodriguez',
    start: new Date(new Date().getFullYear(), new Date().getMonth(), 22),
    backgroundColor: '#f97316',
    borderColor: '#f97316',
    extendedProps: {
      client: 'Emily Rodriguez',
      phone: '(345) 678-9012',
      email: 'emily@example.com',
      status: 'Pending',
      deposit: 'Due',
      type: 'Birthday'
    },
    allDay: true
  },
  {
    id: '4',
    title: 'Reserved - Maintenance',
    start: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 8),
    end: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 9),
    backgroundColor: '#6b7280',
    borderColor: '#6b7280',
    extendedProps: {
      client: 'Internal',
      status: 'Confirmed',
      type: 'Maintenance'
    },
    allDay: true
  }
];

const eventTypes = [
  { value: 'Wedding', color: '#ef4444' },
  { value: 'Corporate', color: '#3b82f6' },
  { value: 'Birthday', color: '#f97316' },
  { value: 'Anniversary', color: '#8b5cf6' },
  { value: 'Conference', color: '#10b981' },
  { value: 'Maintenance', color: '#6b7280' },
  { value: 'Other', color: '#6366f1' }
];

const AdminCalendar: React.FC = () => {
  const [events, setEvents] = useState(initialEvents);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  
  const [formData, setFormData] = useState({
    title: '',
    client: '',
    phone: '',
    email: '',
    status: 'Pending',
    deposit: 'Due',
    type: 'Wedding',
    startDate: '',
    endDate: '',
    notes: ''
  });
  
  const handleDateClick = (info: any) => {
    setSelectedDate(info.date);
    resetForm();
    setFormData(prev => ({
      ...prev,
      startDate: info.dateStr,
      endDate: info.dateStr
    }));
    setIsModalOpen(true);
  };
  
  const handleEventClick = (info: any) => {
    setSelectedEvent(info.event);
    const event = info.event;
    
    setFormData({
      title: event.title,
      client: event.extendedProps.client || '',
      phone: event.extendedProps.phone || '',
      email: event.extendedProps.email || '',
      status: event.extendedProps.status || 'Pending',
      deposit: event.extendedProps.deposit || 'Due',
      type: event.extendedProps.type || 'Other',
      startDate: event.startStr.split('T')[0],
      endDate: event.endStr ? event.endStr.split('T')[0] : event.startStr.split('T')[0],
      notes: event.extendedProps.notes || ''
    });
    
    setIsModalOpen(true);
  };
  
  const resetForm = () => {
    setFormData({
      title: '',
      client: '',
      phone: '',
      email: '',
      status: 'Pending',
      deposit: 'Due',
      type: 'Wedding',
      startDate: '',
      endDate: '',
      notes: ''
    });
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const eventColor = eventTypes.find(type => type.value === formData.type)?.color || '#6366f1';
    
    if (selectedEvent) {
      // Update existing event
      const updatedEvents = events.map(event => {
        if (event.id === selectedEvent.id) {
          return {
            ...event,
            title: formData.title,
            start: new Date(formData.startDate),
            end: formData.endDate ? new Date(formData.endDate) : undefined,
            backgroundColor: eventColor,
            borderColor: eventColor,
            extendedProps: {
              client: formData.client,
              phone: formData.phone,
              email: formData.email,
              status: formData.status,
              deposit: formData.deposit,
              type: formData.type,
              notes: formData.notes
            }
          };
        }
        return event;
      });
      
      setEvents(updatedEvents);
    } else {
      // Add new event
      const newEvent = {
        id: Date.now().toString(),
        title: formData.title,
        start: new Date(formData.startDate),
        end: formData.endDate ? new Date(formData.endDate) : undefined,
        backgroundColor: eventColor,
        borderColor: eventColor,
        extendedProps: {
          client: formData.client,
          phone: formData.phone,
          email: formData.email,
          status: formData.status,
          deposit: formData.deposit,
          type: formData.type,
          notes: formData.notes
        },
        allDay: true
      };
      
      setEvents([...events, newEvent]);
    }
    
    closeModal();
  };
  
  const handleDelete = () => {
    if (selectedEvent) {
      const updatedEvents = events.filter(event => event.id !== selectedEvent.id);
      setEvents(updatedEvents);
      setIsDeleteModalOpen(false);
      closeModal();
    }
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
    resetForm();
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6">

<div className="flex flex-col md:flex-row items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <button className="bg-purple-500 text-white p-2 rounded-lg">&#8249;</button>
          <h2 className="text-lg font-semibold">March 2025</h2>
          <button className="bg-purple-500 text-white p-2 rounded-lg">&#8250;</button>
        </div>
        <button className="bg-gray-500 text-white p-2 rounded-lg">Today</button>
        <div className="flex space-x-2">
          <button className="bg-black text-white p-2 rounded-lg">Month</button>
          <button className="bg-purple-500 text-white p-2 rounded-lg">Week</button>
        </div>
      </div>
      <div className="overflow-x-auto">
     <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={false}
          events={events}
          dateClick={handleDateClick}
          height="auto"
          className="text-xs sm:text-sm"
          eventContent={(eventInfo) => (
            <div className="p-1">
              <div className="text-xs sm:text-sm font-semibold text-center">{eventInfo.event.title}</div>
            </div>
          )}
        />
      </div>
      {/* Event Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-semibold">
                {selectedEvent ? 'Edit Event' : 'Add New Event'}
              </h3>
              <button 
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="md:col-span-2">
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    Event Title *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="e.g., Wedding - Johnson Family"
                  />
                </div>
                
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                    Event Type *
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                    className="input-field"
                  >
                    {eventTypes.map(type => (
                      <option key={type.value} value={type.value}>
                        {type.value}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="client" className="block text-sm font-medium text-gray-700 mb-1">
                    Client Name
                  </label>
                  <input
                    type="text"
                    id="client"
                    name="client"
                    value={formData.client}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Client name"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="(123) 456-7890"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="client@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Start Date *
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                    className="input-field"
                  />
                </div>
                
                <div>
                  <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">
                    End Date
                  </label>
                  <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    className="input-field"
                    min={formData.startDate}
                  />
                  <p className="text-xs text-gray-500 mt-1">Leave empty for single-day events</p>
                </div>
                
                <div>
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="deposit" className="block text-sm font-medium text-gray-700 mb-1">
                    Deposit Status
                  </label>
                  <select
                    id="deposit"
                    name="deposit"
                    value={formData.deposit}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="Due">Due</option>
                    <option value="Partial">Partial</option>
                    <option value="Paid">Paid</option>
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                    Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={3}
                    className="input-field resize-none"
                    placeholder="Additional information about this event..."
                  ></textarea>
                </div>
              </div>
              
              <div className="flex justify-end space-x-3 mt-6">
                {selectedEvent && (
                  <button
                    type="button"
                    onClick={() => setIsDeleteModalOpen(true)}
                    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors duration-200"
                  >
                    Delete
                  </button>
                )}
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200"
                >
                  {selectedEvent ? 'Update Event' : 'Add Event'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
            <h3 className="text-xl font-semibold mb-4">Confirm Deletion</h3>
            <p className="text-gray-700 mb-6">
              Are you sure you want to delete this event? This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors duration-200"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCalendar;