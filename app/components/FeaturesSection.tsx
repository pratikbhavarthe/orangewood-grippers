"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FeaturesSection: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Decorative Line */}
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
            className="text-4xl md:text-5xl font-bold text-left text-orange-600 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            WHY CHOOSE OUR SOFT GRIPPERS
          </motion.h2>
        )}

        {/* Subtitle */}
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

        {/* Horizontal Content List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              number: "01",
              title: "Versatile Designs",
              description:
                "Available in 3, 4, 5, or 6 fingers, our grippers are customizable to suit various object sizes and shapes.",
            },
            {
              number: "02",
              title: "Adaptive Technology",
              description:
                "Utilizing air pressure and vacuum control, our grippers ensure soft, adaptive gripping that minimizes stress on fragile items.",
            },
            {
              number: "03",
              title: "Food Safe",
              description:
                "Our grippers are made from food-grade silicone, ensuring they meet the highest hygiene standards for use in food processing.",
            },
            {
              number: "04",
              title: "Energy Efficient",
              description:
                "Designed for high efficiency, our grippers use low air pressure to provide powerful yet gentle clamping forces.",
            },
          ].map((item, index) => (
            isClient && (
              <motion.div
                key={index}
                className="flex flex-col items-start text-left"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
              >
                {/* Number */}
                <div
                  className="text-4xl md:text-5xl font-bold text-[#F5F5DC] hover:text-orange-600 transition-colors duration-300 mb-12"
                >
                  {item.number}.
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-orange-500 mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="text-gray-400 text-lg leading-relaxed"
                  style={{
                    textAlign: "justify",
                    minHeight: "96px", // Ensures consistent description height
                  }}
                >
                  {item.description}
                </p>
              </motion.div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;