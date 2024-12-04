"use client";

import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <footer className="bg-orange-700 py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8">
        {/* Left Column: Company and Stalk Us Sections */}
        <div className="flex flex-col w-full md:w-1/3 space-y-8">
          {/* Company Section */}
          <div>
            <motion.h3
              className="text-3xl text-black font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Company
            </motion.h3>
            <ul className="space-y-3 text-gray-200 text-lg">
              {[
                { name: "About Us", link: "/about-us" },
                { name: "Our Products", link: "/our-products" },
                {
                  name: "Orangewood Labs",
                  link: "https://www.orangewood.co/",
                },
                {
                  name: "Orangewood Store",
                  link: "https://shop.orangewood.co/in",
                },
              ].map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                >
                  <a
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      item.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="hover:underline hover:underline-offset-4 transition-all duration-300"
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Stalk Us Section */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-3xl text-black font-bold mb-4">Stalk Us</h3>
            <ul className="flex flex-wrap gap-6 text-gray-200 text-lg">
              {[
                {
                  name: "LinkedIn",
                  url: "https://www.linkedin.com/company/orangewood-labs/posts/?feedView=all",
                },
                { name: "Twitter", url: "https://x.com/OrangewoodLabs" },
                {
                  name: "YouTube",
                  url: "https://www.youtube.com/@OrangewoodLabs",
                },
                {
                  name: "Instagram",
                  url: "https://www.instagram.com/orangewoodlabs/",
                },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div> */}
        </div>

        {/* Middle Column: Contact Section */}
        <motion.div
          className="flex flex-col w-full md:w-1/3 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 className="text-3xl text-black font-bold">Contact</h3>
          <ul className="text-gray-200 text-lg space-y-4">
            <li>
              <p className="font-bold">Aadhunik Grippers</p>
            </li>
            <li>
              <p className="font-bold">Email:</p>
              <a
                href="mailto:saheem.k@orangewood.co"
                className="text-white hover:underline"
              >
                saheem.k@orangewood.co
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Right Column: Support Our Journey Section */}
        {/* <motion.div
          className="flex flex-col w-full md:w-1/3 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 className="text-3xl font-bold text-black">Support our journey!</h3>
          <p className="text-gray-200">
            Join us in powering the future of robotics with RoboGPT.
          </p>
          <div>
            <a
              href="https://www.ycombinator.com/launches/Iwk-orangewood-labs-robogpt"
              className="block"
            >
              <img
                src="https://www.ycombinator.com/launches/Iwk-orangewood-labs-robogpt/upvote_embed.svg"
                alt="YC Launch"
                className="w-full"
              />
            </a>
          </div> */}

          {/* Backed By Section */}
          {/* <div>
            <h4 className="text-black font-bold mb-4">Backed By</h4>
            <div className="flex items-center space-x-4">
              <img src="/yc.png" alt="Y Combinator" className="h-10" />
              <img
                src="/for-good-ventures.png"
                alt="For Good Ventures"
                className="h-10"
              />
              <img src="/7pc2.png" alt="7 Percent Ventures" className="h-10" />
              <img src="/finc.webp" alt="Founders Inc." className="h-10" />
              <img src="/schox.png" alt="Schox" className="h-10" />
            </div>
          </div> */}
        {/* </motion.div> */}
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto mt-12 px-4">
        <hr />
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-white text-sm space-y-4 md:space-y-0">
          <div className="flex space-x-6">
            <a
              href="/terms-of-use"
              className="hover:underline hover:text-orange-500 transition-colors duration-200"
            >
              Terms of Use
            </a>
            <a
              href="/privacy-policy"
              className="hover:underline hover:text-orange-500 transition-colors duration-200"
            >
              Privacy Policy
            </a>
          </div>
          <div className="text-center md:text-right opacity-80">
            &copy; {new Date().getFullYear()} Aadhunik Grippers. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
