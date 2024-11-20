import React from "react";
import { useNavigate } from "react-router-dom";
import dashboard from "../assets/images/dashboard.png";
import order_list from '../assets/images/order_list.png';
import orderDetails1 from '../assets/images/orderDetails1.png';
import reviews from '../assets/images/reviews.png';
import setting from '../assets/images/setting.png';
import inbox1 from '../assets/images/inbox1.png';
import logo2 from '../assets/images/logo2.png'


const Sidebar = () => {
    const navigate = useNavigate();  // Hook for navigation

    // Function to handle navigation
    const handleNavigation = (path) => {
        navigate(path);  // Navigate to the given path
    };

    return (
        <div className="bg-indigo-700 min-h-screen">
            <aside className="bg-indigo-700 text-white w-[302px] h-screen justify-around flex flex-col pt-4">
                <div className="w-full justify-center flex">
                    <h1 className="text-2xl px-5 w-2/3 pt-5 mx-5 py-2 text text-black text-center font-bold mb-6">
                        <img src={logo2} alt="" />
                    </h1>
                </div>

                <div>
                    <ul className="space-y-7 w-full text-center flex flex-col ">
                        <li
                            className="cursor-pointer flex items-center pl-20 p-2"
                            onClick={() => handleNavigation("/dashboard")}
                        >
                            <span className="material-icons mr-2"><img src={dashboard} alt="" /></span> Dashboard
                        </li>
                        <li
                            className="cursor-pointer flex items-center pl-20 p-2"
                            onClick={() => handleNavigation("/order-list")}
                        >
                            <span className="material-icons mr-2"><img src={order_list} alt="" /></span> Order List
                        </li>
                        <li
                            className="cursor-pointer flex items-center pl-20 p-2 "
                            onClick={() => handleNavigation("/accept")}
                        >
                            <span className="material-icons mr-2"><img src={orderDetails1} alt="" /></span> Orders Details
                        </li>
                        <li
                            className="cursor-pointer w-full flex flex-col justify-center items-center py-5  rounded-l-full bg-white text-black font-semibold text-lg"
                            onClick={() => handleNavigation("/inbox")}
                        >
                            <div className="material-icons mr-2 mb-2 flex items-center"><img className=" h-5 pr-1" src={inbox1} alt="" /> Inbox</div>

                            <div className="w-full flex justify-end">
                                <div className="material-icons text-white mb-2 rounded-l-full  w-5/6 pr-10 mr-0 justify-end bg-indigo-700">
                                    Email
                                </div>
                            </div>

                            <div className="w-full ">
                                Chat
                            </div>
                        </li>
                        <li
                            className="cursor-pointer flex pl-20 items-center p-2"
                            onClick={() => handleNavigation("/reviews")}
                        >
                            <span className="material-icons mr-2"><img src={reviews} alt="" /></span> Reviews
                        </li>
                        <li
                            className="cursor-pointer flex pl-20 items-center p-2"
                            onClick={() => handleNavigation("/settings/profile")}
                        >
                            <span className="material-icons mr-2"><img src={setting} alt="" /></span> Settings
                        </li>
                    </ul>
                </div>

                <button className="flex mt-10 justify-center pr-20 text-white px-4 py-2 rounded-md w-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.89535 11.23C9.45785 11.23 9.11192 11.57 9.11192 12C9.11192 12.42 9.45785 12.77 9.89535 12.77H16V17.55C16 20 13.9753 22 11.4724 22H6.51744C4.02471 22 2 20.01 2 17.56V6.45C2 3.99 4.03488 2 6.52762 2H11.4927C13.9753 2 16 3.99 16 6.44V11.23H9.89535ZM19.6302 8.5402L22.5502 11.4502C22.7002 11.6002 22.7802 11.7902 22.7802 12.0002C22.7802 12.2002 22.7002 12.4002 22.5502 12.5402L19.6302 15.4502C19.4802 15.6002 19.2802 15.6802 19.0902 15.6802C18.8902 15.6802 18.6902 15.6002 18.5402 15.4502C18.2402 15.1502 18.2402 14.6602 18.5402 14.3602L20.1402 12.7702H16.0002V11.2302H20.1402L18.5402 9.6402C18.2402 9.3402 18.2402 8.8502 18.5402 8.5502C18.8402 8.2402 19.3302 8.2402 19.6302 8.5402Z" fill="white" />
                    </svg>

                    Log out
                </button>
            </aside>
        </div>
    );
};

export default Sidebar;
