import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faTimes, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import logo from '../images/logo.png';

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
        <header className={`sticky top-0 flex justify-between items-center p-6 ${scrolled ? 'bg-[#470A1C] text-white' : 'bg-black text-white'} z-50 h-20 transition-colors duration-300`}>
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
                    <Link to="/" className="text-white hover:text-gray-300 cursor-pointer">Business</Link>
                    <Link to="/weddings" className="text-white hover:text-gray-300 cursor-pointer">Weddings</Link>
                    <Link to="/services" className="text-white hover:text-gray-300 cursor-pointer">Services</Link>
                </div>
            </div>
            <div className="flex-shrink-0 mx-4">
                <img src={logo} alt="Company Logo" className="h-12" />
            </div>
            <div className="hidden md:block text-right">
                <button className="bg-[#000D28] px-6 py-3 rounded-full w-50 h-50 hover:bg-red-700 text-lg cursor-pointer">Enquire</button>
            </div>
            {isOpen && (
                <div className="fixed inset-0 bg-[#470A1C]  text-white flex flex-col items-center justify-center z-50">
                    <button
                        className="absolute top-4 right-4 focus:outline-none cursor-pointer"
                        onClick={toggleMenu}
                    >
                        <FontAwesomeIcon icon={faTimes} className="w-6 h-6 text-white" />
                    </button>
                    <nav className="flex flex-col space-y-6 text-center text-2xl">
                        <Link to="/services" className="hover:text-gray-300 cursor-pointer">Our Services</Link>
                        <Link to="/" className="hover:text-gray-300 cursor-pointer">Business</Link>
                        <Link to="/weddings" className="hover:text-gray-300 cursor-pointer">Weddings</Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
