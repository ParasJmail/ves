import Header from "@/components/Header";
import SidebarSettings from "@/components/SidebarSettings";
import ProfileCompletion from '@/components/ProfileCompletion.jsx';
import React from "react";
import background from "../assets/images/background.png";
import avatar from "../assets/images/avatar.png";
import { useNavigate } from "react-router-dom";

const ProfileSettings = () => {
    const navigate = useNavigate();  // Hook for navigation

    // Function to handle navigation
    const handleNavigation = (path) => {
        navigate(path);  // Navigate to the given path
    };

    return (
        <div className="flex bg-gray-100 min-h-screen">
            {/* Sidebar */}
            <SidebarSettings />

            {/* Main Content */}
            <div className="w-full">
                {/* Header */}
                <Header />

                <div className="pl-10 pt-5 w-full">
                    <h1 className="text-2xl">Settings</h1>
                    <p className="text-neutral-400">Here you can view and edit the details</p>
                </div>

                <main className="p-10 pt-5">
                    <div className="flex">
                        {/* Tabs Sidebar */}
                        <div className="w-1/5 bg-white rounded-l-lg pt-10 shadow-md">
                            <ul className="space-y-2 w-full justify-center">
                                <li>
                                    <button className="w-full text-left px-16 py-2 bg-indigo-100 text-indigo-600 border-l-4 border-indigo-600 font-medium"
                                        onClick={() => handleNavigation("/settings/profile")}
                                    >
                                        My Profile
                                    </button>
                                </li>
                                <li>
                                    <button className="w-full text-left px-16 py-2 text-gray-600 hover:text-indigo-700 hover:border-indigo-700"
                                        onClick={() => handleNavigation("/settings/password")}
                                    >
                                        Password
                                    </button>
                                </li>
                                <li>
                                    <button className="w-full text-left px-16 py-2 text-gray-600 hover:text-indigo-700 hover:border-indigo-700"
                                        onClick={() => handleNavigation("/settings/notification")}
                                    >
                                        Notifications
                                    </button>
                                </li>
                            </ul>
                        </div>

                        {/* Profile Card and Form */}
                        <div className="flex-1 bg-white shadow-md overflow-hidden rounded-r-lg">
                            {/* Background with Avatar */}
                            <div className="relative">
                                {/* Background Image */}
                                <div
                                    className="h-40 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${background})` }}
                                ></div>

                                {/* Avatar */}
                                <div className="absolute bottom-[-40px] w-full flex justify-center">
                                    <img
                                        src={avatar}
                                        alt="Avatar"
                                        className="w-20 h-20 rounded-full border-4 border-white bg-white shadow-md"
                                    />
                                </div>
                            </div>

                            <div className="p-6 pt-16">
                                {/* Profile Completion Bar */}
                                <div className="mb-6 w-full">
                                    <ProfileCompletion />
                                </div>

                                {/* Form */}
                                <form>
                                    <div className="grid grid-cols-1 gap-4">
                                        <h1 className="text-2xl font-semibold pb-4">Basic Details</h1>

                                        <div className="grid grid-cols-2 gap-4">
                                            {/* Basic Details Heading */}


                                            <div>
                                                <label className="block text-sm mb-1">Your Name</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Your Name"
                                                    className="w-full border rounded-md px-4 py-2"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm mb-1">Phone Number</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Phone Number"
                                                    className="w-full border rounded-md px-4 py-2"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm mb-1">E-Mail</label>
                                                <input
                                                    type="email"
                                                    placeholder="Enter E-Mail Address"
                                                    className="w-full border rounded-md px-4 py-2"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm mb-1">Shop Name</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Shop Name"
                                                    className="w-full border rounded-md px-4 py-2"
                                                />
                                            </div>
                                        </div>
                                        <h1 className="text-2xl font-semibold pb-4">Address</h1>

                                        <div className="grid grid-cols-2 gap-4">
                                            {/* Address Heading */}


                                            <div>
                                                <label className="block text-sm mb-1">Address</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Shop Address"
                                                    className="w-full border rounded-md px-4 py-2"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm mb-1">Select City</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Shop City"
                                                    className="w-full border rounded-md px-4 py-2"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm mb-1">Select State</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Shop State"
                                                    className="w-full border rounded-md px-4 py-2"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm mb-1">Area</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Area"
                                                    className="w-full border rounded-md px-4 py-2"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className="mt-4">
                                        <h1 className="text-2xl font-semibold pb-4">Description</h1>
                                        <textarea
                                            placeholder="Enter Your Description"
                                            className="w-full border rounded-md px-4 py-2"
                                        ></textarea>
                                    </div>

                                    {/* Shop Location */}
                                    <div className="mt-4">
                                        <label className="block text-sm mb-1">Shop Location (Optional)</label>
                                        <button
                                            type="button"
                                            className="flex justify-center items-center space-x-4 border rounded-md py-2 text-gray-600"
                                        >
                                            <div><svg width="33" height="36" viewBox="0 0 33 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.625 17.2406C13.5061 17.2406 12.4331 16.8406 11.6419 16.1285C10.8507 15.4165 10.4062 14.4507 10.4062 13.4437C10.4062 12.4368 10.8507 11.471 11.6419 10.759C12.4331 10.0469 13.5061 9.64687 14.625 9.64687C15.7439 9.64687 16.8169 10.0469 17.6081 10.759C18.3993 11.471 18.8438 12.4368 18.8438 13.4437C18.8438 13.9424 18.7346 14.4361 18.5226 14.8968C18.3106 15.3574 17.9999 15.776 17.6081 16.1285C17.2164 16.4811 16.7513 16.7608 16.2394 16.9516C15.7276 17.1424 15.179 17.2406 14.625 17.2406ZM14.625 2.8125C11.4921 2.8125 8.48757 3.93257 6.2723 5.92632C4.05703 7.92007 2.8125 10.6242 2.8125 13.4437C2.8125 21.4172 14.625 33.1875 14.625 33.1875C14.625 33.1875 26.4375 21.4172 26.4375 13.4437C26.4375 10.6242 25.193 7.92007 22.9777 5.92632C20.7624 3.93257 17.7579 2.8125 14.625 2.8125Z" fill="#4A3EBF" />
                                            </svg>
                                            </div>
                                            <div className="align-middle"><p>Add Shop Coordinates</p><sub>Tap to add Location</sub></div>
                                            <div><svg width="32" height="34" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21.1131 2.82812H10.1856C5.43905 2.82812 2.60938 5.89711 2.60938 11.0451V22.8826C2.60938 28.0447 5.43905 31.1137 10.1856 31.1137H21.1C25.8466 31.1137 28.6763 28.0447 28.6763 22.8967V11.0451C28.6893 5.89711 25.8596 2.82812 21.1131 2.82812ZM20.8653 18.0316H16.6273V22.628C16.6273 23.2079 16.184 23.6887 15.6493 23.6887C15.1147 23.6887 14.6713 23.2079 14.6713 22.628V18.0316H10.4334C9.89871 18.0316 9.45535 17.5508 9.45535 16.9709C9.45535 16.391 9.89871 15.9102 10.4334 15.9102H14.6713V11.3138C14.6713 10.7339 15.1147 10.2531 15.6493 10.2531C16.184 10.2531 16.6273 10.7339 16.6273 11.3138V15.9102H20.8653C21.4 15.9102 21.8433 16.391 21.8433 16.9709C21.8433 17.5508 21.4 18.0316 20.8653 18.0316Z" fill="#919191" />
                                            </svg>
                                            </div>
                                        </button>
                                    </div>

                                    {/* Buttons */}
                                    <div className="mt-6 flex justify-end space-x-4">
                                        <button
                                            type="button"
                                            className="px-4 py-2 border rounded-md text-gray-600"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="px-4 py-2 bg-indigo-700 text-white rounded-md"
                                        >
                                            Update
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ProfileSettings;
