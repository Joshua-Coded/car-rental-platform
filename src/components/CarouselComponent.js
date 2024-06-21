import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import slide1 from '../images/slide1.jpeg';
import slide2 from '../images/slide2.jpeg';
import slide3 from '../images/slide3.jpeg';
import businessImage from '../images/slide4.jpeg';
import weddingImage from '../images/slide5.jpeg';
import airportImage from '../images/slide6.jpeg';
import corporateImage from '../images/slide1.jpeg';
import privateHireImage from '../images/slide4.jpeg';

const CarouselComponent = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    const updateMedia = () => {
        setIsDesktop(window.innerWidth >= 768);
    };

    useEffect(() => {
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    });

    const services = [
        {
            image: businessImage,
            title: 'Business Travel',
            description: 'Professional and reliable transport solutions for all your business needs.',
        },
        {
            image: weddingImage,
            title: 'Wedding Transport',
            description: 'Make your special day even more memorable with our luxury wedding transport.',
        },
        {
            image: airportImage,
            title: 'Airport Transfers',
            description: 'Seamless and comfortable transfers to and from the airport.',
        },
        {
            image: corporateImage,
            title: 'Corporate Events',
            description: 'Luxury transport solutions for corporate events and meetings.',
        },
        {
            image: privateHireImage,
            title: 'Private Hire',
            description: 'Exclusive private hire services tailored to your specific needs.',
        },
    ];

    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } }
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
        <motion.div
            className="w-full max-w-4xl mx-auto mb-6 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={staggerContainer}
        >
            {isDesktop ? (
                <motion.div className="bg-black p-4 rounded-lg" variants={fadeInUp}>
                    <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
                        <div className="h-60 md:h-80">
                            <img src={slide1} alt="Luxury Coach 1" className="object-cover h-full w-full" />
                            <p className="legend">Luxury Coach 1</p>
                        </div>
                        <div className="h-60 md:h-80">
                            <img src={slide2} alt="Luxury Coach 2" className="object-cover h-full w-full" />
                            <p className="legend">Luxury Coach 2</p>
                        </div>
                        <div className="h-60 md:h-80">
                            <img src={slide3} alt="Luxury Coach 3" className="object-cover h-full w-full" />
                            <p className="legend">Luxury Coach 3</p>
                        </div>
                    </Carousel>
                </motion.div>
            ) : (
                <motion.div className="bg-black text-white p-4 rounded-lg space-y-8" variants={fadeInUp}>
                    <motion.h1 className="text-3xl font-bold mb-4 text-center" variants={fadeInUp}>Our Services</motion.h1>
                    <motion.p className="text-lg text-center mb-8" variants={fadeInUp}>Explore the range of luxury transport services we offer to cater to your needs.</motion.p>
                    {services.map((service, index) => (
                        <motion.div key={index} className="space-y-2 p-4 border border-gray-700 rounded-lg" variants={fadeInUp}>
                            <motion.img src={service.image} alt={service.title} className="w-full h-40 object-cover rounded-lg mb-2" variants={fadeInUp} />
                            <motion.h2 className="text-xl font-bold" variants={fadeInUp}>{service.title}</motion.h2>
                            <motion.p variants={fadeInUp}>{service.description}</motion.p>
                            <motion.button className="bg-red-600 px-4 py-2 rounded hover:bg-red-700" variants={fadeInUp}>Learn More</motion.button>
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </motion.div>
    );
};

export default CarouselComponent;
