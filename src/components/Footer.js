import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const Footer = () => {
    return (
        <footer className="bg-[#470A1C] text-white py-6 px-6 pb-16 md:py-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center md:text-left">
                    <img src={logo} alt="Company Logo" className="h-16 mx-auto md:mx-0" />
                    <p className="mt-4">
                        Travel in style and comfort
                    </p>
                </div>
                <div className="hidden md:block text-center md:text-left">
                    <p className="text-lg font-bold mb-4">Quick Links:</p>
                    <ul className="space-y-2">
                        <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
                        <li><Link to="/services" className="hover:text-gray-400">Services</Link></li>
                        <li><Link to="/weddings" className="hover:text-gray-400">Weddings</Link></li>
                        <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
                    </ul>
                </div>
                <div className="hidden md:block text-center md:text-left">
                    <p className="text-lg font-bold mb-4">Connect with us:</p>
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
                    <p className="mt-4">
                        &copy; {new Date().getFullYear()} Exotic Wheels<br />
                        All rights reserved.<br />
                        Powered by CREIT TECHNOLOGIES LIMITED<br />
                        Designed by Alivat Inc
                    </p>
                </div>
                <div className="block md:hidden text-center">
                    <p className="mt-4">
                        &copy; {new Date().getFullYear()} Exotic Wheels<br />
                        All rights reserved.<br />
                        Designed and developed by CREIT DIGITALS
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
