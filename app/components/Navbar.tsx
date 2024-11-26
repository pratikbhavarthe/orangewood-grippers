"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false); // State to track if we are on the client side
  const [currentPath, setCurrentPath] = useState(""); // Track current path

  // Ensure that the router is only used after the component is mounted on the client side
  useEffect(() => {
    setIsClient(true);
    setCurrentPath(window.location.pathname); // Get current path on the client side
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const hoverAnimation = {
    scale: 1.1,
    color: "#FFA500",
    textShadow: "0px 0px 8px rgba(255, 165, 0, 0.8)",
  };

  const fadeInMenuPanel = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { type: "spring", stiffness: 100 },
  };

  // Function to check if the current route matches the menu item
  const isActiveLink = (path: string) => {
    return currentPath === path;
  };

  // If we're not on the client side yet, return null (this avoids errors when rendering on the server side)
  if (!isClient) {
    return null;
  }

  return (
    <nav className="bg-transparent">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/ow.png" // Update the path to your logo
              alt="Orangewood Logo"
              width={190}
              height={80}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          {["About Us", "Soft Grippers", "Store", "Contact"].map(
            (item, index) => {
              const path =
                item === "About Us"
                  ? "/about"
                  : item === "Contact"
                  ? "mailto:saheem.k@orangewood.co"
                  : `/${item.toLowerCase().replace(/ /g, "-")}`;
              return (
                <motion.div
                  key={index}
                  whileHover={hoverAnimation}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <Link
                    href={path}
                    className="relative"
                    target={item === "Contact" ? "_self" : undefined}
                  >
                    <span
                      className={`hover:text-orange-500 ${
                        isActiveLink(path) ? "text-orange-500" : ""
                      }`}
                    >
                      {item}
                    </span>
                    {isActiveLink(path) && (
                      <motion.div
                        className="absolute bottom-0 left-0 w-full h-1 "
                        layoutId="underline"
                      />
                    )}
                  </Link>
                </motion.div>
              );
            }
          )}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            className="focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 text-orange-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <motion.div
          initial={fadeInMenuPanel.initial}
          animate={fadeInMenuPanel.animate}
          exit={fadeInMenuPanel.exit}
          transition={fadeInMenuPanel.transition}
          className="md:hidden bg-black text-orange-500 shadow-lg"
        >
          <ul className="flex flex-col items-center space-y-4 p-4 text-lg font-medium">
            {["About Us", "Soft Grippers", "Store", "Contact"].map(
              (item, index) => {
                const path =
                  item === "About Us"
                    ? "/about"
                    : item === "Contact"
                    ? "mailto:saheem.k@orangewood.co"
                    : `/${item.toLowerCase().replace(/ /g, "-")}`;
                return (
                  <motion.li
                    key={index}
                    whileHover={hoverAnimation}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <Link
                      href={path}
                      className="relative block"
                      target={item === "Contact" ? "_self" : undefined}
                    >
                      <span
                        className={`hover:text-orange-500 ${
                          isActiveLink(path) ? "text-orange-500" : ""
                        }`}
                      >
                        {item}
                      </span>
                      {isActiveLink(path) && (
                        <motion.div
                          className="absolute bottom-0 left-0 w-full h-1 "
                          layoutId="underline"
                        />
                      )}
                    </Link>
                  </motion.li>
                );
              }
            )}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
