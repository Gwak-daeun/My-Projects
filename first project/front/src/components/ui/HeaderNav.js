import React from "react";
import { Link } from 'react-router-dom';

function HeaderNav() {

   return ( 

      <>
      
        <div className="col-xl-6 col-lg-8 hidden-md position-static">
            <div className="header-nav">
                <nav>
                    <ul>
                        <li>
                            <Link className="nav-link active" aria-current="page" to={'/'}><span>Home</span></Link>
                        </li>

                        <li className="position-static"><Link to={'/Shop'}><span>Shop <i
                            className="fal fa-angle-down"></i></span></Link>
                            <div className="mega-menu">
                                <div className="col-xl-7 pl-0 position-static">
                                    
                                    <ul>
                                        <li><a href="shop.html">Party Categories</a></li>
                                        <li><Link className="nav-link active" aria-current="page" to={'/shop'}>Christmas</Link></li>
                                        <li><Link className="nav-link active" aria-current="page" to={'/birthday'}>Birthday</Link></li>
                                        <li><Link className="nav-link active" aria-current="page" to={'/halloween'}>Halloween</Link></li>
                                        <li><a href="shop2.html">Anniversaries</a></li>
                                        <li><a href="shop2.html">BabyShoewr</a></li>
                                    </ul>
                                    <ul>
                                        <li><a href="shop.html">Products Categories</a></li>
                                        <li><Link to={'/ballons'}>Ballons</Link></li>
                                        <li><a href="shop3.html">Hanging</a></li>
                                        <li><a href="shop2.html">Coustume</a></li>
                                        <li><a href="shop3.html">Tableware</a></li>
                                        <li><a href="shop3.html">Decorations</a></li>
                                    </ul>
                                    <ul>
                                        <li><a href="single-product-2.html">Tema Categories</a></li>
                                        <li><Link to={'/unicorn'}>Uniorn</Link></li>
                                        <li><a href="single-product-2.html">Nordic</a></li>
                                        <li><a href="single-product-3.html">Outdoor</a></li>
                                        <li><a href="single-product-4.html">Family</a></li>
                                        <li><a href="single-product-5.html">Princess</a></li>
                                    </ul>

                                </div>
                            </div>
                        </li>

                        <li><Link to={'/blog'}><span>Blog </span>
                            </Link>
                            
                        </li>

                        

                        <li><Link className="nav-link active" aria-current="page" to={'/clearance'}><span>clearance</span></Link>
                        </li>

                        <li><Link to={'/contact'}><span>Contact</span></Link></li>

                    </ul>
                </nav>
            </div>
        </div>

      </>

    );
}

export default HeaderNav;
