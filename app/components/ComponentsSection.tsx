"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiBox, FiTool, FiTrello, FiAirplay, FiZap } from "react-icons/fi";

const ComponentsSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="w-20 h-1 bg-orange-600 mb-6"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        ></motion.div>

        <motion.h2
          className="text-4xl font-bold text-orange-600 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          COMPONENTS REQUIRED
        </motion.h2>

        <div className="flex flex-col md:flex-row justify-start md:justify-center items-start md:items-center gap-12">
          {/* Component 1 */}
          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <FiBox className="text-orange-600 text-2xl" />
            <span className="text-lg text-gray-400">5/2 Solenoid Valve</span>
          </motion.div>

          {/* Component 2 */}
          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <FiTool className="text-orange-600 text-2xl" />
            <span className="text-lg text-gray-400">Pressure Regulating Valve</span>
          </motion.div>

          {/* Component 3 */}
          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <FiTrello className="text-orange-600 text-2xl" />
            <span className="text-lg text-gray-400">Vacuum Generator</span>
          </motion.div>

          {/* Component 4 */}
          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          >
            <FiAirplay className="text-orange-600 text-2xl" />
            <span className="text-lg text-gray-400">Air Pipes</span>
          </motion.div>

          {/* Component 5 */}
          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
          >
            <FiZap className="text-orange-600 text-2xl" />
            <span className="text-lg text-gray-400">Main Air Supply</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComponentsSection;
