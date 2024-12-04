"use client";

import { NextPage } from "next";
import Navbar from "../components/Navbar"; // Adjust path as needed
import Footer from "../components/Footer"; // Adjust path as needed
import { motion } from "framer-motion";

const TermsOfUSe: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-gray-400">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow px-6 py-12 font-sans leading-relaxed">
        {/* Title */}
        <motion.h1
          className="text-4xl font-bold text-orange-600 mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Terms and Conditions
        </motion.h1>

        {/* Intro */}
        <motion.p
          className="text-lg text-gray-400 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          By accessing this website, you are agreeing to be bound by these Terms
          and Conditions of Use, all applicable laws and regulations, and agree
          that you are responsible for compliance with any applicable local
          laws. If you do not agree with any of these terms, you are prohibited
          from using or accessing this site.
        </motion.p>

        {/* Terms Sections */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Terms */}
          <section>
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">
              Terms
            </h2>
            <p className="text-gray-400">
              The materials contained on this website are protected by
              applicable copyright and trademark law. You are prohibited from
              using this site if you do not agree to these terms.
            </p>
          </section>

          {/* Use License */}
          <section>
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">
              Use License
            </h2>
            <p className="text-gray-400 mb-4">
              Permission is granted to temporarily download one copy of the
              materials on Aadhunik Grippers Labs' website for personal,
              non-commercial transitory viewing only. Under this license, you
              may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Modify or copy the materials.</li>
              <li>
                Use the materials for any commercial purpose or public display.
              </li>
              <li>
                Attempt to decompile or reverse engineer any software on the
                website.
              </li>
              <li>Remove any copyright or other proprietary notations.</li>
              <li>
                Transfer the materials to another person or mirror the materials
                on another server.
              </li>
            </ul>
            <p className="text-gray-400 mt-4">
              This license shall automatically terminate if you violate any of
              these restrictions and may be terminated by Aadhunik Grippers Labs
              at any time.
            </p>
          </section>

          {/* Disclaimer */}
          <section>
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">
              Disclaimer
            </h2>
            <p className="text-gray-400">
              The materials on this website are provided "as is." Aadhunik
              Grippers Labs makes no warranties, expressed or implied, and
              disclaims all other warranties, including implied warranties or
              conditions of merchantability, fitness for a particular purpose,
              or non-infringement of intellectual property or other violations
              of rights.
            </p>
          </section>

          {/* Limitations */}
          <section>
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">
              Limitations
            </h2>
            <p className="text-gray-400">
              In no event shall Aadhunik Grippers Labs or its suppliers be
              liable for any damages arising out of the inability to use the
              materials on the website, even if notified of the possibility of
              such damages.
            </p>
          </section>

          {/* Revisions and Errata */}
          <section>
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">
              Revisions and Errata
            </h2>
            <p className="text-gray-400">
              The materials appearing on this website may include technical,
              typographical, or photographic errors. Aadhunik Grippers Labs does
              not warrant that any of the materials on its website are accurate,
              complete, or current.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">
              Governing Law
            </h2>
            <p className="text-gray-400">
              Any claim relating to Aadhunik Grippers Labs' website shall be
              governed by the laws of the state without regard to conflict of
              law provisions.
            </p>
          </section>
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TermsOfUSe;
