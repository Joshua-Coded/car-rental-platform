import React from 'react';
import { Link, Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faConciergeBell, faImage, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Header from './Header';
import HeroBusiness from './HeroBusiness';
import CarouselComponent from './CarouselComponent';
import WhatWeDo from './WhatWeDo';
import WhatYouCanExpect from './WhatYouCanExpect';
import NewDesignComponent from './NewDesignComponent';
import Gallery from './Gallery';
import Footer from './Footer';
import Booking from './Booking';
import NewService from './NewService';

const Home2 = () => {
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
        <div>
            <Header />
            <Element name="hero">
                <HeroBusiness />
            </Element>
            <Element name="carouselComponent">
                <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                    <CarouselComponent />
                </motion.div>
            </Element>
            <Element name="newService">
                <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                    <NewService />
                </motion.div>
            </Element>
            <Element name="whatWeDo">
                <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                    <WhatWeDo />
                </motion.div>
            </Element>
            <Element name="whatYouCanExpect">
                <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                    <WhatYouCanExpect />
                </motion.div>
            </Element>
            <Element name="newDesignComponent">
                <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                    <NewDesignComponent />
                </motion.div>
            </Element>
            <Element name="gallery">
                <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                    <Gallery />
                </motion.div>
            </Element>
            <Element name="booking">
                <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                    <Booking />
                </motion.div>
            </Element>
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                <Footer />
            </motion.div>
            <div className="fixed bottom-0 w-full bg-black text-white flex justify-around py-2 md:hidden z-50">
                <Link to="hero" smooth={true} duration={500} className="flex flex-col items-center cursor-pointer">
                    <FontAwesomeIcon icon={faHome} size="lg" className="text-[#fff]" />
                    <span className="text-xs text-[#fff]">Home</span>
                </Link>
                <Link to="carouselComponent" smooth={true} duration={500} className="flex flex-col items-center cursor-pointer">
                    <FontAwesomeIcon icon={faInfoCircle} size="lg" className="text-[#fff]" />
                    <span className="text-xs text-[#fff]">Exotic View</span>
                </Link>
                <Link to="newService" smooth={true} duration={500} className="flex flex-col items-center cursor-pointer">
                    <FontAwesomeIcon icon={faConciergeBell} size="lg" className="text-[#fff]" />
                    <span className="text-xs text-[#fff]">Services</span>
                </Link>
                <Link to="gallery" smooth={true} duration={500} className="flex flex-col items-center cursor-pointer">
                    <FontAwesomeIcon icon={faImage} size="lg" className="text-[#fff]" />
                    <span className="text-xs text-[#fff]">Gallery</span>
                </Link>
            </div>
            <div className="fixed bottom-16 right-4 flex flex-col space-y-4 z-50">
                <a href="tel:+447438969564" className="bg-[#470A1C] p-3 rounded-full shadow-lg cursor-pointer">
                    <FontAwesomeIcon icon={faPhone} size="lg" className="text-white" />
                </a>
                <a href="https://wa.me/+447438969564" target="_blank" rel="noopener noreferrer" className="bg-[#470A1C] p-3 rounded-full shadow-lg cursor-pointer">
                    <FontAwesomeIcon icon={faWhatsapp} size="lg" className="text-white" />
                </a>
            </div>
        </div>
    );
};

export default Home2;
