import React from 'react';
import Service_Box from './Service_Box';
import './Services.scss';
import filter1 from '../../Assets/1 filter.jpg';
import filter2 from '../../Assets/2 filter.jpg';
import filter3 from '../../Assets/3 filter.jpg';

const Services = () => {
    return (
        <div className='container'>
            <div className='services_heading'>
                <h3>A ROBUST SUPPLY SOLUTION FOR QUICK SERVICE INSTALLERS</h3>
            </div>
            <div className='row'>
                <div className='col-12 col-sm-4'>
                <div className='card'>
                    <div className='card-content'>
                    <p>Filters</p>
                    <img className='w-100 mb-4' src={filter1} />
                    <a href=''>Link text</a>
                    </div>
                </div>
                </div>

                <div className='col-12 col-sm-4'>
                <div className='card'>
                    <p>Wipers</p>
                    <img src={filter2} />
                    <a href=''>Link text</a>
                </div>
                </div>

                <div className='col-12 col-sm-4'>
                <div className='card'>
                    <p>Lubricants</p>
                    <img src={filter3} />
                    <a href=''>Link text</a>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Services