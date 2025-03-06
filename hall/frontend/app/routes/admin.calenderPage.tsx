import React from 'react';
import AdminCalendar from "~/components/AdminCalender";
import AdminNavbar from '~/components/AdminNavbar';
import Footer from '~/components/Footer';

const AdminCalendarPage: React.FC = () => {
  return (
    <div>
      <AdminNavbar/> 
      <AdminCalendar />
       <Footer/>
    </div>
  );
};

export default AdminCalendarPage;