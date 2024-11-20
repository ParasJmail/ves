import Header from "@/components/Header";
import SidebarSettings from "@/components/SidebarSettings";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProfilePassword = () => {
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
                    <div className="flex h-fit">
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
                                        className="w-full text-left px-16 py-2 bg-indigo-100 text-indigo-600 border-l-4 border-indigo-600 font-medium"
                                        onClick={() => handleNavigation("/settings/password")}
                                    >
                                        Password
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className="w-full text-left px-16 py-2 text-gray-600 hover:text-indigo-700 hover:border-indigo-700"
                                        onClick={() => handleNavigation("/settings/notification")}
                                    >
                                        Notifications
                                    </button>
                                </li>
                            </ul>
                        </div>

                        {/* Change Password Section */}
                        <div className="flex-1 bg-white shadow-md overflow-hidden rounded-r-lg p-8">
                            <h2 className="text-xl font-medium mb-4">Change Current Password</h2>
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Enter Current Password</label>
                                    <input
                                        type="password"
                                        placeholder="Enter Current Password"
                                        className="w-full border rounded-md px-4 py-2 focus:ring focus:ring-indigo-300 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Enter New Password</label>
                                    <input
                                        type="password"
                                        placeholder="Enter New Password"
                                        className="w-full border rounded-md px-4 py-2 focus:ring focus:ring-indigo-300 focus:outline-none"
                                    />
                                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                        <div className="bg-indigo-600 h-2 rounded-full" style={{ width: "50%" }}></div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Confirm New Password</label>
                                    <input
                                        type="password"
                                        placeholder="Confirm New Password"
                                        className="w-full border rounded-md px-4 py-2 focus:ring focus:ring-indigo-300 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium mb-2">Password Requirements:</h3>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        <li>• Minimum 8 characters long - the more, the better</li>
                                        <li>• At least one lowercase character</li>
                                        <li>• At least one uppercase character</li>
                                        <li>• At least one number, symbol, or whitespace character</li>
                                    </ul>
                                </div>
                                <div className="flex justify-end space-x-4">
                                    <button
                                        type="button"
                                        className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                                    >
                                        Update
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ProfilePassword;
