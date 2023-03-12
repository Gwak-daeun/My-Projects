import React from 'react';

function ShippingProductList() {
    return ( 
        <section className="shipping-price-section shipping-2 pt-130 mt-120 gray-border-top">
        <div className="container">
            <div className="shipping-icon text-center">
                <img src="img/logo/ship-logo.svg" alt=""/>
            </div>
            <div className="shipping-desc pt-35">
                <h2 className="mb-20">All Order Ship Free!</h2>
                <p className="mb-0">Donec vehicula cursus vestibulum lectus, sit eros integer varius cum turpis et quam
                    congue nisl</p>
                <p className="mb-0">accumsan ac bibendum ac in erat. Donec posuere consectetuer volutpat rutrum ac,
                    sollicitudin quam quisque, at</p>
                <p className="mb-0">interdum dignissim, fringilla elit risus lorem, eu condimentum eros mollis.</p>
                <div className="text-center"><a href="shop2.html"
                        className="generic-btn mt-50 red-hover-btn text-uppercase">Discover now</a></div>
            </div>
        </div>
    </section>
    );
}

export default ShippingProductList;