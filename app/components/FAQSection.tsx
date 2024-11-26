"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is a soft gripper? 🤖",
      answer:
        "A soft gripper is a robotic tool that uses adaptive material to safely handle delicate or irregularly shaped objects. It's ideal for delicate tasks, including food handling.",
    },
    {
      question: "How does the soft gripper work? 🛠️",
      answer:
        "The soft gripper operates using air pressure and vacuum, allowing it to open and close to grip delicate objects without damage. The system adapts to various shapes and sizes.",
    },
    {
      question: "What are the main components of the soft gripper system? 🔧",
      answer:
        "The main components include a 5/2 solenoid valve, pressure regulating valve, vacuum generator, air pipes, and the main air supply. These components work together to control the gripper's action.",
    },
    {
      question: "Is the soft gripper food-safe? 🍽️",
      answer:
        "Yes, the soft gripper is made from food-grade silicone, making it suitable for use in food robotics applications where cleanliness and safety are essential.",
    },
    {
      question: "How easy is it to set up the soft gripper system? 🛠️",
      answer:
        "Setting up the system involves connecting the components to a control system and adjusting the pressure settings to match the materials being handled. It is straightforward but requires attention to detail.",
    },
    {
      question: "What is the price of the soft gripper? 💸",
      answer: "Price on request.",
    },
  ];

  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="flex flex-col items-start text-left mb-8">
          <motion.div
            className="w-20 h-1 bg-orange-600 mb-6"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          ></motion.div>
          <motion.h2
            className="text-4xl font-bold text-orange-600 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            FREQUENTLY ASKED QUESTIONS
          </motion.h2>
        </div>

        {/* FAQ Cards */}
        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left py-4 px-6 text-lg font-medium text-black bg-orange-600 border-none focus:outline-none flex justify-between items-center rounded-xl transition-all duration-300"
              >
                <span>{faq.question}</span>
                <span className="text-xl text-white">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <motion.div
                  className="py-4 px-6 mt-2 bg-orange-600 rounded-xl text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
