import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link as RouterLink } from 'react-router-dom';
import HomeNavLink from './HomeNavLink';
import logo from "../images/logo.png";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
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
            </div>
            <div className="hidden md:flex items-center space-x-6 flex-grow">
                <HomeNavLink section="hero" text="Home" />
                <HomeNavLink section="newService" text="Our Services" />
                <HomeNavLink section="whatYouCanExpect" text="Features" />
                <RouterLink to="/weddings" className="hover:text-gray-300 cursor-pointer">
                    Weddings
                </RouterLink>
                <RouterLink to="/business" className="hover:text-gray-300 cursor-pointer">
                    Business
                </RouterLink>
                <HomeNavLink section="gallery" text="Gallery" />
                <HomeNavLink section="newDesignComponent" text="Aviation" />
                <HomeNavLink section="booking" text="Enquire Now" />
            </div>
            <div className="flex-shrink-0 mx-4">
                <img src={logo} alt="Company Logo" className="h-12 mx-auto" />
            </div>
            <div className="hidden md:flex items-center flex-grow justify-end">
                <button className="bg-[#000D28] text-center text-white px-4 py-2 rounded hover:bg-gray-900 flex items-center justify-center" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    Book
                </button>
            </div>
            {isOpen && (
                <div className="fixed inset-0 bg-[#470A1C] text-white flex flex-col items-center justify-center z-50">
                    <button
                        className="absolute top-4 right-4 focus:outline-none cursor-pointer"
                        onClick={toggleMenu}
                    >
                        <FontAwesomeIcon icon={faTimes} className="w-6 h-6 text-white" />
                    </button>
                    <motion.nav
                        className="flex flex-col space-y-6 text-center text-2xl"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 0.1
                                }
                            }
                        }}
                    >
                        <div className="mb-4">
                            <img src={logo} alt="Company Logo" className="h-12 mx-auto" />
                        </div>
                        <HomeNavLink section="hero" text="Home" />
                        <HomeNavLink section="newService" text="Our Services" />
                        <HomeNavLink section="whatYouCanExpect" text="Features" />
                        <RouterLink to="/weddings" className="hover:text-gray-300 cursor-pointer">
                            Weddings
                        </RouterLink>
                        <RouterLink to="/business" className="hover:text-gray-300 cursor-pointer">
                            Business
                        </RouterLink>
                        <HomeNavLink section="gallery" text="Gallery" />
                        <HomeNavLink section="newDesignComponent" text="Aviation" />
                        <HomeNavLink section="booking" text="Enquire Now" />
                    </motion.nav>
                </div>
            )}
        </header>
    );
};

export default Header;
