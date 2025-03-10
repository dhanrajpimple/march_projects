import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { X } from 'lucide-react';
import { fetchEvents, addEvent } from '~/features/eventSlice';
import { RootState, AppDispatch } from '~/store'; // Adjust based on your store setup

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
  const dispatch = useDispatch<AppDispatch>();
  const events = useSelector((state: RootState) => state.events.events); // Assuming events slice

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);

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

  useEffect(() => {
    dispatch(fetchEvents()); // Fetch events on mount
  }, [dispatch]);

  const handleDateClick = (info: any) => {
    setFormData(prev => ({
      ...prev,
      startDate: info.dateStr,
      endDate: info.dateStr
    }));
    setIsModalOpen(true);
  };

  const handleEventClick = (info: any) => {
    const event = info.event;
    setSelectedEvent(event);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const eventColor = eventTypes.find(type => type.value === formData.type)?.color || '#6366f1';

    const newEvent = {
      id: Date.now().toString(),
      title: formData.title,
      start: formData.startDate,
      end: formData.endDate ? formData.endDate : undefined,
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

    dispatch(addEvent(newEvent)); // Dispatch event to Redux store & backend

    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={false}
        events={events}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        height="auto"
      />

      {/* Modal for Adding/Editing Events */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-semibold">
                {selectedEvent ? 'Edit Event' : 'Add New Event'}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-4">
              <div className="mb-4">
                <label className="block text-sm font-medium">Event Title *</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} required className="input-field" />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium">Event Type *</label>
                <select name="type" value={formData.type} onChange={handleChange} required className="input-field">
                  {eventTypes.map(type => (
                    <option key={type.value} value={type.value}>{type.value}</option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium">Start Date *</label>
                <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required className="input-field" />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium">End Date</label>
                <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} className="input-field" />
              </div>

              <div className="flex justify-end space-x-2">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-gray-500 text-white rounded">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">{selectedEvent ? 'Update' : 'Add'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCalendar;
