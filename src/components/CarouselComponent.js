import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
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

    return (
        <div className="w-full max-w-4xl mx-auto mb-6 mt-10">
            {isDesktop ? (
                <div className="bg-black p-4 rounded-lg">
                    <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
                        <div className="h-60 md:h-80">
                            <img src={slide1} alt="Luxury Coach 1" className="object-cover h-full w-full" />
                            <p className="legend">Luxury Coach 1</p>
                        </div>
                        <div className="h-60 md:h-80">
                            <img src={slide1} alt="Luxury Coach 2" className="object-cover h-full w-full" />
                            <p className="legend">Luxury Coach 2</p>
                        </div>
                        <div className="h-60 md:h-80">
                            <img src={slide3} alt="Luxury Coach 3" className="object-cover h-full w-full" />
                            <p className="legend">Luxury Coach 3</p>
                        </div>
                    </Carousel>
                </div>
            ) : (
                <div className="bg-black text-white p-4 rounded-lg space-y-8">
                    <h1 className="text-3xl font-bold mb-4 text-center">Our Services</h1>
                    <p className="text-lg text-center mb-8">Explore the range of luxury transport services we offer to cater to your needs.</p>
                    {services.map((service, index) => (
                        <div key={index} className="space-y-2 p-4 border border-gray-700 rounded-lg">
                            <img src={service.image} alt={service.title} className="w-full h-40 object-cover rounded-lg mb-2" />
                            <h2 className="text-xl font-bold">{service.title}</h2>
                            <p>{service.description}</p>
                            <button className="bg-red-600 px-4 py-2 rounded hover:bg-red-700">Learn More</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
export default CarouselComponent;
