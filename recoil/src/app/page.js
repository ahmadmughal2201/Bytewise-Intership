"use client";
import { RecoilRoot, atom, useRecoilState } from 'recoil';
import React from 'react';

const countState = atom({
  key: 'countState',
  default: 0,
});

export default function ClientComponent() {
  const [count, setCount] = useRecoilState(countState);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <RecoilRoot>
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
    </RecoilRoot>
  );
}
