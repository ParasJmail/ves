import Header from "@/components/Header";
import SidebarSettings from "@/components/SidebarSettings";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProfileNotification = () => {
    const navigate = useNavigate(); // Hook for navigation

    // Function to handle navigation
    const handleNavigation = (path) => {
        navigate(path); // Navigate to the given path
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
                    <div className="flex h-lvh ">
                        {/* Tabs Sidebar */}
                        <div className="w-1/5 bg-white rounded-l-lg pt-10 shadow-md">
                            <ul className="space-y-2 w-full justify-center">
                                <li>
                                    <button
                                        className="w-full text-left px-16 py-2 text-gray-600 hover:text-indigo-700 hover:border-indigo-700"
                                        onClick={() => handleNavigation("/settings/profile")}
                                    >
                                        My Profile
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className="w-full text-left px-16 py-2 text-gray-600 hover:text-indigo-700 hover:border-indigo-700"
                                        onClick={() => handleNavigation("/settings/password")}
                                    >
                                        Password
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className="w-full text-left px-16 py-2 bg-indigo-100 text-indigo-600 border-l-4 border-indigo-600 font-medium"
                                        onClick={() => handleNavigation("/settings/notification")}
                                    >
                                        Notifications
                                    </button>
                                </li>
                            </ul>
                        </div>

                        {/* Notification Section */}
                        <div className="flex-1 bg-white shadow-md overflow-hidden rounded-r-lg p-8">
                            <h2 className="text-xl font-medium mb-4">All Notifications</h2>
                            <div className="space-y-6">
                                {/* Notification 1 */}
                                <div className="flex items-start space-x-4 py-5 border-b-2 border-gray-200 ">
                                    <img
                                        src="https://via.placeholder.com/40"
                                        alt="User avatar"
                                        className="rounded-full h-10 w-10"
                                    />
                                    <div className="flex-1">
                                        <h3 className="font-medium">Philip Schelfer</h3>
                                        <p className="text-sm text-gray-500">25 June 2020</p>
                                        <p className="text-sm mt-2 text-gray-700">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi.
                                        </p>
                                    </div>
                                </div>
                                {/* Notification 2 */}
                                <div className="flex items-start py-5 space-x-4 border-b-2 border-gray-200">
                                    <img
                                        src="https://via.placeholder.com/40"
                                        alt="User avatar"
                                        className="rounded-full h-10 w-10"
                                    />
                                    <div className="flex-1">
                                        <h3 className="font-medium">Ordered a PDF File</h3>
                                        <p className="text-sm text-gray-500">Student • 25 June 2020</p>
                                        <div className="flex space-x-4 mt-2">
                                            <button className="text-sm text-indigo-600 hover:underline">
                                                Accept Order
                                            </button>
                                            <button className="text-sm text-red-600 hover:underline">
                                                Reject Order
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* Notification 3 */}
                                <div className="flex items-start py-5 space-x-4 ">
                                    <img
                                        src="https://via.placeholder.com/40"
                                        alt="User avatar"
                                        className="rounded-full h-10 w-10"
                                    />
                                    <div className="flex-1">
                                        <h3 className="font-medium">Order delivered to Manoj</h3>
                                        <p className="text-sm text-gray-500">Student • 25 June 2020</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ProfileNotification;
