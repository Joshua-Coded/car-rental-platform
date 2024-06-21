import React from 'react';
import Header from './Header';
import CarouselComponentWeddings from './CarouselComponent';
import WhatWeDoWeddings from './WhatWeDoWeddings';
import WhatYouCanExpectWeddings from './WhatYouCanExpectWeddings';
import NewDesignComponentWeddings from './NewDesignComponentWeddings';
import GalleryWeddings from './GalleryWeddings';
import Footer from './Footer';
import HeroWeddings from './HeroWeddings';


//  component for weddings
const Home = () => {
    return (
        <div>
            <Header />
            <HeroWeddings />
            <CarouselComponentWeddings />
            <WhatWeDoWeddings />
            <WhatYouCanExpectWeddings />
            <NewDesignComponentWeddings />
            <GalleryWeddings />
            <Footer />
        </div>
    );
};

export default Home;
