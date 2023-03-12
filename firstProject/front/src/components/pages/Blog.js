import React from 'react';

function Blog() {
    return ( 
        <>
        <div className="shop-body mb-90 mt-200">
        
        <div className="container container-1430">
            
            <div className="shop-wrapper">
                <div className="row">
                    <div className="col-xl-3 hidden-xl">
                        
                        <div className="widget pr-0 mb-50">
                            <h4 className="mb-30">Search</h4>
                            <div className="sidebar-search-form">
                                <form action="#" method="POST">
                                    <input type="text" placeholder="Search"/>
                                    <button type="submit"><i className="fal fa-search"></i></button>
                                </form>
                            </div>
                        </div>
                        <div className="widget blog-list pr-0">
                            <h4 className="mb-30">Categories</h4>
                            <div className="accordion" id="accordionExample">
                                <div className="list">
                                    <a href="index.html">Accessories <span>(0)</span></a>
                                    <button className="float-right text-right" type="button" data-toggle="collapse" data-target="#collapse-1">
                                        <span className="float-right"><i className="fal fa-angle-right"></i></span>
                                    </button>
                                    <div id="collapse-1" className="collapse show">
                                        <div className="sidebar-list">
                                            <ul>
                                                <li><a href="shop3.html">Camera 1</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="list">
                                    <a href="index.html">Char &amp; Table <span>(10)</span></a>
                                    <button className="float-right text-right" type="button" data-toggle="collapse" data-target="#collapse-2">
                                        <span className="float-right"><i className="fal fa-angle-right"></i></span>
                                    </button>
                                    <div id="collapse-2" className="collapse">
                                        <div className="sidebar-list">
                                            <ul>
                                                <li><a href="shop.html">Chair <span>(30)</span></a></li>
                                                <li><a href="shop4.html">Clothing <span>(45)</span></a></li>
                                                <li><a href="shop4.html">Decore <span>(20)</span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="list">
                                    <a href="index.html">Handbag <span>(10)</span></a>
                                    <button className="float-right text-right" type="button" data-toggle="collapse" data-target="#collapse-3">
                                        <span className="float-right"><i className="fal fa-angle-right"></i></span>
                                    </button>
                                    <div id="collapse-3" className="collapse">
                                        <div className="sidebar-list">
                                            <ul>
                                                <li><a href="shop4.html">Camerass <span>(1)</span></a></li>
                                                <li><a href="shop4.html">Gift Cards <span>(5)</span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="list">
                                    <a href="index.html">Kids <span>(15)</span></a>
                                    <button className="float-right text-right" type="button" data-toggle="collapse" data-target="#collapse-4">
                                        <span className="float-right"><i className="fal fa-angle-right"></i></span>
                                    </button>
                                    <div id="collapse-4" className="collapse">
                                        <div className="sidebar-list">
                                            <ul>
                                                <li><a href="shop3.html">Lightings <span>(1)</span></a></li>
                                                <li><a href="shop3.html">Managed <span>(5)</span></a></li>
                                                <li><a href="shop3.html">Printers <span>(32)</span></a></li>
                                                <li><a href="shop3.html">Shoes <span>(32)</span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="widget pr-0 mt-50">
                            <h4 className="mb-30">Recent Post</h4>
                            <div className="post-box">
                                <ul>
                                    <li>
                                        <div className="post-img">
                                            <img src="img/product/cloth01.jpg" className="w-100" alt="" />
                                        </div>
                                        <div className="post-img-desc">
                                            <a href="single-product-4.html">Capitalize on low hanging fruit to</a>
                                            <div className="price">$250.00</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="post-img">
                                            <img src="img/product/cloth02.jpg" className="w-100" alt="" />
                                        </div>
                                        <div className="post-img-desc">
                                            <a href="single-product-4.html">
                                                Tassels pendant earringso</a>
                                            <div className="price">$30 - $334</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="post-img">
                                            <img src="img/product/cloth03.jpg" className="w-100" alt="" />
                                        </div>
                                        <div className="post-img-desc">
                                            <a href="single-product-4.html">
                                                Tassels pendant earringso</a>
                                            <div className="price">$30 - $334</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="widget pr-0 mt-50">
                            <h4 className="mb-30">Recent Comments</h4>
                            <div className="post-box comment">
                                <ul>
                                    <li>
                                        <div className="post-img">
                                            <img src="img/small-img/1.jpg" className="w-100" alt="" />
                                        </div>
                                        <div className="post-img-desc">
                                            <a href="index.html">admin</a>
                                            <p>Curabitur sagittis quam quis consectetur...</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="post-img">
                                            <img src="img/small-img/2.png" className="w-100" alt="" />
                                        </div>
                                        <div className="post-img-desc">
                                            <a href="index.html">admin</a>
                                            <p>Curabitur sagittis quam quis consectetur...</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="post-img">
                                            <img src="img/small-img/1.jpg" className="w-100" alt="" />
                                        </div>
                                        <div className="post-img-desc">
                                            <a href="index.html">admin</a>
                                            <p>Curabitur sagittis quam quis consectetur...</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="post-img">
                                            <img src="img/small-img/1.jpg" className="w-100" alt="" />
                                        </div>
                                        <div className="post-img-desc">
                                            <a href="index.html">admin</a>
                                            <p>Curabitur sagittis quam quis consectetur...</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="widget blog-list pr-0">
                            <h4 className="mb-30">Achive</h4>
                            <div className="list">
                                <ul>
                                    <li><a href="shop3.html">June 2019</a></li>
                                    <li><a href="shop3.html">July 2019</a></li>
                                    <li><a href="shop3.html">April 2019</a></li>
                                    <li><a href="shop3.html">May 2019</a></li>
                                    <li><a href="shop3.html">Augest 2019</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="widget pr-0 mt-50">
                            <h4 className="mb-30">Popular Tags</h4>
                            <div className="category-list">
                                <ul>
                                    <li><a href="shop3.html">Accessories</a></li>
                                    <li><a href="shop3.html">Clothing</a></li>
                                    <li><a href="shop3.html">fashion</a></li>
                                    <li><a href="shop3.html">Fly</a></li>
                                    <li><a href="shop3.html">Glasses</a></li>
                                    <li><a href="shop3.html">men</a></li>
                                    <li><a href="shop3.html">Product</a></li>
                                    <li><a href="shop3.html">version</a></li>
                                    <li><a href="shop3.html">women</a></li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className="col-xl-9">
                       <div className="row">
                           <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                                <div className="primary-blog-box mb-60">
                                    <div className="blog-wrapper">
                                        <div className="blog-box-img">
                                            <a href="single-blog-1.html"><img src="img/blog/1.jpg" className="w-100" alt="" /></a>
                                            <div className="blog-box-tags">
                                                <a href="blog3.html">Image</a>
                                                <a href="blog4.html">Travel</a>
                                            </div>
                                        </div>
                                        <div className="blog-box-desc primary-desc text-center">
                                            <div className="blog-box-link">
                                                <h3><a href="single-blog-1.html">Diam arcu, fringilla a sem condi cras</a></h3>
                                            </div>
                                            <ul className="post-entry-data">
                                                <li className="post-date">10 Jun, 2019</li>
                                                <li className="post-by">Posted by <a href="index.html" className="red-color f-400"><strong>admin</strong></a></li>
                                                <li className="post-comments"><i className="fal fa-envelope"></i> 1 Comment(s)</li>
                                            </ul>
                                            <div className="blog-short-content">
                                                <p>A Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the…</p>
                                            </div>
                                            <a href="single-blog-1.html" className="blog-box-action pt-10 red-color">Continue Reading</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                                <div className="primary-blog-box mb-60">
                                    <div className="blog-wrapper">
                                        <div className="blog-box-img">
                                            <a href="single-blog-1.html"><img src="img/blog/4.jpg" className="w-100" alt="" /></a>
                                            <div className="blog-box-tags">
                                                <a href="blog3.html">Image</a>
                                                <a href="blog4.html">Travel</a>
                                            </div>
                                        </div>
                                        <div className="blog-box-desc primary-desc text-center">
                                            <div className="blog-box-link">
                                                <h3><a href="single-blog-1.html">Celebrating Female Leade ationa</a></h3>
                                            </div>
                                            <ul className="post-entry-data">
                                                <li className="post-date">10 Jun, 2019</li>
                                                <li className="post-by">Posted by <a href="index.html" className="red-color f-400"><strong>admin</strong></a></li>
                                                <li className="post-comments"><i className="fal fa-envelope"></i> 1 Comment(s)</li>
                                            </ul>
                                            <div className="blog-short-content">
                                                <p>A Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the…</p>
                                            </div>
                                            <a href="single-blog-1.html" className="blog-box-action pt-10 red-color">Continue Reading</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                                <div className="primary-blog-box mb-60">
                                    <div className="blog-wrapper">
                                        <div className="blog-box-img">
                                            <a href="single-blog-1.html"><img src="img/blog/3.jpg" className="w-100" alt="" /></a>
                                            <div className="blog-box-tags">
                                                <a href="blog3.html">Image</a>
                                                <a href="blog4.html">Travel</a>
                                            </div>
                                        </div>
                                        <div className="blog-box-desc primary-desc text-center">
                                            <div className="blog-box-link">
                                                <h3><a href="single-blog-1.html">Praesent pretium tellus in to</a></h3>
                                            </div>
                                            <ul className="post-entry-data">
                                                <li className="post-date">10 Jun, 2019</li>
                                                <li className="post-by">Posted by <a href="index.html" className="red-color f-400"><strong>admin</strong></a></li>
                                                <li className="post-comments"><i className="fal fa-envelope"></i> 1 Comment(s)</li>
                                            </ul>
                                            <div className="blog-short-content">
                                                <p>A Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the…</p>
                                            </div>
                                            <a href="single-blog-1.html" className="blog-box-action pt-10 red-color">Continue Reading</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                                <div className="primary-blog-box mb-60">
                                    <div className="blog-wrapper">
                                        <div className="blog-box-img">
                                            <a href="single-blog-1.html"><img src="img/blog/2.jpg" className="w-100" alt="" /></a>
                                            <div className="blog-box-tags">
                                                <a href="blog3.html">Image</a>
                                                <a href="blog4.html">Travel</a>
                                            </div>
                                        </div>
                                        <div className="blog-box-desc primary-desc text-center">
                                            <div className="blog-box-link">
                                                <h3><a href="single-blog-1.html">Cras diam arcu, fringilla a sem condi</a></h3>
                                            </div>
                                            <ul className="post-entry-data">
                                                <li className="post-date">10 Jun, 2019</li>
                                                <li className="post-by">Posted by <a href="index.html" className="red-color f-400"><strong>admin</strong></a></li>
                                                <li className="post-comments"><i className="fal fa-envelope"></i> 1 Comment(s)</li>
                                            </ul>
                                            <div className="blog-short-content">
                                                <p>A Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the…</p>
                                            </div>
                                            <a href="single-blog-1.html" className="blog-box-action pt-10 red-color">Continue Reading</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                                <div className="primary-blog-box mb-60">
                                    <div className="blog-wrapper">
                                        <div className="blog-box-img">
                                            <a href="single-blog-1.html"><img src="img/blog/cloth01.jpg" className="w-100" alt="" /></a>
                                            <div className="blog-box-tags">
                                                <a href="blog3.html">Image</a>
                                                <a href="blog4.html">Travel</a>
                                            </div>
                                        </div>
                                        <div className="blog-box-desc primary-desc text-center">
                                            <div className="blog-box-link">
                                                <h3><a href="single-blog-1.html">Cras diam arcu, fringilla a sem condi</a></h3>
                                            </div>
                                            <ul className="post-entry-data">
                                                <li className="post-date">10 Jun, 2019</li>
                                                <li className="post-by">Posted by <a href="index.html" className="red-color f-400"><strong>admin</strong></a></li>
                                                <li className="post-comments"><i className="fal fa-envelope"></i> 1 Comment(s)</li>
                                            </ul>
                                            <div className="blog-short-content">
                                                <p>A Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the…</p>
                                            </div>
                                            <a href="single-blog-1.html" className="blog-box-action pt-10 red-color">Continue Reading</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                                <div className="primary-blog-box mb-60">
                                    <div className="blog-wrapper">
                                        <div className="blog-box-img">
                                            <a href="single-blog-1.html"><img src="img/blog/4.jpg" className="w-100" alt="" /></a>
                                            <div className="blog-box-tags">
                                                <a href="blog3.html">Image</a>
                                                <a href="blog4.html">Travel</a>
                                            </div>
                                        </div>
                                        <div className="blog-box-desc primary-desc text-center">
                                            <div className="blog-box-link">
                                                <h3><a href="single-blog-1.html">Praesent pretium tellus in to</a></h3>
                                            </div>
                                            <ul className="post-entry-data">
                                                <li className="post-date">10 Jun, 2019</li>
                                                <li className="post-by">Posted by <a href="index.html" className="red-color f-400"><strong>admin</strong></a></li>
                                                <li className="post-comments"><i className="fal fa-envelope"></i> 1 Comment(s)</li>
                                            </ul>
                                            <div className="blog-short-content">
                                                <p>A Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the…</p>
                                            </div>
                                            <a href="single-blog-1.html" className="blog-box-action pt-10 red-color">Continue Reading</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                       </div>
                       <div className="text-center mt-60 load-btn">
                            <a href="index.html" className="load-more generic-btn transparent-bg-red">Load More...</a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
        </>
     );
}

export default Blog;