"use client"

import React from "react";
import Navbar from "../components/Navbar"; // Adjust path as necessary
import Footer from "../components/Footer"; // Adjust path as necessary
import { motion } from "framer-motion"; // Ensure you have framer-motion installed

const GripperStore: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a] text-white">
      <Navbar />

      <div className="container mx-auto p-6">
        <header className="text-center mb-8">
          <h1 className="text-5xl text-orange-600 font-bold mb-4">ORANGEWOOD LABS RESEARCH AND DEVELOPMENT DEPARTMENT</h1>
        </header>

        {/* Hero Image Section with Rounded Rectangle and Subheading */}
        <div className="relative mb-16 rounded-3xl overflow-hidden">
          <motion.img
            src="/1g.png"  // Adjust the path as needed for your image
            alt="Hero Image"
            className="w-full h-96 object-cover rounded-3xl shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute bottom-6 left-6 text-white text-left p-4 bg-opacity-60 rounded-lg">
            <motion.h2
              className="text-3xl font-bold"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Our Latest Gripper Technology
            </motion.h2>
            <motion.p
              className="text-lg mt-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              Innovating the future of robotic grippers for precision and efficiency
            </motion.p>
          </div>
        </div>

        {/* Additional Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Image 1 */}
          <div className="relative rounded-3xl overflow-hidden">
            <motion.img
              src="/2g.png"  // Replace with your second image path
              alt="Gripper Image 2"
              className="w-full h-96 object-cover rounded-3xl shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            />
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute bottom-6 left-6 text-white text-left p-4 bg-opacity-60  rounded-lg">
              <motion.h2
                className="text-3xl font-bold"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Our Gripper in Action
              </motion.h2>
              <motion.p
                className="text-lg mt-2"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              >
                See how our latest technology works seamlessly with robots.
              </motion.p>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative rounded-3xl overflow-hidden">
            <motion.img
              src="/6g.png"  // Replace with your third image path
              alt="Gripper Image 3"
              className="w-full h-96 object-cover rounded-3xl shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            />
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute bottom-6 left-6 text-white text-left p-4 bg-opacity-60 rounded-lg">
              <motion.h2
                className="text-3xl font-bold"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Precision in Every Movement
              </motion.h2>
              <motion.p
                className="text-lg mt-2"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              >
                Discover the precision behind every motion of our grippers.
              </motion.p>
            </div>
          </div>

          {/* Image 3 */}
          <div className="relative rounded-3xl overflow-hidden">
            <motion.img
              src="/4g.png"  // Replace with your fourth image path
              alt="Gripper Image 4"
              className="w-full h-96 object-cover rounded-3xl shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            />
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute bottom-6 left-6 text-white text-left p-4 bg-opacity-60 bg-black rounded-lg">
              <motion.h2
                className="text-3xl font-bold"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Engineered for Efficiency
              </motion.h2>
              <motion.p
                className="text-lg mt-2"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              >
                Optimizing robotic performance with our innovative design.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Decorative Line and Title for Technical Specifications */}
        <div className="container mx-auto px-4 mb-8">
          {/* Decorative Line */}
          <motion.div
            className="w-20 h-1 bg-orange-600 mb-4"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          ></motion.div>

          {/* Title */}
          <motion.h2
            className="text-3xl md:text-4xl font-semibold text-left text-orange-600 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            TECHNICAL SPECIFICATIONS
          </motion.h2>
        </div>

        {/* Technical Specifications Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* General Information */}
          <div className="bg-white rounded-2xl p-6 shadow-lg col-span-2">
            <h3 className="text-2xl text-orange-600 font-semibold mb-2">1. General Information</h3>
            <ul className="text-lg text-gray-700 list-inside list-disc">
              <li><strong>Gripper Type:</strong> Soft Robotic Gripper</li>
              <li><strong>Number of Fingers:</strong> Configurable: 2, 3, 4, 5, or 6</li>
              <li><strong>Application Domain:</strong> Food Handling, Sorting, Handling delegated items</li>
              <li><strong>Compatible Robots:</strong> Universal dimension</li>
              <li><strong>Material Composition:</strong> Silicon, TPU</li>
            </ul>
          </div>

          {/* Physical Specifications */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl text-orange-600 font-semibold mb-2">2. Physical Specifications</h3>
            <ul className="text-lg text-gray-700 list-inside list-disc">
              <li><strong>Finger Length:</strong> 130 mm (customizable for application)</li>
              <li><strong>Gripper Width:</strong> 330 mm</li>
              <li><strong>Total Weight:</strong> 220g</li>
              <li><strong>Mounting Type:</strong> Socket Head Allen Bolt</li>
              <li><strong>Operating Environment:</strong> Food safe, operating temperature -10°C to 60°C</li>
            </ul>
          </div>

          {/* Performance Specifications */}
          <div className="bg-white rounded-2xl p-6 shadow-lg row-span-2">
            <h3 className="text-2xl text-orange-600 font-semibold mb-2">3. Performance Specifications</h3>
            <ul className="text-lg text-gray-700 list-inside list-disc">
              <li><strong>Payload Capacity:</strong> 0.2kg - 0.3kg</li>
              <li><strong>Actuation Mechanism:</strong> Pneumatic Link</li>
              <li><strong>Closing Speed:</strong> Adjustable</li>
              <li><strong>Grip Strength:</strong> 3 psi</li>
              <li><strong>Finger Flexibility Range:</strong> 45° - 120°</li>
            </ul>
          </div>

          {/* Operational Requirements */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl text-orange-600 font-semibold mb-2">4. Operational Requirements</h3>
            <ul className="text-lg text-gray-700 list-inside list-disc">
              <li><strong>Operating Pressure:</strong> 3-6 bar (optimal at 4.5 bar)</li>
              <li><strong>Power Supply Requirement:</strong> Not applicable (pneumatic actuation only)</li>
              <li><strong>Control System Interface:</strong> Pneumatic control valves (compatible with PLC/ROS systems)</li>
            </ul>
          </div>

          {/* Customization Options */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl text-orange-600 font-semibold mb-2">5. Customization Options</h3>
            <ul className="text-lg text-gray-700 list-inside list-disc">
              <li><strong>Finger Count:</strong> 2 - 6 finger</li>
              <li><strong>Material Type:</strong> Food Grade Silicon</li>
              <li><strong>Grip Pattern:</strong> Smooth, Textured</li>
              <li><strong>Mounting Compatibility:</strong> Universal flange Dimension</li>
            </ul>
          </div>

          {/* Accessories and Attachments */}
          <div className="bg-white rounded-2xl p-6 shadow-lg col-span-2">
            <h3 className="text-2xl text-orange-600 font-semibold mb-2">6. Accessories and Attachments</h3>
            <ul className="text-lg text-gray-700 list-inside list-disc">
              <li><strong>Adapters/Flanges:</strong> Custom mounting plates for various robot brands</li>
              <li><strong>Finger Covers:</strong> Flexible, food-safe pneumatic tubing in customizable lengths</li>
              <li><strong>Air Hose:</strong> Optional lengths, X m</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GripperStore;
