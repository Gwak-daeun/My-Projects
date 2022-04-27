import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function WishProductList({wishItem, check, setCheck}) {

    let gopage = useNavigate();

    const [wishProduct, setWishProduct] = useState({})
    const [no, setNo] = useState(wishItem.id)
    


    useEffect(()=>{
        axios.get(`http://localhost:3006/products/${wishItem.productId}`)
        .then(response=>{
            console.log(response)
            setWishProduct(response.data)
        })
    },[wishItem.productId])

    const addCart = () =>{
        axios.post(`http://localhost:3005/cartLists/`, {
            productId : wishItem.productId,
            quantity : 1,
            price : wishItem.price
        }).then(
            Response => {
                console.log(Response)
                gopage("/cart")
            }
        )
    }

    const handleDelete = () => {
        const url = `http://localhost:3005/wishLists/${wishItem.id}/`
        if(window.confirm("위시리스트에서 지우시겠습니까?")){
            axios.delete(url)
            .then(res => {
                console.log(res.statusText)
                setCheck(!check)
            })
        }else{
            window.alert("상품 삭제 취소")
        }
    }
   
    if(no===0){
        return null
    } else {
    
    return(
        <>
        <tr>
            <img src={`./product-img/products/${wishProduct.titleImg}`} width="80" alt=""/>
                   

            <td className="product-name">{wishProduct.productName}</td>
            <td className="product-price"><span className="amount">${wishProduct.price}</span></td>
            <td className="product-quantity">
            <Link to={'/cart'}><button className="btn theme-btn-2" type="submit" onClick ={addCart}>Add TO Cart</button></Link>
            </td>
            
            <td  className="product-remove"><p onClick={handleDelete} ><i style= {{cursor:"pointer"}} className="fa fa-times"></i></p></td>
        </tr>

        </>
    );
    }
}


export default WishProductList;