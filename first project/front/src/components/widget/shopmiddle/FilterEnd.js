import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function FilterEnd() {

   return ( 

      <>
      
            <DropdownButton variant="outline-success" align="end" title="filter" id="dropdown-menu-align-end">
               <Container>
                  <Row>

                     <Col>
                     <Dropdown.Divider />
                     <Dropdown.Item eventKey="1">
                    
                           <div className="Row-xl-3 Row-lg-3 Row-md-6 Row-sm-6 Row-12">
                              <div className="filter-popup-item">
                                 <div className="widget">
                                    <h4 className="mb-30">Filter By Color</h4>
                                       <ul className="color-list">
                                       <li style={{background: '#FF0003'}}></li>
                                       <li style={{background: '#FFFFFF'}}></li>
                                       <li style={{background: '#CEC307'}}></li>
                                       <li style={{background: '#C9C9C9'}}></li>
                                       <li style={{background: '#109D24'}}></li>
                                       <li style={{background: '#D6C27A'}}></li>
                                       <li style={{background: '#EB9CB7'}}></li>
                                       </ul>
                                 </div>
                              </div>
                           </div>
                     </Dropdown.Item>
                     </Col>

                     <Col>
                     <Dropdown.Divider />
                     <Dropdown.Item eventKey="2">
                       
                           <div className="Row-xl-3 Row-lg-3 Row-md-6 Row-sm-6 Row-12">
                              <div className="widget">
                                 <h4 className="mb-30">Filter By Size</h4>
                                 <div className="size-link">
                                    <a href="shop2.html">S</a>
                                    <a href="shop2.html">M</a>
                                    <a href="shop2.html">L</a>
                                 </div>
                              </div>
                           </div>
                     </Dropdown.Item>
                     </Col>

                     <Col>
                     <Dropdown.Divider />
                     <Dropdown.Item eventKey="3">
                       
                           <div className="Row-xl-3 Row-lg-3 Row-md-6 Row-sm-6 Row-12">
                              <div className="widget">
                                 <h4 className="mb-30">Filter By Price</h4>
                                 <form action=" ">
                                    <div className="price-filter">
                                          <div id="slider-range-2"
                                             className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                                             <div className="ui-slider-range ui-corner-all ui-widget-header"
                                                style={{left: '15%', width: '46.4%'}}></div><span
                                                tabindex="0"
                                                className="ui-slider-handle ui-corner-all ui-state-default"
                                                style={{left: '15%'}}></span><span tabindex="0"
                                                className="ui-slider-handle ui-corner-all ui-state-default"
                                                style={{left: '60%'}}></span>
                                             <div className="ui-slider-range ui-corner-all ui-widget-header"
                                                style={{left: '15%', width: '45%'}}></div>
                                          </div>
                                          <div className="filter-form-submit mt-35">
                                             <button type="submit">Filter</button>
                                             <div className="filter-price d-inline-block pl-20">
                                                Price: <input type="button" id="amount-2"
                                                      value="$75 - $300"/></div>
                                          </div>
                                    </div>
                                 </form>
                              </div>
                           </div>
                     </Dropdown.Item>
                     </Col>

                     <Col>
                     <Dropdown.Divider />
                     <Dropdown.Item eventKey="4">
                        {/* Party Tema */}
                           <div className="Row-xl-3 Row-lg-3 Row-md-6 Row-sm-6 Row-12 position-static">
                              <div className="widget">
                                 <h4 className="mb-30">Party Tema</h4>
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
                           </div>
                     </Dropdown.Item>
                     </Col>

                  </Row>
               </Container>
            </DropdownButton>
            
      </>

    );
}

export default FilterEnd;
