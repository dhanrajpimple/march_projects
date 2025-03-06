import React, { useState } from 'react';
import { Search, Filter, Download, CreditCard, DollarSign, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import AdminNavbar from '~/components/AdminNavbar';

// Mock data
const payments = [
  {
    id: 1,
    client: 'Sarah Johnson',
    event: 'Wedding',
    eventDate: '2025-06-15',
    amount: 3500,
    status: 'Paid',
    paymentDate: '2023-03-15',
    paymentMethod: 'Credit Card',
    transactionId: 'txn_1234567890',
    notes: 'Full payment received'
  },
  {
    id: 2,
    client: 'Michael Chen',
    event: 'Corporate Event',
    eventDate: '2025-05-05',
    amount: 2500,
    status: 'Partial',
    paymentDate: '2023-03-10',
    paymentMethod: 'Bank Transfer',
    transactionId: 'bt_0987654321',
    notes: 'Deposit of 50% received, remaining due by April 5, 2025'
  },
  {
    id: 3,
    client: 'Emily Rodriguez',
    event: 'Birthday Party',
    eventDate: '2025-04-22',
    amount: 1200,
    status: 'Pending',
    paymentDate: null,
    paymentMethod: null,
    transactionId: null,
    notes: 'Invoice sent on March 1, 2023'
  },
  {
    id: 4,
    client: 'David Wilson',
    event: 'Anniversary',
    eventDate: '2025-07-10',
    amount: 2800,
    status: 'Paid',
    paymentDate: '2023-03-20',
    paymentMethod: 'Credit Card',
    transactionId: 'txn_2468135790',
    notes: 'Full payment received'
  },
  {
    id: 5,
    client: 'Jennifer Lee',
    event: 'Wedding',
    eventDate: '2025-08-15',
    amount: 3500,
    status: 'Partial',
    paymentDate: '2023-03-05',
    paymentMethod: 'Credit Card',
    transactionId: 'txn_1357924680',
    notes: 'Deposit of 25% received, next payment due by June 15, 2023'
  }
];

const AdminPaymentsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [expandedId, setExpandedId] = useState<number | null>(null);
  
  const filteredPayments = payments.filter(payment => {
    const matchesSearch = 
      payment.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.event.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (payment.transactionId && payment.transactionId.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesStatus = statusFilter === 'All' || payment.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });
  
  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };
  
  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };
  
  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'Paid':
        return 'bg-green-100 text-green-800';
      case 'Partial':
        return 'bg-yellow-100 text-yellow-800';
      case 'Pending':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  const totalRevenue = filteredPayments.reduce((sum, payment) => {
    if (payment.status !== 'Pending') {
      return sum + payment.amount;
    }
    return sum;
  }, 0);
  
  return (
    <div>
      <AdminNavbar/> 
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 mt-5">
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-500 text-sm font-medium">Total Revenue</h3>
            <div className="p-2 bg-green-100 rounded-full">
              <DollarSign size={20} className="text-green-600" />
            </div>
          </div>
          <p className="text-2xl font-bold">{formatCurrency(totalRevenue)}</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-500 text-sm font-medium">Pending Payments</h3>
            <div className="p-2 bg-red-100 rounded-full">
              <CreditCard size={20} className="text-red-600" />
            </div>
          </div>
          <p className="text-2xl font-bold">
            {filteredPayments.filter(p => p.status === 'Pending').length}
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-500 text-sm font-medium">Upcoming Events</h3>
            <div className="p-2 bg-blue-100 rounded-full">
              <Calendar size={20} className="text-blue-600" />
            </div>
          </div>
          <p className="text-2xl font-bold">
            {filteredPayments.length}
          </p>
        </div>
      </div>
      
      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by client, event, or transaction ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field pl-10"
            />
          </div>
          
          <div className="w-full md:w-auto">
            <div className="flex items-center space-x-2">
              <Filter size={18} className="text-gray-500" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="input-field"
              >
                <option value="All">All Statuses</option>
                <option value="Paid">Paid</option>
                <option value="Partial">Partial</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
          </div>
          
          <button className="w-full md:w-auto flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            <Download size={18} />
            <span>Export</span>
          </button>
        </div>
      </div>
      
      {/* Payments Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {filteredPayments.length === 0 ? (
          <div className="p-6 text-center">
            <p className="text-gray-500">No payments found matching your filters.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Client / Event
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Event Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Payment Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredPayments.map((payment) => (
                  <React.Fragment key={payment.id}>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{payment.client}</div>
                        <div className="text-sm text-gray-500">{payment.event}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{formatCurrency(payment.amount)}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(payment.status)}`}>
                          {payment.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(payment.eventDate)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(payment.paymentDate)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => toggleExpand(payment.id)}
                          className="text-blue-600 hover:text-blue-900 focus:outline-none flex items-center justify-end space-x-1"
                        >
                          <span>Details</span>
                          {expandedId === payment.id ? (
                            <ChevronUp size={16} />
                          ) : (
                            <ChevronDown size={16} />
                          )}
                        </button>
                      </td>
                    </tr>
                    
                    {expandedId === payment.id && (
                      <tr>
                        <td colSpan={6} className="px-6 py-4 bg-gray-50">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="text-sm font-medium text-gray-900 mb-2">Payment Details</h4>
                              <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                  <span className="text-gray-500">Payment Method:</span>
                                  <span className="font-medium">{payment.paymentMethod || 'N/A'}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-500">Transaction ID:</span>
                                  <span className="font-medium">{payment.transactionId || 'N/A'}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-500">Payment Date:</span>
                                  <span className="font-medium">{formatDate(payment.paymentDate)}</span>
                                </div>
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="text-sm font-medium text-gray-900 mb-2">Notes</h4>
                              <p className="text-sm text-gray-600">{payment.notes}</p>
                            </div>
                          </div>
                          
                          <div className="mt-4 flex space-x-2 justify-end">
                            {payment.status === 'Pending' && (
                              <button className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm">
                                Record Payment
                              </button>
                            )}
                            {payment.status === 'Partial' && (
                              <button className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
                                Record Balance
                              </button>
                            )}
                            <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 text-sm">
                              Edit
                            </button>
                            {payment.status !== 'Pending' && (
                              <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 text-sm">
                                Send Receipt
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPaymentsPage;