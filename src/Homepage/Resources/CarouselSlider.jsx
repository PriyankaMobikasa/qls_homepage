import React from 'react'
import Carousel from "react-elastic-carousel";
import './CarouselSlider.scss';
import sliderImage1 from '../../Assets/Resource-to-grow-business.jpg';
import sliderImage2 from '../../Assets/Resource-image-2.jpg';

const CarouselSlider = () => {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
    ];

    return (
        <div className="carousel-wrapper">
            <Carousel breakPoints={breakPoints}>
                <div className='carousel_slider_item'>
                    <img src={sliderImage1} />
                    <p>What Can Happen to an Oil Filter When the Pressure Relief Valve Fails?</p>
                    <span>April 03/2022</span>
                </div>

                <div className='carousel_slider_item'>
                    <img src={sliderImage2} />
                    <p>What Can Happen if Your Air Filter is Not Filtering Properly Lorem?</p>
                    <span>April 03/2022</span>
                </div>

                <div className='carousel_slider_item'>
                    <img src={sliderImage1} />
                    <p>Are Silicone Blader Really the Best Windsheild Wipers Lorem Ipsum?</p>
                    <span>April 03/2022</span>
                </div>

                <div className='carousel_slider_item'>
                    <img src={sliderImage2} />
                    <p>Things To Consider Before Buying A Car Air Freshener?</p>
                    <span>April 03/2022</span>
                </div>

                <div className='carousel_slider_item'>
                    <img src={sliderImage1} />
                    <p>Are Silicone Blader Really the Best Windsheild Wipers Lorem Ipsum?</p>
                    <span>April 03/2022</span>
                </div>
            </Carousel>
        </div>
    )
}

export default CarouselSlider