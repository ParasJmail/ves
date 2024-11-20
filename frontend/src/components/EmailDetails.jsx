import React from "react";
import Star from "./Star";

const EmailDetails = () => {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            {/* Primary Header */}
            <div className="bg-white shadow-sm">
                <div className="mx-auto px-20 py-4 flex items-center justify-between">
                    <h1 className="text-lg font-semibold">Doubt</h1>
                    <div className="flex items-center space-x-4">
                        <button className="text-gray-500 hover:text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button className="text-gray-500 hover:text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Secondary Header */}
            <div className="bg-white shadow-sm border-t">
                <div className="px-20 mx-auto py-4 flex items-center justify-end space-x-4">
                    {/* Delete Button */}
                    <button
                        className="text-gray-500 hover:text-red-500"
                        title="Delete"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3m4 0H5"
                            />
                        </svg>
                    </button>

                    {/* Star Button */}
                    <button
                        className="text-gray-500 hover:text-yellow-500"
                        title="Star"
                    >
                        <Star />
                    </button>
                </div>
            </div>

            {/* Email Details */}
            <div className="mx-20 mt-4 bg-white rounded-lg shadow-md px-20  p-6">
                {/* Sender Info */}
                <div className="flex items-center mb-6">
                    <img
                        src="https://via.placeholder.com/40"
                        alt="profile"
                        className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-4">
                        <h2 className="font-semibold">Tommy Sicilia</h2>
                        <p className="text-sm text-gray-500">tommyscilia@gmail.com</p>
                    </div>
                    <div className="ml-auto text-sm text-gray-400">Mon Dec 10 2018 01:16 PM</div>
                </div>

                {/* Email Body */}
                <div>
                    <p className="text-gray-700 mb-4">Hi John,</p>
                    <p className="text-gray-700 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className="text-gray-700">Regards,</p>
                    <p className="text-gray-700 font-semibold">Tommy Sicilia</p>
                </div>

                {/* Attachments */}
                <div className="mt-6 border-t-2 border-gray-200 ">
                    <h3 className="font-semibold text-gray-700 mb-4">2 Attachments</h3>
                    <div className="space-y-2">
                        <div className="flex items-center text-indigo-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75v1.5a3 3 0 11-6 0v-1.5m6 0V9m0 6a3 3 0 01-6 0V9m6 0a3 3 0 00-6 0" />
                            </svg>
                            <span>logo.txt</span>
                        </div>
                        <div className="flex items-center text-indigo-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75v1.5a3 3 0 11-6 0v-1.5m6 0V9m0 6a3 3 0 01-6 0V9m6 0a3 3 0 00-6 0" />
                            </svg>
                            <span>logo.pdf</span>
                        </div>
                    </div>
                </div>

                
            </div>

            {/* Footer */}
            <div className="px-20 mx-20 mt-4 bg-white rounded-lg shadow-md p-6">
                <div className=" text-gray-500 text-sm">
                    Click here to <a href="#" className="text-indigo-700 hover:underline">reply</a> or <a href="#" className="text-indigo-700 hover:underline">forward</a>
                </div>
            </div>
        </div>
    );
};

export default EmailDetails;
