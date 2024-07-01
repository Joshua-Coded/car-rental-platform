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

            <motion.div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                <motion.div className="flex-1 text-center md:text-left" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                    <motion.h2 className="text-lg font-semibold mb-4" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>Features of Our Luxury Cars</motion.h2>
                    <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center" variants={staggerContainer}>
                        <motion.div className="bg-[#fff] p-4 rounded-lg shadow-md flex flex-col items-center w-full max-w-xs mx-auto" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                            <motion.div variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                                <FaPhone className="text-[#470A1C] text-4xl mb-2" />
                            </motion.div>
                            <motion.h3 className="text-lg font-bold mb-2 text-[#000D28]" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>Partition Cabin with Intercom</motion.h3>
                            <motion.p className="text-sm text-left text-[#000]" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>For that extra element of exclusivity and privacy whilst knowing your driver is a touch of a button away.</motion.p>
                        </motion.div>
                        <motion.div className="bg-[#fff] p-4 rounded-lg shadow-md flex flex-col items-center w-full max-w-xs mx-auto" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                            <motion.div variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                                <FaRegSnowflake className="text-[#470A1C] text-4xl mb-2" />
                            </motion.div>
                            <motion.h3 className="text-lg font-bold mb-2 text-[#000D28]" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>Refrigerated Refreshments</motion.h3>
                            <motion.p className="text-sm text-left text-[#000]" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>It wouldn’t be luxury without chilled refreshments to add that extra touch of comfort.</motion.p>
                        </motion.div>
                        <motion.div className="bg-[#fff] p-4 rounded-lg shadow-md flex flex-col items-center w-full max-w-xs mx-auto" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                            <motion.div variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                                <FaPlug className="text-[#470A1C] text-4xl mb-2" />
                            </motion.div>
                            <motion.h3 className="text-lg font-bold mb-2 text-[#000D28]" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>Multi Cabin Charging Functionality</motion.h3>
                            <motion.p className="text-sm text-left text-[#000]" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>Stay charged up with plenty of Cabin charging points.</motion.p>
                        </motion.div>
                        <motion.div className="bg-[#fff] p-4 rounded-lg shadow-md flex flex-col items-center w-full max-w-xs mx-auto" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                            <motion.div variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                                <FaWifi className="text-[#470A1C] text-4xl mb-2" />
                            </motion.div>
                            <motion.h3 className="text-lg font-bold mb-2 text-[#000D28]" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>In Cabin Wifi Functionality</motion.h3>
                            <motion.p className="text-sm text-left text-[#000]" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>Stay connected with our high-speed and reliable Cabin WiFi.</motion.p>
                        </motion.div>
                        <motion.div className="bg-[#fff] p-4 rounded-lg shadow-md flex flex-col items-center w-full max-w-xs mx-auto" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                            <motion.div variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                                <FaTv className="text-[#470A1C] text-4xl mb-2" />
                            </motion.div>
                            <motion.h3 className="text-lg font-bold mb-2 text-[#000D28]" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>In Cabin Entertainment</motion.h3>
                            <motion.p className="text-sm text-left text-[#000]" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>Stay entertained with In Cabin entertainment such as AppleTV, SkySports, Youtube or even sit back and get into your favourite Netflix series.</motion.p>
                        </motion.div>
                        <motion.div className="bg-[#fff] p-4 rounded-lg shadow-md flex flex-col items-center w-full max-w-xs mx-auto" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                            <motion.div variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                                <FaWhatsapp className="text-[#470A1C] text-4xl mb-2" />
                            </motion.div>
                            <motion.h3 className="text-lg font-bold mb-2 text-[#000D28]" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>Communication</motion.h3>
                            <motion.p className="text-sm text-left text-[#000]" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>Stay in touch as a member via Whatsapp, our team are on hand to attend to your requirements and arrange your next journey with us.</motion.p>
                        </motion.div>
                        <motion.div className="bg-[#fff] p-4 rounded-lg shadow-md flex flex-col items-center w-full max-w-xs mx-auto" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                            <motion.div variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                                <FaHandshake className="text-[#470A1C] text-4xl mb-2" />
                            </motion.div>
                            <motion.h3 className="text-lg font-bold mb-2 text-[#000D28]" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>Meet & Greet</motion.h3>
                            <motion.p className="text-sm text-left text-[#000]" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>We’re at your service, whether its tracking your flight and meeting you at arrivals or finding the most convenient parking space to make your life that touch easier.</motion.p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default WhatYouCanExpect;
