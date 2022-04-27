import React from 'react';

import CategoryProductList from '../widget/CategoryProductList';
import NewProductList from '../widget/NewProductList';
import ShippingProductList from '../widget/ShippingProductList';
import Slider from '../widget/Slider';


function Home() {
    return ( 
        <>
            
            <Slider />
            <CategoryProductList />
            <NewProductList />
            <ShippingProductList />

            
            
        </>
    );
}

export default Home;