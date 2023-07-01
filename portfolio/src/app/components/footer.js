"use client"
import React from 'react';
import { motion } from 'framer-motion'
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from './icons'

const Footer = () => {
    return (
        <footer className="px-32 py-8 bg-primaryLight  dark:bg-dark">
            <div className="container mx-auto flex flex-col justify-between items-center dark:text-light">
                
                <div className="flex space-x-4">
                    <motion.a className='w-6 mr-3' whileHover={{ y: -2 }} whileTap={{ scale: 0.7 }} href="https://twitter.com/mosaafir_" target={"_blank"}>
                        <TwitterIcon />
                    </motion.a>
                    <motion.a className='w-6 mx-3' whileHover={{ y: -2 }} whileTap={{ scale: 0.7 }} href="https://www.linkedin.com/in/muhammad-ahmad-782b34262" target={"_blank"}>
                        <LinkedInIcon />
                    </motion.a>
                    <motion.a className='w-6 mx-3' whileHover={{ y: -2 }} whileTap={{ scale: 0.7 }} href="/" target={"_blank"}>
                        <PinterestIcon />
                    </motion.a>
                    <motion.a className='w-6 ml-3' whileHover={{ y: -2 }} whileTap={{ scale: 0.7 }} href="https://github.com/ahmadmughal2201" target={"_blank"}>
                        <GithubIcon />
                    </motion.a>
                </div>
                <p className='pt-10'>&copy; 2023 Muhammad Ahmad Mughal. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
