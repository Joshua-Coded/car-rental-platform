import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';

import image21 from '../images/image20.jpg';
import image25 from '../images/image26.jpg';
import image22 from '../images/image27.jpg';
import image29 from '../images/image29.jpg';
import image30 from '../images/image30.jpg';
import image1 from '../images/image1.jpg';
import image23 from '../images/image23.jpg';
import image24 from '../images/image24.jpg';
import image28 from '../images/image28.jpg';
import image31 from '../images/image31.jpeg';
import weddings from '../images/weddings.JPG';
import aviation1 from '../images/aviation_1.JPG';
import aviation2 from '../images/aviation_2.JPG';

const Gallery = () => {
    const initialImages = [
        { id: 1, src: image30, },
        { id: 2, src: image21, },
        { id: 3, src: image25, },
        { id: 4, src: image22, },
        { id: 5, src: image29, },
        { id: 1, src: image23, },
        { id: 2, src: image24, },
        { id: 3, src: image28, },
        { id: 4, src: image31, },
        { id: 5, src: image1, },
        { id: 3, src: weddings, },
        { id: 4, src: aviation1, },
        { id: 5, src: aviation2, },
        { id: 1, src: image30, },
        { id: 2, src: image21, },
        { id: 3, src: image25, },
        { id: 4, src: image22, },
        { id: 5, src: image29, },
        { id: 1, src: image23, },
        { id: 2, src: image24, },
        { id: 3, src: image28, },
        { id: 4, src: image31, },
        { id: 5, src: image1, },
        { id: 3, src: weddings, },
        { id: 4, src: aviation1, },
        { id: 5, src: aviation2, },

    ];

    const [visibleImages, setVisibleImages] = useState(5);
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

    const handleSeeMore = () => {
        setVisibleImages(prev => prev + 5); // Increase visible images by 5
    };

    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <motion.div
            className="bg-black text-white py-5 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.h1 className="text-lg font-bold mb-2 text-center">Our Gallery</motion.h1>
            <div className="hidden md:block">
                <Slider {...carouselSettings}>
                    {initialImages.slice(0, visibleImages).map((image) => (
                        <div key={image.id} className="relative cursor-pointer">
                            <img src={image.src} alt={image.alt} className="w-full" onClick={() => openLightbox(image)} />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <p className="text-lg text-white mb-2">{image.alt}</p>
                                <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Click Me</button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="md:hidden grid grid-cols-1 gap-4">
                {initialImages.slice(0, visibleImages).map((image) => (
                    <div key={image.id} className="relative cursor-pointer">
                        <img src={image.src} alt={image.alt} className="w-full" onClick={() => openLightbox(image)} />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">

                        </div>
                    </div>
                ))}
            </div>

            {visibleImages < initialImages.length && (
                <div className="text-center mt-4">
                    <button className="bg-[#470A1C] text-white px-4 py-2 rounded hover:bg-gray-900" onClick={handleSeeMore}>See More</button>
                </div>
            )}

            {lightboxOpen && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div>
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
