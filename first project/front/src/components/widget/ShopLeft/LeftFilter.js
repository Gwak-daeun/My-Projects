import React, { useEffect, useState } from "react";
import axios from "axios";

function LeftFilter({setColorProductList}) {

   const [colorDatas, setColorDatas] = useState([])

   const url = "http://localhost:3005/colors"

   useEffect(()=>{
      axios.get(url)
      .then(Response=>{
         setColorDatas(Response.data)}
      )
   },[])

   return ( 

      <>
      
         <div className="widget mt-50">

               <h4 className="mb-30">Filter By Price</h4>
               <form action="#">
                  <div className="price-filter">
                        <div id="slider-range"
                           className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                           <div className="ui-slider-range ui-corner-all ui-widget-header"
                              style={{left: '15%', width: '46.4%'}}></div><span tabindex="0"
                              className="ui-slider-handle ui-corner-all ui-state-default"
                              style={{left: '15%'}}></span><span tabindex="0"
                              className="ui-slider-handle ui-corner-all ui-state-default"
                              style={{left: '60%'}}></span>
                           <div className="ui-slider-range ui-corner-all ui-widget-header"
                              style={{left: '15%', width: '45%'}}></div>
                        </div>
                        <div className="filter-form-submit mt-35">
                           <button type="submit">Filter</button>
                           <div className="filter-price d-inline-block pl-20">Price: <input type="button"
                                    id="amount" value="$75 - $300"/></div>
                        </div>
                  </div>
               </form>
            
               <h4 className="mb-30">Filter By Color</h4>
               <ul className="color-list">
                  <li onClick={setColorProductList} style={{background:"black"}} value={0}></li>
                  {
                     colorDatas.map(item=>(
                        <ColorFilter 
                           key={item.id}
                           setColorProductList = {setColorProductList}
                           item = {item}
                        />
                     ))
                  }
                  
               </ul>
            
               <h4 className="mb-30">Filter By Size</h4>
               <div className="size-link">
                  <a href="shop2.html">3xl</a>
                  <a href="shop2.html">l</a>
                  <a href="shop2.html">m</a>
                  <a href="shop2.html">s</a>
                  <a href="shop2.html">xl</a>
                  <a href="shop2.html">xxl</a>
               </div>
            
         </div>
         
      </>

    );
}

const ColorFilter = ({setColorProductList, item}) => {
   return (
      <li onClick={setColorProductList} className={item.colorName} key={item.id} value={item.id}></li>
   )
}

export default LeftFilter;