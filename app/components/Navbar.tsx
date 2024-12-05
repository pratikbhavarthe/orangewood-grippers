"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      setCurrentPath(window.location.pathname);
    }
  }, [isClient]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActiveLink = (path: string) => currentPath === path;

  if (!isClient) {
    // Avoid rendering until the client is detected
    return null;
  }

  return (
    <nav className="bg-transparent">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Orangewood Logo"
            width={150}
            height={80}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          {["About Us", "Our Products", "Contact"].map((item, index) => {
            const path =
            item === "About Us"
              ? "/about"
              : item === "Contact"
              ? "https://forms.gle/t2c7sFUqeNr6bG1R7"  // Google Form link
              : `/${item.toLowerCase().replace(/ /g, "-")}`;
            return (
              <div key={index} className="relative">
                {item === "Contact" ? (
                  <a
                    href={path}
                    className="hover:text-orange-500"
                    aria-label="Contact"
                  >
                    {item}
                  </a>
                ) : (
                  <Link
                    href={path}
                    className={`hover:text-orange-500 ${
                      isActiveLink(path) ? "text-orange-500" : ""
                    }`}
                  >
                    {item}
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          {/* Background overlay */}
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={toggleMenu}
            aria-hidden="true"
          ></div>

          {/* Full-screen black card */}
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            aria-hidden="false"
          >
            <div className="relative w-full h-full flex flex-col items-center justify-center p-8">
              <button
                onClick={toggleMenu}
                className="absolute top-4 right-4 text-white text-3xl"
                aria-label="Close menu"
              >
                &times;
              </button>

              <ul className="flex flex-col items-center space-y-8 text-3xl font-semibold text-white">
                {["About Us", "Our Products", "Contact"].map((item, index) => {
                  const path =
                    item === "About Us"
                      ? "/about"
                      : item === "Contact"
                      ? "mailto:saheem.k@orangewood.co"
                      : `/${item.toLowerCase().replace(/ /g, "-")}`;
                  return (
                    <li key={index}>
                      {item === "Contact" ? (
                        <a
                          href={path}
                          className="hover:text-orange-500"
                          aria-label="Contact"
                        >
                          {item}
                        </a>
                      ) : (
                        <Link
                          href={path}
                          className={`hover:text-orange-500 ${
                            isActiveLink(path) ? "text-orange-500" : ""
                          }`}
                        >
                          {item}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
