import React from 'react';
import Carousel from 'react-bootstrap/Carousel'


function Slider() {

    return ( 

      <section className="slider">
        <div className="slider-active">
          
            <Carousel>
              <Carousel.Item>
              <div className="single-slider d-flex align-items-center h-950">
                <div className="container">
                  <div className="single-slider-inner d-flex align-items-center justify-content-start">
                      <div className="single-slider-content text-left light-content">
                          <div className="slider-heading">
                              <h2 className="mb-0" data-animation="fadeInUp" data-delay=".2s">New</h2>
                              <h2 className="mb-0" data-animation="fadeInUp" data-delay=".2s">Chrismas Edition</h2>
                          </div>
                          <div className="slider-desc" data-animation="fadeInUp" data-delay=".4s">
                              <p className="mt-35 mb-0">New Winter drops from Over. Shop the Collection</p>
                          </div>
                          <div className="slider-link" data-animation="fadeInUp" data-delay=".6s">
                              <a href="shop2.html" className="generic-btn mt-70 red-hover-btn text-uppercase">Discover
                                  now</a>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="single-slider1 d-flex align-items-center h-950">
                  <div className="container">
                    <div className="single-slider-inner d-flex align-items-center justify-content-start">
                        <div className="single-slider-content text-left light-content">
                            <div className="slider-heading">
                                <h2 className="mb-0" data-animation="fadeInUp" data-delay=".2s">New</h2>
                                <h2 className="mb-0" data-animation="fadeInUp" data-delay=".2s">Chrismas Edition</h2>
                            </div>
                            <div className="slider-desc" data-animation="fadeInUp" data-delay=".4s">
                                <p className="mt-35 mb-0">New Winter drops from Over. Shop the Collection</p>
                            </div>
                            <div className="slider-link" data-animation="fadeInUp" data-delay=".6s">
                                <a href="shop2.html" className="generic-btn mt-70 red-hover-btn text-uppercase">Discover
                                    now</a>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="single-slider2 d-flex align-items-center h-950">
                  <div className="container">
                    <div className="single-slider-inner d-flex align-items-center justify-content-start">
                        <div className="single-slider-content text-left light-content">
                            <div className="slider-heading">
                                <h2 className="mb-0" data-animation="fadeInUp" data-delay=".2s">New</h2>
                                <h2 className="mb-0" data-animation="fadeInUp" data-delay=".2s">Chrismas Edition</h2>
                            </div>
                            <div className="slider-desc" data-animation="fadeInUp" data-delay=".4s">
                                <p className="mt-35 mb-0">New Winter drops from Over. Shop the Collection</p>
                            </div>
                            <div className="slider-link" data-animation="fadeInUp" data-delay=".6s">
                                <a href="shop2.html" className="generic-btn mt-70 red-hover-btn text-uppercase">Discover
                                    now</a>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>

        </div>
      </section>

    );
}

export default Slider;