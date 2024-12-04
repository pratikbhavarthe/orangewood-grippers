"use client";

import { NextPage } from "next";
import Navbar from "../components/Navbar"; // Adjust the path as needed
import Footer from "../components/Footer"; // Adjust the path as needed
import { motion } from "framer-motion";

const TermsAndConditions: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-gray-300">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <main className="flex-grow px-6 py-12 font-sans leading-relaxed">
        {/* Title Section */}
        <motion.h1
          className="text-4xl font-bold text-orange-600 mb-6 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Terms and Conditions
        </motion.h1>

        {/* Intro Section */}
        <motion.p
          className="mb-8 text-lg text-gray-400"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Welcome to Aadhunik Grippers Labs! By accessing this website, you agree
          to comply with and be bound by the following terms and conditions of use,
          which together with our privacy policy govern Aadhunik Grippers Labs’
          relationship with you in relation to this website. If you disagree with
          any part of these terms and conditions, please do not use our website.
        </motion.p>

        {/* Sections */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          {/* Use of the Website */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-200 mb-4">
              Use of the Website
            </h2>
            <p className="text-gray-400 mb-4">
              By using this website, you agree to the following terms of use:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>The content of the pages on this website is for general information only.</li>
              <li>
                We reserve the right to make changes to the website content without prior notice.
              </li>
              <li>
                Your use of any information or materials on this website is entirely at your own risk.
              </li>
              <li>
                Unauthorized use of this website may give rise to a claim for damages.
              </li>
            </ul>
          </div>

          {/* Intellectual Property Rights */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-200 mb-4">
              Intellectual Property Rights
            </h2>
            <p className="text-gray-400 mb-4">
              All content included on this website, such as text, graphics, logos,
              images, and software, is the property of Aadhunik Grippers Labs and
              is protected by intellectual property laws. You may not reproduce,
              distribute, or use any material without explicit permission.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-200 mb-4">
              Limitation of Liability
            </h2>
            <p className="text-gray-400 mb-4">
              In no event shall Aadhunik Grippers Labs, nor any of its officers,
              directors, or employees, be held liable for anything arising out of
              or in any way connected with your use of this website, whether such
              liability is under contract or otherwise. We shall not be liable for
              any indirect, consequential, or special liability arising out of or
              in any way related to your use of this website.
            </p>
          </div>

          {/* Governing Law */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-200 mb-4">
              Governing Law
            </h2>
            <p className="text-gray-400">
              These terms and conditions are governed by and construed in
              accordance with the laws of [Your Country/State], and you irrevocably
              submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
