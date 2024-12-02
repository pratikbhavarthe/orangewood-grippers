"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="/3.mp4" // Optional: Poster image for when the video is loading
      >
        <source src="/3.mp4" type="video/mp4" />
        {/* Add more sources for other formats (WebM, Ogg) if needed */}
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="container mx-auto px-4 py-16 sm:py-24 md:py-32 h-full flex items-center justify-center relative z-10">
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="text-center w-full max-w-3xl"
        >
          {/* Hero Heading: Floating Effect */}
          <motion.h1
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.8,
              ease: "easeOut",
              delay: 0.3,
              type: "spring",
              stiffness: 50,
              damping: 12,
            }}
            className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight sm:text-3xl"
          >
            ORANGEWOOD LABS
          </motion.h1>

          {/* Subheading: Gentle Floating and Fading */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              delay: 1,
            }}
            className="text-lg md:text-2xl mb-8 sm:text-base"
          >
            Discover innovative solutions and the future of soft grippers.
          </motion.p>

          {/* Shop Now Button: Removed Glow Effect */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 1.5,
            }}
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", stiffness: 300, damping: 15 },
            }}
            whileTap={{
              scale: 0.98,
              transition: { type: "spring", stiffness: 400, damping: 25 },
            }}
            className="px-6 py-3 bg-orange-500 text-white text-lg font-semibold rounded-full hover:bg-orange-600 transition duration-300 sm:px-8 sm:py-4 sm:text-xl"
          >
            Shop Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
