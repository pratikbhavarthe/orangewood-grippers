"use client";

import React from "react";
import Navbar from "../components/Navbar"; // Adjust path as necessary
import Footer from "../components/Footer"; // Adjust path as necessary
import { motion } from "framer-motion"; // Ensure you have framer-motion installed

const GripperStore: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a] text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <motion.img
          src="/1g.png" // Adjust the path as needed for your image
          alt="Hero Image"
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute bottom-20 left-6 text-white text-left p-4 bg-opacity-60 rounded-lg w-full max-w-lg">
          <motion.h2
            className="text-4xl font-bold"
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
            Innovating the future of robotic grippers for precision and efficiency.
          </motion.p>
        </div>
      </div>

      {/* Technical Specifications in Bento Grid */}
      <div className="container mx-auto px-6 py-16">
        <motion.div
          className="w-20 h-1 bg-orange-600 mb-6"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        ></motion.div>
        <motion.h2
          className="text-2xl font-semibold text-left text-orange-600 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          TECHNICAL SPECIFICATIONS
        </motion.h2>

        {/* Bento Grid for Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl text-orange-600 font-semibold mb-4">1. General Information</h3>
            <ul className="text-base text-gray-700 list-inside list-disc">
              <li><strong>Gripper Type:</strong> Soft Robotic Gripper</li>
              <li><strong>Number of Fingers:</strong> Configurable: 2, 3, 4, 5, or 6</li>
              <li><strong>Application Domain:</strong> Food Handling, Sorting, Handling delegated items</li>
              <li><strong>Compatible Robots:</strong> Universal dimension</li>
              <li><strong>Material Composition:</strong> Silicon, TPU</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl text-orange-600 font-semibold mb-4">2. Physical Specifications</h3>
            <ul className="text-base text-gray-700 list-inside list-disc">
              <li><strong>Finger Length:</strong> 130 mm (customizable for application)</li>
              <li><strong>Gripper Width:</strong> 330 mm</li>
              <li><strong>Total Weight:</strong> 220g</li>
              <li><strong>Mounting Type:</strong> Socket Head Allen Bolt</li>
              <li><strong>Operating Environment:</strong> Food safe, operating temperature -10°C to 60°C</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl text-orange-600 font-semibold mb-4">3. Performance Specifications</h3>
            <ul className="text-base text-gray-700 list-inside list-disc">
              <li><strong>Payload Capacity:</strong> 0.2kg - 0.3kg</li>
              <li><strong>Actuation Mechanism:</strong> Pneumatic Link</li>
              <li><strong>Closing Speed:</strong> Adjustable</li>
              <li><strong>Grip Strength:</strong> 3 psi</li>
              <li><strong>Finger Flexibility Range:</strong> 45° - 120°</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl text-orange-600 font-semibold mb-4">4. Operational Requirements</h3>
            <ul className="text-base text-gray-700 list-inside list-disc">
              <li><strong>Operating Pressure:</strong> 3-6 bar (optimal at 4.5 bar)</li>
              <li><strong>Power Supply Requirement:</strong> Not applicable (pneumatic actuation only)</li>
              <li><strong>Control System Interface:</strong> Pneumatic control valves (compatible with PLC/ROS systems)</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl text-orange-600 font-semibold mb-4">5. Customization Options</h3>
            <ul className="text-base text-gray-700 list-inside list-disc">
              <li><strong>Finger Count:</strong> 2 - 6 finger</li>
              <li><strong>Material Type:</strong> Food Grade Silicon</li>
              <li><strong>Grip Pattern:</strong> Smooth, Textured</li>
              <li><strong>Mounting Compatibility:</strong> Universal flange Dimension</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl text-orange-600 font-semibold mb-4">6. Accessories and Attachments</h3>
            <ul className="text-base text-gray-700 list-inside list-disc">
              <li><strong>Adapters/Flanges:</strong> Custom mounting plates for various robot brands</li>
              <li><strong>Finger Covers:</strong> Flexible, food-safe pneumatic tubing in customizable lengths</li>
              <li><strong>Air Hose:</strong> Optional lengths, X m</li>
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
            Explore Our Products
          </motion.h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            <button
              className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-500 transition duration-300"
              onClick={() => (window.location.href = "/pricing-request-form")}
            >
              Price on Request
            </button>
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
            <button
              className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-500 transition duration-300"
              onClick={() => (window.location.href = "/pricing-request-form")}
            >
              Price on Request
            </button>
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
            <button
              className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-500 transition duration-300"
              onClick={() => (window.location.href = "/pricing-request-form")}
            >
              Price on Request
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GripperStore;
