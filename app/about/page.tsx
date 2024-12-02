"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar"; // Adjust path if needed
import Footer from "../components/Footer"; // Adjust path if needed
import Image from "next/image"; // For Next.js Image component

const AboutUs: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="bg-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Decorative Line Above About Us */}
      {isClient && (
        <motion.div
          className="w-20 h-1 mb-8 mx-auto"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        ></motion.div>
      )}

      {/* Hero Section with Video Background */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://owlwebassets.s3.ap-south-1.amazonaws.com/Website+Intro.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-80"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-start text-left px-6 sm:px-12 space-y-6">
          <motion.h1
            className="text-5xl sm:text-6xl font-extrabold text-orange-500 tracking-tight leading-tight"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            ABOUT US
          </motion.h1>
          <motion.p
            className="text-lg sm:text-2xl text-gray-300 max-w-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Innovating the future of robotics with cutting-edge AI solutions.
          </motion.p>
        </div>
      </div>

      {/* About Us Section */}
      <div className="py-16 px-6 sm:px-12">
        <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start space-y-12 lg:space-y-0 lg:space-x-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-left space-y-6">
            <motion.h2
              className="text-3xl sm:text-4xl font-semibold text-orange-500"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              WE ARE ORANGEWOOD LABS
            </motion.h2>
            <motion.p
              className="text-lg sm:text-xl text-gray-300 text-justify"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              At Orangewood Labs, we’re leading the charge in developing innovative robotic solutions that bridge the gap between automation and real-world industries, helping businesses stay ahead with AI-powered technology.
            </motion.p>
          </div>

          {/* Image Content */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <Image
              src="/20.avif" // Replace with the path to your image
              alt="Orangewood Labs Team"
              width={500}
              height={300}
              className="rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>

      {/* Decorative Line Below About Us Section */}
      {isClient && (
        <motion.div
          className="w-20 h-1 mb-8 mx-auto"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        ></motion.div>
      )}

      {/* Robotics Solution Section */}
      <div className="py-16 px-4 sm:px-12 bg-black">
        <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Image Content */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center lg:justify-start"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <Image
              src="/10.avif" // Update with your actual image path
              alt="Product Image"
              width={500}
              height={300}
              className="rounded-xl shadow-2xl transform transition-transform duration-300 hover:scale-105"
            />
          </motion.div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-left space-y-6">
            <motion.h3
              className="text-3xl sm:text-4xl font-semibold text-orange-500 uppercase"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              OUR ROBOTICS SOLUTION
            </motion.h3>
            <motion.p
              className="text-lg sm:text-xl text-gray-300 text-justify"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              Discover how our innovative robotics products are shaping the future of automation. Harnessing AI and robotics technology for industries worldwide.
            </motion.p>
            <motion.button
              className="mt-6 px-8 py-3 bg-orange-500 text-black text-lg font-semibold rounded-full hover:bg-orange-600 transition lg:ml-auto"
              whileHover={{ scale: 1.1 }}
              onClick={() => (window.location.href = "/store")}
            >
              Explore Products
            </motion.button>
          </div>
        </div>
      </div>

      {/* YouTube Video Card */}
      <div className="py-16 px-4 sm:px-6 bg-black">
        <div className="container mx-auto flex justify-center items-center">
          <div className="w-full sm:w-11/12 md:w-10/12 lg:w-3/4 xl:w-2/3 rounded-xl shadow-2xl overflow-hidden">
            <iframe
              className="w-full h-[280px] sm:h-[380px] lg:h-[480px]"
              src="https://www.youtube.com/embed/zWhNDp9aVz4?si=pHI0yI6iID3hRY_B"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;
