import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import leftImage from '../images/slide1.jpeg';
import rightImage from '../images/slide2.jpeg';

const WhatWeDo = () => {
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
            className="hidden md:block bg-black py-10 px-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={staggerContainer}
        >
            <motion.h1 className="text-4xl font-bold mb-6 text-center text-white" variants={fadeInUp}>What We Do</motion.h1>
            <motion.h2 className="text-white text-center" variants={fadeInUp}>Our Services</motion.h2>
            <motion.p className="text-center text-lg mb-8 text-gray-300" variants={fadeInUp}>
                We offer a variety of exceptional services to meet your needs and ensure you have the best experience possible.
            </motion.p>
            <Carousel showThumbs={true} showStatus={false} infiniteLoop autoPlay>
                <motion.div className="flex justify-center items-center space-x-4 h-auto py-10" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                    <div className="w-1/3 h-80">
                        <img src={leftImage} alt="Left Image" className="w-full h-full object-cover rounded-lg shadow-lg" />
                    </div>
                    <div className="flex-1 text-center px-6 text-white">
                        <h2 className="text-3xl font-semibold mb-4">Game Day Travel</h2>
                        <p className="text-base mb-4">
                            We provide exceptional service to ensure you have the best experience possible.
                        </p>
                        <button className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700">Learn More</button>
                    </div>
                    <div className="w-1/3 h-80">
                        <img src={rightImage} alt="Right Image" className="w-full h-full object-cover rounded-lg shadow-lg" />
                    </div>
                </motion.div>
                <motion.div className="flex justify-center items-center space-x-4 h-auto py-10" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                    <div className="w-1/3 h-80">
                        <img src={leftImage} alt="Left Image" className="w-full h-full object-cover rounded-lg shadow-lg" />
                    </div>
                    <div className="flex-1 text-center px-6 text-white">
                        <h2 className="text-3xl font-semibold mb-4">Events</h2>
                        <p className="text-base mb-4">
                            We aim to provide exceptional service with our state-of-the-art vehicles, equipped with the latest amenities and technology.
                            Our dedicated team ensures every detail is handled, offering a seamless and luxurious journey.
                        </p>
                        <button className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700">Learn More</button>
                    </div>
                    <div className="w-1/3 h-80">
                        <img src={rightImage} alt="Right Image" className="w-full h-full object-cover rounded-lg shadow-lg" />
                    </div>
                </motion.div>
                <motion.div className="flex justify-center items-center space-x-4 h-auto py-10" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                    <div className="w-1/3 h-80">
                        <img src={leftImage} alt="Left Image" className="w-full h-full object-cover rounded-lg shadow-lg" />
                    </div>
                    <div className="flex-1 text-center px-6 text-white">
                        <h2 className="text-3xl font-semibold mb-4">Airport Transfers</h2>
                        <p className="text-base mb-4">
                            We provide exceptional service to ensure you have the best experience possible.
                        </p>
                        <button className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700">Learn More</button>
                    </div>
                    <div className="w-1/3 h-80">
                        <img src={rightImage} alt="Right Image" className="w-full h-full object-cover rounded-lg shadow-lg" />
                    </div>
                </motion.div>
                <motion.div className="flex justify-center items-center space-x-4 h-auto py-10" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                    <div className="w-1/3 h-80">
                        <img src={leftImage} alt="Left Image" className="w-full h-full object-cover rounded-lg shadow-lg" />
                    </div>
                    <div className="flex-1 text-center px-6 text-white">
                        <h2 className="text-3xl font-semibold mb-4">General Private Travel</h2>
                        <p className="text-base mb-4">
                            We provide exceptional service to ensure you have the best experience possible.
                        </p>
                        <button className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700">Learn More</button>
                    </div>
                    <div className="w-1/3 h-80">
                        <img src={rightImage} alt="Right Image" className="w-full h-full object-cover rounded-lg shadow-lg" />
                    </div>
                </motion.div>
                <motion.div className="flex justify-center items-center space-x-4 h-auto py-10" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                    <div className="w-1/3 h-80">
                        <img src={leftImage} alt="Left Image" className="w-full h-full object-cover rounded-lg shadow-lg" />
                    </div>
                    <div className="flex-1 text-center px-6 text-white">
                        <h2 className="text-3xl font-semibold mb-4">Corporate Travel</h2>
                        <p className="text-base mb-4">
                            We provide exceptional service to ensure you have the best experience possible.
                        </p>
                        <button className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700">Learn More</button>
                    </div>
                    <div className="w-1/3 h-80">
                        <img src={rightImage} alt="Right Image" className="w-full h-full object-cover rounded-lg shadow-lg" />
                    </div>
                </motion.div>
                <motion.div className="flex justify-center items-center space-x-4 h-auto py-10" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                    <div className="w-1/3 h-80">
                        <img src={leftImage} alt="Left Image" className="w-full h-full object-cover rounded-lg shadow-lg" />
                    </div>
                    <div className="flex-1 text-center px-6 text-white">
                        <h2 className="text-3xl font-semibold mb-4">Weddings</h2>
                        <p className="text-base mb-4">
                            We provide exceptional service to ensure you have the best experience possible.
                        </p>
                        <button className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700">Learn More</button>
                    </div>
                    <div className="w-1/3 h-80">
                        <img src={rightImage} alt="Right Image" className="w-full h-full object-cover rounded-lg shadow-lg" />
                    </div>
                </motion.div>
                <motion.div className="flex justify-center items-center space-x-4 h-auto py-10" variants={fadeInUp} whileInView="visible" viewport={{ once: false }}>
                    <div className="w-1/3 h-80">
                        <img src={leftImage} alt="Left Image" className="w-full h-full object-cover rounded-lg shadow-lg" />
                    </div>
                    <div className="flex-1 text-center px-6 text-white">
                        <h2 className="text-3xl font-semibold mb-4">Exotic Aviation</h2>
                        <p className="text-base mb-4">
                            We provide exceptional service to ensure you have the best experience possible.
                        </p>
                        <button className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700">Learn More</button>
                    </div>
                    <div className="w-1/3 h-80">
                        <img src={rightImage} alt="Right Image" className="w-full h-full object-cover rounded-lg shadow-lg" />
                    </div>
                </motion.div>
            </Carousel>
        </motion.div>
    );
};

export default WhatWeDo;
