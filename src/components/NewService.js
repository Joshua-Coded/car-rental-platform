import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import airport from '../images/airport.JPG';
import air from '../images/air.JPG';
import weddings from '../images/weddings.JPG';
import serviceImage3 from '../images/image29.jpg';
import serviceImage4 from '../images/image22.jpg';
import serviceImage5 from '../images/image18.jpg';

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
            id="services" // Add ID here
        >
            <motion.h1 className="text-4xl font-bold mb-6 text-center text-[#000D28]" variants={fadeInUp}>Exceptional Landjet Services</motion.h1>
            <motion.h2 className="text-2xl text-center text-[#000D28]">Quality and sophistication in every detail</motion.h2><br />
            <motion.p className="text-center text-[#000D28]">At Exotic Wheels, we pride ourselves on delivering exceptional service. Our luxury landjets are equipped with the latest amenities to ensure a seamless and luxurious journey.</motion.p>
            <br />
            <motion.div className="flex flex-col items-center" variants={fadeInUp}>
                <img src={air} alt="Service" className="w-full h-64 object-cover rounded-lg mb-4" />
                <motion.h2 className='text-2xl text-center text-[#000D28]]'>Business Travel Services</motion.h2><br />
                <p className="text-lg mb-4 text-left text-[#000D28]">Optimize your business travel with our high-end landjets, offering the perfect environment for productivity and relaxation.</p>
                <Link to="/business-travel">
                    <button className="bg-[#470A1C] text-white px-4 py-2 rounded hover:bg-red-700">Learn More</button>
                </Link>
            </motion.div>
            <br />
            <motion.div className="flex flex-col items-center" variants={fadeInUp}>
                <img src={weddings} alt="Service" className="w-full h-64 object-cover rounded-lg mb-4" />
                <motion.h2 className='text-2xl text-center text-[#000D28]'>Wedding Services</motion.h2><br />
                <p className="text-lg mb-4 text-left text-[#000D28]">Make your special day unforgettable by arriving in style with our luxury landjets. Our team ensures a seamless experience from start to finish.</p>
                <Link to="/wedding-services">
                    <button className="bg-[#470A1C] text-white px-4 py-2 rounded hover:bg-red-700">Learn More</button>
                </Link>
            </motion.div>
            <br />
            <motion.div className="flex flex-col items-center" variants={fadeInUp}>
                <img src={airport} alt="Service" className="w-full h-64 object-cover rounded-lg mb-4" />
                <motion.h2 className='text-2xl text-center text-[#000D28]'>Airport Transfers</motion.h2><br />
                <p className="text-lg mb-4 text-left text-[#000D28]">Experience hassle-free airport transfers with Exotic Wheels. Our landjets provide a luxurious transition from land to air travel.</p>
                <Link to="/airport-transfers">
                    <button className="bg-[#470A1C] text-white px-4 py-2 rounded hover:bg-red-700">Learn More</button>
                </Link>
            </motion.div>
            <br />
            <motion.div className="flex flex-col items-center" variants={fadeInUp}>
                <img src={serviceImage3} alt="Service" className="w-full h-64 object-cover rounded-lg mb-4" />
                <motion.h2 className='text-2xl text-center text-[#000D28]'>Special Events</motion.h2><br />
                <p className="text-lg mb-4 text-left text-[#000D28]">Whether it's a corporate event or a personal celebration, our landjets add a touch of luxury to any occasion.</p>
                <Link to="/special-events">
                    <button className="bg-[#470A1C] text-white px-4 py-2 rounded hover:bg-red-700">Learn More</button>
                </Link>
            </motion.div>
            <br />
            <motion.div className="flex flex-col items-center" variants={fadeInUp}>
                <img src={serviceImage5} alt="Service" className="w-full h-64 object-cover rounded-lg mb-4" />
                <motion.h2 className='text-2xl text-center text-[#000D28]'>Customizable Packages</motion.h2><br />
                <p className="text-lg mb-4 text-left text-[#000D28]">We offer customizable packages to meet your specific needs. Contact us to create the perfect travel experience.</p>
                <Link to="/customizable-packages">
                    <button className="bg-[#470A1C] text-white px-4 py-2 rounded hover:bg-red-700">Learn More</button>
                </Link>
            </motion.div>
            <br />
            <motion.div className="flex flex-col items-center" variants={fadeInUp}>
                <img src={serviceImage4} alt="Service" className="w-full h-64 object-cover rounded-lg mb-4" />
                <motion.h2 className='text-2xl text-center text-[#000D28]'>Safety and Comfort</motion.h2><br />
                <p className="text-lg mb-4 text-left text-[#000D28]">Our landjets are maintained to the highest standards, ensuring both safety and comfort for our clients.</p>
                <Link to="/safety-and-comfort">
                    <button className="bg-[#470A1C] text-white px-4 py-2 rounded hover:bg-red-700">Learn More</button>
                </Link>
            </motion.div>
            <br />
        </motion.div>
    );
};
export default NewService;
