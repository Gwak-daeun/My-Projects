import React, { useEffect, useState } from 'react';
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import axios from 'axios';


import ShopLeftMenu from "../layout/ShopLeftMenu";
import ShopMiddleFilter from "../widget/ShopMiddleFilter";
import BallonMainBanner from '../ui/ballonproduct/BallonMainBanner';
import ShopProductsView1 from '../ui/ShopProductsView1';


function Ballons() {

   const [productData, SetProductData] = useState([])
   const [colorId, setColorId] = useState(0)
   const [url, setUrl] = useState(" http://localhost:3005/BallonProductList")
   

   useEffect(()=>{
      axios.get(url)
       .then(Response=>{
         console.log(Response)
         SetProductData(Response.data)
         console.log(Response.data)
       })
   },[url])

   useEffect(()=>{
      console.log(colorId)
      if(colorId > 0 ) {
         setUrl(`http://localhost:3005/BallonProductList?colorId=${colorId}`)
      } else if ( colorId === 0)  {
         setUrl(`http://localhost:3005/BallonProductList`)
      }
   },[colorId])
   
   const setColorProductList = (e) => {
      console.log(e.target.value)
      setColorId(e.target.value)
   }


   return ( 

      <>
            <BallonMainBanner/>
            
            <div className="shop-body mb-90">
            <div className="container-fluid">
               <div className="shop-wrapper">\
                  <div className="row">
                     <div className="col-xl-3 hidden-xl">
                        <ShopLeftMenu
                        setColorProductList = {setColorProductList}
                        />
                     </div>

                     <div className="col-xl-9">
                        <Container>
                        <Row >
                           
                              {productData.map(product=>(
                              <ShopProductsView1 
                              key={product.Id} 
                              productid = {product.productId}
                              colorId = {colorId}
                              />))}
                           
                           </Row >
                        </Container>
                        
                        <div class="text-center mt-20">
                           <a href="shop.html" class="load-more">LOAD MORE...</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

      </>


    );
}

export default Ballons;



