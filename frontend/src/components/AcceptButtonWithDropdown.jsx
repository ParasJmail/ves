import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import icon from "../assets/images/icon.png";

const AcceptButtonWithDropdown = ({ name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(name); // Default button label
  const navigate = useNavigate(); // React Router's navigation hook

  // Toggle the dropdown menu
  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  // Handle dropdown option click
  const handleOptionClick = (option, path) => {
    setSelectedOption(option); // Update button label with the selected option
    setIsOpen(false); // Close the dropdown after selection
    navigate(path); // Navigate to the corresponding path
  };

  // Determine button class based on selected option
  const buttonClass = selectedOption === "Order Delivered" 
    ? "bg-green-600 text-white px-10 py-5 rounded-md flex items-center justify-between"
    : "bg-indigo-700 text-white px-10 py-5 rounded-md flex items-center justify-between";

  return (
    <div className="relative inline-block">
      {/* Button to toggle dropdown */}
      <button
        onClick={toggleDropdown}
        className={buttonClass} // Apply the dynamic button class
      >
        {selectedOption} {/* Dynamically update the button label */}
        <span className="ml-2">
          <img src={icon} alt="icon" />
        </span>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
          <ul className="w-full">
            <li
              className="px-4 p4-2 py-2 hover:bg-indigo-700 text-gray-800 cursor-pointer"
              onClick={() => handleOptionClick("Accept", "/accept")}
            >
              Accept
            </li>
            <li
              className="px-4 py-2 hover:bg-indigo-700 text-gray-800 cursor-pointer"
              onClick={() => handleOptionClick("Order Created", "/order-created")}
            >
              Order Created
            </li>
            <li
              className="px-4 py-2 hover:bg-indigo-700 text-gray-800 cursor-pointer"
              onClick={() => handleOptionClick("Payment Success", "/payment-success")}
            >
              Payment Success
            </li>
            <li
              className="px-4 py-2 hover:bg-indigo-700 text-gray-800 cursor-pointer"
              onClick={() => handleOptionClick("On Delivery", "/on-delivery")}
            >
              On Delivery
            </li>
            <li
              className="px-4 py-2 hover:bg-indigo-700 text-gray-800 cursor-pointer"
              onClick={() => handleOptionClick("Order Delivered", "/order-delivered")}
            >
              Order Delivered
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AcceptButtonWithDropdown;
