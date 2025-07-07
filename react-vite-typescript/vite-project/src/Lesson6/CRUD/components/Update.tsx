import React, { useEffect } from 'react';
import type { Customer } from '../types/Customer';

type Props = {
  customerId: number;
  onUpdated?: (customer: Customer) => void;
  onClose?: () => void;
};

const url = 'https://server.aptech.io/online-shop/customers';

export default function Update({ customerId, onUpdated, onClose }: Props) {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    birthday: '',
  });

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const response = await fetch(`${url}/${customerId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        setFormData({
          firstName: data.firstName || '',
          lastName: data.lastName || '',
          email: data.email || '',
          phoneNumber: data.phoneNumber || '',
          address: data.address || '',
          birthday: data.birthday || '',
        });
      } catch (error) {
        console.error('Error fetching customer data:', error);
      }
    };

    fetchCustomerData();
  }, [customerId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    console.log(`Input changed: ${id} = ${value}`);
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form submitted:', formData);

    try {
      const response = await fetch(`${url}/${customerId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      console.log('Customer updated successfully:', data);

      if (onUpdated && typeof onUpdated === 'function') {
        onUpdated(data);
      }
    } catch (error) {
      console.error('Error updating customer:', error);
      alert('Error updating customer. Please try again.');
    }
  };

  return (
    <div className='fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center'>
      <form className='bg-white p-8 rounded-lg shadow-lg w-1/3' onSubmit={handleSubmit}>
        <h2 className='text-2xl font-semibold mb-4'>Update Customer</h2>
        
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700 mb-1' htmlFor='firstName'>
            First Name
          </label>
          <input 
            type='text' 
            id='firstName' 
            value={formData.firstName} 
            className='w-full p-2 border border-gray-300 rounded' 
            onChange={handleChange}
            required 
          />
        </div>
        
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700 mb-1' htmlFor='lastName'>
            Last Name
          </label>
          <input 
            type='text' 
            id='lastName' 
            value={formData.lastName} 
            className='w-full p-2 border border-gray-300 rounded' 
            onChange={handleChange}
            required 
          />
        </div>
        
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700 mb-1' htmlFor='email'>
            Email
          </label>
          <input 
            type='email' 
            id='email' 
            value={formData.email} 
            className='w-full p-2 border border-gray-300 rounded' 
            onChange={handleChange}
            required 
          />
        </div>
        
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700 mb-1' htmlFor='phoneNumber'>
            Phone Number
          </label>
          <input 
            type='tel' 
            id='phoneNumber' 
            value={formData.phoneNumber} 
            className='w-full p-2 border border-gray-300 rounded' 
            onChange={handleChange}
            required 
          />
        </div>
        
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700 mb-1' htmlFor='address'>
            Address
          </label>
          <input 
            type='text' 
            id='address' 
            value={formData.address} 
            className='w-full p-2 border border-gray-300 rounded' 
            onChange={handleChange}
            required 
          />
        </div>
        
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700 mb-1' htmlFor='birthday'>
            Birthday
          </label>
          <input 
            type='date' 
            id='birthday' 
            value={formData.birthday} 
            className='w-full p-2 border border-gray-300 rounded' 
            onChange={handleChange}
            required 
          />
        </div>
        
        <div className='flex justify-end gap-2'>
          <button 
            type='button'
            onClick={onClose} 
            className='w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600 transition-colors'
          >
            Close
          </button>
          <button 
            type='submit' 
            className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors'
          >
            Update Customer
          </button>
        </div>
      </form>
    </div>
  );
}