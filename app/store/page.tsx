import React from "react";
import Navbar from "../components/Navbar"; // Adjust path as necessary
import Footer from "../components/Footer"; // Adjust path as necessary

const GripperStore: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a] text-white">
      <Navbar />

      <div className="container mx-auto p-6">
        <header className="text-center mb-8">
          <h1 className="text-4xl text-orange-600 font-bold mb-4">Orangewood Labs | R&D Department</h1>
          <p className="text-lg text-gray-300">Gripper Model: Modular Soft Gripper</p>
          <p className="text-lg text-gray-300">Version: 1.0 | Date: 15/11/2024</p>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl text-orange-600 font-semibold mb-4">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* General Information */}
            <div className="bg-gray-800 rounded-lg p-4 shadow-lg col-span-2">
              <h3 className="text-xl text-orange-600 font-semibold mb-2">1. General Information</h3>
              <ul className="text-gray-400">
                <li><strong>Gripper Type:</strong> Soft Robotic Gripper</li>
                <li><strong>Number of Fingers:</strong> Configurable: 2, 3, 4, 5, or 6</li>
                <li><strong>Application Domain:</strong> Food Handling, Sorting, Handling delegated items</li>
                <li><strong>Compatible Robots:</strong> Universal dimension</li>
                <li><strong>Material Composition:</strong> Silicon, TPU</li>
              </ul>
            </div>

            {/* Physical Specifications */}
            <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
              <h3 className="text-xl text-orange-600 font-semibold mb-2">2. Physical Specifications</h3>
              <ul className="text-gray-400">
                <li><strong>Finger Length:</strong> 130 mm (customizable for application)</li>
                <li><strong>Gripper Width:</strong> 330 mm</li>
                <li><strong>Total Weight:</strong> 220g</li>
                <li><strong>Mounting Type:</strong> Socket Head Allen Bolt</li>
                <li><strong>Operating Environment:</strong> Food safe, operating temperature -10°C to 60°C</li>
              </ul>
            </div>

            {/* Performance Specifications */}
            <div className="bg-gray-800 rounded-lg p-4 shadow-lg row-span-2">
              <h3 className="text-xl text-orange-600 font-semibold mb-2">3. Performance Specifications</h3>
              <ul className="text-gray-400">
                <li><strong>Payload Capacity:</strong> 0.2kg - 0.3kg</li>
                <li><strong>Actuation Mechanism:</strong> Pneumatic Link</li>
                <li><strong>Closing Speed:</strong> Adjustable</li>
                <li><strong>Grip Strength:</strong> 3 psi</li>
                <li><strong>Finger Flexibility Range:</strong> 45° - 120°</li>
              </ul>
            </div>

            {/* Operational Requirements */}
            <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
              <h3 className="text-xl text-orange-600 font-semibold mb-2">4. Operational Requirements</h3>
              <ul className="text-gray-400">
                <li><strong>Operating Pressure:</strong> 3-6 bar (optimal at 4.5 bar)</li>
                <li><strong>Power Supply Requirement:</strong> Not applicable (pneumatic actuation only)</li>
                <li><strong>Control System Interface:</strong> Pneumatic control valves (compatible with PLC/ROS systems)</li>
              </ul>
            </div>

            {/* Customization Options */}
            <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
              <h3 className="text-xl text-orange-600 font-semibold mb-2">5. Customization Options</h3>
              <ul className="text-gray-400">
                <li><strong>Finger Count:</strong> 2 - 6 finger</li>
                <li><strong>Material Type:</strong> Food Grade Silicon</li>
                <li><strong>Grip Pattern:</strong> Smooth, Textured</li>
                <li><strong>Mounting Compatibility:</strong> Universal flange Dimension</li>
              </ul>
            </div>

            {/* Accessories and Attachments */}
            <div className="bg-gray-800 rounded-lg p-4 shadow-lg col-span-2">
              <h3 className="text-xl text-orange-600 font-semibold mb-2">6. Accessories and Attachments</h3>
              <ul className="text-gray-400">
                <li><strong>Adapters/Flanges:</strong> Custom mounting plates for various robot brands</li>
                <li><strong>Finger Covers:</strong> Flexible, food-safe pneumatic tubing in customizable lengths</li>
                <li><strong>Air Hose:</strong> Optional lengths, X m</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default GripperStore;
