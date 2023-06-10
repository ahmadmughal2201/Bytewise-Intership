"use client";
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image';


export const Wrapper = ({ children }) => (
    

    <>
        <AnimatePresence>
            <div>
                <main className='h-screen flex items-center justify-center bg-slate-300'>
                    <form className='bg-white flex rounded-lg w-3/4 '>
                        <div className='felx-2 text-gray-700 p-20 '>
                            <h1 className='text-3xl '>Lets get started</h1>
                            <p className='text-xl text-gray-500 pt-2'>Have a memeorable experience with us</p>

                            <div className='mt-3'>
                                <div className='pb-4'>
                                <label className='block text-sm pb-2' htmlFor='name'>Name</label>
                                <input className='border-2 border-gray-500 rounded-md w-2/3 p-2' type='text' name='name' placeholder='Enter your name'></input>
                                </div>
                            </div>

                            <div className='mt-3'>
                                <div className='pb-4'>
                                <label className='block text-sm pb-2' htmlFor='country'>Country</label>
                                <input className='border-2 border-gray-500 rounded-md w-2/3 p-2' type='text' name='country' placeholder='Enter your Country'></input>
                                </div>
                            </div>

                            <div className='mt-3'>
                                <div className='pb-4'>
                                <label className='block text-sm pb-2' htmlFor='password'>Password</label>
                                <input className='border-2 border-gray-500 rounded-md w-2/3 p-2' type='text' name='password' placeholder='Enter your password'></input>
                                </div>
                            </div>

                            <button className='bg-teal-500 font-bold text-white mt-6 py-3 w-full rounded-md' type='submit' >Submit</button>

                        </div>


                        <div className='relative flex-1'>
                            <Image className='object-cover rounded-lg'  src="/bg.jpg" fill></Image>
                        </div>
                    </form>
                </main>
            </div>
        </AnimatePresence>
    </>

);