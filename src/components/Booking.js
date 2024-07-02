import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Booking = () => {
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

    return (
        <div className="bg-[#fff] relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <motion.div
                className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto text-white space-y-6 md:space-y-0 md:space-x-12 bg-white shadow-lg p-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={staggerContainer}
            >
                <motion.div className="max-w-lg space-y-6 text-center md:text-left" variants={fadeInUp}>
                    <h1 className="text-lg mt-5 md:text-5xl font-semibold text-black">BOOK YOUR PRIVATE TRANSPORT</h1>
                    <p className="text-md mt-5 md:text-lg text-left text-black" style={{ textAlign: 'justify' }}>
                        Whether you are searching for a luxurious mobile office, a discreet family vehicle or a high-end chauffeur vehicle for Weddings, Corporate Events and other special occasions, you can trust Swift to deliver an impeccable VIP service that’s in a class of its own. Fill in the form to get a quote and start your journey with Exotic Wheels.
                    </p>
                </motion.div>
                <motion.div className="text-black bg-[#000D28] p-6 rounded-lg shadow-lg w-full max-w-sm space-y-4 md:ml-12 mt-8 md:mt-0" variants={fadeInUp}>
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
    );
};

export default Booking;
