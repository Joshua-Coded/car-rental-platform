import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import backgroundImage from '../images/logo.jpeg';
import slide1 from '../images/car1.jpg';
import slide2 from '../images/car4.jpg';
import slide3 from '../images/car5.jpg';

const Hero = () => {
    return (
        <div
            className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-12 text-white space-y-6 md:space-y-0 md:space-x-12">
                <div className="max-w-lg space-y-6 text-center md:text-left">
                    <h1 className="text-2xl md:text-5xl font-semibold">Welcome to Luxury Travel</h1>
                    <p className="text-md md:text-lg">Experience luxury travel from £195</p>
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <button className="bg-red-600 px-4 py-2 rounded hover:bg-red-700">View Services</button>
                        <button className="bg-gray-900 px-4 py-2 rounded hover:bg-gray-900">Watch Video</button>
                    </div>
                </div>
                <div className="md:hidden mt-6 w-full px-4">
                    <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
                        <div>
                            <img src={slide1} alt="Slide 1" />
                            <p className="legend">Luxury Coach 1</p>
                        </div>
                        <div>
                            <img src={slide2} alt="Slide 2" />
                            <p className="legend">Luxury Coach 2</p>
                        </div>
                        <div>
                            <img src={slide3} alt="Slide 3" />
                            <p className="legend">Luxury Coach 3</p>
                        </div>
                    </Carousel>
                </div>
                <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4 md:ml-12 mt-8 md:mt-0">
                    <h1 className="text-2xl font-bold mb-4 text-center">Enquire Now</h1>
                    <p className="mb-4 text-center">Experience luxury travel from £195.</p>
                    <form className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <label className="block w-full">
                                <span className="text-white">Journey Required</span>
                                <select className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                    <option>One Way</option>
                                    <option>Return</option>
                                </select>
                            </label>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label className="block w-full">
                                <span className="text-white">Pick Up Date</span>
                                <input type="date" className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                            </label>
                            <label className="block w-full">
                                <span className="text-white">Pick Up Time</span>
                                <input type="time" className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                            </label>
                            <label className="block w-full">
                                <span className="text-white">Pick Up Address and Postcode</span>
                                <input type="text" className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                            </label>
                            <label className="block w-full">
                                <span className="text-white">Drop Off Address</span>
                                <input type="text" className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                            </label>
                        </div>
                        <button className="w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Confirm Journey</button>
                    </form>
                    <p className="text-gray-500 text-xs mt-4 text-center">Your information will not be used by third-parties for marketing.</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;