import React, { useState } from 'react';
import { Outlet, Link, useLocation, Navigate } from "@remix-run/react"
import { 
  Menu, X, LayoutDashboard, Calendar, MessageSquare, 
  CreditCard, LogOut, ChevronDown, Bell, User
} from 'lucide-react';

const AdminLayout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true); // In a real app, this would be managed by auth context
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const location = useLocation();

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" />;
  }

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    // In a real app, this would call your logout function
    setIsAuthenticated(false);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex md:flex-col md:w-64 bg-white shadow-md">
        <div className="p-6 border-b">
          <Link to="/admin/dashboard" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-blue-600">GrandHall Admin</span>
          </Link>
        </div>
        
        <nav className="flex-grow p-6 space-y-1">
          <Link 
            to="/admin/dashboard" 
            className={`flex items-center space-x-3 px-4 py-3 rounded-md transition-colors duration-200 ${
              isActive('/admin/dashboard') 
                ? 'bg-blue-50 text-blue-600' 
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </Link>
          
          <Link 
            to="/admin/calendar" 
            className={`flex items-center space-x-3 px-4 py-3 rounded-md transition-colors duration-200 ${
              isActive('/admin/calendar') 
                ? 'bg-blue-50 text-blue-600' 
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Calendar size={20} />
            <span>Calendar</span>
          </Link>
          
          <Link 
            to="/admin/inquiries" 
            className={`flex items-center space-x-3 px-4 py-3 rounded-md transition-colors duration-200 ${
              isActive('/admin/inquiries') 
                ? 'bg-blue-50 text-blue-600' 
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <MessageSquare size={20} />
            <span>Inquiries</span>
          </Link>
          
          <Link 
            to="/admin/payments" 
            className={`flex items-center space-x-3 px-4 py-3 rounded-md transition-colors duration-200 ${
              isActive('/admin/payments') 
                ? 'bg-blue-50 text-blue-600' 
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <CreditCard size={20} />
            <span>Payments</span>
          </Link>
          
          <button 
            onClick={handleLogout}
            className="flex items-center space-x-3 px-4 py-3 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-200 w-full"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm z-10">
          <div className="px-4 py-4 flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            <div className="md:hidden flex-1 text-center">
              <span className="text-lg font-semibold text-blue-600">GrandHall Admin</span>
            </div>
            
            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <div className="relative">
                <button 
                  className="text-gray-700 focus:outline-none"
                  onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                >
                  <Bell size={20} />
                </button>
                
                {isNotificationsOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg py-1 z-20">
                    <div className="px-4 py-2 border-b">
                      <h3 className="text-sm font-semibold">Notifications</h3>
                    </div>
                    <div className="max-h-60 overflow-y-auto">
                      <div className="px-4 py-3 hover:bg-gray-50 border-b">
                        <p className="text-sm font-medium">New booking request</p>
                        <p className="text-xs text-gray-500">John Doe - Wedding - June 15, 2025</p>
                      </div>
                      <div className="px-4 py-3 hover:bg-gray-50 border-b">
                        <p className="text-sm font-medium">Payment received</p>
                        <p className="text-xs text-gray-500">$500 - Corporate Event - May 10, 2025</p>
                      </div>
                      <div className="px-4 py-3 hover:bg-gray-50">
                        <p className="text-sm font-medium">New inquiry</p>
                        <p className="text-xs text-gray-500">Sarah Smith - Birthday Party</p>
                      </div>
                    </div>
                    <div className="px-4 py-2 border-t text-center">
                      <a href="#" className="text-xs text-blue-600 hover:text-blue-800">View all notifications</a>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Profile */}
              <div className="relative">
                <button 
                  className="flex items-center space-x-2 focus:outline-none"
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                >
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <User size={16} className="text-gray-600" />
                  </div>
                  <span className="hidden md:inline text-sm font-medium">Admin User</span>
                  <ChevronDown size={16} className="hidden md:inline" />
                </button>
                
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                    <button 
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>
        
        {/* Mobile Sidebar */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-50">
            <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
              <div className="p-6 border-b flex justify-between items-center">
                <span className="text-xl font-bold text-blue-600">GrandHall Admin</span>
                <button 
                  className="text-gray-700 focus:outline-none"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X size={24} />
                </button>
              </div>
              
              <nav className="p-6 space-y-1">
                <Link 
                  to="/admin/dashboard" 
                  className={`flex items-center space-x-3 px-4 py-3 rounded-md transition-colors duration-200 ${
                    isActive('/admin/dashboard') 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <LayoutDashboard size={20} />
                  <span>Dashboard</span>
                </Link>
                
                <Link 
                  to="/admin/calendar" 
                  className={`flex items-center space-x-3 px-4 py-3 rounded-md transition-colors duration-200 ${
                    isActive('/admin/calendar') 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Calendar size={20} />
                  <span>Calendar</span>
                </Link>
                
                <Link 
                  to="/admin/inquiries" 
                  className={`flex items-center space-x-3 px-4 py-3 rounded-md transition-colors duration-200 ${
                    isActive('/admin/inquiries') 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MessageSquare size={20} />
                  <span>Inquiries</span>
                </Link>
                
                <Link 
                  to="/admin/payments" 
                  className={`flex items-center space-x-3 px-4 py-3 rounded-md transition-colors duration-200 ${
                    isActive('/admin/payments') 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <CreditCard size={20} />
                  <span>Payments</span>
                </Link>
                
                <button 
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center space-x-3 px-4 py-3 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-200 w-full"
                >
                  <LogOut size={20} />
                  <span>Logout</span>
                </button>
              </nav>
            </div>
          </div>
        )}
        
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;