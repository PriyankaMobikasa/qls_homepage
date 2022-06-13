import React from 'react';
import Banner from '../Banner/Banner';
import Resources from '../Resources/Resources';
import './Homepage.css';
import Services from '../Services/Services';

const Homepage = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Resources />
        </div>
    )
}

export default Homepage