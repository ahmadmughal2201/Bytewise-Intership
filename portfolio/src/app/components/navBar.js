"use client";
import { Link } from 'react-scroll';
import React from 'react'
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from './icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from '../hooks/useThemeSwitcher';

const CustomLink = ({ href, title, className = "" }) => {
  return (
    <Link to={href} smooth={true} spy={true} duration={500} className={`${className} relative group cursor-pointer`}>{title}
      <span className='h-[2px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-10/12 transition-[width] ease duration-300  dark:bg-light'> &nbsp; </span>

    </Link>
  )
}

const NavBar = () => {

  const [mode, setMode] = useThemeSwitcher();

  return (
    <header className='w-full px-32 py-8 bg-primary font-medium flex items-center justify-between dark:text-light sticky bg-opacity-75 top-0 z-10 dark:bg-opacity-75  dark:bg-dark'>
       <p className='font-bold  dark:text-light'>Muhammad Ahmad</p>

      <nav className='flex items-center justify-center flex-wrap'>
        <motion.button onClick={() => setMode(mode === "light" ? "dark" : "light")} className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`} whileHover={{ y: -2 }} whileTap={{ scale: 0.7 }}>
          {mode === "dark" ?
            <SunIcon className='fill-dark' /> : <MoonIcon className='fill-dark' />
          }
        </motion.button>

      </nav>

    </header>
  )
}

export default NavBar 