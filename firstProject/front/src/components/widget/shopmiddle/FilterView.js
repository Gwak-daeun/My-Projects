import React from "react";

function FilterView() {

   return (

      <>
      
      <div className="col-xl-4 col-lg-4 col-md-4 col-12">
         <div className="shop-filter-tab">
               <ul className="nav nav-pills" role="tablist">
                  <li><span>Views</span></li>
                  <li className="nav-item">
                     <a className="active" data-toggle="pill" href="#shop-tab-1"
                            data-placement="top" title="2 grid"><i
                              className="fal fa-line-columns"></i></a>
                  </li>
                  <li className="nav-item">
                     <a data-toggle="pill" href="shop-tab-2" data-placement="top"
                           title="3 grid"><i className="fal fa-border-none"></i></a>
                  </li>
                  <li className="nav-item">
                     <a data-toggle="pill" href="shop-tab-3" data-placement="top"
                           title="4 grid"><i className="fal fa-border-center-v"></i></a>
                  </li>
                  <li className="nav-item">
                     <a data-toggle="pill" href="shop-tab-4" data-placement="top"
                           title="list view"><i className="fal fa-list"></i></a>
                  </li>
               </ul>
         </div>
      </div>
      
      </>

     );
}

export default FilterView;
