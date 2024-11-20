import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Star from "@/components/Star";

const DynamicList = ({ length }) => {
  const navigate = useNavigate();

  // Sample data for dynamic rendering
  const [items, setItems] = useState(
    Array.from({ length: length }, (_, i) => ({
      id: i + 1,
      name: `Name ${i + 1}`,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      profilePic: "https://via.placeholder.com/40",
      isChecked: false, // Initial checkbox state
    }))
  );

  // State to track hover
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // State to manage "Select All" checkbox
  const [allChecked, setAllChecked] = useState(false);

  // Handle "Select All" toggle
  const handleToggleAll = (event) => {
    const isChecked = event.target.checked;
    setAllChecked(isChecked);
    setItems((prevItems) =>
      prevItems.map((item) => ({ ...item, isChecked }))
    );
  };

  // Handle individual checkbox toggle
  const handleItemCheckboxClick = (event, id) => {
    event.stopPropagation(); // Prevent navigation when clicking checkbox
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  // Navigate to email page
  const handleItemClick = (id) => {
    navigate(`/email/${id}`);
  };

  // Handle star click
  const handleStarClick = (event) => {
    event.stopPropagation(); // Prevent navigation when clicking star
  };

  return (
    <div className="bg-white-100 rounded-md align-middle shadow-md">
      <div className="flex justify-between w-full pl-2 items-center border-b pb-2">
        <div className="w-2/3">
          <input
            type="checkbox"
            className="w-5 h-5"
            checked={allChecked}
            onChange={handleToggleAll}
          />
        </div>
        <div className="flex justify-center w-full">
          <div>
            <svg
              width="29"
              height="26"
              viewBox="0 0 29 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG path */}
            </svg>
          </div>
          <div className="pl-20">
            <svg
              width="29"
              height="26"
              viewBox="0 0 29 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG path */}
            </svg>
          </div>
        </div>
      </div>

      {items.map((item, index) => (
        <div
          key={item.id}
          className="flex bg-gray-100 justify-between items-center p-2 border-b hover:bg-gray-50 cursor-pointer"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => handleItemClick(item.id)}
        >
          <div className="flex items-center space-x-4">
            <input
              type="checkbox"
              className="w-5 h-5"
              checked={item.isChecked}
              onChange={(event) => handleItemCheckboxClick(event, item.id)}
              onClick={(event) => event.stopPropagation()} // Prevent row click when checkbox is clicked
            />
            <div className="w-5 h-5 text-yellow-500" onClick={handleStarClick}>
              <Star />
            </div>
            <img
              src={item.profilePic}
              alt="profile"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex flex-col">
              <h4 className="font-bold">{item.name}</h4>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          </div>
          <div>
            {hoveredIndex === index ? (
              <span>View Details</span>
            ) : (
              <span className="text-sm text-gray-500">01:16 PM</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DynamicList;
