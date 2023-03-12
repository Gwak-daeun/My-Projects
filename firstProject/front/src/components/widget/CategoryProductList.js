import React from 'react';
import { Link } from 'react-router-dom';

function CategoryProductList() {
    return ( 
        <section className="category mt-100">
            <div className="container">
                <div className="row">

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 left-category">
                        <div className="category-box">
                            <div className="category-wrapper">
                                <div className="category-img">
                                <Link to={'/ballons'}><img src="./product-img/ballons/greenballon.jpg" className="w-100" alt="" /></Link>
                                </div>
                                <div className="category-content">
                                <Link to={'/ballons'} className="title">Balloons</Link>
                                    <p className="category-item">(<span>8</span> items)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="row">

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 ">
                                <div className="row">

                                    <div className="col-12 mb-27">
                                        <div className="category-box">
                                            <div className="category-wrapper">
                                                <div className="category-img">
                                                    <img src="./product-img/home/dinosaur.jpg" className="w-100" alt="" />
                                                </div>
                                                <div className="category-content">
                                                <a href="shop2.html" className="title">Docorations</a>
                                                    <p className="category-item">(<span>20</span> items)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="category-box">
                                            <div className="category-wrapper">
                                                <div className="category-img">
                                                    <img src="./product-img/products/garland02.jpg" className="w-100" alt="" />
                                                </div>
                                                <div className="category-content">
                                                <a href="shop2.html" className="title">Hanging</a>
                                                    <p className="category-item">(<span>11</span> items)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 category-right">

                                <div className="category-box">
                                    <div className="category-wrapper">
                                        <div className="category-img">
                                            <img src="./product-img/home/tablehome.jpg" className="w-100" alt="" />
                                        </div>
                                        <div className="category-content">
                                        <a href="shop2.html" className="title">Tableware</a>
                                            <p className="category-item">(<span>17</span> items)</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                           
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
     );
}

export default CategoryProductList;