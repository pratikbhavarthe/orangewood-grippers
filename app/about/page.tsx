"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";  // Adjust path if needed
import Footer from "../components/Footer";  // Adjust path if needed
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
          className="w-20 h-1 bg-orange-600 mb-8 mx-auto"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        ></motion.div>
      )}

      {/* Hero Section */}
      <div className="relative w-full h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('/robotics-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-start text-left px-6 sm:px-12 space-y-4">
          <motion.h1
            className="text-5xl sm:text-6xl font-bold text-orange-500"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="text-lg sm:text-2xl text-gray-300"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Innovating the future of robotics with cutting-edge AI solutions.
          </motion.p>
          <motion.button
            className="mt-8 px-8 py-3 bg-orange-500 text-black text-lg font-semibold rounded-full hover:bg-orange-600 transition"
            whileHover={{ scale: 1.1 }}
          >
            Explore Products
          </motion.button>
        </div>
      </div>

      {/* About Us Section */}
      <div className="py-16 px-4 sm:px-12">
        <div className="container mx-auto text-center space-y-12">
          <motion.h2
            className="text-3xl sm:text-4xl font-semibold text-orange-500"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            We Are Orangewood Labs
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-300 mx-auto max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            At Orangewood Labs, we’re leading the charge in developing innovative robotic solutions that bridge the gap between automation and real-world industries, helping businesses stay ahead with AI-powered technology.
          </motion.p>
        </div>
      </div>

      {/* Decorative Line Below About Us Section */}
      {isClient && (
        <motion.div
          className="w-20 h-1 bg-orange-600 mb-8 mx-auto"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        ></motion.div>
      )}

      {/* Landscape Card with Image */}
      <div className="py-16 px-4 sm:px-12">
        <div className="container mx-auto flex justify-between items-center space-x-12">
          <div className="w-1/2">
            <Image
              src="/product-image.jpg" // Update the path with your image
              alt="Product Image"
              width={500}
              height={300}
              className="rounded-xl shadow-lg"
            />
          </div>
          <div className="w-1/2 text-left">
            <h3 className="text-3xl font-semibold text-orange-500 mb-4">Our Robotics Solution</h3>
            <p className="text-lg text-gray-300">
              Discover how our innovative robotics products are shaping the future of automation. Harnessing AI and robotics technology for industries worldwide.
            </p>
            <motion.button
              className="mt-6 px-8 py-3 bg-orange-500 text-black text-lg font-semibold rounded-full hover:bg-orange-600 transition"
              whileHover={{ scale: 1.1 }}
            >
              Explore Products
            </motion.button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;
