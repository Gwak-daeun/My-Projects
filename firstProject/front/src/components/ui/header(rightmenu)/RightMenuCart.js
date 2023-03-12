import React from "react";
import {Link} from 'react-router-dom'


function RightMenuCart() {

   return ( 

      <>
      
      <li><Link to={'/cart'} className={"fal fa-shopping-bag"}><span></span></Link>      
         {/* <div className="minicart">
               <div className="minicart-body">
                  <div className="minicart-content">
                     <ul className="text-left">
                           <li>
                              <div className="minicart-img">
                                 <a href="single-product-3.html" className="p-0"><img src="img/product/1.jpg"
                                          className="w-100" alt=""/></a>
                              </div>
                              <div className="minicart-desc">
                                 <a href="single-product-3.html" className="p-0">Capitalize on low hanging fruit
                                       t</a>
                                 <strong>1 × $250.00</strong>
                              </div>
                              <div className="remove">
                                 <i className="fal fa-times"></i>
                              </div>
                           </li>

                           <li>
                              <div className="minicart-img">
                                 <a href="single-product-3.html" className="p-0"><img src="img/product/2.jpg"
                                          className="w-100" alt=""/></a>
                              </div>
                              <div className="minicart-desc">
                                 <a href="single-product-3.html" className="p-0">Leather Courriere duffle ba</a>
                                 <strong>1 × $150.00</strong>
                              </div>
                              <div className="remove">
                                 <i className="fal fa-times"></i>
                              </div>
                           </li>


                           <li>
                              <div className="minicart-img">
                                 <a href="single-product-3.html" className="p-0"><img src="img/product/3.jpg"
                                          className="w-100" alt=""/></a>
                              </div>
                              <div className="minicart-desc">
                                 <a href="single-product-3.html" className="p-0">Party Supplies Around Cupcake</a>
                                 <strong>1 × $150.00</strong>
                              </div>
                              <div className="remove">
                                 <i className="fal fa-times"></i>
                              </div>
                           </li>
                     </ul>
                  </div>
               </div>
               <div className="minicart-checkout">
                  <div className="minicart-checkout-heading mt-8 mb-25 overflow-hidden">
                     <strong className="float-left">Subtotal:</strong>
                     <span className="price float-right">503.00</span>
                  </div>
                  <div className="minicart-checkout-links">
                     <Link to={'/cart'} className={"generic-btn black-hover-btn text-uppercase w-100 mb-20"}>view cart</Link>
                     <Link to={'/cart'} className={"generic-btn black-hover-btn text-uppercase w-100 mb-20"}>Checkout</Link>
                  </div>
               </div>
         </div> */}
      </li>
      
      </>

    );
}

export default RightMenuCart;