import React from "react";
import FilterShowing from "./shopmiddle/FilterShowing";
import { Container, Row } from "react-bootstrap";
import FilterEnd from "./shopmiddle/FilterEnd";



function ShopMiddleFilter() {

   
   return (  

      <>

         <div className ="justify-content:space-between" >
         <Container>
            <Row>
               
               <FilterShowing/>
               <div className = "padding-right: 50px">
               <FilterEnd/>
               </div>

            </Row>
         </Container>
         </div>       
      </>

   );
}

export default ShopMiddleFilter;
