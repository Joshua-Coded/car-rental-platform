import React from 'react';
import { motion } from 'framer-motion';
import serviceImage from '../images/image8.jpg';
import serviceImage1 from '../images/image29.jpg';
import serviceImage2 from '../images/image26.jpg';
import serviceImage3 from '../images/image30.jpg';
import serviceImage4 from '../images/image15.jpg';
import serviceImage5 from '../images/image18.jpg';
import serviceImage6 from '../images/image10.jpg';

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
        >
            <motion.h1 className="text-3xl font-bold mb-6 text-center" variants={fadeInUp}>Our Services</motion.h1>
            <motion.p className="text-left">Offering an elegant but discreet exterior design our Mercedes Jet Class is not just a means of transport but a real statement piece</motion.p>
            <motion.div className="flex flex-col items-center" variants={fadeInUp}>
                <img src={serviceImage} alt="Service" className="w-full h-64 object-cover rounded-lg mb-4" />
                <motion.h2 className='text-left'>Event</motion.h2>
                <p className="text-lg mb-4 text-center">We offer a variety of exceptional services to meet your needs and ensure you have the best experience possible.</p>
                <button className="bg-[#470A1C] text-white px-4 py-2 rounded hover:bg-red-700">Learn More</button>
            </motion.div>
            <br />
            <motion.div className="flex flex-col items-center" variants={fadeInUp}>
                <img src={serviceImage1} alt="Service" className="w-full h-64 object-cover rounded-lg mb-4" />
                <motion.h2 className='text-left'>Game Day Travels</motion.h2>
                <p className="text-lg mb-4 text-center">We offer a variety of exceptional services to meet your needs and ensure you have the best experience possible.</p>
                <button className="bg-[#470A1C] text-white px-4 py-2 rounded hover:bg-red-700">Learn More</button>
            </motion.div>
            <br />
            <motion.div className="flex flex-col items-center" variants={fadeInUp}>
                <img src={serviceImage2} alt="Service" className="w-full h-64 object-cover rounded-lg mb-4" />
                <motion.h2 className='text-left'>Airport Transfers</motion.h2>
                <p className="text-lg mb-4 text-center">We offer a variety of exceptional services to meet your needs and ensure you have the best experience possible.</p>
                <button className="bg-[#470A1C] text-white px-4 py-2 rounded hover:bg-red-700">Learn More</button>
            </motion.div>
            <br />
            <motion.div className="flex flex-col items-center" variants={fadeInUp}>
                <img src={serviceImage3} alt="Service" className="w-full h-64 object-cover rounded-lg mb-4" />
                <motion.h2 className='text-left'>General Private Travel</motion.h2>
                <p className="text-lg mb-4 text-center">We offer a variety of exceptional services to meet your needs and ensure you have the best experience possible.</p>
                <button className="bg-[#470A1C] text-white px-4 py-2 rounded hover:bg-red-700">Learn More</button>
            </motion.div>
            <br />
            <motion.div className="flex flex-col items-center" variants={fadeInUp}>
                <img src={serviceImage4} alt="Service" className="w-full h-64 object-cover rounded-lg mb-4" />
                <motion.h2 className='text-left'>Weddings</motion.h2>
                <p className="text-lg mb-4 text-center">We offer a variety of exceptional services to meet your needs and ensure you have the best experience possible.</p>
                <button className="bg-[#470A1C] text-white px-4 py-2 rounded hover:bg-red-700">Learn More</button>
            </motion.div>
            <br />
            <motion.div className="flex flex-col items-center" variants={fadeInUp}>
                <img src={serviceImage5} alt="Service" className="w-full h-64 object-cover rounded-lg mb-4" />
                <motion.h2 className='text-left'>Corporate Travel</motion.h2>
                <p className="text-lg mb-4 text-center">We offer a variety of exceptional services to meet your needs and ensure you have the best experience possible.</p>
                <button className="bg-[#470A1C] text-white px-4 py-2 rounded hover:bg-red-700">Learn More</button>
            </motion.div>
            <br />
            <motion.div className="flex flex-col items-center" variants={fadeInUp}>
                <img src={serviceImage6} alt="Service" className="w-full h-64 object-cover rounded-lg mb-4" />
                <motion.h2 className='text-left'>Swift Aviation</motion.h2>
                <p className="text-lg mb-4 text-center">We offer a variety of exceptional services to meet your needs and ensure you have the best experience possible.</p>
                <button className="bg-[#470A1C] text-white px-4 py-2 rounded hover:bg-red-700">Coming Soon</button>
            </motion.div>
        </motion.div>
    );
};

export default NewService;
