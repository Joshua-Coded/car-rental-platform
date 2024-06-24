import React, { useState } from 'react';
import { motion } from 'framer-motion';
import slide1 from '../images/slide1.jpeg';
import slide3 from '../images/slide3.jpeg';

const Gallery = () => {
    const images = [
        { id: 1, src: slide1, alt: 'Exotic Wheels is your go-to provider for luxury landjet and vehicle hire in the UK.' },
        { id: 2, src: slide1, alt: 'We offer a premium fleet of high-end landjets, perfect for business travel, special events, and anyone seeking a superior travel experience.' },
        { id: 3, src: slide3, alt: 'Our dedicated team ensures every detail is handled, offering a seamless and luxurious journey.' },
        { id: 4, src: slide1, alt: 'Exotic Wheels is your go-to provider for luxury landjet and vehicle hire in the UK.' },
        { id: 5, src: slide3, alt: 'We offer a premium fleet of high-end landjets, perfect for business travel, special events, and anyone seeking a superior travel experience.' },
        { id: 6, src: slide3, alt: 'Our mission is to deliver unmatched comfort, style, and convenience. We aim to provide exceptional service with our state-of-the-art vehicles, equipped with the latest amenities and technology.' },
    ];

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const openLightbox = (image) => {
        setCurrentImage(image);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setCurrentImage(null);
        setLightboxOpen(false);
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } }
    };

    return (
        <motion.div
            className="bg-black text-white py-10 px-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
        >
            <motion.h1 className="text-4xl font-bold mb-6 text-center" variants={fadeInUp}>Our Gallery</motion.h1>
            <motion.p className="text-center text-lg mb-8" variants={fadeInUp}>
                Take a look at our collection of luxurious travel experiences. Each image captures the essence of comfort and elegance.
            </motion.p>
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center" initial="hidden" whileInView="visible" viewport={{ once: false }}>
                {images.map((image) => (
                    <motion.div
                        key={image.id}
                        className="text-center relative overflow-hidden rounded-lg cursor-pointer w-64 h-64 md:w-96 md:h-96"
                        onClick={() => openLightbox(image)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        variants={fadeInUp}
                    >
                        <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <p className="text-lg text-white mb-2">{image.alt}</p>
                            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Click Me</button>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {lightboxOpen && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={fadeInUp}
                >
                    <motion.div className="relative" variants={fadeInUp}>
                        <button
                            className="absolute top-2 right-2 text-white text-2xl"
                            onClick={closeLightbox}
                        >
                            &times;
                        </button>
                        <img src={currentImage.src} alt={currentImage.alt} className="max-w-full max-h-96" />
                        <p className="text-center text-lg text-white mt-4">{currentImage.alt}</p>
                    </motion.div>
                </motion.div>
            )}
        </motion.div>
    );
};

export default Gallery;
