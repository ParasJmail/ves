import React from "react";

const ProfileCompletion = () => {
  // Manually set the completion percentage
  const completion = 100; // Adjust the percentage here

  return (
    <div className="mb-6 w-1/3">
      {/* Progress Bar Section */}
      <div className="flex items-center">
        {/* Progress Bar Container */}
        <div className="h-2 bg-gray-200 rounded-full flex-grow relative">
          {/* Dynamic Progress */}
          <div
            className="h-2 bg-green-500 rounded-full absolute top-0 left-0"
            style={{ width: `${completion}%` }} // Adjust width dynamically
          ></div>
        </div>

        {/* Percentage Display */}
        <p className="text-sm text-gray-600 ml-2">{completion}%</p>
      </div>
    </div>
  );
};

export default ProfileCompletion;
