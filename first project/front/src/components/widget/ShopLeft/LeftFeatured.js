import React from "react";

function LeftFeatured() {

   return ( 

      <>
      
      <div className="widget mt-50"><h4 className="mb-30">Featured</h4>
         <div className="post-box">

            <ul>
                  
                  <li>
                     <div className="post-img">
                        <img src="product-img/costume/cloth01.jpg" className="w-100" alt=""/>
                     </div>
                     <div className="post-img-desc">
                        <a href="single-product-4.html">Baby Santa</a>
                        <div className="price">$250</div>
                     </div>
                  </li>
                 
                  <li>
                     <div className="post-img">
                        <img src="product-img/costume/cloth04.jpg" className="w-100" alt=""/>
                     </div>
                     <div className="post-img-desc">
                        <a href="single-product-4.html">
                              Dog Santa</a>
                        <div className="price">$100</div>
                     </div>
                  </li>
                 
                  <li>
                     <div className="post-img">
                        <img src="product-img/costume/cloth03.jpg" className="w-100" alt=""/>
                     </div>
                     <div className="post-img-desc">
                        <a href="single-product-4.html">
                              Family Chrismas Costume</a>
                        <div className="price">$1500</div>
                     </div>
                  </li>
            </ul>

         </div>
      </div>

      </>

    );
}

export default LeftFeatured;
