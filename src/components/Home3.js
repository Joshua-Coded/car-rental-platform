import React from 'react';
import Header from './Header';
import Hero from './Hero';
import CarouselComponentWeddings from './CarouselComponent';
import WhatWeDo from './WhatWeDo';
import WhatYouCanExpect from './WhatYouCanExpect';
import NewDesignComponent from './NewDesignComponent';
import Gallery from './Gallery';
import Footer from './Footer';
import HeroWeddings from './HeroWeddings';


//  component for weddings
const Home = () => {
    return (
        <div>
            <Header />
            <HeroWeddings />
            <CarouselComponentWeddings />
            <WhatWeDo />
            <WhatYouCanExpect />
            <NewDesignComponent />
            <Gallery />
            <Footer />
        </div>
    );
};

export default Home;
