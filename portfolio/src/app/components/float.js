"use client"
import React from 'react';
import { FaHome, FaProjectDiagram, FaUser, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';
const FloatingNavbar = () => {
    return (
        <nav className="fixed bottom-5 left-1/2 transform -translate-x-1/2 w-1/4 flex justify-around bg-dark bg-opacity-75 p-4 rounded-full shadow-lg z-20"
        >
            <Link
                to="home"
                smooth={true}
                spy={true}
                duration={500}
            >
                <FaHome
                    className="text-white p-2 rounded-full hover:bg-gray-900"
                    style={{ width: "40px", height: "40px" }}
                />
            </Link>

            <Link
                to="projects-section"
                smooth={true}
                spy={true}
                duration={500}
            >
                <FaProjectDiagram
                    className="text-white p-2 rounded-full hover:bg-gray-900"
                    style={{ width: "40px", height: "40px" }}
                />
            </Link>


            <Link
                to="about"
                smooth={true}
                spy={true}
                duration={500}
            >

                <FaUser
                    className="text-white p-2 rounded-full hover:bg-gray-900"
                    style={{ width: "40px", height: "40px" }}
                />

            </Link>

            <Link
                to="contact"
                smooth={true}
                spy={true}
                duration={500}
            >
                <FaEnvelope
                    className="text-white p-2 rounded-full last:hover:bg-gray-900"
                    style={{ width: "40px", height: "40px" }}
                />
            </Link>

        </nav>
    );
};

export default FloatingNavbar;
