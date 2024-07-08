import React from 'react';
import { Link as RouterLink, Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faConciergeBell, faImage, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Header from './Header';
import Hero from './Hero';
import CarouselComponent from './CarouselComponent';
import WhatWeDo from './WhatWeDo';
import WhatYouCanExpect from './WhatYouCanExpect';
import NewDesignComponent from './NewDesignComponent';
import Gallery from './Gallery';
import Footer from './Footer';
import Booking from './Booking';
import NewService from './NewService';
// import ComingSoonComponent from './ComingSoonComponent';
import SocialComponent from './SocialComponent';

const iconMap = {
    home: faHome,
    carouselComponent: faInfoCircle,
    newService: faConciergeBell,
    gallery: faImage,
    phone: faPhone,
    whatsapp: faWhatsapp
    // Add more as needed
};

const HomeNavLink = ({ section, text }) => {
    const icon = iconMap[section] || faHome; // Default icon is faHome if not found in iconMap

    const staggerContainer = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const renderComponent = () => {
        switch (section) {
            case 'hero':
                return <Hero />;
            case 'carouselComponent':
                return (
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                        <CarouselComponent />
                    </motion.div>
                );
            case 'newService':
                return (
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                        <NewService />
                    </motion.div>
                );
            case 'whatWeDo':
                return (
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                        <WhatWeDo />
                    </motion.div>
                );
            case 'whatYouCanExpect':
                return (
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                        <WhatYouCanExpect />
                    </motion.div>
                );
            case 'newDesignComponent':
                return (
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                        <NewDesignComponent />
                    </motion.div>
                );
            case 'gallery':
                return (
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                        <Gallery />
                    </motion.div>
                );
            case 'social-link':
                return (
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                        <SocialComponent />
                    </motion.div>
                );
            case 'booking':
                return (
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                        <Booking />
                    </motion.div>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <Header />
            <Element name={section}>
                {renderComponent()}
            </Element>
            <div className="fixed bottom-0 w-full bg-black text-white flex justify-around py-2 md:hidden z-50">
                <RouterLink to={section} smooth={true} duration={500} className="flex flex-col items-center cursor-pointer">
                    <FontAwesomeIcon icon={icon} size="lg" className="text-[#fff]" />
                    <span className="text-xs text-[#fff]">{text}</span>
                </RouterLink>
            </div>
            <div className="fixed bottom-16 right-4 flex flex-col space-y-4 z-50">
                {section === 'phone' && (
                    <a href="tel:+447438969564" className="bg-[#470A1C] p-3 rounded-full shadow-lg cursor-pointer">
                        <FontAwesomeIcon icon={faPhone} size="lg" className="text-white" />
                    </a>
                )}
                {section === 'whatsapp' && (
                    <a href="https://wa.me/+447438969564" target="_blank" rel="noopener noreferrer" className="bg-[#470A1C] p-3 rounded-full shadow-lg cursor-pointer">
                        <FontAwesomeIcon icon={faWhatsapp} size="lg" className="text-white" />
                    </a>
                )}
            </div>
            <Footer />
        </>
    );
};

export default HomeNavLink;
