"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar"; // Adjust the path based on your folder structure
import Footer from "../components/Footer"; // Adjust the path based on your folder structure
import Image from 'next/image';


const OurProducts = () => {
  const [isClient, setIsClient] = useState(false); // State to track if we are on the client side

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[50vh] sm:h-screen">
        <motion.img
          src="/2g.PNG" // Adjust the path as needed for your image
          alt="Hero Image"
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute bottom-20 left-6 text-white text-left p-4 bg-opacity-60 rounded-lg w-full max-w-lg">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Our Latest Gripper Technology
          </motion.h2>
          <motion.p
            className="text-lg mt-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            Innovating the future of robotic grippers for precision and
            efficiency.
          </motion.p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-16 px-4 sm:px-12 flex flex-col items-center justify-center">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between">
          {/* Left Section: What Are Soft Grippers */}
          <div className="w-full sm:w-1/2 text-left mb-12">
            {/* Decorative Line above */}
            {isClient && (
              <motion.div
                className="w-20 h-1 bg-orange-600 mb-8"
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              ></motion.div>
            )}
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              WHAT ARE SOFT GRIPPERS
            </motion.h1>
            <p className="text-lg text-gray-300 max-w-3xl mt-4">
              Soft grippers are advanced robotic end-effectors designed to
              handle delicate and irregularly shaped objects with ease. They use
              soft, flexible materials that conform to the shape of the object
              being gripped, making them ideal for applications where
              traditional grippers might damage or slip off fragile or complex
              items.
            </p>
          </div>
        </div>
      </div>

      {/* What We Offer Section */}
      <div className="py-16 px-4 sm:px-12 flex flex-col sm:flex-row-reverse items-center justify-between">
        <div className="w-full sm:w-1/2 text-right sm:pl-12">
          {/* Decorative Line above */}
          {isClient && (
            <motion.div
              className="w-20 h-1 bg-orange-600 mb-4 ml-auto"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            ></motion.div>
          )}
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500 mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            WHAT WE OFFER
          </motion.h2>
          <p className="text-lg text-gray-300 mt-4">
            Our soft grippers come in various designs to suit different tasks.
            Whether you need a 3-finger gripper for small, delicate items or a
            6-finger gripper for larger, industrial applications, we have a
            solution tailored to your needs.
          </p>
        </div>
      </div>

      {/* Key Features Section (Left-Aligned Title, Subheading, and Decorative Line) */}
      <section className="py-16 px-4 sm:px-12">
        <div className="container mx-auto px-4 flex flex-col items-start">
          {/* Decorative Line (Left-Aligned) */}
          {isClient && (
            <motion.div
              className="w-20 h-1 bg-orange-600 mb-8"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            ></motion.div>
          )}

          {/* Title */}
          {isClient && (
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-left text-orange-600 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              KEY FEATURES
            </motion.h2>
          )}

          {/* Subheading */}
          {isClient && (
            <motion.p
              className="text-lg md:text-xl text-left text-gray-400 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              Discover the advantages that set our soft grippers apart.
            </motion.p>
          )}

          {/* Features Cards Section (Centered) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 text-center justify-items-center">
            {/* Feature 1: Easy Integration */}
            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md border border-gray-300">
              <div className="flex items-center justify-center mb-4">
                <span className="text-3xl text-orange-500 mr-4">🔧</span>
                <h4 className="text-xl font-bold text-orange-500 text-center">
                  Easy Integration
                </h4>
              </div>
              <p className="text-gray-500 text-sm text-center">
                Simple setup with a 5/2 solenoid valve, pressure-regulating
                valve, and vacuum generator.
              </p>
            </div>

            {/* Feature 2: Customizable Grip Force */}
            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md border border-gray-300">
              <div className="flex items-center justify-center mb-4">
                <span className="text-3xl text-orange-500 mr-4">⚙️</span>
                <h4 className="text-xl font-bold text-orange-500 text-center">
                  Customizable Grip Force
                </h4>
              </div>
              <p className="text-gray-500 text-sm text-center">
                The pressure settings allow you to control the force applied
                based on the material being handled.
              </p>
            </div>

            {/* Feature 3: Safe for Fragile Objects */}
            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md border border-gray-300">
              <div className="flex items-center justify-center mb-4">
                <span className="text-3xl text-orange-500 mr-4">🍏</span>
                <h4 className="text-xl font-bold text-orange-500 text-center">
                  Safe for Fragile Objects
                </h4>
              </div>
              <p className="text-gray-500 text-sm text-center">
                Soft, flexible materials ensure delicate items won’t be damaged
                during handling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications in Bento Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="flex justify-end mb-6">
          <motion.div
            className="w-20 h-1 bg-orange-600 mb-6"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          ></motion.div>
        </div>
        <motion.h2
          className="text-4xl font-semibold text-right text-orange-600 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          TECHNICAL SPECIFICATIONS
        </motion.h2>

        {/* Bento Grid for All Devices */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl text-orange-600 font-semibold mb-4">
              1. General Information
            </h3>
            <ul className="text-base text-gray-700 list-inside list-disc">
              <li>
                <strong>Gripper Type:</strong> Soft Robotic Gripper
              </li>
              <li>
                <strong>Number of Fingers:</strong> Configurable: 2, 3, 4, 5, or
                6
              </li>
              <li>
                <strong>Application Domain:</strong> Food Handling, Sorting,
                Handling delegated items
              </li>
              <li>
                <strong>Compatible Robots:</strong> Universal dimension
              </li>
              <li>
                <strong>Material Composition:</strong> Silicon, TPU
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl text-orange-600 font-semibold mb-4">
              2. Physical Specifications
            </h3>
            <ul className="text-base text-gray-700 list-inside list-disc">
              <li>
                <strong>Finger Length:</strong> 130 mm (customizable for
                application)
              </li>
              <li>
                <strong>Gripper Width:</strong> 330 mm
              </li>
              <li>
                <strong>Total Weight:</strong> 220g
              </li>
              <li>
                <strong>Mounting Type:</strong> Socket Head Allen Bolt
              </li>
              <li>
                <strong>Operating Environment:</strong> Food safe, operating
                temperature -10°C to 60°C
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl text-orange-600 font-semibold mb-4">
              3. Performance Specifications
            </h3>
            <ul className="text-base text-gray-700 list-inside list-disc">
              <li>
                <strong>Payload Capacity:</strong> 0.2kg - 0.3kg
              </li>
              <li>
                <strong>Actuation Mechanism:</strong> Pneumatic Link
              </li>
              <li>
                <strong>Closing Speed:</strong> Adjustable
              </li>
              <li>
                <strong>Grip Strength:</strong> 3 psi
              </li>
              <li>
                <strong>Finger Flexibility Range:</strong> 45° - 120°
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl text-orange-600 font-semibold mb-4">
              4. Operational Requirements
            </h3>
            <ul className="text-base text-gray-700 list-inside list-disc">
              <li>
                <strong>Operating Pressure:</strong> 3-6 bar (optimal at 4.5
                bar)
              </li>
              <li>
                <strong>Power Supply Requirement:</strong> Not applicable
                (pneumatic actuation only)
              </li>
              <li>
                <strong>Control System Interface:</strong> Pneumatic control
                valves (compatible with PLC/ROS systems)
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl text-orange-600 font-semibold mb-4">
              5. Customization Options
            </h3>
            <ul className="text-base text-gray-700 list-inside list-disc">
              <li>
                <strong>Finger Count:</strong> 2 - 6 finger
              </li>
              <li>
                <strong>Material Type:</strong> Food Grade Silicon
              </li>
              <li>
                <strong>Grip Pattern:</strong> Smooth, Textured
              </li>
              <li>
                <strong>Mounting Compatibility:</strong> Universal flange
                Dimension
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl text-orange-600 font-semibold mb-4">
              6. Accessories and Attachments
            </h3>
            <ul className="text-base text-gray-700 list-inside list-disc">
              <li>
                <strong>Adapters/Flanges:</strong> Custom mounting plates for
                various robot brands
              </li>
              <li>
                <strong>Finger Covers:</strong> Flexible, food-safe pneumatic
                tubing in customizable lengths
              </li>
              <li>
                <strong>Air Hose:</strong> Optional lengths, X m
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Product Listing Section */}
      <div className="container mx-auto px-4 mt-16 mb-16">
        {/* Section Title */}
        <div className="text-left mb-8">
          <motion.div
            className="w-20 h-1 bg-orange-600 mb-4"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          ></motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-semibold text-orange-600"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            EXPLORE OUR PRODUCTS
          </motion.h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Product 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <motion.img
              src="/3g.png" // Replace with your product image path
              alt="Product 1"
              className="w-full h-48 object-cover rounded-2xl mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            />
            <h3 className="text-2xl font-semibold text-orange-600 mb-2">
              3-Finger Gripper
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Ideal for precise handling and adaptable to various applications.
            </p>
          </div>

          {/* Product 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <motion.img
              src="/1g.PNG" // Replace with your product image path
              alt="Product 2"
              className="w-full h-48 object-cover rounded-2xl mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            />
            <h3 className="text-2xl font-semibold text-orange-600 mb-2">
              5-Finger Gripper
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Enhanced versatility and performance for diverse tasks.
            </p>
          </div>

          {/* Product 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <motion.img
              src="/6g.png" // Replace with your product image path
              alt="Product 3"
              className="w-full h-48 object-cover rounded-2xl mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            />
            <h3 className="text-2xl font-semibold text-orange-600 mb-2">
              6-Finger Gripper
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Maximum adaptability and grip strength for complex applications.
            </p>
          </div>
        </div>

        {/* Single Price on Request Button with Micro Animation */}
        <div className="flex justify-center mt-8">
          <button
            className="bg-orange-600 text-white py-3 px-8 rounded-xl hover:bg-orange-500 transition duration-300 transform hover:scale-105 hover:shadow-xl ease-in-out"
            onClick={() => (window.location.href = "/pricing-request-form")}
          >
            Price on Request
          </button>
        </div>
      </div>

      <section className="py-16 px-4 sm:px-12">
        <div className="container mx-auto">
          {/* Decorative Line (Left-Aligned) */}
          {isClient && (
            <motion.div
              className="w-20 h-1 bg-orange-600 mb-8"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            ></motion.div>
          )}

          {/* Title (Left-Aligned) */}
          {isClient && (
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-left text-orange-600 mb-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              OPERATIONS
            </motion.h2>
          )}

          {/* Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Side: Bullet Points and Subheading */}
            <div className="text-left">
              {/* Subheading Aligned with Bullet Points */}
              {isClient && (
                <motion.p
                  className="text-lg text-gray-300 mb-4 max-w-full sm:max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                >
                  Once the system is connected and pressures are set, the
                  gripper operates as follows:
                </motion.p>
              )}
              <ul className="list-disc pl-5 text-lg text-gray-300">
                <li>
                  Trigger the solenoid to open the soft gripper by applying
                  vacuum (-2 bar).
                </li>
                <li>
                  Trigger the solenoid to close the gripper by applying positive
                  air pressure (0.1-0.3 bar).
                </li>
              </ul>
            </div>

            {/* Right Side: Larger Image */}
            <div className="flex justify-center">
              <div className="w-full max-w-full sm:max-w-500 h-auto bg-white p-4 rounded-xl shadow-md">
                <Image
                  src="/diaagram.png" // Update with your image path
                  alt="Gripper Image"
                  width={500}
                  height={500}
                  className="rounded-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default OurProducts;
