import React from "react";
import avatar from '../assets/images/avatar.png'
import message from '../assets/images/message.png'
import notification from '../assets/images/notification.png'
import AcceptButtonWithDropdown from "./AcceptButtonWithDropdown";

const Header = () => {
  return (
    <div className="w-full  mt-10 flex flex-col justify-between">
      <div className="flex flex-row">
        <div className="rounded-lg mx-10 flex items-center flex-row w-7/12 justify-between px-6 py-4 bg-white shadow-md">
          {/* Search Bar */}
          <div className="flex items-center w-2/3">
            <input
              type="text"
              placeholder="Search here"
              className="w-full px-4 py-2  rounded-full outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>


        </div>
        {/* Notifications */}
        <div className="flex items-center space-x-6 justify-between mx-10">
          {/* Notification Icon 1 */}
          <div className="relative flex items-center justify-center w-10 h-10 bg-indigo-200 rounded-xl cursor-pointer">
            <img src={message} alt="" />
            <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-indigo-500 rounded-full">
              63
            </span>
          </div>

          {/* Notification Icon 2 */}
          <div className="relative flex items-center justify-center w-10 h-10 bg-indigo-200 rounded-xl cursor-pointer">
            <img src={notification} alt="" />
            <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-indigo-500 rounded-full">
              21
            </span>
          </div>

          {/* Profile */}
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">Hello, Mamatha</span>
            <div className="w-10 h-10 bg-cover rounded-full" style={{ backgroundImage: `url(${avatar})` }} />
          </div>


        </div>
      </div>
    </div>
  );
};

export default Header;
