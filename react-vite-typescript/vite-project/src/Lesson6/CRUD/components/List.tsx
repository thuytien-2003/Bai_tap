import React, { useEffect } from 'react';
import type { Customer } from '../types/Customer';
import Delete from './Delete';
import Update from './Update';

type Props = {
  reload?: number;
};

const url = 'https://server.aptech.io/online-shop/customers';

export default function List({ reload = 0 }: Props) {
  const [selectedCustomer, setSelectedCustomer] = React.useState<Customer | null>(null);
  const [customers, setCustomers] = React.useState<Customer[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [responseInfo, setResponseInfo] = React.useState<any>(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        setLoading(true);
        setError(null);
        
        console.log('Fetching customers from:', url);
        
        const response = await fetch(url);
        
        console.log('Response status:', response.status);
        console.log('Response headers:', response.headers);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        console.log('Raw response data:', data);
        console.log('Number of customers received:', data.length);
        console.log('Data type:', typeof data);
        console.log('Is array?', Array.isArray(data));
        
        // Check if data has pagination info
        if (data.data && Array.isArray(data.data)) {
          console.log('Paginated response detected');
          setResponseInfo(data);
          setCustomers(data.data);
        } else if (Array.isArray(data)) {
          setCustomers(data);
        } else {
          console.error('Unexpected data format:', data);
          setError('Unexpected data format received from server');
        }
        
      } catch (error) {
        console.error('Fetch error:', error);
        setError(error instanceof Error ? error.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, [reload]);

  const handleOnSelect = (customer: Customer) => {
    setSelectedCustomer(customer);
  };

  const handleOnUpdated = (customer: Customer) => {
    setCustomers((prev) => 
      prev.map((c) => (c.id === customer.id ? customer : c))
    );
    setSelectedCustomer(null);
  };

  const handleOnDeleted = (id: number) => {
    setCustomers((prev) => prev.filter((customer) => customer.id !== id));
  };

  if (loading) {
    return (
      <div className='container mx-auto bg-white rounded shadow mb-4 p-4'>
        <p>Loading customers...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className='container mx-auto bg-white rounded shadow mb-4 p-4'>
        <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded'>
          <strong>Error:</strong> {error}
        </div>
      </div>
    );
  }

  return (
    <div className='container mx-auto bg-white rounded shadow mb-4 p-4'>
      <h2 className='text-xl font-bold mb-4'>Customer List</h2>
      
      {/* Debug Information */}
      <div className='mb-4 p-3 bg-gray-100 rounded text-sm'>
        <p><strong>Debug Info:</strong></p>
        <p>Total customers loaded: {customers.length}</p>
        {responseInfo && (
          <div>
            <p>Response metadata: {JSON.stringify(responseInfo, null, 2)}</p>
          </div>
        )}
      </div>
      
      <div className='overflow-x-auto'>
        <table className='table-auto w-full border-collapse border border-gray-200'>
          <thead>
            <tr className='bg-gray-50'>
              <th className='border border-gray-300 p-2 text-left'>ID</th>
              <th className='border border-gray-300 p-2 text-left'>Name</th>
              <th className='border border-gray-300 p-2 text-left'>Email</th>
              <th className='border border-gray-300 p-2 text-left'>Phone</th>
              <th className='border border-gray-300 p-2 text-left'>Address</th>
              <th className='border border-gray-300 p-2 text-left'>Birthday</th>
              <th className='border border-gray-300 p-2 text-center'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className='hover:bg-gray-50'>
                <td className='border border-gray-300 p-2'>{customer.id}</td>
                <td className='border border-gray-300 p-2 font-medium'>
                  {customer.firstName} {customer.lastName}
                </td>
                <td className='border border-gray-300 p-2'>{customer.email}</td>
                <td className='border border-gray-300 p-2'>{customer.phoneNumber}</td>
                <td className='border border-gray-300 p-2'>{customer.address}</td>
                <td className='border border-gray-300 p-2'>{customer.birthday}</td>
                <td className='border border-gray-300 p-2'>
                  <div className='flex justify-center gap-2'>
                    <button 
                      onClick={() => handleOnSelect(customer)} 
                      className='bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 transition-colors text-sm'
                    >
                      Edit
                    </button>
                    <Delete 
                      customerId={customer.id} 
                      onDeleted={handleOnDeleted} 
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {customers.length === 0 && (
        <div className='text-center py-8 text-gray-500'>
          No customers found
        </div>
      )}

      {selectedCustomer && (
        <Update 
          customerId={selectedCustomer.id} 
          onUpdated={handleOnUpdated} 
          onClose={() => setSelectedCustomer(null)} 
        />
      )}
    </div>
  );
}