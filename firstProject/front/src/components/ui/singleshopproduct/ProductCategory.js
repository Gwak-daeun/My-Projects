import axios from 'axios';
import React, { useEffect, useState } from 'react';



function ProductCategory({item}) {

    const [productName, setProductName] = useState({});

    useEffect(()=>{
        const url =`http://localhost:3005/ProductsCategories/${item}`
        axios.get(url)
            .then(Response=>{
            setProductName(Response.data) 
            
        })
    },[item])


    return ( 
        <>
        <h5>{productName.categoryName}</h5>
        </>
    )
    }


export default ProductCategory;