"use client";
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form'


export default function Home() {
  const [name, setName] = useState("");
  const [counrty, setCountry] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(""); // Define the error state variable
  const {register, handleSubmit} = useForm();


  const onSubmit = (e) => {

    // Check if password includes at least one number
    if (!/\d/.test(pass)) {
      setError("Password must include at least one number.");
      return;
    }

    setError("");

  };

  console.log( register('name'));

  return (
    <>
      <div>
        <main className='h-screen flex items-center justify-center bg-slate-300'>
          <form onSubmit={handleSubmit(onSubmit)} className='bg-white flex rounded-lg w-3/4 '>
            <div className='felx-2 text-gray-700 p-20 '>
              <h1 className='text-3xl '>Lets get started</h1>
              <p className='text-xl text-gray-500 pt-2'>Have a memeorable experience with us</p>

              <div className='mt-3'>
                <div className='pb-4'>
                  <label className='block text-sm pb-2' htmlFor='name'>Name</label>
                  <input className='border-2 border-gray-500 rounded-md w-full p-2' type='text' {...register('name')} placeholder='Enter your name'
                    value={name} onChange={(e) => setName(e.target.value)}
                  ></input>
                </div>
              </div>

              <div className='mt-3'>
                <div className='pb-4'>
                  <label className='block text-sm pb-2' htmlFor='country'>Country</label>
                  <input className='border-2 border-gray-500 rounded-md w-full p-2' type='text' {...register('country')} placeholder='Enter your Country'
                    value={counrty} onChange={(e) => setCountry(e.target.value)}
                  ></input>
                </div>
              </div>

              <div className='mt-3'>
                <div className='pb-4'>
                  <label className='block text-sm pb-2' htmlFor='password'>Password</label>
                  <input className='border-2 border-gray-500 rounded-md w-full p-2' type='password' {...register('password')} placeholder='Enter your password'
                    value={pass} onChange={(e) => setPass(e.target.value)}
                  ></input>
                  {error && <p className="text-red-500">{error}</p>} {/* Display error message */}

                </div>
              </div>

              <button className='bg-teal-500 font-bold text-white mt-6 py-3 w-full rounded-md' type='submit' >Submit</button>

            </div>


            <div className='relative flex-1'>
              <Image className='object-cover rounded-lg' src="/bg.jpg" fill></Image>
            </div>
          </form>
        </main>
      </div>  </>
  )
}
