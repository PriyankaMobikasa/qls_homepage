import React from 'react';
import service1 from '../../Assets/0oOeeSyg.png';
import './Service_Box.scss';
import filter1 from '../../Assets/1 filter.jpg';
import filter2 from '../../Assets/2 filter.jpg';
import filter3 from '../../Assets/3 filter.jpg';

const Service_Box = () => {
  return (
    <div>
      <div className='service_box'>
        <p>Filters</p>
        <img src={filter1} />
        <a href=''>Link text</a>
      </div>

      <div className='service_box'>
        <p>Filters</p>
        <img src={filter2} />
        <a href=''>Link text</a>
      </div>

      <div className='service_box'>
        <p>Filters</p>
        <img src={filter3} />
        <a href=''>Link text</a>
      </div>

      {/* <div className='service_box'>
        <p>Filters</p>
        <img src='https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSF2uzSQmG7Er8Zu_JP4bzMtmLsEnuGn6O_EjfDgO1dKr2aViLIsHv2Geoy3rFGxV3_TEOr0ZIoWnjtlXAjXGdLO44PLzGy7yzpd7e0h90O&usqp=CAc' />
        <a href=''>Link text</a>
      </div> */}
    </div>

  )
}

export default Service_Box