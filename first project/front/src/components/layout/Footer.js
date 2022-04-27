import React from "react";

import FooterBottom from "../ui/footermenu/FooterBottom";
import FooterMiddle from "../ui/footermenu/FooterMiddle";
import FooterTop from "../ui/footermenu/FooterTop";


function Footer() {

   return ( 

      <>
      
      <div class="footer-top mt-120 pb-120 pt-115" style={{background: '#000000'}}>
         <div class="footer-top-wrapper">
         
            <FooterTop/>
            <FooterMiddle/>

         </div>
      </div>
      
         <FooterBottom/>
         
      </>


    );
}

export default Footer;


