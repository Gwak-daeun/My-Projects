import React from "react";
import { Link } from "react-router-dom";

function RightMenuSub() {

   return (  

      <>
      
      <li><a href="javascript.html"><i className="fal fa-align-right"></i></a>
         <ul className="submenu text-right">
               <li><a href="login.html">My Account</a></li>
               <li><a href="checkout.html"><Link to={'/checkout'}>Checkout</Link></a></li>
               <li><a href="shop.html">Shop</a></li>
               <li><a href="wishlist.html"><Link to={'/wishlist'}>Wishlist</Link></a></li>
               <li><a href="question.html">Frequently</a></li>
         </ul>
      </li>
      
      </>

   );
}

export default RightMenuSub;