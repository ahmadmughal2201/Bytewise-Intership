"use client"
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './projectCard';

const projects = [
    {
        image: '/images/projects/gui.mp4',
        title: 'Train Station Management',
        description: 'A Windows form application developed in C# for efficient management of trains and bookings',
    },
    {
        image: '/images/projects/app.mp4',
        title: 'PostFix',
        description: 'A Flutter-based mobile application that provides a platform for users to connect, share, and interact with each other',
    },
    {
        image: '/images/projects/zombie.mp4',
        title: 'Last Day',
        description: 'A thrilling game developed in C# with a custom framework, where players aim to defeat zombies and survive.',
    },
    {
        image: '/images/projects/farmer.png',
        title: 'Farmers Representative',
        description: ' An intuitive application designed to assist farmers in selling their crops, offering services like pick-up, drop-off, and storage. Users can also purchase crops directly from the platform',
    },
    // Add more projects as needed
];

const Projects = () => {
    const [index, setIndex] = useState(0);
    const ref = useRef(null);

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                // This delay will apply to the initial animation only
                delay: 0.2,
            },
        },
    };

    const handleEnter = () => {
        motion.set(ref, {
            variants: fadeInUp,
        });
    };

    const handleLeave = () => {
        motion.set(ref, {
            variants: {
                ...fadeInUp,
                opacity: 0,
            },
        });
    };


    return (
        <div id="projects-section" className='bg-primaryLight dark:bg-dark w-full pt-20 pb-20'>
        <div className="px-32  pt-10 pb-5">
            <h2 className="text-3xl font-bold mb-4 dark:text-light  ">Projects</h2>

            <motion.div
                className="flex flex-wrap justify-center gap-1"
                initial="hidden"
                animate="visible"
                ref={ref}
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={fadeInUp}
                        onEnter={handleEnter}
                        onLeave={handleLeave}
                    >
                        <ProjectCard
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            index={index}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
        </div>
    );
}

export default Projects;
