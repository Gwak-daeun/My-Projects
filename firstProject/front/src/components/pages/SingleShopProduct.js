import React from 'react';
import SingleProductBottom from '../ui/singleshopproduct/SigleProductBottom';
import SingleProductTop from '../ui/singleshopproduct/SingleProductTop';

function SingleShopProduct() {
    return ( 
        <>
        <section classNamee="single-product mb-90">
        <div className="container-fluid">
            <nav aria-label="breadcrumb" className="mt-80 mb-40">
                <ol className="breadcrumb p-0 m-0">
                    <li className="breadcrumb-item"><a href="index3.html">Home</a></li>
                    <li className="breadcrumb-item" aria-current="page">Product</li>
                    <li className="breadcrumb-item active" aria-current="page">single Product</li>
                </ol>
            </nav>
            <div className="shop-wrapper">
                <SingleProductTop />

                <SingleProductBottom />
            </div>
        </div>
    </section>
    </>
     );
}

export default SingleShopProduct;