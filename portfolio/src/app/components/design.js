"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaFileDownload } from 'react-icons/fa';


const Design = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'resume.pdf';
        link.click();
    };

    return (
        <div id='home' className=' dark:bg-primaryDark h-full '>
            <div className='flex flex-wrap pt-10 relative'>

                <div className='flex-1  px-32 py-16'>
                    <motion.p
                        className='text-l dark:text-light'
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Asalamu Alaikum, I am
                    </motion.p>

                    <motion.h1
                        className='text-4xl font-bold mb-4 dark:text-light'
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Muhammad Ahmad
                    </motion.h1>

                    <motion.p
                        className='text-xl dark:text-light'
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        Full Stack Developer, UI Designer
                    </motion.p>

                    <button
                        onClick={handleDownload}
                        className="flex items-center px-4 py-2 mt-4 bg-primaryDark dark:bg-light p-1 text-light dark:text-dark rounded-md hover:scale-110"
                    >
                        <FaFileDownload className="mr-1" />

                        Resume
                    </button>

                </div>

                <motion.div
                    className=' h-[500px] w-[500px] rounded-full absolute top-0 right-12'
                    style={{
                        backgroundImage: `url('/images/profile/circle.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                />
                <div className='relative ' >
                    <img src="/images/profile/me.png" alt="Profile Picture" className='h-[500px] w-[610px]  ' />
                </div>
            </div>
        </div>
    );
};
export default Design;