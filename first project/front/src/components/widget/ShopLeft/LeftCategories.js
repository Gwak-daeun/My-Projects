import React from "react";

function LeftCategories() {

   return ( 

      <>
      
      <div className="widget">

         <h4 className="mb-30">Product Categories</h4>
            <div className="accordion" id="accordionExample">

            
               <div className="list">
                     <a href="javascript.html">Ballons <span>(0)</span></a>
                     <button className="float-right text-right" type="button" data-toggle="collapse"
                        data-target="#collapse-1">
                        <span className="float-right"><i className="fal fa-angle-right"></i></span>
                     </button>
                     <div id="collapse-1" className="collapse show">
                        <div className="sidebar-list">
                           <ul>
                                 <li><a href="shop3.html">Camera 1</a></li>
                           </ul>
                        </div>
                     </div>
               </div>
          
               <div className="list">
                     <a href="javascript.html">Hanging <span>(10)</span></a>
                     <button className="float-right text-right" type="button" data-toggle="collapse"
                        data-target="#collapse-2">
                        <span className="float-right"><i className="fal fa-angle-right"></i></span>
                     </button>
                     <div id="collapse-2" className="collapse">
                        <div className="sidebar-list">
                           <ul>
                                 <li><a href="shop.html">Chair <span>(30)</span></a></li>
                                 <li><a href="shop4.html">Clothing <span>(45)</span></a></li>
                                 <li><a href="shop4.html">Decore <span>(20)</span></a></li>
                           </ul>
                        </div>
                     </div>
               </div>
            
               <div className="list">
                     <a href="javascript.html">Tableware <span>(10)</span></a>
                     <button className="float-right text-right" type="button" data-toggle="collapse"
                        data-target="#collapse-3">
                        <span className="float-right"><i className="fal fa-angle-right"></i></span>
                     </button>
                     <div id="collapse-3" className="collapse">
                        <div className="sidebar-list">
                           <ul>
                                 <li><a href="shop4.html">Camerass <span>(1)</span></a></li>
                                 <li><a href="shop4.html">Gift Cards <span>(5)</span></a></li>
                           </ul>
                        </div>
                     </div>
               </div>
          
               <div className="list">
                     <a href="javascript.html">Decorations <span>(15)</span></a>
                     <button className="float-right text-right" type="button" data-toggle="collapse"
                        data-target="#collapse-4">
                        <span className="float-right"><i className="fal fa-angle-right"></i></span>
                     </button>
                     <div id="collapse-4" className="collapse">
                        <div className="sidebar-list">
                           <ul>
                                 <li><a href="shop3.html">Lightings <span>(1)</span></a></li>
                                 <li><a href="shop3.html">Managed <span>(5)</span></a></li>
                                 <li><a href="shop3.html">Printers <span>(32)</span></a></li>
                                 <li><a href="shop3.html">Shoes <span>(32)</span></a></li>
                           </ul>
                        </div>
                     </div>
               </div>

            </div>

          {/* Party Tema */}
         <h4 className="mb-30">Tema Categories</h4>
            <div className="category-list">
               <ul>
                     <li><a href="shop2.html">Unicorn</a></li>
                     <li><a href="shop2.html">Nordic</a></li>
                     <li><a href="shop2.html">Outdoor</a></li>
                     <li><a href="shop2.html">Family</a></li>
                     <li><a href="shop2.html">Princess</a></li>
                     <li><a href="shop2.html">Botanical</a></li>
                     <li><a href="shop2.html">Bohemian</a></li>
                    
               </ul>
            </div>
            
      </div>
    
      </>

    );
}

export default LeftCategories;