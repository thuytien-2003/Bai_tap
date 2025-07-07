//import React from 'react';

type Props = {
  customerId: number;
  onDeleted?: (id: number) => void;
};

const url = 'https://server.aptech.io/online-shop/customers';

export default function Delete({ customerId, onDeleted }: Props) {
  const handleOnDelete = async (id: number) => {
    try {
      if (!confirm('Are you sure you want to delete this customer?')) {
        console.log('Delete operation cancelled');
        return;
      }
      
      const response = await fetch(`${url}/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      console.log('Customer deleted successfully:', data);
      
      if (onDeleted && typeof onDeleted === 'function') {
        onDeleted(id);
      }
    } catch (error) {
      console.error('Error deleting customer:', error);
      alert('Error deleting customer. Please try again.');
    }
  };

  return (
    <button 
      className='bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition-colors' 
      onClick={() => handleOnDelete(customerId)}
    >
      Delete
    </button>
  );
}