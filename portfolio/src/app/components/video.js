"use client"
import React from 'react';

const YouTubeVideo = () => {
    return (
        <div className="video-container px-32 py-20 bg-primaryLight  dark:bg-dark">
            <h2 className="text-3xl font-bold mb-4  dark:text-light">Glimpse of My Journey</h2>
            <div className="flex flex-col justify-center items-center">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/qdbPJPxcKqE?start=105"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default YouTubeVideo;
