import React from 'react';
// import Banner from '../Banner/Banner';
import Resources from '../Resources/Resources';
import './Homepage.css';
import Services from '../Services/Services';
import BannerVertical from '../BannerVartical/BannerVertical';
// import MidBanner from '../MidBanner/MidBanner';
// import ProductsTab from '../ProductsTabs/ProductsTab';

const Homepage = () => {
    return (
        <div>
            <BannerVertical />
            {/* <Banner /> */}
            <Services />
            {/* <MidBanner /> */}
            {/* <ProductsTab /> */}
            <Resources />
        </div>
    )
}

export default Homepage