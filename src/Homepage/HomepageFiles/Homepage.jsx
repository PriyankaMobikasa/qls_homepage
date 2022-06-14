import React from 'react';
import Banner from '../Banner/Banner';
import Resources from '../Resources/Resources';
import './Homepage.css';
import Services from '../Services/Services';
import MidBanner from '../MidBanner/MidBanner';

const Homepage = () => {
    return (
        <div>
            <Banner />
            <Services />
            <MidBanner />
            <Resources />
        </div>
    )
}

export default Homepage