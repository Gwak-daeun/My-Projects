import React from 'react';

import ClearanceProduct from '../ui/clearance/ClearanceProduct';

function Clearance() {
    return ( 

        <div className="product-wrapper container mt-55">
            <div className="row">
                <ClearanceProduct />
            </div>
            <div className="text-center mt-20">
                <a href="index.html" className="load-more">LOAD MORE...</a>
            </div>
        </div>
                
     );
}

export default Clearance;

