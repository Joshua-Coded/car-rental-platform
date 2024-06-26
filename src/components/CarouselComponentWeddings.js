import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import slide1 from '../images/image1.jpg';
import slide2 from '../images/image20.jpg';
import slide3 from '../images/image22.jpg';
import businessImage from '../images/image23.jpg';
import weddingImage from '../images/image25.jpg';
import airportImage from '../images/image27.jpg';
import corporateImage from '../images/image28.jpg';
import privateHireImage from '../images/image30.jpg';

const CarouselComponentWeddings = () => {
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
            animate="visible"
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
                    <h1 className="text-3xl font-bold mb-4 text-center">Our Services for Weddings</h1>
                    <p className="text-lg text-center mb-8">Explore the range of luxury transport services we offer to cater to your needs.</p>
                    {services.map((service, index) => (
                        <motion.div key={index} className="space-y-2 p-4 border border-gray-700 rounded-lg" variants={fadeInUp}>
                            <img src={service.image} alt={service.title} className="w-full h-40 object-cover rounded-lg mb-2" />
                            <h2 className="text-xl font-bold">{service.title}</h2>
                            <p>{service.description}</p>
                            <button className="bg-red-600 px-4 py-2 rounded hover:bg-red-700">Learn More</button>
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </motion.div>
    );
};

export default CarouselComponentWeddings;
