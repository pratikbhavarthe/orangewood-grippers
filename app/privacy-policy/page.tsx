"use client";

import { NextPage } from "next";
import Navbar from "../components/Navbar"; // Adjust the path as needed
import Footer from "../components/Footer"; // Adjust the path as needed
import { motion } from "framer-motion";

const PrivacyPolicy: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <main className="flex-grow px-6 py-12 font-sans text-gray-800 leading-relaxed bg-[##0a0a0a]">
        {/* Title Section */}
        <motion.h1
          className="text-4xl font-bold text-orange-600 mb-6 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Privacy Policy
        </motion.h1>

        {/* Intro Section */}
        <motion.p
          className="mb-8 text-lg text-gray-400"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          This Privacy Policy document contains types of information that is
          collected and recorded by Aadhunik Grippers Labs and how we use it. If
          you have additional questions or require more information about our
          Privacy Policy, do not hesitate to contact us. This Privacy Policy
          applies only to our online activities and is valid for visitors to our
          website with regards to the information that they shared and/or collect
          in Aadhunik Grippers Labs. This policy is not applicable to any
          information collected offline or via channels other than this website.
        </motion.p>

        {/* Sections */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          {/* Information Collection and Usage */}
          <div>
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">
              Information Collection and Usage
            </h2>
            <p className="text-gray-400 mb-4">
              We will collect and use personal information solely with the
              objective of fulfilling those purposes specified by us and for other
              compatible purposes, unless we obtain the consent of the individual
              concerned or as required by law. We will only retain personal
              information as long as necessary for the fulfillment of those
              purposes.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you, either directly or through one of our partners</li>
              <li>Send you emails</li>
              <li>Find and prevent fraud</li>
            </ul>
          </div>

          {/* CCPA Privacy Rights */}
          <div>
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">
              CCPA Privacy Rights (Do Not Sell My Personal Information)
            </h2>
            <p className="text-gray-400 mb-4">
              Under the CCPA, among other rights, California consumers have the
              right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>
                Request that a business disclose the categories and specific
                pieces of personal data collected.
              </li>
              <li>Request that a business delete any personal data collected.</li>
              <li>
                Request that a business not sell the consumer's personal data.
              </li>
            </ul>
            <p className="text-gray-400 mt-4">
              If you make a request, we have one month to respond. If you would
              like to exercise any of these rights, please contact us.
            </p>
          </div>

          {/* About Section */}
          {/* <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              About Aadhunik Grippers
            </h2>
            <p className="text-gray-400">
              At Aadhunik Grippers, we create advanced soft grippers made
              from high-quality food-grade silicone. Designed for food processing
              and robotics, our grippers safely handle delicate items with
              flexibility and precision.
            </p>
          </div> */}
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
