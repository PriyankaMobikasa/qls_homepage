import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner from '../../Assets/AdobeStock_184520919.jpeg';
import './bannerVertical.scss';
import Button from 'react-bootstrap/Button';
import scroll from '../../Assets/Scroll Indicator.png';
import btn_arrow from '../../Assets/get-started-arrow.svg';
import banner2 from '../../Assets/Banner image.jpg';
import { useRef } from 'react';
import { Link } from 'react-scroll';


const Banner = () => {
    const firstItemRef = useRef(null);
    return (
        <div className='container-fluid p-0'>
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
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
                                        <Button variant="outline-light" className='slider_btn'>
                                            <svg className='svg-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280.42 457.41"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polygon class="cls-1" points="0 39.53 0 417.88 184.36 233.52 0 39.53" /><polygon class="cls-1" points="57.54 0 57.54 64.66 216.28 233.25 57.54 396.42 57.54 457.41 280.42 234.53 57.54 0" /></g></g></svg>
                                            <span className='slider_btn_txt'>GET STARTED</span>
                                        </Button>

                                    </Carousel.Caption>
                                </div>
                            </div>
                        </Carousel.Item>

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
                                        <Button style={{ display: 'inline-block' }} variant="outline-light" className='slider_btn'><img style={{ width: '16px', marginRight: '5px' }} src={btn_arrow} />GET STARTED</Button>

                                    </Carousel.Caption>
                                </div>
                            </div>
                        </Carousel.Item>

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
                                        <Button style={{ display: 'inline-block' }} variant="outline-light" className='slider_btn'><img style={{ width: '16px', marginRight: '5px' }} src={btn_arrow} />GET STARTED</Button>

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
            </div>
            <div className='scroller'>
                <Link to='middle'><img src={scroll} /></Link>
            </div>
        </div >
    )
}

export default Banner