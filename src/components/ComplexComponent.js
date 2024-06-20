import React from 'react';
import { FaPhone, FaRegSnowflake, FaPlug, FaWifi, FaTv, FaWhatsapp, FaHandshake } from 'react-icons/fa';
import localVideo from '../images/video.mp4'; // Adjust the path to your local video file
import backgroundImage from '../images/slide1.jpeg'; // Adjust the path to your background image

const ComplexComponent = () => {
    return (
        <div className="bg-black text-white py-10 px-6 flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-12">
            <div className="flex-1 md:w-1/2 bg-cover bg-center p-6 rounded-lg shadow-lg">
                <div className="mb-8">
                    <video className="w-full h-64 md:h-80 rounded-lg shadow-lg mb-6" controls>
                        <source src={localVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h1 className="text-3xl font-bold mb-4">Car Interior Features</h1>
                    <p className="text-lg mb-4">Discover the exceptional features of our luxury car interiors designed to provide the utmost comfort and convenience during your journey.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="bg-gray-800 p-2 rounded-lg shadow-md flex flex-col items-center w-32">
                            <FaPhone className="text-red-600 text-lg mb-2" />
                            <p className="text-sm text-center">Partition Cabin with Intercom</p>
                        </div>
                        <div className="bg-gray-800 p-2 rounded-lg shadow-md flex flex-col items-center w-32">
                            <FaRegSnowflake className="text-red-600 text-lg mb-2" />
                            <p className="text-sm text-center">Refrigerated Refreshments</p>
                        </div>
                        <div className="bg-gray-800 p-2 rounded-lg shadow-md flex flex-col items-center w-32">
                            <FaPlug className="text-red-600 text-lg mb-2" />
                            <p className="text-sm text-center">Multi Cabin Charging Functionality</p>
                        </div>
                        <div className="bg-gray-800 p-2 rounded-lg shadow-md flex flex-col items-center w-32">
                            <FaWifi className="text-red-600 text-lg mb-2" />
                            <p className="text-sm text-center">In Cabin Wifi Functionality</p>
                        </div>
                        <div className="bg-gray-800 p-2 rounded-lg shadow-md flex flex-col items-center w-32">
                            <FaTv className="text-red-600 text-lg mb-2" />
                            <p className="text-sm text-center">In Cabin Entertainment</p>
                        </div>
                        <div className="bg-gray-800 p-2 rounded-lg shadow-md flex flex-col items-center w-32">
                            <FaWhatsapp className="text-red-600 text-lg mb-2" />
                            <p className="text-sm text-center">Communication</p>
                        </div>
                        <div className="bg-gray-800 p-2 rounded-lg shadow-md flex flex-col items-center w-32">
                            <FaHandshake className="text-red-600 text-lg mb-2" />
                            <p className="text-sm text-center">Meet & Greet</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 md:w-1/2 flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold mb-4 text-center">Enquire More</h1>
                <p className="text-lg mb-4 text-center">
                    Interested in learning more about our services? Contact us today to find out how we can make your travel experience unforgettable.
                </p>
                <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Enquire More</button>
            </div>
        </div>
    );
};

export default ComplexComponent;
