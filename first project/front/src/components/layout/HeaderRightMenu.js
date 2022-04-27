import React from "react";
import RightMenuCart from "../ui/header(rightmenu)/RightMenuCart";
import RightMenuLogin from "../ui/header(rightmenu)/RightMenuLogin";
import RightMenuSub from "../ui/header(rightmenu)/RightMenuSub";
import RightMenuWish from "../ui/header(rightmenu)/RightMenuWish";

function HeaderRightMenu() {

   return (

      <>

         <div class="col-xl-4 col-lg-3 col-6 col-md-6 col-sm-6 col-9">
            <div class="header-right">
               <ul class="text-right">
                  
                  <RightMenuLogin/>
                  <RightMenuWish/>
                  <RightMenuCart/>
                  <RightMenuSub/>


               </ul>      
            </div>
         </div>
      
      </>

     );
}

export default HeaderRightMenu;


   