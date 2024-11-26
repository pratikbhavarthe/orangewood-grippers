"use client";

import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <footer className="bg-orange-700 py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start space-y-12 md:space-y-0">
        {/* Left Column: Company, Stalk Us, and Contact Sections */}
        <div className="flex flex-col md:w-1/2 text-white space-y-6">
          {/* Company Section */}
          <motion.h3
            className="text-black text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Company
          </motion.h3>
          <ul className="space-y-2 text-white text-lg">
            <motion.li
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              <a
                href="/about"
                className="hover:underline hover:underline-offset-4 transition-all duration-300 relative"
              >
                About Us
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="relative"
            >
              <a
                href="/soft-grippers"
                className="hover:underline hover:underline-offset-4 transition-all duration-300 relative"
              >
                Soft Grippers
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="relative"
            >
              <a
                href="/store"
                className="hover:underline hover:underline-offset-4 transition-all duration-300 relative"
              >
                Store
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="relative"
            >
              <a
                href="/orangewood-labs"
                className="hover:underline hover:underline-offset-4 transition-all duration-300 relative"
              >
                Orangewood Labs
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="relative"
            >
              <a
                href="/orangewood-store"
                className="hover:underline hover:underline-offset-4 transition-all duration-300 relative"
              >
                Orangewood Store
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </motion.li>
          </ul>

          {/* Stalk Us Section */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-black text-2xl font-bold mb-4">Stalk Us</h3>
            <ul className="flex space-x-6 text-white text-lg">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-black text-2xl font-bold mb-4">Contact</h3>
            <ul className="text-white text-lg space-y-4">
              <motion.li
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <p className="font-bold">Orangewood Labs | R&D Department</p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              >
                <p className="font-bold">Email:</p>
                <a
                  href="mailto:saheem.k@orangewood.co"
                  className="text-white hover:underline"
                >
                  saheem.k@orangewood.co
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Right Column: Support Our Journey Section */}
        <div className="flex flex-col md:w-1/2 text-white space-y-8">
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-black text-2xl font-bold mb-4">
              Support our journey!
            </h3>
            <p>Join us in powering the future of robotics with RoboGPT</p>
            <h4 className="mt-4 font-bold">Backed By</h4>
            <ul className="space-y-2 text-lg">
              <li>Y Combinator</li>
              <li>For Good Ventures</li>
              <li>7 PERCENT VENTURES</li>
              <li>FOUNDERS, INC.</li>
              <li>SCHOX</li>
            </ul>
            <h4 className="mt-4 font-bold">Partners</h4>
            <ul className="space-y-2 text-lg">
              <li>VIAM, INC.</li>
              <li>Picknik</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 px-4 md:px-0 w-full flex justify-between items-center border-t-2 border-white pt-6">
        <div className="flex space-x-6 text-sm text-white">
          <motion.a
            href="/terms-of-use"
            className="hover:underline"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Terms of Use
          </motion.a>
          <motion.a
            href="/privacy-policy"
            className="hover:underline"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            Privacy Policy
          </motion.a>
        </div>

        {/* Right Side: Copyright Text */}
        <div className="text-right text-white text-sm">
          <p>
            &copy; {new Date().getFullYear()} Soft Gripper. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
