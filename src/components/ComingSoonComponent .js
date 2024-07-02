import React from 'react';
import image1 from '../images/aviation_2.JPG';
import image2 from '../images/aviation_1.JPG';

const ComingSoonComponent = () => {
    console.log('Image 1:', image1);
    console.log('Image 2:', image2);

    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6 bg-white">
            {/* Image Section */}
            <div className="relative w-full md:w-1/2 h-100vh md:h-full overflow-hidden">
                <img src={image1} alt="Background Image" className="w-full h-full object-cover rounded-md shadow-md" />
                <div className="absolute inset-0 w-full h-full" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))` }}></div>
                <img
                    src={image2}
                    alt="Foreground Image"
                    className="absolute bottom-0 left-0 w-1/2 h-full object-cover shadow-md"
                    style={{
                        clipPath: 'polygon(0 0, 100% 0, 100% 20%, 0% 100%)', // Clip to show only 20% of image2 inside image1
                        transform: 'translateY(20%)', // Move image2 down by 20% of its own height
                    }}
                />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start mt-8 md:mt-0 md:ml-8">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">Coming Soon</h1>
                <div className="flex items-center mb-4">
                    <span className="text-xl md:text-3xl font-semibold">Title</span>
                    <div className="border-l-2 border-gray-300 h-8 mx-4"></div>
                </div>
                <p className="text-gray-700 text-justify leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula, risus a interdum efficitur, urna metus dictum metus, a finibus enim leo ut urna. Vivamus accumsan dui eu venenatis consectetur. Proin commodo augue sit amet odio elementum, ut ultricies dolor vestibulum. Integer in diam eget lorem scelerisque lacinia. Nullam nec massa non risus aliquet dictum. Phasellus auctor, felis nec pretium varius, metus turpis malesuada ligula, vel ultrices velit nisi id dui. Fusce nec mi ac purus interdum consequat.
                </p>
            </div>
        </div>
    );
};

export default ComingSoonComponent;
