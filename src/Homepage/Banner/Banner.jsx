import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner from '../../Assets/AdobeStock_184520919.jpeg';
import './Banner.scss';
import Button from 'react-bootstrap/Button';
import scroll from '../../Assets/Scroll Indicator.png';
import btn_arrow from '../../Assets/get-started-arrow.svg';

const Banner = () => {
    return (
        <div className='container-fluid p-0'>
            <div className='slider'>
                <div className='slider_slide'>

                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 slider-image"
                                src={banner}
                                alt="First slide"
                            />

                            <div className='container-content'>
                                <div className='content'>
                                    <Carousel.Caption>
                                        <h2>FIRST TO MARKET</h2>
                                        <h1>FILTRATION</h1>
                                        <p>QLS customers enjoy the best service & latest products.</p>
                                        <Button style={{display:'inline-block'}} variant="outline-light" className='slider_btn'><img style={{width:'16px', marginRight:'5px'}} src={btn_arrow} />GET STARTED</Button>

                                    </Carousel.Caption>
                                </div>
                            </div>
                        </Carousel.Item>

                        {/* <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2>FIRST TO MARKET</h2>
                        <h1>FILTRATION</h1>
                        <p>QLS customers enjoy the best service & latest products.</p>
                        <Button variant="outline-light">GET STARTED</Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2>FIRST TO MARKET</h2>
                        <h1>FILTRATION</h1>
                        <p>QLS customers enjoy the best service & latest products.</p>
                        <Button variant="outline-light">GET STARTED</Button>
                    </Carousel.Caption>
                </Carousel.Item> */}
                    </Carousel>

                </div>
            </div>
            <div className='scroller'>
                <img src={scroll} />
            </div>
        </div >
    )
}

export default Banner