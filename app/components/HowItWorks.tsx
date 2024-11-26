"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiUnlock, FiTarget } from "react-icons/fi";

const HowItWorks: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="flex flex-col items-end text-right">
          {/* Line */}
          {isClient && (
            <motion.div
              className="w-20 h-1 bg-orange-600 mb-8" // Adjusted spacing to match Features Section
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            ></motion.div>
          )}

          {/* Title */}
          {isClient && (
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-orange-600 mb-8" // Adjusted spacing for consistency
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              HOW IT WORKS
            </motion.h2>
          )}

          {/* Subtitle */}
          {isClient && (
            <motion.p
              className="text-lg md:text-xl text-gray-400"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              Our soft gripper operates based on two primary pressure states
            </motion.p>
          )}
        </div>

        {/* Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          {/* Open State */}
          {isClient && (
            <motion.div
              className="flex flex-col items-center md:items-start text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Icon */}
              <div className="text-5xl text-orange-600 mb-4">
                <FiUnlock />
              </div>
              {/* Title */}
              <h3 className="text-2xl font-semibold text-orange-600 mb-3">
                Open State
              </h3>
              {/* Description */}
              <p className="text-gray-400 text-lg leading-relaxed text-justify">
                Achieved by applying a vacuum of -2 bar, causing the gripper to
                open.
              </p>
            </motion.div>
          )}

          {/* Closed State */}
          {isClient && (
            <motion.div
              className="flex flex-col items-center md:items-start text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.2,
              }}
            >
              {/* Icon */}
              <div className="text-5xl text-orange-600 mb-4">
                <FiTarget />
              </div>
              {/* Title */}
              <h3 className="text-2xl font-semibold text-orange-600 mb-3">
                Closed State
              </h3>
              {/* Description */}
              <p className="text-gray-400 text-lg leading-relaxed text-justify">
                By applying air pressure between 0.1 to 0.3 bar, the gripper
                closes around the object. The pressure varies depending on the
                material being handled, with higher pressure for more rigid
                objects and lower pressure for softer ones.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
