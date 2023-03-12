import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
    return ( 
        
        <div className="col-xl-2 col-lg-1 col-md-6 col-sm-6 col-3">
            <div className="logo">
            <Link to={'/'}><img src="./product-img/logo/unicorn1.jpg" alt="유니콘"/></Link>
            </div>
        </div>
                    
     );
}

export default Logo;