"use client";

import { useState } from 'react';

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return {
    count,
    increment,
    decrement,
  };
}

export default function ClientComponent() {

  // You can use the useCounter hook here if needed
  const { count, increment, decrement } = useCounter();

  // Render the component as needed
  return (
    <div className='bg-gray-100 flex flex-col items-center justify-center h-screen'>
    <h1 className='text-3xl mb-4'>Counter: {count}</h1>
    <div className='flex gap-x-4'>
      <button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={increment}>
        Increment
      </button>
      <button className='bg-red-500 text-white px-4 py-2 rounded' onClick={decrement}>
        Decrement
      </button>
    </div>
  </div>
  );
}