import React from 'react';
import './Resources.scss';
import CarouselSlider from './CarouselSlider';

const Resources = () => {
  return (
    <div className='resources_section'>
      <h3>THE RESOURCES TO <span>GROW YOUR BUSINESS</span></h3>
      <div className='container'>
        <div className='resource_slider_section'>
          <CarouselSlider />
        </div>
      </div>
      <div className='product_btn'>
        <button>View All Resources</button>
      </div>
    </div>
  )
}

export default Resources