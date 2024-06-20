import React from 'react';
import logo from "../images/logo.jpeg";
import Header from './Header';
import Hero from './Hero';
import CarouselComponent from './CarouselComponent';
import WhatWeDo from './WhatWeDo';
import WhatYouCanExpect from './WhatYouCanExpect';
import ComplexComponent from './ComplexComponent';

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <CarouselComponent />
            <WhatWeDo />
            <WhatYouCanExpect />
            <ComplexComponent />
        </div>
    );
};

export default Home;
