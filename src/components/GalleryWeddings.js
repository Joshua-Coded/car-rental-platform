import React, { useState } from 'react';
import { motion } from 'framer-motion';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';
import image6 from '../images/image6.jpg';
import image7 from '../images/image7.jpg';
import image8 from '../images/image8.jpg';
import image9 from '../images/image9.jpg';
import image10 from '../images/image10.jpg';
import image11 from '../images/image11.jpg';
import image12 from '../images/image12.jpg';
import image13 from '../images/image13.jpg';
import image14 from '../images/image14.jpg';
import image15 from '../images/image15.jpg';
import image16 from '../images/image16.jpg';
import image17 from '../images/image17.jpg';
import image18 from '../images/image18.jpg';
import image20 from '../images/image20.jpg';
import image21 from '../images/image21.jpg';
import image22 from '../images/image22.jpg';
import image23 from '../images/image23.jpg';
import image24 from '../images/image24.jpg';
import image25 from '../images/image25.jpg';
import image26 from '../images/image26.jpg';
import image27 from '../images/image27.jpg';
import image28 from '../images/image28.jpg';
import image29 from '../images/image29.jpg';
import image30 from '../images/image30.jpg';


const GalleryWeddings = () => {
    const images = [
        { id: 1, src: image1, alt: 'Exotic Wheels is your go-to provider for luxury landjet and vehicle hire in the UK.' },
        { id: 2, src: image2, alt: 'We offer a premium fleet of high-end landjets, perfect for business travel, special events, and anyone seeking a superior travel experience.' },
        { id: 3, src: image3, alt: 'Our dedicated team ensures every detail is handled, offering a seamless and luxurious journey.' },
        { id: 4, src: image4, alt: 'Exotic Wheels is your go-to provider for luxury landjet and vehicle hire in the UK.' },
        { id: 5, src: image5, alt: 'We offer a premium fleet of high-end landjets, perfect for business travel, special events, and anyone seeking a superior travel experience.' },
        { id: 6, src: image6, alt: 'Our mission is to deliver unmatched comfort, style, and convenience. We aim to provide exceptional service with our state-of-the-art vehicles, equipped with the latest amenities and technology.' },
        { id: 6, src: image7, alt: 'Our mission is to deliver unmatched comfort, style, and convenience. We aim to provide exceptional service with our state-of-the-art vehicles, equipped with the latest amenities and technology.' },
        { id: 6, src: image8, alt: 'Our mission is to deliver unmatched comfort, style, and convenience. We aim to provide exceptional service with our state-of-the-art vehicles, equipped with the latest amenities and technology.' },
        { id: 6, src: image9, alt: 'Our mission is to deliver unmatched comfort, style, and convenience. We aim to provide exceptional service with our state-of-the-art vehicles, equipped with the latest amenities and technology.' },
        { id: 6, src: image10, alt: 'Our mission is to deliver unmatched comfort, style, and convenience. We aim to provide exceptional service with our state-of-the-art vehicles, equipped with the latest amenities and technology.' },
        { id: 6, src: image11, alt: 'Our mission is to deliver unmatched comfort, style, and convenience. We aim to provide exceptional service with our state-of-the-art vehicles, equipped with the latest amenities and technology.' },
        { id: 6, src: image12, alt: 'Our mission is to deliver unmatched comfort, style, and convenience. We aim to provide exceptional service with our state-of-the-art vehicles, equipped with the latest amenities and technology.' },
        { id: 6, src: image13, alt: 'Our mission is to deliver unmatched comfort, style, and convenience. We aim to provide exceptional service with our state-of-the-art vehicles, equipped with the latest amenities and technology.' },
        { id: 6, src: image14, alt: 'Our mission is to deliver unmatched comfort, style, and convenience. We aim to provide exceptional service with our state-of-the-art vehicles, equipped with the latest amenities and technology.' },
        { id: 6, src: image15, alt: 'Our mission is to deliver unmatched comfort, style, and convenience. We aim to provide exceptional service with our state-of-the-art vehicles, equipped with the latest amenities and technology.' },
        { id: 6, src: image16, alt: 'Our mission is to deliver unmatched comfort, style, and convenience. We aim to provide exceptional service with our state-of-the-art vehicles, equipped with the latest amenities and technology.' },
        { id: 6, src: image17, alt: 'Our mission is to deliver unmatched comfort, style, and convenience. We aim to provide exceptional service with our state-of-the-art vehicles, equipped with the latest amenities and technology.' },
        { id: 6, src: image18, alt: 'Our mission is to deliver unmatched comfort, style, and convenience. We aim to provide exceptional service with our state-of-the-art vehicles, equipped with the latest amenities and technology.' },
        { id: 6, src: image20, alt: 'Our mission is to deliver unmatched comfort, style, and convenience. We aim to provide exceptional service with our state-of-the-art vehicles, equipped with the latest amenities and technology.' },
        { id: 6, src: image21, alt: 'Our mission is to deliver unmatched comfort, style, and convenience. We aim to provide exceptional service with our state-of-the-art vehicles, equipped with the latest amenities and technology.' },
        { id: 6, src: image22, alt: 'Our mission is to deliver unmatched comfort, style, and convenience. We aim to provide exceptional service with our state-of-the-art vehicles, equipped with the latest amenities and technology.' },
        { id: 6, src: image23, alt: 'Our mission is to deliver unmatched comfort, style, and convenience. We aim to provide exceptional service with our state-of-the-art vehicles, equipped with the latest amenities and technology.' },
        { id: 6, src: image24, alt: 'Our mission is to deliver unmatched comfort, style, and convenience. We aim to provide exceptional service with our state-of-the-art vehicles, equipped with the latest amenities and technology.' },
        { id: 6, src: image25, alt: 'Our mission is to deliver unmatched comfort, style, and convenience. We aim to provide exceptional service with our state-of-the-art vehicles, equipped with the latest amenities and technology.' },
        { id: 6, src: image26, alt: 'Our mission is to deliver unmatched comfort, style, and convenience. We aim to provide exceptional service with our state-of-the-art vehicles, equipped with the latest amenities and technology.' },
        { id: 6, src: image27, alt: 'Our mission is to deliver unmatched comfort, style, and convenience. We aim to provide exceptional service with our state-of-the-art vehicles, equipped with the latest amenities and technology.' },
        { id: 6, src: image28, alt: 'Our mission is to deliver unmatched comfort, style, and convenience. We aim to provide exceptional service with our state-of-the-art vehicles, equipped with the latest amenities and technology.' },
        { id: 6, src: image29, alt: 'Our mission is to deliver unmatched comfort, style, and convenience. We aim to provide exceptional service with our state-of-the-art vehicles, equipped with the latest amenities and technology.' },
        { id: 6, src: image30, alt: 'Our mission is to deliver unmatched comfort, style, and convenience. We aim to provide exceptional service with our state-of-the-art vehicles, equipped with the latest amenities and technology.' },
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
                        className="text-center relative overflow-hidden rounded-lg cursor-pointer w-64 h-64 md:w-80 md:h-80 mx-auto"
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
}
export default GalleryWeddings;
