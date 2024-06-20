import React, { useState } from 'react';
import { FaPhone, FaRegSnowflake, FaPlug, FaWifi, FaTv, FaWhatsapp, FaHandshake, FaPlay } from 'react-icons/fa';
import localVideo from '../images/video.mp4';

const NewDesignComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="bg-black text-white py-10 px-6 flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-12">
            <div className="flex-1 md:w-2/3 bg-gray-900 p-6 rounded-lg">
                <div className="mb-8">
                    <video className="w-full h-64 md:h-80 rounded-lg mb-6" controls>
                        <source src={localVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h1 className="text-3xl font-bold mb-4">Car Interior Features</h1>
                    <p className="text-lg mb-4">Discover the exceptional features of our luxury car interiors designed to provide the utmost comfort and convenience during your journey.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center w-full">
                            <FaPhone className="text-red-600 text-lg mb-2" />
                            <p className="text-sm text-center">Partition Cabin with Intercom</p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center w-full">
                            <FaRegSnowflake className="text-red-600 text-lg mb-2" />
                            <p className="text-sm text-center">Refrigerated Refreshments</p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center w-full">
                            <FaPlug className="text-red-600 text-lg mb-2" />
                            <p className="text-sm text-center">Multi Cabin Charging Functionality</p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center w-full">
                            <FaWifi className="text-red-600 text-lg mb-2" />
                            <p className="text-sm text-center">In Cabin Wifi Functionality</p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center w-full">
                            <FaTv className="text-red-600 text-lg mb-2" />
                            <p className="text-sm text-center">In Cabin Entertainment</p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center w-full">
                            <FaWhatsapp className="text-red-600 text-lg mb-2" />
                            <p className="text-sm text-center">Communication</p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center w-full">
                            <FaHandshake className="text-red-600 text-lg mb-2" />
                            <p className="text-sm text-center">Meet & Greet</p>
                        </div>
                    </div>
                    <p className="text-lg mt-6">Our luxury cars offer unparalleled comfort and convenience, ensuring a memorable travel experience. From advanced entertainment systems to high-speed connectivity, we provide everything you need for a luxurious journey.</p>
                    <div className="flex space-x-4 mt-6">
                        <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Enquire More</button>
                        <button onClick={openModal} className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 flex items-center">
                            <FaPlay className="mr-2" /> Watch Now
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex-1 md:w-1/3 flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold mb-4 text-center">Enquire More</h1>
                <p className="text-lg mb-4 text-center">
                    Interested in learning more about our services? Contact us today to find out how we can make your travel experience unforgettable.
                </p>
                <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Enquire More</button>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
                    <div className="relative w-full max-w-4xl p-6">
                        <button className="absolute top-4 right-4 text-white text-2xl" onClick={closeModal}>X</button>
                        <video className="w-full h-96 rounded-lg" controls autoPlay>
                            <source src={localVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NewDesignComponent;
