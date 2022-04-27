import React from 'react';
import { useEffect, useState } from 'react';
import CProductListItem from '../ui/CProductListItem';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Cart() {

    const [CList, setCList] = useState([])
    const [check, setCheck] = useState(false)
    const [total, setTotal] = useState(0);
    

    useEffect(()=>{
        console.log(total)
        const url="http://localhost:3005/cartLists"
        axios.get(url)
        .then(Response=>{
            setCList(Response.data)
            console.log(Response.data)
            setTotal(Response.data.map(iitem => iitem.price).reduce((prev, curr) => prev + curr, 0))
  
        })
    },[check])
    

    return ( 
        
        <section className="cart-body mb-90 gray-border-top pt-140">
        <div className="has-breadcrumb-content">
            <div className="container container-1430">
                
                <div className="breadcrumb-content" style={{flexDirection : 'column'}}>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb p-0 m-0">
                            <li className="breadcrumb-item"><Link to={'/'}>Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Cart</li>
                        </ol>
                    </nav>
                 <h2 className="cart-title mt-40">Cart</h2>
                </div>

                <div className="cart-body-content">
                    <div className="row">
                        <div className="col-xl-8">
                            
                            <div className="product-content">
                                <form action="#">
                                    <div className="table-responsive">
                                        <table className="table table-2">
                                            <thead>
                                                <tr>
                                                    <th className="remove-porduct"></th>
                                                    <th className="product-image"></th>
                                                    <th className="product-title">Product</th>
                                                    <th>Price</th>
                                                    <th className="quantity">Quantity</th>
                                                    <th className="total">Total</th>
                                                </tr>
                                            </thead>
                                            
                                            <tbody>    
                                                {
                                                    CList.map(item=>(
                                                        <tr>
                                                            <CProductListItem
                                                            key = {item.id}
                                                            item = {item}
                                                            check = {check}
                                                            setCheck = {setCheck}                                                                                            
                                                            />
                                                        </tr>
                                                        
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="cupon">
                                            <form action="#" method="POST">
                                                {/* <input type="text" placeholder="Cupon code" className="text-left pl-3" style={{marginRight: '20px' ,width : '119px'}}/>
                                                <button className="generic-btn border-0 red-hover-btn text-uppercase">Apply Cupon</button>
                                                <button className="generic-btn border-0 red-hover-btn text-uppercase float-right">Update Cart</button> */}
                                            </form>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="cart-widget">
                                <h4 className="title">Cart Totals</h4>
                                <table className="table table-2 no-border">
                                    <tbody>
                                        {/* <tr>
                                            <th>Subtotal</th>
                                            <td>$134.00</td>
                                        </tr> */}
                                        <tr>
                                            <th style = {{marginTop : '30px'}}>Shipping</th>
                                            <td>
                                                <h6 style = {{marginTop : '30px' , marginBottom : '0px'}}>무료배송</h6>
                                                <p>하나만 사도 무료배송</p>
                                                {/* <a href="javascript.html" className="price-calculate">Calculate shipping</a> */}
                                                <div className="calculate-shipping-box">
                                                    <form action="#" method="POST">
                                                        <div className="form-group">
                                                            <div className="cart-select">
                                                                <select name="country" id="country">
                                                                    <option value="uk">United Kingdom</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="text" placeholder="Country"/>
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="text" placeholder="Town / City"/>
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="number" placeholder="Post Code"/>
                                                        </div>
                                                        <div className="form-group">
                                                            <button className="generic-btn border-0 red-hover-btn text-uppercase ">Update</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Total</th>
                                            <td style = {{marginTop : '30px'}}><strong >$ {total} </strong></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <a  className="mt-40 generic-btn red-hover-btn w-100 d-block" style={{height: '50px'}}><Link to={'/checkout'}>상품 구매하기</Link></a>
                            </div>
                            {/* `<!--` /. cart widget --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
     );
}

export default Cart;