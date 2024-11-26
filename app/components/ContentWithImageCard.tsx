"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image"; // Importing Image from next/image

const ContentWithImageCard: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex flex-col items-start md:w-1/2">
          {/* Line */}
          <motion.div
            className="w-20 h-1 bg-orange-600 mb-6" // Added space between the line and the title
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          ></motion.div>

          {/* Title */}
          <motion.h2
            className="text-4xl font-bold text-orange-600 mb-6" // Added margin-bottom for title
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            New Section Title
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-gray-700 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            Short description or subheading that gives context to the section.
          </motion.p>

          {/* Content */}
          <motion.p
            className="text-gray-600 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            Here you can add some descriptive content that explains the purpose
            of the section in more detail. This text will provide a deeper
            understanding of what the user is looking at.
          </motion.p>

          {/* Button */}
          <motion.div
            className="flex items-center bg-orange-600 text-white py-2 px-6 rounded-full cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => window.location.href = "/soft-grippers"} // Redirect to another page
          >
            <span className="mr-3">Learn More</span>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <FiArrowRight className="text-orange-600" />
            </div>
          </motion.div>
        </div>

        {/* Right Image Card */}
        <div className="md:w-1/2 flex justify-start">
          <motion.div
            className="overflow-hidden rounded-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src="/3.jpeg" // Use the next image here (replace with the correct URL)
              alt="Image description"
              width={500} // Set width of image
              height={500} // Set height of image
              className="object-cover" // Ensures image cover style
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContentWithImageCard;
