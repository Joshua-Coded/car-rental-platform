import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faPhoneAlt } from '@fortawesome/free-brands-svg-icons';
import { faTimes, faPhone } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo.jpeg';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`sticky top-0 flex justify-between items-center p-6 ${scrolled ? 'bg-gray-900 text-white' : 'bg-white text-black'} z-50 h-20 transition-colors duration-300`}>
            <div className="flex items-center space-x-4">
                <button
                    className="block md:hidden focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                <div className="hidden md:flex md:space-x-8 text-lg">
                    <a href="#business" className="hover:text-gray-300 cursor-pointer">Business</a>
                    <a href="#weddings" className="hover:text-gray-300 cursor-pointer">Weddings</a>
                    <a href="#services" className="hover:text-gray-300 cursor-pointer">Services</a>
                </div>
            </div>
            <div className="flex-shrink-0 mx-4">
                <img src={logo} alt="Company Logo" className="h-16 rounded-full" />
            </div>
            <div className="hidden md:block text-right">
                <button className="bg-red-600 px-6 py-3 rounded hover:bg-red-700 text-lg cursor-pointer">Enquire</button>
            </div>
            {isOpen && (
                <div className="fixed inset-0 bg-gray-900 text-white flex flex-col items-center justify-center z-50">
                    <button
                        className="absolute top-4 right-4 focus:outline-none cursor-pointer"
                        onClick={toggleMenu}
                    >
                        <FontAwesomeIcon icon={faTimes} className="w-6 h-6 text-white" />
                    </button>
                    <nav className="flex flex-col space-y-6 text-center text-2xl">
                        <a href="#our-services" className="hover:text-gray-300 cursor-pointer">Our Services</a>
                        <a href="#business" className="hover:text-gray-300 cursor-pointer">Business</a>
                        <a href="#gallery" className="hover:text-gray-300 cursor-pointer">Gallery</a>
                        <a href="#weddings" className="hover:text-gray-300 cursor-pointer">Weddings</a>
                        <a href="#aviation" className="hover:text-gray-300 cursor-pointer">Aviation</a>
                        <a href="#book-now" className="hover:text-gray-300 cursor-pointer">Book Now</a>
                        <a href="#featured" className="hover:text-gray-300 cursor-pointer">Featured</a>
                    </nav>
                    <div className="mt-6">
                        <button className="bg-gray-800 px-6 py-3 rounded hover:bg-red-700 text-lg flex items-center mb-4 cursor-pointer">
                            <FontAwesomeIcon icon={faWhatsapp} className="mr-2" /> Enquire
                        </button>
                    </div>
                    <div className="absolute bottom-10 flex space-x-10">
                        <a href="https://wa.me/+250792402699" className="text-green-500 cursor-pointer">
                            <FontAwesomeIcon icon={faWhatsapp} className="w-8 h-8" />
                        </a>
                        <a href="tel:+250792402699" className="text-white cursor-pointer">
                            <FontAwesomeIcon icon={faPhone} className="w-8 h-8" />
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
