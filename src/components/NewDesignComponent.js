import React, { useState } from 'react';
import { FaPhone, FaRegSnowflake, FaPlug, FaWifi, FaTv, FaWhatsapp, FaHandshake, FaPlay } from 'react-icons/fa';
import { motion } from 'framer-motion';
import localVideo from '../images/bgVideo2.mp4';

const NewDesignComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } }
    };

    const staggerContainer = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <motion.div
            className="bg-black text-white py-10 px-6 flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={staggerContainer}
        >
            <motion.div className="flex-1 md:w-2/3 bg-gray-900 p-6 rounded-lg" variants={fadeInUp}>
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-4 text-center">Car Interior Features</h1>
                    <p className="text-lg mb-4 text-center">Discover the exceptional features of our luxury car interiors designed to provide the utmost comfort and convenience during your journey.</p>
                    <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-2" variants={staggerContainer}>
                        <motion.div className="bg-[#fff] p-4 rounded-lg flex flex-col items-center w-full" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                            <FaPhone className="text-[#470A1C] text-lg mb-2" />
                            <p className="text-sm text-left text-[#000]">Partition Cabin with Intercom</p>
                        </motion.div>
                        <motion.div className="bg-[#fff] p-4 rounded-lg flex flex-col items-center w-full" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                            <FaRegSnowflake className="text-[#470A1C] text-lg mb-2" />
                            <p className="text-sm text-left text-[#000]">Refrigerated Refreshments</p>
                        </motion.div>
                        <motion.div className="bg-[#fff] p-4 rounded-lg flex flex-col items-center w-full" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                            <FaPlug className="text-[#470A1C] text-lg mb-2" />
                            <p className="text-sm text-left text-[#000]">Multi Cabin Charging Functionality</p>
                        </motion.div>
                        <motion.div className="bg-[#fff] p-4 rounded-lg flex flex-col items-center w-full" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                            <FaWifi className="text-[#470A1C] text-lg mb-2" />
                            <p className="text-sm text-left text-[#000]">In Cabin Wifi Functionality</p>
                        </motion.div>
                        <motion.div className="bg-[#fff] p-4 rounded-lg flex flex-col items-center w-full" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                            <FaTv className="text-[#470A1C] text-lg mb-2" />
                            <p className="text-sm text-left text-[#000]">In Cabin Entertainment</p>
                        </motion.div>
                        <motion.div className="bg-[#fff] p-4 rounded-lg flex flex-col items-center w-full" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                            <FaWhatsapp className="text-[#470A1C] text-lg mb-2" />
                            <p className="text-sm text-left text-[#000]">Communication</p>
                        </motion.div>
                        <motion.div className="bg-[#fff] p-4 rounded-lg flex flex-col items-center w-full" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                            <FaHandshake className="text-[#470A1C] text-lg mb-2" />
                            <p className="text-sm text-left text-[#000]">Meet & Greet</p>
                        </motion.div>
                    </motion.div>
                    <p className="text-lg mt-6 text-center">Our luxury cars offer unparalleled comfort and convenience, ensuring a memorable travel experience. From advanced entertainment systems to high-speed connectivity, we provide everything you need for a luxurious journey.</p>
                    <div className="flex space-x-4 mt-6">
                        <button className="bg-[#470A1C] text-white text-center px-4 py-2 rounded hover:bg-red-700">Book Now</button>
                    </div>
                </div>
            </motion.div>
            <motion.div className="flex-1 md:w-1/3 flex flex-col justify-center items-center" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                <h1 className="text-4xl font-bold mb-4 text-center">Enquire More</h1>
                <p className="text-lg mb-4 text-center">
                    Interested in learning more about our services? Contact us today to find out how we can make your travel experience unforgettable.
                </p>
                <button className="bg-[#470A1C] text-white px-4 py-2 rounded hover:bg-red-700">Book Now</button>
            </motion.div>

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
        </motion.div>
    );
};

export default NewDesignComponent;
