"use client";

import React from "react";
import { motion } from "framer-motion";

const InfoSection: React.FC = () => {
  return (
    <section
      className="py-16"
      style={{
        backgroundImage: "url('/noise.gif')", // Replace with your noise GIF path
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        animation: "backgroundScroll 10s linear infinite", // Optional scrolling effect
      }}
    >
      <div className="container mx-auto px-4">
        {/* Info Section Content */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Left side: "🦾 WE ARE" with animated blinking emoji */}
          <motion.h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4 md:mb-0">
            {/* Robot emoji with blinking animation */}
            <motion.span
              initial={{ opacity: 1 }}
              animate={{
                opacity: [1, 0.5, 1], // Blinking effect
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity, // Makes the animation loop infinitely
                repeatType: "loop", // Ensures seamless looping
                ease: "easeInOut",
              }}
              className="text-4xl"
            >
              🦾
            </motion.span>{" "}
            WE ARE
          </motion.h2>

          {/* Right side: Content without any animation */}
          <div
            className="w-full max-w-md md:max-w-lg"
            style={{
              padding: "0 16px", // Added padding to avoid text being too close to borders
            }}
          >
            {/* Updated to beige color and removed animation */}
            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-400 text-justify">
              At Orangewood Labs, we create advanced soft grippers made from
              high-quality food-grade silicone. Designed for food processing and
              robotics, our grippers safely handle delicate items with flexibility
              and precision.
            </p>
          </div>
        </div>
      </div>

      {/* Inline CSS for animation */}
      <style jsx>{`
        @keyframes backgroundScroll {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 100% 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default InfoSection;
