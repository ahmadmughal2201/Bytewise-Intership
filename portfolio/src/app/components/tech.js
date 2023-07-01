"use client"
import React from 'react';
import { motion } from 'framer-motion';
const Technologies = () => {
    return (
        <section id="technologies" className="px-32 py-20 dark:bg-primaryDark">
            <div className="container mx-auto dark:text-light">
                <h2 className="text-3xl font-bold mb-4">Technologies</h2>
                <div className="flex flex-wrap justify-center items-center">

                    <motion.div className="mx-4" whileHover={{ y: -2, scale:1.2 }} whileTap={{ scale: 0.7 }}>
                        <img
                            src={'/images/icons/cSharp.png'}
                            className="w-10 h-10"
                        />
                    </motion.div>

                    <motion.div className="mx-4" whileHover={{ y: -2, scale:1.2 }} whileTap={{ scale: 0.7 }}>
                        <img
                            src={'/images/icons/js.png'}
                            className="w-10 h-10"
                        />
                    </motion.div>

                    <motion.div className="mx-4" whileHover={{ y: -2, scale:1.2 }} whileTap={{ scale: 0.7 }}>
                        <img
                            src={'/images/icons/html.png'}
                            className="w-10 h-10"
                        />
                    </motion.div>

                    <motion.div className="mx-4" whileHover={{ y: -2, scale:1.2 }} whileTap={{ scale: 0.7 }}>
                        <img
                            src={'/images/icons/react.png'}
                            className="w-10 h-10"
                        />
                    </motion.div>

                    <motion.div className="mx-4" whileHover={{ y: -2, scale:1.2 }} whileTap={{ scale: 0.7 }}>
                        <img
                            src={'/images/icons/tailwind.png'}
                            className="w-10 h-10"
                        />
                    </motion.div>

                    <motion.div className="mx-4" whileHover={{ y: -2, scale:1.2 }} whileTap={{ scale: 0.7 }}>
                        <img
                            src={'/images/icons/figma.png'}
                            className="w-10 h-10"
                        />
                    </motion.div>

                    <motion.div className="mx-4" whileHover={{ y: -2, scale:1.2 }} whileTap={{ scale: 0.7 }}>
                        <img
                            src={'/images/icons/netFrame.png'}
                            className="w-10 h-10"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
export default Technologies;

