import React from 'react';
import image1 from '../images/aviation_2.JPG';
import image2 from '../images/aviation_1.JPG';

const ComingSoonComponent = () => {
    console.log('Image 1:', image1);
    console.log('Image 2:', image2);

    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6 bg-white py-2 md:py-0 md:mt-0 md:mb-0">
            {/* Image Section */}
            <div className="relative w-full md:w-1/2 h-100vh md:h-full overflow-hidden">
                <img src={image1} alt="Background Image" className="w-full h-full object-cover rounded-md shadow-md" />
                <div className="absolute inset-0 w-full h-full" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))` }}></div>
                <img
                    src={image2}
                    alt="Foreground Image"
                    className="absolute bottom-10 left-0 w-2/4 h-full object-cover shadow-md"
                    style={{
                        clipPath: 'polygon(0 0, 100% 0, 100% 20%, 0% 100%)',
                        transform: 'translateY(20%)',
                    }}
                />
            </div>


            <div className="w-full md:w-1/2 flex flex-col items-center mt-4 md:mt-0 md:ml-8">
                <h1 className="text-lg text-center md:text-2xl font-bold mb-4">Exotic Aviation</h1>
                <div className="flex flex-col items-center text-center mb-4">
                    <span className="text-lg md:text-xl font-semibold">Coming Soon!</span>
                    <div className="border-l-4 border-gray-300 h-20 mx-4 my-2"></div>
                </div>
                <p className="text-gray-700 text-justify leading-relaxed text-center">
                    Flying private with Exotic Wheels allows you to tailor every aspect of your journey to your preferences. <br /> Choose your departure time and destination, select the countries you wish to visit, and enjoy gourmet meals onboard.
                    We ensure that your flight is an integral part of your travel experience, offering relaxation from the moment you step on board until you return home.
                    <br /> <br />Our mission at Exotic Wheels is to provide first-class travel, ensuring our clients enjoy the utmost comfort and luxury. Experience unforgettable adventures with friends and loved ones.
                    Our JetClass model boasts a spacious interior, accommodating every traveler in unparalleled comfort.
                </p>
            </div>
        </div>
    );
};

export default ComingSoonComponent;
