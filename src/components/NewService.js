import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import airport from '../images/airport.JPG';
import air from '../images/air.JPG';
import weddings from '../images/weddings.JPG';
import serviceImage3 from '../images/image29.jpg';
import serviceImage4 from '../images/image22.jpg';
import serviceImage5 from '../images/image30.jpg';

const NewService = () => {
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
            className="md:hidden bg-white text-black py-1.5 px-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={staggerContainer}
            id="services"
        >
            <motion.h1 className="text-lg font-bold mb-2 text-center text-[#000D28]" variants={fadeInUp}>Exceptional Landjet Services</motion.h1>
            <motion.p className="text-center text-[#000D28]" variants={fadeInUp}>At Exotic Wheels, we pride ourselves on delivering exceptional service.</motion.p>
            <br />
            <motion.div className="flex flex-col items-start mb-8" variants={fadeInUp}>
                <img src={air} alt="Service" className="w-full h-64 object-cover rounded-lg mb-4" />
                <motion.h3 className='text-1.8xl text-left mb-2 font-bold text-[#000D28]' variants={fadeInUp}>Business Travel Services</motion.h3>
                <motion.p className='text-black text-left mb-4' variants={fadeInUp}>Optimize your business travel with our high-end landjets, offering the perfect environment for productivity and relaxation.</motion.p>
                <Link to="/business-travel">
                    <button className="bg-[#470A1C] text-left text-white px-2 py-1 rounded hover:bg-red-700">Learn More</button>
                </Link>
            </motion.div>
            <br />
            <motion.div className="flex flex-col items-start mb-8" variants={fadeInUp}>
                <img src={weddings} alt="Service" className="w-full h-64 object-cover rounded-lg mb-4" />
                <motion.h3 className='text-1.8xl text-left mb-2 font-bold text-[#000D28]' variants={fadeInUp}>Wedding Services</motion.h3>
                <motion.p className='text-black text-left mb-4' variants={fadeInUp}>Make your special day unforgettable by arriving in style with our luxury landjets. <br />Our team ensures a seamless experience from start to finish.</motion.p>
                <Link to="/wedding-services">
                    <button className="bg-[#470A1C] text-left text-white px-2 py-1 rounded hover:bg-red-700">Learn More</button>
                </Link>
            </motion.div>
            <br />
            <motion.div className="flex flex-col items-start mb-8" variants={fadeInUp}>
                <img src={airport} alt="Service" className="w-full h-64 object-cover rounded-lg mb-4" />
                <motion.h3 className='text-1.8xl text-left mb-2 font-bold text-[#000D28]' variants={fadeInUp}>Airport Transfers</motion.h3>
                <motion.p className='text-black text-left mb-4' variants={fadeInUp}>Experience hassle-free airport transfers with Exotic Wheels. <br />Our landjets provide a luxurious transition from land to air travel.</motion.p>
                <Link to="/airport-transfers">
                    <button className="bg-[#470A1C] text-left text-white px-2 py-1 rounded hover:bg-red-700">Learn More</button>
                </Link>
            </motion.div>
            <br />
            <motion.div className="flex flex-col items-start mb-8" variants={fadeInUp}>
                <img src={serviceImage3} alt="Service" className="w-full h-64 object-cover rounded-lg mb-4" />
                <motion.h3 className='text-1.8xl text-left mb-2 font-bold text-[#000D28]' variants={fadeInUp}>Special Events</motion.h3>
                <motion.p className='text-black text-left mb-4' variants={fadeInUp}>Whether it's a corporate event or a personal celebration, our landjets add a touch of luxury to any occasion.</motion.p>
                <Link to="/special-events">
                    <button className="bg-[#470A1C] text-left text-white px-2 py-1 rounded hover:bg-red-700">Learn More</button>
                </Link>
            </motion.div>
            <br />
            <motion.div className="flex flex-col items-start mb-8" variants={fadeInUp}>
                <img src={serviceImage5} alt="Service" className="w-full h-64 object-cover rounded-lg mb-4" />
                <motion.h3 className='text-1.8xl text-left mb-2 font-bold text-[#000D28]' variants={fadeInUp}>Customizable Packages</motion.h3>
                <motion.p className='text-black text-left mb-4' variants={fadeInUp}>We offer customizable packages to meet your specific needs. <br /> Contact us to create the perfect travel experience.</motion.p>
                <Link to="/customizable-packages">
                    <button className="bg-[#470A1C] text-left text-white px-2 py-1 rounded hover:bg-red-700">Learn More</button>
                </Link>
            </motion.div>
            <br />
            <motion.div className="flex flex-col items-start mb-8" variants={fadeInUp}>
                <img src={serviceImage4} alt="Service" className="w-full h-64 object-cover rounded-lg mb-4" />
                <motion.h3 className='text-1.8xl text-left mb-2 font-bold text-[#000D28]' variants={fadeInUp}>Safety and Comfort</motion.h3>
                <motion.p className='text-black text-left mb-4' variants={fadeInUp}>Our landjets are maintained to the highest standards, ensuring both safety and comfort for our clients.</motion.p>
                <Link to="/safety-and-comfort">
                    <button className="bg-[#470A1C] text-left text-white px-2 py-1 rounded hover:bg-red-700">Learn More</button>
                </Link>
            </motion.div>
            <br />
        </motion.div>
    );
};

export default NewService;
