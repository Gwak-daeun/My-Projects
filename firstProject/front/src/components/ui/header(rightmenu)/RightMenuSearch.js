import React from "react";

function RightMenuSearch() {

   return ( 

      <>

         <li><a href="javascript.html"><i className="fal fa-search"></i></a>
            <div id="search-popup">
               <div className="close-search-popup">
                  <i className="fal fa-times"></i>
               </div>
               <div className="search-popup-inner mt-135">
                  <div className="search-title text-center">
                        <h2>Search</h2>
                  </div>

                  <div className="search-content pt-55">
                        <ul className="text-center">
                           <li><a href="javascript.html" className="active">All categories</a>
                           </li>
                           <li><a href="javascript.html">Clothing</a></li>
                           <li><a href="javascript.html">Gift Cards</a></li>
                           <li><a href="javascript.html">Handbag</a></li>
                           <li><a href="javascript.html">Kids</a></li>
                           <li><a href="javascript.html">Shoes</a></li>
                           <li><a href="javascript.html">Sneaker</a></li>
                           <li><a href="javascript.html">Women</a></li>
                        </ul>

                        <div className="search-form mt-35">
                           <form action="#" method="post">
                              <input type="text" placeholder="Search Products..."/>
                              <button type="submit"><i className="fal fa-search"></i></button>
                           </form>
                        </div>

                        <div className="search-result-list">
                           <ul className="text-left">
                              <li className="d-block d-flex align-items-center">
                                    <div className="search-result-img">
                                       <img src="img/product/1.jpg" className="w-100" alt=""/>
                                    </div>
                                    <div className="search-result-desc pl-10">
                                       <a href="shop2.html" className="title px-0">ELLE - Recliner syntheti
                                          chair</a>
                                       <div className="price">$<span>399</span></div>
                                    </div>
                              </li>
                              <li className="d-block d-flex align-items-center">
                                    <div className="search-result-img">
                                       <img src="img/product/2.jpg" className="w-100" alt=""/>
                                    </div>
                                    <div className="search-result-desc pl-10">
                                       <a href="shop2.html" className="title px-0">RIMINI - Folding leather
                                          deck chair</a>
                                       <div className="price">$<span>399</span></div>
                                    </div>
                              </li>
                              <li className="d-block d-flex align-items-center">
                                    <div className="search-result-img">
                                       <img src="img/product/3.jpg" className="w-100" alt=""/>
                                    </div>
                                    <div className="search-result-desc pl-10">
                                       <a href="shop2.html" className="title px-0">LANDSCAPE - Folding
                                          fabric deck chair</a>
                                       <div className="price">$<span>399</span></div>
                                    </div>
                              </li>
                              <li className="d-block d-flex align-items-center">
                                    <div className="search-result-img">
                                       <img src="img/product/1.jpg" className="w-100" alt=""/>
                                    </div>
                                    <div className="search-result-desc pl-10">
                                       <a href="shop2.html" className="title px-0">ELLE - Recliner syntheti
                                          chair</a>
                                       <div className="price">$<span>399</span></div>
                                    </div>
                              </li>
                              <li className="d-block d-flex align-items-center">
                                    <div className="search-result-img">
                                       <img src="img/product/2.jpg" className="w-100" alt=""/>
                                    </div>
                                    <div className="search-result-desc pl-10">
                                       <a href="shop2.html" className="title px-0">RIMINI - Folding leather
                                          deck chair</a>
                                       <div className="price">$<span>399</span></div>
                                    </div>
                              </li>
                              <li className="d-block d-flex align-items-center">
                                    <div className="search-result-img">
                                       <img src="img/product/3.jpg" className="w-100" alt=""/>
                                    </div>
                                    <div className="search-result-desc pl-10">
                                       <a href="shop2.html" className="title px-0">LANDSCAPE - Folding
                                          fabric deck chair</a>
                                       <div className="price">$<span>399</span></div>
                                    </div>
                              </li>
                           </ul>
                     </div>
                  </div>


               </div>
            </div>
         </li>

      </>



    );
}

export default RightMenuSearch;
