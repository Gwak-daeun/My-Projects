import React, { useEffect, useState } from "react";
import { Table } from 'react-bootstrap';
import WishProductList from "./WishProductList";
import axios from "axios";

function WishCartArea () {

    const [wishCart, setWishCart] = useState([])
    const [check, setCheck] = useState(false)

    useEffect(()=>{
        const url = "http://localhost:3005/wishLists"
        axios.get(url)
        .then(Response=>{
            setWishCart(Response.data)
            console.log(Response.data)
        })
    }, [check])

    return(
    <>   
        <section className="cart-area pt-100 pb-100">
            <div className="container">
            <Table striped bordered hover>
                <div className="row">
                    <div className="col-12">
                        <form action=" ">
                            <div className="table-content table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="product-thumbnail">Images</th>
                                            <th className="cart-product-name">Product</th>
                                            <th className="product-price">Unit Price</th>
                                            <th className="product-quantity">Add to Cart</th>                                         
                                            <th className="product-remove">Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            wishCart.map(wishItem=>(
                                                <WishProductList 
                                                    key = {wishItem.id}
                                                    wishItem = {wishItem}
                                                    check = {check}
                                                    setCheck = {setCheck}
                                                    
                                                   
                                                />
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>
                </div>
            </Table>
            </div>
        </section>
    </>
    );
}

export default WishCartArea;