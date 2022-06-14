import React from 'react';
import banner from '../../Assets/Get-Started-BG.jpg';
import './MidBanner.css';

const MidBanner = () => {
  return (
    <div className='container-fluid p-0 my-5'>
        <div className='banner'>
            <div className='banner-image-section'>
                <img className='w-100 banner-image' src={banner} />
            </div>
            <div className='banner-content'>
                <h1>GET STARTED</h1>
                <p>
                    with a fast & free QLS stocking analysis.
                </p>
                <button>
                    Learn More
                </button>
            </div>
        </div>
    </div>
  )
}

export default MidBanner