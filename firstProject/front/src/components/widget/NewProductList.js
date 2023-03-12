import React from 'react';

function NewProductList() {
    return ( 
        <section className="main-product mt-100">
        <div className="container">
            <ul className="nav nav-pills mb-3">
                <li className="nav-item">
                    <a className="active" data-toggle="pill" href="#main-tab-1">New Arrivals</a>
                </li>
                <li className="nav-item">
                    <a className="" data-toggle="pill" href="#main-tab-2">Best Sellers</a>
                </li>
                <li className="nav-item">
                    <a className="" data-toggle="pill" href="#main-tab-3">Top rate</a>
                </li>
            </ul>
            <div className="tab-content mt-25">
                <div className="tab-pane fade show active" id="main-tab-1">
                    <div className="main-product-carousel owl-carousel red-nav">
                        <div className="main-product-carousel-item">
                            <div className="col-12">
                                <div className="product-box mb-40">
                                    <div className="product-box-wrapper">
                                        <div className="product-img">
                                            <img src="img/product/5.jpg" className="w-100" alt="" />
                                            <a href="single-product-3.html" className="d-block">
                                                <div className="second-img">
                                                    <img src="img/product/5-hover.jpg" alt="" className="w-100" />
                                                </div>
                                            </a>
                                            <a href="java.html"
                                                className="product-img-link quick-view-1 text-capitalize">Quick view</a>
                                        </div>

                                        <div className="product-desc pb-20">
                                            <div className="product-desc-top">
                                                <div className="categories">
                                                    <a href="shop2.html" className="product-category"><span>Woman</span></a>
                                                </div>
                                                <a href="wishlist.html" className="wishlist float-right"><span><i
                                                            className="fal fa-heart"></i></span></a>
                                            </div>
                                            <a href="single-product-3.html" className="product-title">Light green crewneck
                                                sweatshir</a>
                                            <div className="price-switcher">
                                                <span className="price switcher-item">$58.00</span>
                                                <a href="cart.html" className="add-cart text-capitalize switcher-item">+add
                                                    to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                           
                        <div className="main-product-carousel-item">
                            <div className="col-12">
                                <div className="product-box mb-40">
                                    <div className="product-box-wrapper">
                                        <div className="product-img">
                                            <img src="img/product/7.jpg" className="w-100" alt="" />
                                            <a href="single-product-3.html" className="d-block">
                                                <div className="second-img">
                                                    <img src="img/product/7-hover.jpg" alt="" className="w-100" />
                                                </div>
                                            </a>
                                            <a href="java.html"
                                                className="product-img-link quick-view-1 text-capitalize">Quick 1view</a>
                                        </div>

                                        <div className="product-desc pb-20">
                                            <div className="product-desc-top">
                                                <div className="categories">
                                                    <a href="shop2.html" className="product-category"><span>Shoes</span></a>
                                                    <a href="shop2.html"
                                                        className="product-category"><span>Sneaker</span></a>
                                                    <a href="shop2.html" className="product-category"><span>Women</span></a>
                                                </div>
                                                <a href="wishlist.html" className="wishlist float-right"><span><i
                                                            className="fal fa-heart"></i></span></a>
                                            </div>
                                            <a href="single-product-3.html" className="product-title">Leather Courriere
                                                duffle bag</a>
                                            <div className="price-switcher">
                                                <span className="price switcher-item">$3.00</span>
                                                <a href="cart.html" className="add-cart text-capitalize switcher-item">+add
                                                    to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-10  load-btn">
                        <a href="shop.html" className="load-more">LOAD MORE...</a>
                    </div>
                </div>
            </div>
          </div>     
        </div>
    </section>
     );
}

export default NewProductList;