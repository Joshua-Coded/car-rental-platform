import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import slide1 from '../images/slide1.jpeg';
import slide2 from '../images/slide2.jpeg';
import slide3 from '../images/slide3.jpeg';

const CarouselComponent = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    const updateMedia = () => {
        setIsDesktop(window.innerWidth >= 768);
    };

    useEffect(() => {
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    });

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
        </motion.div>
    );
};

export default CarouselComponent;
