import React, { useState } from 'react';
import { motion } from 'framer-motion';
import image21 from '../images/image20.jpg';
import image25 from '../images/image26.jpg';
import image22 from '../images/image27.jpg';
import image29 from '../images/image29.jpg';
import image30 from '../images/image30.jpg';


const Gallery = () => {
    const images = [
        { id: 1, src: image30, alt: 'Exotic Wheels is your go-to provider for luxury landjet and vehicle hire in the UK.' },
        { id: 4, src: image21, alt: 'Our mission is to deliver unmatched comfort, style, and convenience. We aim to provide exceptional service with our state-of-the-art vehicles, equipped with the latest amenities and technology.' },
        { id: 5, src: image25, alt: 'Our mission is to deliver unmatched comfort, style, and convenience. We aim to provide exceptional service with our state-of-the-art vehicles, equipped with the latest amenities and technology.' },
        { id: 6, src: image22, alt: 'Our mission is to deliver unmatched comfort, style, and convenience. We aim to provide exceptional service with our state-of-the-art vehicles, equipped with the latest amenities and technology.' },
        { id: 7, src: image29, alt: 'Our mission is to deliver unmatched comfort, style, and convenience. We aim to provide exceptional service with our state-of-the-art vehicles, equipped with the latest amenities and technology.' },
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
            className="bg-black text-white py-5 px-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
        >
            <motion.h1 className="text-lg font-bold mb-2 text-center" variants={fadeInUp}>Our Gallery</motion.h1>
            <motion.p className="text-center text-lg mb-4" variants={fadeInUp}>
                Take a look at our collection of luxurious travel experiences. <br />Each image captures the essence of comfort and elegance.
            </motion.p>
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center" initial="hidden" whileInView="visible" viewport={{ once: false }}>
                {images.map((image) => (
                    <motion.div
                        key={image.id}
                        className="text-center relative overflow-hidden rounded-lg cursor-pointer w-90 h-80 mx-auto"
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
