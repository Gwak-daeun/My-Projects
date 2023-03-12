import React, { useEffect, useState } from 'react';
import {Container} from 'react-bootstrap';
import axios from 'axios';


import ClearancePmList from './ClearancePmList';

function ClearanceProduct() {
    
    const [productData, SetProductData] =useState([])
    const [check, setCheck] = useState(false)

    useEffect(()=>{

        const url = `http://localhost:3005/SaleProductList`
        
        axios.get(url)
        .then(Response=>{
            console.log(Response)
            SetProductData(Response.data)
            console.log(Response.data)
        })
        
    },[check])
        
    return ( 
        <div class="shop-wrapper">
            <div class="row">
        
            <div className="product-wrapper mt-55">
                <div className="row">
                        <div className="col-xl 12">   
                        <Container>
                             <div className = "row">
                                { productData.map(product =>(
                                <ClearancePmList 
                                key={product.Id} 
                                productid = {product.productId}
                                check ={check}  
                                setCheck = {setCheck}
                                />))}
                            </div>
                        </Container>
                    </div>
                    </div>
                </div>
                </div>
                </div>
        
        
        
        
        
        
     );
}

export default ClearanceProduct;