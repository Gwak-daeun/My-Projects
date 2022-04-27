import React, { useEffect, useState, useRef } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

function CartList({item}) {

    
    const cartCnt = useRef(0);
    const [result, setResult] = useState(0);
    const [no, setNo] = useState(item.id)

    const [CProduct, setCProduct] = useState({})
    

    
   

    useEffect(()=>{
        fetch(`http://localhost:3006/products/${item.productId}`)
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            setCProduct(data)
            setResult(item.quantity*data.price)
            console.log(data)
        })
    },[item.productId])

    if(no===0){
        return null
    } else {
        return ( 
            <>
            
            <td>
                 <div className="table-data">
                    <img src={`./product-img/products/${CProduct.titleImg}`} width="80" alt=""/>


                </div>
            </td>
            <td>
                <div className="table-data">
                   <h6><>{CProduct.productName}</></h6>
                </div>
            </td>
                
            
            
            
            
                  
            </>
        
        );
    }
}

export default CartList;