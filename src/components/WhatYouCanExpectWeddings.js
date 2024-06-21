import React from 'react';
import { FaPhone, FaRegSnowflake, FaPlug, FaWifi, FaTv, FaWhatsapp, FaHandshake } from 'react-icons/fa';

const WhatYouCanExpectWeddings = () => {
    return (
        <div className="bg-black py-10 px-6 text-white">
            <h1 className="text-4xl font-bold mb-6 text-center">What You Can Expec for your weddings ceremonies</h1>
            <p className="text-center text-lg mb-8">
                Experience the pinnacle of luxury and comfort with our premium travel services. Our luxury cars come equipped with all the features to make your journey unforgettable.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl font-semibold mb-4">Features of Our Luxury Cars</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center">
                            <FaPhone className="text-red-600 text-5xl mb-2" />
                            <h3 className="text-lg font-bold mb-2">Partition Cabin with Intercom</h3>
                            <p className="text-sm text-center">For that extra element of exclusivity and privacy whilst knowing your driver is a touch of a button away.</p>
                        </div>
                        <div className="bg-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center">
                            <FaRegSnowflake className="text-red-600 text-5xl mb-2" />
                            <h3 className="text-lg font-bold mb-2">Refrigerated Refreshments</h3>
                            <p className="text-sm text-center">It wouldn’t be luxury without chilled refreshments to add that extra touch of comfort.</p>
                        </div>
                        <div className="bg-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center">
                            <FaPlug className="text-red-600 text-5xl mb-2" />
                            <h3 className="text-lg font-bold mb-2">Multi Cabin Charging Functionality</h3>
                            <p className="text-sm text-center">Stay charged up with plenty of Cabin charging points.</p>
                        </div>
                        <div className="bg-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center">
                            <FaWifi className="text-red-600 text-5xl mb-2" />
                            <h3 className="text-lg font-bold mb-2">In Cabin Wifi Functionality</h3>
                            <p className="text-sm text-center">Stay connected with our high-speed and reliable Cabin WiFi.</p>
                        </div>
                        <div className="bg-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center">
                            <FaTv className="text-red-600 text-5xl mb-2" />
                            <h3 className="text-lg font-bold mb-2">In Cabin Entertainment</h3>
                            <p className="text-sm text-center">Stay entertained with In Cabin entertainment such as AppleTV, SkySports, Youtube or even sit back and get into your favourite Netflix series.</p>
                        </div>
                        <div className="bg-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center">
                            <FaWhatsapp className="text-red-600 text-5xl mb-2" />
                            <h3 className="text-lg font-bold mb-2">Communication</h3>
                            <p className="text-sm text-center">Stay in touch as a member via Whatsapp, our team are on hand to attend to your requirements and arrange your next journey with us.</p>
                        </div>
                        <div className="bg-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center">
                            <FaHandshake className="text-red-600 text-5xl mb-2" />
                            <h3 className="text-lg font-bold mb-2">Meet & Greet</h3>
                            <p className="text-sm text-center">We’re at your service, whether its tracking your flight and meeting you at arrivals or finding the most convenient parking space to make your life that touch easier.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatYouCanExpectWeddings;
