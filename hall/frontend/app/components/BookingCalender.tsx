import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Link } from "@remix-run/react";
import { fetchEvents, addEvent } from '~/features/eventSlice';
import { RootState, AppDispatch } from '../store';
import { useSelector, useDispatch } from 'react-redux';

interface BookingCalendarProps {
  isAdmin?: boolean;
  onDateSelect?: (info: any) => void;
}

const BookingCalendar: React.FC<BookingCalendarProps> = ({ isAdmin = false, onDateSelect }) => {
  
  const dispatch = useDispatch<AppDispatch>(); 
  const { event: events, loading: eventLoading } = useSelector((state: RootState) => state.events);
  
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Fetch events when component mounts
  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  const handleDateClick = (info: any) => {
    if (isAdmin) {
      if (onDateSelect) {
        onDateSelect(info);
      }
    } else {
      setSelectedDate(new Date(info.date));
    }
  };

  const handleAddEvent = async () => {
    if (selectedDate) {
      await dispatch(addEvent({ title: "New Booking", start: selectedDate.toISOString() }));
      dispatch(fetchEvents()); // Refresh events after adding a new one
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6 w-full max-w-5xl mx-auto">
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
              <div className="text-xs sm:text-sm font-semibold text-center">
                {eventInfo.event.title || "No Title"}
              </div>
            </div>
          )}
        />
      </div>

      {!isAdmin && selectedDate && (
        <div className="mt-6 p-4 bg-blue-50 rounded-md text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2 text-center md:text-left">
            {selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </h3>

          {events.some(event => new Date(event.start).toDateString() === selectedDate.toDateString()) ? (
            <div>
              <p className="text-red-600 mb-3">This date is already booked.</p>
              <p className="text-gray-700">Please select another date or contact us for more information.</p>
            </div>
          ) : (
            <div>
              <p className="text-green-600 mb-3">This date is available!</p>
              <button 
                onClick={handleAddEvent} 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg inline-block mt-2 hover:bg-blue-700 transition"
              >
                Book This Date
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BookingCalendar;
