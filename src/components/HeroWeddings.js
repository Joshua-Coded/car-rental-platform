import React, { useState, useEffect } from 'react';
import { FaPlay } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll'; // Import Link for smooth scrolling
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import homeVideo from '../images/bgVideo.mp4';
import localVideo from '../images/bgVideo2.mp4';
import weddingBackground from '../images/wed.JPG';

const HeroWeddings = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        journeyRequired: 'One Way',
        pickUpDate: '',
        pickUpTime: '',
        pickUpAddress: '',
        dropOffAddress: ''
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
        const whatsappUrl = `https://wa.me/+447438969564?text=${encodeURIComponent(message)}`;
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

    // Determine screen width to conditionally render background video or image
    const isDesktop = window.innerWidth > 768; // Example breakpoint for desktop

    return (
        <>
            <div className="relative">
                {isDesktop ? (
                    <img src={weddingBackground} alt="Wedding Background" className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                    <img src={weddingBackground} alt="Wedding Background" className="absolute inset-0 w-full h-full object-cover" />
                )}
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <motion.div
                    className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-12 text-white space-y-6 md:space-y-0 md:space-x-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={staggerContainer}
                >
                    <motion.div className="max-w-lg space-y-6 text-center md:text-left" variants={fadeInUp}>
                        <h1 className="text-2xl mt-10 md:text-5xl font-semibold">Luxury Landjet For Wedding Ceremonies in the UK.</h1>
                        <p className="text-md mt-10 md:text-lg">Experience unmatched comfort, style, and convenience with Exotic Wheels</p>
                        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center md:justify-start">
                            <Link to="newService" spy={true} smooth={true} duration={500} className="bg-[#470A1C] px-4 py-2 rounded hover:bg-red-700 cursor-pointer">View Services</Link>
                            <button onClick={openModal} className="bg-[#000D28] text-center text-white px-4 py-2 rounded hover:bg-gray-900 flex items-center justify-center">
                                <FaPlay className="mr-2" /> Watch Now
                            </button>
                        </div>
                    </motion.div>
                    <motion.div id="booking" className=" text-white p-8 rounded-lg shadow-lg w-full max-w-lg space-y-4 md:ml-12 mt-8 md:mt-0" variants={fadeInUp}>
                        <h1 className="text-2xl font-bold mb-4 text-center">Book Now</h1>
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
                                        placeholder="Enter your full name"
                                        required
                                        className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </label>
                                <label className="block w-full">
                                    <span className="text-white">Journey Required</span>
                                    <select
                                        name="journeyRequired"
                                        value={formData.journeyRequired}
                                        onChange={handleChange}
                                        required
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
                                        required
                                        className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        style={{ appearance: 'none' }} // Added to fix the appearance on iPhones
                                    />
                                </label>
                                <label className="block w-full">
                                    <span className="text-white">Pick Up Time</span>
                                    <input
                                        type="time"
                                        name="pickUpTime"
                                        value={formData.pickUpTime}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        style={{ appearance: 'none' }} // Added to fix the appearance on iPhones
                                    />
                                </label>
                                <label className="block w-full">
                                    <span className="text-white">Pick Up Address and Postcode</span>
                                    <input
                                        type="text"
                                        name="pickUpAddress"
                                        value={formData.pickUpAddress}
                                        onChange={handleChange}
                                        placeholder="Enter pick-up address and postcode"
                                        required
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
                                        placeholder="Enter drop-off address"
                                        required
                                        className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </label>
                            </div>
                            <button type="submit" className="w-full bg-[#470A1C] text-white px-4 py-2 rounded hover:bg-red-700">Confirm Journey</button>
                        </form>
                        <p className="text-gray-500 text-xs mt-4 text-center">Your information will not be used by third-parties for marketing.</p>
                    </motion.div>
                </motion.div>
            </div>
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
        </>
    );
};

export default HeroWeddings;
