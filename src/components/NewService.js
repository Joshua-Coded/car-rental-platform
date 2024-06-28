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
            className="md:hidden bg-white text-black py-10 px-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={staggerContainer}
            id="services"
        >
            <motion.h1 className="text-2xl font-bold mb-6 text-center text-[#000D28]" variants={fadeInUp}>Exceptional Landjet Services</motion.h1>
            <motion.p className="text-center text-[#000D28]">At Exotic Wheels, we pride ourselves on delivering exceptional service.</motion.p>
            <br />
            <motion.div className="flex flex-col items-start" variants={fadeInUp}>
                <img src={air} alt="Service" className="w-full h-64 object-cover rounded-lg mb-4" />
                <motion.h3 className='text-1.8xl text-[#000D28] text-left'>Business Travel Services</motion.h3>
                <Link to="/business-travel">
                    <button className="bg-[#470A1C] text-left text-white px-2 py-1 rounded hover:bg-red-700">Learn More</button>
                </Link>
            </motion.div>
            <br />
            <motion.div className="flex flex-col items-start" variants={fadeInUp}>
                <img src={weddings} alt="Service" className="w-full h-64 object-cover rounded-lg mb-4" />
                <motion.h3 className='text-1.8xl text-[#000D28] text-left'>Wedding Services</motion.h3>
                <Link to="/wedding-services">
                    <button className="bg-[#470A1C] text-left text-white px-2 py-1 rounded hover:bg-red-700">Learn More</button>
                </Link>
            </motion.div>
            <br />
            <motion.div className="flex flex-col items-start" variants={fadeInUp}>
                <img src={airport} alt="Service" className="w-full h-64 object-cover rounded-lg mb-4" />
                <motion.h3 className='text-1.8xl text-[#000D28] text-left'>Airport Transfers</motion.h3>
                <Link to="/airport-transfers">
                    <button className="bg-[#470A1C] text-left text-white px-2 py-1 rounded hover:bg-red-700">Learn More</button>
                </Link>
            </motion.div>
            <br />
            <motion.div className="flex flex-col items-start" variants={fadeInUp}>
                <img src={serviceImage3} alt="Service" className="w-full h-64 object-cover rounded-lg mb-4" />
                <motion.h3 className='text-1.8xl text-[#000D28] text-left'>Special Events</motion.h3>
                <Link to="/special-events">
                    <button className="bg-[#470A1C] text-left text-white px-2 py-1 rounded hover:bg-red-700">Learn More</button>
                </Link>
            </motion.div>
            <br />
            <motion.div className="flex flex-col items-start" variants={fadeInUp}>
                <img src={serviceImage5} alt="Service" className="w-full h-64 object-cover rounded-lg mb-4" />
                <motion.h3 className='text-1.8xl text-[#000D28] text-left'>Customizable Packages</motion.h3>
                <Link to="/customizable-packages">
                    <button className="bg-[#470A1C] text-left text-white px-2 py-1 rounded hover:bg-red-700">Learn More</button>
                </Link>
            </motion.div>
            <br />
            <motion.div className="flex flex-col items-start" variants={fadeInUp}>
                <img src={serviceImage4} alt="Service" className="w-full h-64 object-cover rounded-lg mb-4" />
                <motion.h3 className='text-1.8xl text-[#000D28] text-left'>Safety and Comfort</motion.h3>
                <Link to="/safety-and-comfort">
                    <button className="bg-[#470A1C] text-left text-white px-2 py-1 rounded hover:bg-red-700">Learn More</button>
                </Link>
            </motion.div>
            <br />
        </motion.div>
    );
};
export default NewService;
