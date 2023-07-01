"use client"
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ image, title, description, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        setIsHovered(true);
        playVideo();
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        pauseVideo();
    };

    const playVideo = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const pauseVideo = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: index * 0.2,
                trigger: 'scroll',
            },
        },
    };

    const media = () => {
        if (image.endsWith('.mp4')) {
            return (
                <video
                    ref={videoRef}
                    src={image}
                    className="w-full mb-2 rounded-lg shadow-xl z-10"
                    autoPlay
                    loop
                    muted
                />
            );
        } else {
            return (
                <img src={image} alt={title} className="w-full mb-2 rounded-lg shadow-xl z-10" />
            );
        }
    };

    return (
        <motion.div
            variants={fadeInUp}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="dark:bg-primaryDark bg-white flex flex-col items-center rounded-lg shadow-lg sm:w-[360px] w-full mb-4 transition-all duration-300 hover:scale-105">
                {media()}
                <h3 className="text-xl font-bold mt-2 mb-2 dark:text-light">{title}</h3>
                <p className="dark:text-light p-4 text-center
                ">{description}</p>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
