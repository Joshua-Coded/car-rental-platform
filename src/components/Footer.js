import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from '../images/logo.jpeg'; // Adjust the path to your logo file

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 px-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0 text-center md:text-left">
                    <img src={logo} alt="Company Logo" className="h-16 mx-auto md:mx-0" />
                    <p className="mt-2">Exotic Wheels - Travel in style and comfort</p>
                </div>
                <div className="mb-4 md:mb-0 text-center md:text-left">
                    <p className="text-lg font-bold">Quick Links:</p>
                    <ul className="space-y-2 mt-2">
                        <li><a href="#home" className="hover:text-gray-400">Business</a></li>
                        <li><a href="#services" className="hover:text-gray-400">Weddings</a></li>
                        <li><a href="#about" className="hover:text-gray-400">Services</a></li>
                    </ul>
                </div>
                <div className="mb-4 md:mb-0 text-center md:text-left">
                    <p className="text-lg font-bold">Connect with us:</p>
                    <div className="flex justify-center md:justify-start space-x-4 mt-2">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://www.instagram.com/rentexoticwheels/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <FaTwitter size={24} />
                        </a>
                    </div>
                </div>
                <div className="text-center md:text-right">
                    <p>&copy; {new Date().getFullYear()} Exotic Wheels. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
