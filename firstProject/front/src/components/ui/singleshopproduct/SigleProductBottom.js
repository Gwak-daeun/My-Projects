import React from 'react';


function SingleProductBottom() {

    return (  
        <div className="single-product-bottom mt-80 gray-border-top">
            <ul className="nav nav-pills justify-content-center mt-100">
                <li className="nav-item">
                    <a className="active" data-toggle="pill" href="#desc-tab-1">Description</a>
                </li>
                <li className="nav-item">
                    <a data-toggle="pill" href="#desc-tab-3">Additional information</a>
                </li>
                <li className="nav-item">
                    <a className="" data-toggle="pill" href="#desc-tab-2">Reviews (0)</a>
                </li>
            </ul>
            <div className="container container-1200">
                <div className="tab-content mt-60">
                    <div className="tab-pane fade show active" id="desc-tab-1">
                        <div className="single-product-tab-content">
                            <h3 className="title mb-30">Description</h3>
                            <p>Designed by Hans J. Wegner in 1949 as one of the first models created especially
                                for Carl Hansen & Son, and produced since 1950. The last of a series of chairs
                                Wegner designed based on inspiration from antique Chinese armchairs. The gently
                                rounded top together with the back and seat offers a variety of comfortable
                                seating positions, ideal for both long visits to the dining table and relaxed
                                lounging. A light chair, easy to move around the dining table and about the
                                room.</p>
                            <p>The characteristic “Y” provides comfortable back support and stability to the
                                steam-bent top, also inspiring the chair’s names An excellent example of
                                Wegner’s constant striving towards organic simplicity to create sculptural
                                beauty, comfort and outstanding stability.</p>
                            <p>The gently rounded top together with the back and seat offers a variety of
                                comfortable seating positions, ideal for both long visits to the dining table
                                and relaxed lounging. A light chair, easy to move around the dining table and
                                about the room.</p>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="desc-tab-2">
                        <div className="single-product-tab-content">
                            <h3 className="title mb-30">Reviews</h3>
                            <div className="review-box-item">
                                <div className="row">
                                    <div className="col-xl-1 col-lg-2 col-md-2 col-3 pr-xl-0">
                                        <div className="review-box-img d-block text-right">
                                            <img src="img/small-img/1.jpg" width="60" height="60"
                                                className="avatar-img" alt=""/>
                                        </div>
                                    </div>
                                    <div className="col-xl-11 col-lg-10 col-9 pl-0">
                                        <div className="review-box-content">
                                            <div className="row">
                                                <div className="col-7">
                                                    <div className="author-name">
                                                        <h6>John96</h6>
                                                        <div className="content">
                                                            <p className="mb-0">Awesome</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-5 pr-5-px pl-0">
                                                    <div className="rating text-right">
                                                        <i className="fal fa-star red-color"></i>
                                                        <i className="fal fa-star red-color"></i>
                                                        <i className="fal fa-star red-color"></i>
                                                        <i className="fal fa-star"></i>
                                                        <i className="fal fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>There are no reviews yet.</p>
                            <h4>Add a review</h4>

                            <form action="#" method="POST">
                                <label for="rating">Your Rating</label>
                                <input type="radio" id="rating"/>
                            </form>
                            <p className="star-rating">
                                <a href="index.html"><i className="fal fa-star"></i></a>
                                <a href="index.html"><i className="fal fa-star"></i></a>
                                <a href="index.html"><i className="fal fa-star"></i></a>
                                <a href="index.html"><i className="fal fa-star"></i></a>
                                <a href="index.html"><i className="fal fa-star"></i></a>
                            </p>

                            <div className="form-group">
                                <label for="review">Review</label>
                                <textarea name="review" id="review" cols="30" rows="6"
                                    className="form-control"></textarea>
                            </div>
                            <div className="form-group">
                                <label for="name">Name <span className="required">*</span></label>
                                <input type="text" name="name" id="name" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label for="email">Email <span className="required">*</span></label>
                                <input type="email" name="email" id="email" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <div className="checkbox-input">
                                    <input type="checkbox" id="condition" name="condition"/>
                                </div>
                                <label for="condition">Save my name, email, and website in this browser for the
                                    next time I comment.</label>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="generic-btn red-hover-btn">Submit</button>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="desc-tab-3">
                        <div className="single-product-tab-content">
                            <h3 className="title mb-30">Additional information</h3>
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <th>size</th>
                                        <td>
                                            <ul>
                                                <li><a href="shop4.html">3XL</a></li>
                                                <li><a href="shop4.html">L</a></li>
                                                <li><a href="shop4.html">M</a></li>
                                                <li><a href="shop4.html">S</a></li>
                                                <li><a href="shop4.html">XL</a></li>
                                                <li><a href="shop4.html">XXL</a></li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>color</th>
                                        <td>
                                            <ul>
                                                <li><a href="shop4.html">Black</a></li>
                                                <li><a href="shop4.html">Blue</a></li>
                                                <li><a href="shop4.html">Gold</a></li>
                                                <li><a href="shop4.html">Gray</a></li>
                                                <li><a href="shop4.html">White</a></li>
                                                <li><a href="shop4.html">Yellow</a></li>
                                                <li><a href="shop4.html">Red</a></li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleProductBottom;