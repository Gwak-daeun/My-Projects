import React from "react";

function MobileMenu() 
{
   return ( 

      <div className="mobile-menu visible-sm mean-container">
          <div className="mean-bar">
            <a href="#nav" className="meanmenu-reveal" >
              <span></span>
              <span></span>
              <span></span>
            </a>
            <nav className="mean-nav">
              <ul style={{"display":"none"}}>
                <li>
                  <a className="pl-3" href="javascript:void(0)">Home</a>
                  <ul className="pl-4" style={{"display":"none"}}></ul>
                </li>
                  <li>
                    <a className="pl-3" href="javascript:void(0)">Shop</a>
                    <ul style={{"display":"none"}}>
                      <li><a href="shop.html">Party Categories</a></li>
                      <li><a href="shop4.html">Birthday</a></li>
                      <li><a href="shop3.html">Anniversaries</a></li>
                      <li><a href="shop2.html">BabyShoewr</a></li>
                     
                      <li><a href="shop.html">Party Products</a></li>
                      <li><a href="shop2.html">Ballons</a></li>
                      <li><a href="shop3.html">Hanging</a></li>
                      <li><a href="shop2.html">Coustume</a></li>
                      <li><a href="shop3.html">Tableware</a></li>
                      <li><a href="shop3.html">Decorations</a></li>
                   
                      <li><a href="single-product-2.html">Party Tema</a></li>
                      <li><a href="single-product.html">Uniorn</a></li>
                      <li><a href="single-product-2.html">Nordic</a></li>
                      <li><a href="single-product-3.html">Outdoor</a></li>
                      <li><a href="single-product-4.html">Family</a></li>
                      <li><a href="single-product-5.html">Princess</a></li>
                    </ul>
                    <a className="mean-expand" href="#" style={{"fontSize": "18px"}}>&gt;</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Blog</a>
                    <ul style={{"display":"none"}}></ul>
                  </li>
                  <li className="mean-last"><a href="contact.html">Contact</a></li>
                </ul>
              </nav>
            </div>
            <div id="mobile-menu" style={{"display":"none"}}>
                <ul>
                    <li><a className="pl-3" href="javascript:void(0)">Home</a>
                        <ul className="pl-4"></ul>
                    </li>
                    <li><a className="pl-3" href="javascript:void(0)">Shop</a>
                        <ul>
                            <li><a href="shop.html">Shop Layout</a></li>
                            <li><a href="shop4.html">Masonry – Grid</a></li>
                            <li><a href="shop3.html">Pagination</a></li>
                            <li><a href="shop2.html">Ajax Load More</a></li>
                            <li><a href="shop2.html">Infinite Scroll</a></li>
                            <li><a href="shop2.html">Sidebar Right</a></li>
                            <li><a href="shop.html">Sidebar Left</a></li>
                            <li><a href="shop.html">Shop Pages</a></li>
                            <li><a href="shop2.html">List View</a></li>
                            <li><a href="shop3.html">Small Products</a></li>
                            <li><a href="shop2.html">Large Products</a></li>
                            <li><a href="shop3.html">Shop — 3 Items</a></li>
                            <li><a href="shop3.html">Shop — 4 Items</a></li>
                            <li><a href="shop4.html">Shop — 5 Items</a></li>
                            <li><a href="single-product-2.html">Product Layout</a></li>
                            <li><a href="single-product.html">Description Sticky</a></li>
                            <li><a href="single-product-2.html">Product Carousels</a></li>
                            <li><a href="single-product-3.html">Gallery Modern</a></li>
                            <li><a href="single-product-4.html">Thumbnail Left</a></li>
                            <li><a href="single-product-5.html">Thumbnail Right</a></li>
                            <li><a href="single-product-6.html">Thumbnail Botttom</a></li>
                        </ul>
                    </li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>
      </div>

    );
}

export default MobileMenu;
