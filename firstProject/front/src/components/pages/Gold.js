import React, { useEffect, useState } from 'react';
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import axios from 'axios';


import ShopLeftMenu from "../layout/ShopLeftMenu";
import ShopMiddleFilter from "../widget/ShopMiddleFilter";
import GoldMainBanner from '../ui/goldproduct/GoldMainBanner';
import ShopProductsView1 from '../ui/ShopProductsView1';

function Gold() {

   const [productData, SetProductData] = useState([])
   const [check, setCheck] = useState(false)

   useEffect(()=>{

      const url =" http://localhost:3005/GoldProductList"

      axios.get(url)
       .then(Response=>{
         console.log(Response)
         SetProductData(Response.data)
         console.log(Response.data)
       })

   },[check])


   return ( 

      <>
            <GoldMainBanner/>
               <div className="shop-body mb-90">
                  <div className="container-fluid">
                     <div className="shop-wrapper">
                        <div className="row">
                        <div className="col-xl-3 hidden-xl">
                        <ShopLeftMenu/>
                        </div>
                        <div className="col-xl-9">
                           <ShopMiddleFilter/>
                           
                           <Container>
                              <Row lg={2}>
                                 {productData.map(product=>(
                                 <ShopProductsView1 
                                 key={product.Id} 
                                 productid = {product.productId}
                                 check ={check}  
                                 setCheck = {setCheck}
                                 />))}
                              </Row>
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

export default Gold;



