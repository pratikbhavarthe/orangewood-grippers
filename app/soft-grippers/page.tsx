"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../../components/ui/carousel"; // Import carousel components
import { HoverEffect } from "../../components/ui/card-hover-effect";
import Navbar from "../components/Navbar"; // Adjust path if needed
import Footer from "../components/Footer"; // Adjust path if needed
import Image from "next/image"; // For Next.js Image component

const SoftGrippers: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure the component runs only on the client side to avoid hydration issues
    setIsClient(true);
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-white">
      {/* Navbar */}
      <Navbar />

      {/* Introduction Section */}
      <div className="py-16 px-4 sm:px-12 flex flex-col items-center justify-center">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between">
          {/* Left Section: What Are Soft Grippers */}
          <div className="w-full sm:w-1/2 text-left mb-12">
            {/* Decorative Line above */}
            {isClient && (
              <motion.div
                className="w-20 h-1 bg-orange-600 mb-8"
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              ></motion.div>
            )}
            <motion.h1
              className="text-4xl sm:text-5xl font-bold text-orange-500"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              WHAT ARE SOFT GRIPPERS
            </motion.h1>
            <p className="text-lg text-gray-300 max-w-3xl mt-4">
              Soft grippers are advanced robotic end-effectors designed to
              handle delicate and irregularly shaped objects with ease. They use
              soft, flexible materials that conform to the shape of the object
              being gripped, making them ideal for applications where
              traditional grippers might damage or slip off fragile or complex
              items.
            </p>
          </div>
        </div>
      </div>

      {/* What We Offer Section */}
      <div className="py-16 px-4 sm:px-12 flex flex-col sm:flex-row-reverse items-center justify-between">
        <div className="w-full sm:w-1/2 text-right sm:pl-12">
          {/* Decorative Line above */}
          {isClient && (
            <motion.div
              className="w-20 h-1 bg-orange-600 mb-4 ml-auto"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            ></motion.div>
          )}
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-orange-500"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            WHAT WE OFFER
          </motion.h2>
          <p className="text-lg text-gray-300 mt-4">
            Our soft grippers come in various designs to suit different tasks.
            Whether you need a 3-finger gripper for small, delicate items or a
            6-finger gripper for larger, industrial applications, we have a
            solution tailored to your needs.
          </p>
        </div>
      </div>

      {/* Grippers Section */}
      <div className="py-16 px-4 sm:px-12">
        <div className="text-left mb-12">
          {/* Decorative Line */}
          <motion.div
            className="w-20 h-1 bg-orange-600 mb-4"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          ></motion.div>
          <h2 className="text-4xl font-bold text-orange-500">
            OUR SOFT GRIPPERS 
          </h2>
          <p className="text-lg text-gray-300 mt-4">
            Explore our range of soft grippers tailored to suit diverse
            applications.
          </p>
        </div>

        {/* Grippers List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {/* 3-Finger Gripper */}
          <div className="flex flex-col items-center">
            <h4 className="text-xl font-bold text-orange-500 mb-4">
              3-Finger Gripper
            </h4>
            <div className="w-full max-w-sm p-6 rounded-xl shadow-md text-center mb-4">
              {/* Carousel for 3-Finger Gripper */}
              <Carousel>
                <CarouselContent>
                  <CarouselItem>
                    <Image
                      src="/3.jpeg"
                      alt="3-Finger Gripper 1"
                      width={350}
                      height={350}
                      className="rounded-lg mx-auto"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src="/images/3-finger-gripper-2.jpg"
                      alt="3-Finger Gripper 2"
                      width={350}
                      height={350}
                      className="rounded-lg mx-auto"
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
            <p className="text-gray-300 text-sm mt-4">
              Delicate precision for smaller objects.
            </p>
          </div>

          {/* 5-Finger Gripper */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-orange-500 mb-4">
              5-Finger Gripper
            </h3>
            <div className="w-full max-w-sm p-6 rounded-xl shadow-md text-center mb-4">
              {/* Carousel for 5-Finger Gripper */}
              <Carousel>
                <CarouselContent>
                  <CarouselItem>
                    <Image
                      src="/images/5-finger-gripper-1.jpg"
                      alt="5-Finger Gripper 1"
                      width={350}
                      height={350}
                      className="rounded-lg mx-auto"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src="/images/5-finger-gripper-2.jpg"
                      alt="5-Finger Gripper 2"
                      width={350}
                      height={350}
                      className="rounded-lg mx-auto"
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
            <p className="text-gray-300 text-sm mt-4">
              Versatile handling for a range of objects.
            </p>
          </div>

          {/* 6-Finger Gripper */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-orange-500 mb-4">
              6-Finger Gripper
            </h3>
            <div className="w-full max-w-sm p-6 rounded-xl shadow-md text-center mb-4">
              {/* Carousel for 6-Finger Gripper */}
              <Carousel>
                <CarouselContent>
                  <CarouselItem>
                    <Image
                      src="/images/6-finger-gripper-1.jpg"
                      alt="6-Finger Gripper 1"
                      width={350}
                      height={350}
                      className="rounded-lg mx-auto"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src="/images/6-finger-gripper-2.jpg"
                      alt="6-Finger Gripper 2"
                      width={350}
                      height={350}
                      className="rounded-lg mx-auto"
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
            <p className="text-gray-300 text-sm mt-4">
              Heavy-duty gripping for industrial applications.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16">
  <div className="container mx-auto px-4">
    {/* Decorative Line (Right-Aligned) */}
    {isClient && (
      <motion.div
        className="w-20 h-1 bg-orange-600 mb-8 ml-auto"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      ></motion.div>
    )}

    {/* Title */}
    {isClient && (
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-right text-orange-600 mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        KEY FEATURES
      </motion.h2>
    )}

    {/* Subheading */}
    {isClient && (
      <motion.p
        className="text-lg md:text-xl text-right text-gray-400 mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        Discover the advantages that set our soft grippers apart.
      </motion.p>
    )}

    {/* Features Cards Section (Centered) */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 text-center justify-items-center">
      {/* Feature 1: Easy Integration */}
      <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md border border-gray-300">
        <div className="flex items-center justify-center mb-4">
          <span className="text-3xl text-orange-500 mr-4">🔧</span>
          <h4 className="text-xl font-bold text-orange-500 text-center">
            Easy Integration
          </h4>
        </div>
        <p className="text-gray-500 text-sm text-center">
          Simple setup with a 5/2 solenoid valve, pressure-regulating valve, and vacuum generator.
        </p>
      </div>

      {/* Feature 2: Customizable Grip Force */}
      <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md border border-gray-300">
        <div className="flex items-center justify-center mb-4">
          <span className="text-3xl text-orange-500 mr-4">⚙️</span>
          <h4 className="text-xl font-bold text-orange-500 text-center">
            Customizable Grip Force
          </h4>
        </div>
        <p className="text-gray-500 text-sm text-center">
          The pressure settings allow you to control the force applied based on the material being handled.
        </p>
      </div>

      {/* Feature 3: Safe for Fragile Objects */}
      <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md border border-gray-300">
        <div className="flex items-center justify-center mb-4">
          <span className="text-3xl text-orange-500 mr-4">🍏</span>
          <h4 className="text-xl font-bold text-orange-500 text-center">
            Safe for Fragile Objects
          </h4>
        </div>
        <p className="text-gray-500 text-sm text-center">
          Perfect for food handling, ensuring that delicate items such as fruits, pastries, and packaged goods remain intact.
        </p>
      </div>
    </div>
  </div>
</section>

<section className="py-16 px-4 sm:px-12">
  <div className="container mx-auto">
    {/* Decorative Line (Left-Aligned) */}
    {isClient && (
      <motion.div
        className="w-20 h-1 bg-orange-600 mb-8"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      ></motion.div>
    )}

    {/* Title (Left-Aligned) */}
    {isClient && (
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-left text-orange-500 mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        OPERATIONS
      </motion.h2>
    )}

    {/* Content Section */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      {/* Left Side: Bullet Points and Subheading */}
      <div className="text-left">
        {/* Subheading Aligned with Bullet Points */}
        {isClient && (
          <motion.p
            className="text-lg text-gray-300 mb-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            Once the system is connected and pressures are set, the gripper operates as follows:
          </motion.p>
        )}
        <ul className="list-disc pl-5 text-lg text-gray-300">
          <li>Trigger the solenoid to open the soft gripper by applying vacuum (-2 bar).</li>
          <li>Trigger the solenoid to close the gripper by applying positive air pressure (0.1-0.3 bar).</li>
        </ul>
      </div>

      {/* Right Side: Larger Image */}
      <div className="flex justify-center">
        <div className="w-full max-w-500 h-500 bg-white p-4 rounded-xl shadow-md">
          <Image
            src="/diaagram.png" // Update with your image path
            alt="Schematic Figure"
            width={500}
            height={500}
            className="rounded-lg mx-auto"
          />
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SoftGrippers;
