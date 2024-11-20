import React from "react";
import { useNavigate } from "react-router-dom";
import dashboard from "../assets/images/dashboard.png";
import order_list from '../assets/images/order_list.png';
import order_details from '../assets/images/order_details.png';
import reviews from '../assets/images/reviews.png';
import setting from '../assets/images/setting.png';
import inbox from '../assets/images/inbox.png';
import logo2 from '../assets/images/logo2.png'

const SidebarSettings = () => {
    const navigate = useNavigate();  // Hook for navigation

    // Function to handle navigation
    const handleNavigation = (path) => {
        navigate(path);  // Navigate to the given path
    };

    return (
        <div className="bg-indigo-700 min-h-screen">
            <aside className="bg-indigo-700 text-white w-[302px] h-screen justify-around flex flex-col pt-4">
                <div className="w-full justify-center flex">
                    <h1 className="text-2xl w-2/3 pt-5 px-5  mx-5 py-2 text text-black text-center font-bold mb-6">
                        <img src={logo2} className="w-fit" alt="" />
                    </h1>
                </div>

                <div>
                    <ul className="space-y-7 w-full text-center flex flex-col pl-20">
                        <li
                            className="cursor-pointer flex items-center p-2"
                            onClick={() => handleNavigation("/dashboard")}
                        >
                            <span className="material-icons mr-2"><img src={dashboard} alt="" /></span> Dashboard
                        </li>
                        <li
                            className="cursor-pointer flex items-center p-2"
                            onClick={() => handleNavigation("/order-list")}
                        >
                            <span className="material-icons mr-2"><img src={order_list} alt="" /></span> Order List
                        </li>
                        <li
                            className="cursor-pointer flex items-center p-2 "
                            onClick={() => handleNavigation("/accept")}
                        >
                            <span className="material-icons mr-2"><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.65 2.98414C12.4689 2.82924 12.2383 2.74412 12 2.74414H5C4.73478 2.74414 4.48043 2.8495 4.29289 3.03703C4.10536 3.22457 4 3.47892 4 3.74414V21.7441C4 22.0094 4.10536 22.2637 4.29289 22.4513C4.48043 22.6388 4.73478 22.7441 5 22.7441H19C19.2652 22.7441 19.5196 22.6388 19.7071 22.4513C19.8946 22.2637 20 22.0094 20 21.7441V9.74414C20 9.5997 19.9687 9.45697 19.9083 9.32578C19.8479 9.19458 19.7598 9.07803 19.65 8.98414L12.65 2.98414ZM13 5.91414L16.3 8.74414H13V5.91414ZM18 20.7441H6V4.74414H11V9.74414C11 10.0094 11.1054 10.2637 11.2929 10.4512C11.4804 10.6388 11.7348 10.7441 12 10.7441H18V20.7441Z" fill="white" />
                            </svg>
                            </span> Orders Details
                        </li>
                        <li
                            className="cursor-pointer flex items-center p-2"
                            onClick={() => handleNavigation("/inbox")}
                        >
                            <span className="material-icons mr-2"><img src={inbox} alt="" /></span> Inbox
                        </li>
                        <li
                            className="cursor-pointer flex items-center p-2"
                            onClick={() => handleNavigation("/reviews")}
                        >
                            <span className="material-icons mr-2"><img src={reviews} alt="" /></span> Reviews
                        </li>
                        <li
                            className="cursor-pointer flex items-center p-2 rounded-l-full bg-white text-black font-semibold text-lg"
                            onClick={() => handleNavigation("/settings/profile")}
                        >
                            <span className="material-icons mr-2"><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.4023 14.3241C20.76 14.5141 21.036 14.8141 21.2301 15.1141C21.6083 15.7341 21.5776 16.4941 21.2097 17.1641L20.4943 18.3641C20.1162 19.0041 19.411 19.4041 18.6855 19.4041C18.3278 19.4041 17.9292 19.3041 17.6022 19.1041C17.3365 18.9341 17.0299 18.8741 16.7029 18.8741C15.6911 18.8741 14.8429 19.7041 14.8122 20.6941C14.8122 21.8441 13.872 22.7441 12.6968 22.7441H11.3069C10.1215 22.7441 9.18125 21.8441 9.18125 20.6941C9.16081 19.7041 8.31259 18.8741 7.30085 18.8741C6.96361 18.8741 6.65702 18.9341 6.40153 19.1041C6.0745 19.3041 5.66572 19.4041 5.31825 19.4041C4.58245 19.4041 3.87729 19.0041 3.49917 18.3641L2.79402 17.1641C2.4159 16.5141 2.39546 15.7341 2.77358 15.1141C2.93709 14.8141 3.24368 14.5141 3.59115 14.3241C3.87729 14.1841 4.06125 13.9541 4.23498 13.6841C4.74596 12.8241 4.43937 11.6941 3.57071 11.1841C2.55897 10.6141 2.23194 9.34414 2.81446 8.35414L3.49917 7.17414C4.09191 6.18414 5.35913 5.83414 6.38109 6.41414C7.27019 6.89414 8.425 6.57414 8.9462 5.72414C9.10972 5.44414 9.20169 5.14414 9.18125 4.84414C9.16081 4.45414 9.27323 4.08414 9.4674 3.78414C9.84553 3.16414 10.5302 2.76414 11.2763 2.74414H12.7172C13.4735 2.74414 14.1582 3.16414 14.5363 3.78414C14.7203 4.08414 14.8429 4.45414 14.8122 4.84414C14.7918 5.14414 14.8838 5.44414 15.0473 5.72414C15.5685 6.57414 16.7233 6.89414 17.6226 6.41414C18.6344 5.83414 19.9118 6.18414 20.4943 7.17414L21.179 8.35414C21.7718 9.34414 21.4447 10.6141 20.4228 11.1841C19.5541 11.6941 19.2475 12.8241 19.7687 13.6841C19.9322 13.9541 20.1162 14.1841 20.4023 14.3241ZM9.10972 12.7541C9.10972 14.3241 10.4076 15.5741 12.0121 15.5741C13.6165 15.5741 14.8838 14.3241 14.8838 12.7541C14.8838 11.1841 13.6165 9.92414 12.0121 9.92414C10.4076 9.92414 9.10972 11.1841 9.10972 12.7541Z" fill="#464255" />
                            </svg>
                            </span> Settings
                        </li>
                    </ul>
                </div>

                <button className="flex mt-10 justify-center pr-20 px-4 py-2 rounded-md w-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.89535 11.23C9.45785 11.23 9.11192 11.57 9.11192 12C9.11192 12.42 9.45785 12.77 9.89535 12.77H16V17.55C16 20 13.9753 22 11.4724 22H6.51744C4.02471 22 2 20.01 2 17.56V6.45C2 3.99 4.03488 2 6.52762 2H11.4927C13.9753 2 16 3.99 16 6.44V11.23H9.89535ZM19.6302 8.5402L22.5502 11.4502C22.7002 11.6002 22.7802 11.7902 22.7802 12.0002C22.7802 12.2002 22.7002 12.4002 22.5502 12.5402L19.6302 15.4502C19.4802 15.6002 19.2802 15.6802 19.0902 15.6802C18.8902 15.6802 18.6902 15.6002 18.5402 15.4502C18.2402 15.1502 18.2402 14.6602 18.5402 14.3602L20.1402 12.7702H16.0002V11.2302H20.1402L18.5402 9.6402C18.2402 9.3402 18.2402 8.8502 18.5402 8.5502C18.8402 8.2402 19.3302 8.2402 19.6302 8.5402Z" fill="white" />
                    </svg>

                    Log out
                </button>
            </aside>
        </div>
    );
};

export default SidebarSettings;
