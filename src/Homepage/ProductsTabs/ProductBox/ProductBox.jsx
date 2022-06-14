import React from 'react';
import { Cart2 } from 'react-bootstrap-icons';
import product from '../../../Assets/1 filter.jpg';
import './ProductBox.css';

const ProductBox = () => {
    return (
        <div className='container'>
        <div className='productBoxes'>
            <div className='productBox d-flex justify-content-around flex-wrap'>
                <div className='product_card'>
                <div className='product_image'>
                    <img style={{width:'90px', height:'90px', padding:'5px'}} src={product} />
                </div>
                <div className='product_content'>
                    <p>
                        RB112-A, EXACT FITMENT (OE) REAR SILICON WIPER BLADE12
                    </p>
                    <div className='card_icon'>
                        <Cart2 />
                    </div>
                </div>
                </div>
            </div>

            <div className='productBox d-flex justify-content-around flex-wrap'>
                <div className='product_card'>
                <div className='product_image'>
                    <img style={{width:'90px', height:'90px', padding:'5px'}} src={product} />
                </div>
                <div className='product_content'>
                    <p>
                        RB112-A, EXACT FITMENT (OE) REAR SILICON WIPER BLADE12
                    </p>
                    <div className='card_icon'>
                        <Cart2 />
                    </div>
                </div>
                </div>
            </div>

            <div className='productBox d-flex justify-content-around flex-wrap'>
                <div className='product_card'>
                <div className='product_image'>
                    <img style={{width:'90px', height:'90px', padding:'5px'}} src={product} />
                </div>
                <div className='product_content'>
                    <p>
                        RB112-A, EXACT FITMENT (OE) REAR SILICON WIPER BLADE12
                    </p>
                    <div className='card_icon'>
                        <Cart2 />
                    </div>
                </div>
                </div>
            </div>

            <div className='productBox d-flex justify-content-around flex-wrap'>
                <div className='product_card'>
                <div className='product_image'>
                    <img style={{width:'90px', height:'90px', padding:'5px'}} src={product} />
                </div>
                <div className='product_content'>
                    <p>
                        RB112-A, EXACT FITMENT (OE) REAR SILICON WIPER BLADE12
                    </p>
                    <div className='card_icon'>
                        <Cart2 />
                    </div>
                </div>
                </div>
            </div>

            <div className='productBox d-flex justify-content-around flex-wrap'>
                <div className='product_card'>
                <div className='product_image'>
                    <img style={{width:'90px', height:'90px', padding:'5px'}} src={product} />
                </div>
                <div className='product_content'>
                    <p>
                        RB112-A, EXACT FITMENT (OE) REAR SILICON WIPER BLADE12
                    </p>
                    <div className='card_icon'>
                        <Cart2 />
                    </div>
                </div>
                </div>
            </div>

            <div className='productBox d-flex justify-content-around flex-wrap'>
                <div className='product_card'>
                <div className='product_image'>
                    <img style={{width:'90px', height:'90px', padding:'5px'}} src={product} />
                </div>
                <div className='product_content'>
                    <p>
                        RB112-A, EXACT FITMENT (OE) REAR SILICON WIPER BLADE12
                    </p>
                    <div className='card_icon'>
                        <Cart2 />
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ProductBox