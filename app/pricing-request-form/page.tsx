"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaEnvelope, FaPhone, FaBuilding, FaArrowLeft } from "react-icons/fa";
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  comments: string;
}
const PricingRequestForm: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<"quote" | "help" | "">(
    ""
  );
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    comments: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // For error handling
  const [successMessage, setSuccessMessage] = useState<string | null>(null); // For success message
  const handleProductSelection = (product: string) => {
    setSelectedProducts((prev) =>
      prev.includes(product)
        ? prev.filter((p) => p !== product)
        : [...prev, product]
    );
  };
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true); // Indicate form is being submitted
    setErrorMessage(null); // Reset error message on new submission
    setSuccessMessage(null); // Reset success message
    if (!selectedOption) {
      setErrorMessage("Please select an inquiry type.");
      setIsSubmitting(false);
      return;
    }
    if (selectedOption === "quote" && selectedProducts.length === 0) {
      setErrorMessage("Please select at least one product for the quote.");
      setIsSubmitting(false);
      return;
    }
    try {
      // Send the form data to the API route
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          selectedOption,
          selectedProducts,
          formData,
        }),
      });
      const result = await response.json();
      if (response.ok) {
        setSuccessMessage(
          "Form submitted successfully! We will get back to you shortly."
        );
      } else {
        setErrorMessage(result.error || "Failed to submit the form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("An error occurred while submitting the form.");
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  };
  return (
    <div className="container mx-auto px-4 py-5">
      {/* Navbar Section */}
      <nav className="py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link href="/" passHref>
            <div className="flex items-center cursor-pointer ml-[-15px]">
              <FaArrowLeft className="text-orange-500 text-lg mr-3" />
              <Image
                src="/ow.png"
                alt="Orangewood Logo"
                width={180}
                height={180}
                className="object-contain"
              />
            </div>
          </Link>
        </div>
      </nav>
      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center md:items-start mt-8">
        {/* Form Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <div className="text-left mb-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-orange-500 mb-4">
              Get Pricing
            </h2>
            <p className="text-lg text-gray-300">
              Take the first step towards your ideal solution - fill out the
              form and let us tailor a perfect fit for your needs!
            </p>
            <p className="text-sm text-gray-400 mt-2">
              All fields are required.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            {/* Step 1: Select Inquiry Type */}
            <div className="mb-6">
              <label className="block text-gray-300 font-medium mb-2">
                I would like to:
              </label>
              <select
                name="inquiryType"
                value={selectedOption}
                onChange={(e) =>
                  setSelectedOption(e.target.value as "quote" | "help" | "")
                }
                className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white"
                required
              >
                <option value="">-- Select an option --</option>
                <option value="quote">
                  I would like a quote for Orangewood Labs Soft Gripper product
                </option>
                <option value="help">
                  I need help with an Orangewood Labs Soft Gripper product
                </option>
              </select>
            </div>
            {/* Step 2: Product Selection (if quote is selected) */}
            {selectedOption === "quote" && (
              <div className="mb-6">
                <label className="block text-gray-300 font-medium mb-2">
                  Select the products you’re interested in:
                </label>
                <div className="space-y-2">
                  {[
                    "3-Finger Gripper",
                    "5-Finger Gripper",
                    "6-Finger Gripper",
                  ].map((product) => (
                    <label
                      key={product}
                      className="flex items-center text-white"
                    >
                      <input
                        type="checkbox"
                        value={product}
                        checked={selectedProducts.includes(product)}
                        onChange={() => handleProductSelection(product)}
                        className="mr-2"
                      />
                      {product}
                    </label>
                  ))}
                </div>
              </div>
            )}
            {/* Step 3: Buyer Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="flex items-center text-gray-300 font-medium mb-2">
                <FaEnvelope className="mr-2" />
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white"
                required
              />
            </div>
            <div className="mb-6">
              <label className="flex items-center text-gray-300 font-medium mb-2">
                <FaBuilding className="mr-2" />
                Company
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white"
                required
              />
            </div>
            <div className="mb-6">
              <label className="flex items-center text-gray-300 font-medium mb-2">
                <FaPhone className="mr-2" />
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-300 font-medium mb-2">
                Comments
              </label>
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white"
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-orange-500 text-white text-xl rounded-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </button>
          </form>
          {errorMessage && (
            <p className="text-red-500 mt-4 text-center">{errorMessage}</p>
          )}
          {successMessage && (
            <p className="text-green-500 mt-4 text-center">{successMessage}</p>
          )}
        </div>
        {/* Image Section */}
        <div className="flex flex-col md:flex-row items-center md:items-center mt-40">
          <Image
            src="/6.8 render.png"
            alt="6.8 render bot"
            width={800}
            height={800}
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};
export default PricingRequestForm;