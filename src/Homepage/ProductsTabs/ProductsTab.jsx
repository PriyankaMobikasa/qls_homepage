import React from 'react';
import {Tabs,Tab} from 'react-bootstrap';
import './ProductsTab.css';
import ProductBox from './ProductBox/ProductBox';

const ProductsTab = () => {
    return (
        <div className='container products-tab'>
            <Tabs
                defaultActiveKey="Filters"
                transition={false}
                id="noanim-tab-example"
                className="mb-3"
            >
                <Tab eventKey="Filters" title="Filters">
                    <ProductBox />
                </Tab>
                <Tab eventKey="Wiper Blades" title="Wiper Blades">
                    <h1>Hello</h1>
                </Tab>
                <Tab eventKey="Lighting" title="Lighting">
                    <h1>Hello</h1>
                </Tab>
                <Tab eventKey="Chemicals" title="Chemicals">
                    <h1>Hello</h1>
                </Tab>
                <Tab eventKey="Lubricants" title="Lubricants">
                    <h1>Hello</h1>
                </Tab>
                <Tab eventKey="Tire Service" title="Tire Service">
                    <h1>Hello</h1>
                </Tab>
            </Tabs>
        </div>
    )
}

export default ProductsTab