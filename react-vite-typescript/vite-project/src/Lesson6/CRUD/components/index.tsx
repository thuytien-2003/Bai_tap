import React from 'react';
import type { Customer } from '../types/Customer';
import List from './List';
import Create from './Create';

export default function Customers() {
  const [reload, setReload] = React.useState(0);

  const handleOnCreated = (customer: Customer) => {
    console.log('Customer created:', customer);
    setReload((prev) => prev + 1);
  };

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-6 flex justify-center ' >Customer Management</h1>
      <Create onCreated={handleOnCreated} />
      <List reload={reload} />
    </div>
  );
}