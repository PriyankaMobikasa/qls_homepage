import React from 'react';
import Service_Box from './Service_Box';
import './Services.scss';
import filter1 from '../../Assets/1 filter.jpg';
import filter2 from '../../Assets/2 filter.jpg';
import filter3 from '../../Assets/3 filter.jpg';

const Services = () => {
    return (
        <div className='container' id='middle'>
            <div className='services_heading'>
                <h3>A ROBUST SUPPLY SOLUTION FOR QUICK SERVICE INSTALLERS</h3>
            </div>
            <div className='row'>
                <div className='col-12 col-sm-4'>
                <div className='card1'>
                    <div className='card-content'>
                    <p>Filters</p>
                    <img className='w-100 mb-4' src={filter1} />
                    <a href=''>Link text</a>
                    </div>
                </div>
                </div>

                <div className='col-12 col-sm-4'>
                <div className='card1'>
                <div className='card-content'>
                    <p>Wipers</p>
                    <img className='w-100 mb-4' src={filter2} />
                    <a href=''>Link text</a>
                    </div>
                </div>
                </div>

                <div className='col-12 col-sm-4'>
                <div className='card1'>
                <div className='card-content'>
                    <p>Lubricants</p>
                    <img className='w-100 mb-4' src={filter3} />
                    <a href=''>Link text</a>
                    </div>
                </div>
                </div>
                
            </div>

            <div className='product_btn'>
                <button>View All Products</button>
            </div>

        </div>
    )
}

export default Services