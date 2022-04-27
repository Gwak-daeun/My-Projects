import React from "react";
import {Link} from "react-router-dom"

function RightMenuWish() {
   
   return ( 

      <>
      
      <li>
      <Link to={'/wishlist'} data-toggle={"tooltip"} data-placement={"bottom"}
       className={"fal fa-heart"}><span></span></Link>
      </li>

      </>

    );
}

export default RightMenuWish;
