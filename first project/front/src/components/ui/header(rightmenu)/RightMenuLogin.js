import React from "react";
import { Link } from "react-router-dom";

function RightMenuLogin() {

   return ( 

      <>

      <li><a  className="account">
         <i className="fal fa-user-friends"></i>
         <Link to={'/login'} className="account-registar d-inline-block" >Login/Sign up</Link>
         </a>
      </li>
      
      </>
    );
}

export default RightMenuLogin;