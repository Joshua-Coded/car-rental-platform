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
        <div>
            <motion.div
                className="bg-black text-white py-10 px-6 flex flex-col space-y-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={staggerContainer}
            >
                <motion.div className="flex-1 bg-gray-900 p-6 rounded-lg" variants={fadeInUp}>
                    <div className="mb-8">
                        <h1 className="text-lg font-bold mb-4 text-center">Car Interior Features</h1>
                        <p className="text-lg mb-4 text-center">Discover the exceptional features of our luxury car interiors designed to provide the utmost comfort and convenience during your journey.</p>
                        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-2" variants={staggerContainer}>
                            <motion.div className="bg-[#fff] p-4 flex flex-col items-center w-full" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                                <FaPhone className="text-[#470A1C] text-lg mb-2" />
                                <p className="text-sm text-left text-[#000]">Partition Cabin with Intercom</p>
                            </motion.div>
                            <motion.div className="bg-[#fff] p-4 flex flex-col items-center w-full" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                                <FaRegSnowflake className="text-[#470A1C] text-lg mb-2" />
                                <p className="text-sm text-left text-[#000]">Refrigerated Refreshments</p>
                            </motion.div>
                            <motion.div className="bg-[#fff] p-4 flex flex-col items-center w-full" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                                <FaPlug className="text-[#470A1C] text-lg mb-2" />
                                <p className="text-sm text-left text-[#000]">Multi Cabin Charging Functionality</p>
                            </motion.div>
                            <motion.div className="bg-[#fff] p-4 flex flex-col items-center w-full" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                                <FaWifi className="text-[#470A1C] text-lg mb-2" />
                                <p className="text-sm text-left text-[#000]">In Cabin Wifi Functionality</p>
                            </motion.div>
                            <motion.div className="bg-[#fff] p-4 flex flex-col items-center w-full" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                                <FaTv className="text-[#470A1C] text-lg mb-2" />
                                <p className="text-sm text-left text-[#000]">In Cabin Entertainment</p>
                            </motion.div>
                            <motion.div className="bg-[#fff] p-4 flex flex-col items-center w-full" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                                <FaWhatsapp className="text-[#470A1C] text-lg mb-2" />
                                <p className="text-sm text-left text-[#000]">Communication</p>
                            </motion.div>
                            <motion.div className="bg-[#fff] p-4 flex flex-col items-center w-full" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                                <FaHandshake className="text-[#470A1C] text-lg mb-2" />
                                <p className="text-sm text-left text-[#000]">Meet & Greet</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Enquire More section inside the container, hidden on mobile */}
                <motion.div className="bg-white flex flex-col justify-center items-center py-10 px-6 w-full max-w-screen-lg mx-auto hidden md:flex" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                    <h1 className="text-2xl font-bold mb-4 text-center text-[#000D28]">Enquire More</h1>
                    <p className="text-lg mb-4 text-center text-[#000D28]">
                        Contact us today to find out how we can make your travel experience unforgettable.
                    </p>
                    <a href="https://wa.link/o58u2z" className="bg-[#470A1C] text-white px-4 py-2 rounded hover:bg-red-700">Book Now</a>
                </motion.div>
            </motion.div>

            {/* Enquire More section outside the container, visible on mobile */}
            <motion.div
                className="w-full bg-white flex flex-col justify-center items-center py-4 px-6 md:hidden"
                variants={fadeInUp}
                whileInView="visible"
                viewport={{ once: false }}
            >
                <h1 className="text-lg font-bold  text-center text-[#000D28]">Enquire More</h1>
                <p className="text-lg mb-2 py-1 text-center text-[#000D28]">
                    Contact us today to find out how we can make your travel experience unforgettable.
                </p>
                <a href="https://wa.link/o58u2z" className="bg-[#470A1C] text-white px-4 py-2 rounded hover:bg-red-700">Book Now</a>
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
        </div>
    );
};

export default NewDesignComponent;
