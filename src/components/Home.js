import React from 'react';
import { Link, Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faConciergeBell, faImage } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import Hero from './Hero';
import CarouselComponent from './CarouselComponent';
import WhatWeDo from './WhatWeDo';
import WhatYouCanExpect from './WhatYouCanExpect';
import NewDesignComponent from './NewDesignComponent';
import Gallery from './Gallery';
import Footer from './Footer';

const Home = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
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
        <div>
            <Header />
            <Element name="hero">
                <Hero />
            </Element>
            <Element name="carouselComponent">
                <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                    <CarouselComponent />
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
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                <Footer />
            </motion.div>
            <div className="fixed bottom-0 w-full bg-black text-white flex justify-around py-2 md:hidden">
                <Link to="hero" smooth={true} duration={500} className="flex flex-col items-center cursor-pointer">
                    <FontAwesomeIcon icon={faHome} size="lg" className="text-[#fff]" />
                    <span className="text-xs text-[#fff]">Home</span>
                </Link>
                <Link to="carouselComponent" smooth={true} duration={500} className="flex flex-col items-center cursor-pointer">
                    <FontAwesomeIcon icon={faInfoCircle} size="lg" className="text-[#fff]" />
                    <span className="text-xs text-[#fff]">Carousel</span>
                </Link>
                <Link to="whatWeDo" smooth={true} duration={500} className="flex flex-col items-center cursor-pointer">
                    <FontAwesomeIcon icon={faConciergeBell} size="lg" className="text-[#fff]" />
                    <span className="text-xs text-[#fff]">Services</span>
                </Link>
                <Link to="gallery" smooth={true} duration={500} className="flex flex-col items-center cursor-pointer">
                    <FontAwesomeIcon icon={faImage} size="lg" className="text-[#fff]" />
                    <span className="text-xs text-[#fff]">Gallery</span>
                </Link>
            </div>
        </div>
    );
};

export default Home;
