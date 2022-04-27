import React from 'react';
import Clearance from '../pages/Clearance'


function EventProduct() {
    return ( 
        <div className="shop-body mb-90">
        <div className="container-fluid">
            <nav aria-label="breadcrumb" className="mb-40">
                <ol className="breadcrumb p-0 m-0">
                    <li className="breadcrumb-item"><a href="index3.html">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Shop</li>
                </ol>
            </nav>
            <div className="shop-wrapper">
                <div className="row">
                    
                    <div className="col-12">
                        
                        
                        <Clearance />
                        
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    );
}

export default EventProduct;