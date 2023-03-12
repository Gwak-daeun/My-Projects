import React, { useEffect, useState, useRef } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

function CProductListItem({item, check, setCheck}) {

    
    const cartCnt = useRef(0);
    const [result, setResult] = useState(0);
    const [no, setNo] = useState(item.id)

    const [CProduct, setCProduct] = useState({})
    

    const handleChange = () => {
        // setTotal(total = total +  parseInt(cartCnt.current.value)*CProduct.price )
        console.log(cartCnt.current.value)
        setCheck(!check)
        setResult(parseInt(cartCnt.current.value)*CProduct.price)
        fetch(`http://localhost:3005/cartLists/${item.id}`,{
            method: "PUT",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                ...item,
                quantity: parseInt(cartCnt.current.value),
                price : parseInt(cartCnt.current.value)*CProduct.price
                
            }),
        }).then(res => {
            if (res.ok) {
                console.log("ok")
            }
        })
    }

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

    const handleDelete = () => {
        const url = `http://localhost:3005/cartLists/${item.id}/`
        console.log(url)
        if(window.confirm("삭제하시겠습니까?")){
            axios.delete(url)
            .then(res => {
                console.log(res.statusText)
                setCheck(!check)
            })
        }else{
            window.alert("취소")
        }
    }

    

    if(no===0){
        return null
    } else {
        return ( 
            <>
            <td>
                <div style= {{cursor:"pointer" }}className="product-delete" className="close-btn" onClick={handleDelete} className={"fal fa-times"} width = "10000px"></div>                                                  
            </td>
            <td>
                 <div className="table-data">
                    <img src={`./product-img/products/${CProduct.titleImg}`} width="80" alt=""/>


                </div>
            </td>
            <td>
                <div className="table-data">
                   <h6><Link to="index.html" className="title">{CProduct.productName}</Link></h6>
                </div>
            </td>
            <td>
                <div className="table-data">
                    <span className="price"> $ {CProduct.price}</span>
                    
                </div>
            </td>         
            <td>
                <div className="table-data">
                    <input type="number" defaultValue={item.quantity} min="0" max="20" onChange={handleChange} ref={cartCnt} style={{marginRight: '20px', width: '119px'}}/>
                </div>
            </td>
            <td>
                <div className="table-data">
                    <span className="total"> $ {result} </span>
                </div>
            </td>    
            
            
                  
            </>
        
        );
    }
}

export default CProductListItem;