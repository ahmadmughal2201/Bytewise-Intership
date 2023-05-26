"use client";
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image';


export const Wrapper = ({ children }) => (

    <>
        <AnimatePresence>
            <div>
                <main className='h-screen flex bg-black'>
                    <div className='pl-10 p-10 flex-3 '>
                        <motion.h1 initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 15 }} transition={{ duration: 1 }} className="text-3xl font-bold text-white pt-7">
                            Welcome to space
                        </motion.h1>

                        <motion.h2 initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -15 }} transition={{ duration: 1 }} className="text-2xl  text-white pt-7">
                            Explore beyond the horizons!
                        </motion.h2>

                        <motion.button initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 15 }} transition={{ duration: 1 }} className='text-white mt-40 border-2 rounded-md w-20 '>
                            Explore
                        </motion.button>
                    </div>

                    <div className='flex-1 ml-5 w-50'>
                        <motion.div initial={{ rotate: 0 }}
                            animate={{ rotate: 360 }}
                            variants={{
                                infinite: { rotate: { repeat: true, origin: 'center' } },
                            }}
                            duration={1000}
                            easing="easeInOutQuint"  >
                            <Image className='  object-fit  ' src="/palnet1.png" width={300} height={300} />
                        </ motion.div>
                    </div>
                </main>
            </div>
        </AnimatePresence>
    </>

);