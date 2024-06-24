import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { FaPlay } from 'react-icons/fa';
import { motion } from 'framer-motion';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import homeImage from '../images/logo.png';
import slide1 from '../images/slide1.jpeg';

import localVideo from '../images/video3.mp4';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        journeyRequired: 'One Way',
        pickUpDate: '',
        pickUpTime: '',
        pickUpAddress: '',
        dropOffAddress: ''
    });

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = `Booking Details:
        - Full Name: ${formData.fullName}
        - Journey Required: ${formData.journeyRequired}
        - Pick Up Date: ${formData.pickUpDate}
        - Pick Up Time: ${formData.pickUpTime}
        - Pick Up Address: ${formData.pickUpAddress}
        - Drop Off Address: ${formData.dropOffAddress}`;
        const whatsappUrl = `https://wa.me/+2347064989611?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
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
        <>
            <motion.div
                className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${homeImage})` }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={staggerContainer}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <motion.div
                    className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-12 text-white space-y-6 md:space-y-0 md:space-x-12"
                    variants={fadeInUp}
                >
                    <motion.div className="max-w-lg space-y-6 text-center md:text-left" variants={fadeInUp}>
                        <h1 className="text-2xl mt-10 md:text-5xl font-semibold">Exotic Wheels is your go-to provider for luxury landjet and vehicle hire in the UK.</h1>
                        <p className="text-md mt-10 md:text-lg">We offer a premium fleet of high-end landjets, perfect for business travel, special events, and anyone seeking a superior travel experience. Connect | Book | Enquire</p>
                        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center md:justify-start">
                            <button className="bg-red-600 px-4 py-2 rounded hover:bg-red-700">View Services</button>
                            <button onClick={openModal} className="bg-gray-400 text-center text-white px-4 py-2 rounded hover:bg-gray-900 flex items-center justify-center">
                                <FaPlay className="mr-2" /> Watch Now
                            </button>
                        </div>
                    </motion.div>
                    <motion.div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4 md:ml-12 mt-8 md:mt-0" variants={fadeInUp}>
                        <h1 className="text-2xl font-bold mb-4 text-center">Enquire Now</h1>
                        <p className="mb-4 text-center">Experience luxury travel from £195.</p>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="flex flex-col space-y-2">
                                <label className="block w-full">
                                    <span className="text-white">Full Name</span>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </label>
                                <label className="block w-full">
                                    <span className="text-white">Journey Required</span>
                                    <select
                                        name="journeyRequired"
                                        value={formData.journeyRequired}
                                        onChange={handleChange}
                                        className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    >
                                        <option>One Way</option>
                                        <option>Return</option>
                                    </select>
                                </label>
                                <label className="block w-full">
                                    <span className="text-white">Pick Up Date</span>
                                    <input
                                        type="date"
                                        name="pickUpDate"
                                        value={formData.pickUpDate}
                                        onChange={handleChange}
                                        className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </label>
                                <label className="block w-full">
                                    <span className="text-white">Pick Up Time</span>
                                    <input
                                        type="time"
                                        name="pickUpTime"
                                        value={formData.pickUpTime}
                                        onChange={handleChange}
                                        className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </label>
                                <label className="block w-full">
                                    <span className="text-white">Pick Up Address and Postcode</span>
                                    <input
                                        type="text"
                                        name="pickUpAddress"
                                        value={formData.pickUpAddress}
                                        onChange={handleChange}
                                        className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </label>
                                <label className="block w-full">
                                    <span className="text-white">Drop Off Address</span>
                                    <input
                                        type="text"
                                        name="dropOffAddress"
                                        value={formData.dropOffAddress}
                                        onChange={handleChange}
                                        className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </label>
                            </div>
                            <button type="submit" className="w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Confirm Journey</button>
                        </form>
                        <p className="text-gray-500 text-xs mt-4 text-center">Your information will not be used by third-parties for marketing.</p>
                    </motion.div>
                </motion.div>
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
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
            <motion.div
                className="mt-32"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={staggerContainer}
            >
                <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
                    <motion.div className="h-70 w-1/2 mx-auto" variants={fadeInUp}>
                        <img src={slide1} alt="Slide 1" className="h-full w-full object-cover" />
                        <p className="legend">Luxury Coach 1</p>
                    </motion.div>
                    <motion.div className="h-70 w-1/2 mx-auto" variants={fadeInUp}>
                        <img src={slide1} alt="Slide 2" className="h-full w-full object-cover" />
                        <p className="legend">Luxury Coach 2</p>
                    </motion.div>
                    <motion.div className="h-70 w-1/2 mx-auto" variants={fadeInUp}>
                        <img src={slide1} alt="Slide 3" className="h-full w-full object-cover" />
                        <p className="legend">Luxury Coach 3</p>
                    </motion.div>
                </Carousel>
            </motion.div>
        </>
    );
};

export default Hero;
