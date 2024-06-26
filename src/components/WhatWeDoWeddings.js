import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import leftImage from '../images/image15.jpg';
import rightImage from '../images/image16.jpg';

const WhatWeDoWeddings = () => {
    return (
        <div className="hidden md:block bg-black py-10 px-6">
            <h1 className="text-4xl font-bold mb-6 text-center text-white">What We Do</h1>
            <h2 className="text-white text-center">Our Services for Wedding Ceremonies</h2>
            <p className="text-center text-lg mb-8 text-gray-300">
                We offer a variety of exceptional services to meet your needs and ensure you have the best experience possible.
            </p>
            <Carousel showThumbs={true} showStatus={false} infiniteLoop autoPlay>
                <div className="flex justify-center items-center space-x-4 h-auto py-10">
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
                </div>
                <div className="flex justify-center items-center space-x-4 h-auto py-10">
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
                </div>
                <div className="flex justify-center items-center space-x-4 h-auto py-10">
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
                </div>
                <div className="flex justify-center items-center space-x-4 h-auto py-10">
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
                </div>
                <div className="flex justify-center items-center space-x-4 h-auto py-10">
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
                </div>
                <div className="flex justify-center items-center space-x-4 h-auto py-10">
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
                </div>
                <div className="flex justify-center items-center space-x-4 h-auto py-10">
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
                </div>
            </Carousel>
        </div>
    );
};

export default WhatWeDoWeddings;
