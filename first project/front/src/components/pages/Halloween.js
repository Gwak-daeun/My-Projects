import React, { useEffect, useState } from 'react';
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import axios from 'axios';


import ShopLeftMenu from "../layout/ShopLeftMenu";
import ShopProductsView1 from '../ui/ShopProductsView1';
import ShopMiddleFilter from "../widget/ShopMiddleFilter";
import HalloweenMainBanner from '../ui/halloweenproduct/HalloweenMainBanner';

function Halloween() {

   const [productData, SetProductData] = useState([])
   const [check, setCheck] = useState(false)

   useEffect(()=>{

      const url ="http://localhost:3005/HalloweenProductList"

      axios.get(url)
       .then(Response=>{
         console.log(Response)
         SetProductData(Response.data)
         console.log(Response.data)
       })

   },[check])


   return ( 

      <>
            <HalloweenMainBanner />
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

                        </div>
                        </div>
                     </div>
                  </div>
               </div>

      </>


    );
}

export default Halloween;



