import React from "react";
import LeftCategories from "../widget/ShopLeft/LeftCategories"
import LeftFilter from "../widget/ShopLeft/LeftFilter"
import LeftFeatured from "../widget/ShopLeft/LeftFeatured"



function ShopLeftMenu({setColorProductList}) {

   return ( 

      <>

         <LeftCategories/>
         <LeftFilter 
            setColorProductList = {setColorProductList}
         />
         <LeftFeatured />
         
      </>

    );
}

export default ShopLeftMenu;
