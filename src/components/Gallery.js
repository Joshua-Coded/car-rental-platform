import React, { useState } from 'react';
import slide1 from '../images/slide1.jpeg';
import slide2 from '../images/slide2.jpeg';
import slide3 from '../images/slide3.jpeg';

const Gallery = () => {
    const images = [
        { id: 1, src: slide1, alt: 'Exotic Wheels is your go-to provider for luxury landjet and vehicle hire in the UK. ' },
        { id: 2, src: slide2, alt: 'We offer a premium fleet of high-end landjets, perfect for business travel, special events, and anyone seeking a superior travel experience.' },
        { id: 3, src: slide3, alt: 'Our dedicated team ensures every detail is handled, offering a seamless and luxurious journey.' },
        { id: 1, src: slide1, alt: 'Exotic Wheels is your go-to provider for luxury landjet and vehicle hire in the UK.' },
        { id: 2, src: slide2, alt: 'We offer a premium fleet of high-end landjets, perfect for business travel, special events, and anyone seeking a superior travel experience.' },
        { id: 3, src: slide3, alt: 'Our mission is to deliver unmatched comfort, style, and convenience. We aim to provide exceptional service with our state-of-the-art vehicles, equipped with the latest amenities and technology.' },
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

    return (
        <div className="bg-black text-white py-10 px-6">
            <h1 className="text-4xl font-bold mb-6 text-center">Our Gallery</h1>
            <p className="text-center text-lg mb-8">
                Take a look at our collection of luxurious travel experiences. Each image captures the essence of comfort and elegance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {images.map((image) => (
                    <div
                        key={image.id}
                        className="text-center relative overflow-hidden rounded-lg cursor-pointer"
                        onClick={() => openLightbox(image)}
                    >
                        <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <p className="text-lg text-white mb-2">{image.alt}</p>
                            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Click Me</button>
                        </div>
                    </div>
                ))}
            </div>

            {lightboxOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="relative">
                        <button
                            className="absolute top-2 right-2 text-white text-2xl"
                            onClick={closeLightbox}
                        >
                            &times;
                        </button>
                        <img src={currentImage.src} alt={currentImage.alt} className="max-w-full max-h-96" />
                        <p className="text-center text-lg text-white mt-4">{currentImage.alt}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
