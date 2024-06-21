import React from 'react';
import { FaPhone, FaRegSnowflake, FaPlug, FaWifi, FaTv, FaWhatsapp, FaHandshake } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WhatYouCanExpect = () => {
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
            className="bg-black py-10 px-6 text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={staggerContainer}
        >
            <motion.h1 className="text-4xl font-bold mb-6 text-center" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>What You Can Expect</motion.h1>
            <motion.p className="text-center text-lg mb-8" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                Experience the pinnacle of luxury and comfort with our premium travel services. Our luxury cars come equipped with all the features to make your journey unforgettable.
            </motion.p>
            <motion.div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                <motion.div className="flex-1 text-center md:text-left" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                    <h2 className="text-3xl font-semibold mb-4">Features of Our Luxury Cars</h2>
                    <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4" variants={staggerContainer}>
                        <motion.div className="bg-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                            <FaPhone className="text-red-600 text-5xl mb-2" />
                            <h3 className="text-lg font-bold mb-2">Partition Cabin with Intercom</h3>
                            <p className="text-sm text-center">For that extra element of exclusivity and privacy whilst knowing your driver is a touch of a button away.</p>
                        </motion.div>
                        <motion.div className="bg-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                            <FaRegSnowflake className="text-red-600 text-5xl mb-2" />
                            <h3 className="text-lg font-bold mb-2">Refrigerated Refreshments</h3>
                            <p className="text-sm text-center">It wouldn’t be luxury without chilled refreshments to add that extra touch of comfort.</p>
                        </motion.div>
                        <motion.div className="bg-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                            <FaPlug className="text-red-600 text-5xl mb-2" />
                            <h3 className="text-lg font-bold mb-2">Multi Cabin Charging Functionality</h3>
                            <p className="text-sm text-center">Stay charged up with plenty of Cabin charging points.</p>
                        </motion.div>
                        <motion.div className="bg-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                            <FaWifi className="text-red-600 text-5xl mb-2" />
                            <h3 className="text-lg font-bold mb-2">In Cabin Wifi Functionality</h3>
                            <p className="text-sm text-center">Stay connected with our high-speed and reliable Cabin WiFi.</p>
                        </motion.div>
                        <motion.div className="bg-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                            <FaTv className="text-red-600 text-5xl mb-2" />
                            <h3 className="text-lg font-bold mb-2">In Cabin Entertainment</h3>
                            <p className="text-sm text-center">Stay entertained with In Cabin entertainment such as AppleTV, SkySports, Youtube or even sit back and get into your favourite Netflix series.</p>
                        </motion.div>
                        <motion.div className="bg-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                            <FaWhatsapp className="text-red-600 text-5xl mb-2" />
                            <h3 className="text-lg font-bold mb-2">Communication</h3>
                            <p className="text-sm text-center">Stay in touch as a member via Whatsapp, our team are on hand to attend to your requirements and arrange your next journey with us.</p>
                        </motion.div>
                        <motion.div className="bg-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                            <FaHandshake className="text-red-600 text-5xl mb-2" />
                            <h3 className="text-lg font-bold mb-2">Meet & Greet</h3>
                            <p className="text-sm text-center">We’re at your service, whether its tracking your flight and meeting you at arrivals or finding the most convenient parking space to make your life that touch easier.</p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default WhatYouCanExpect;
