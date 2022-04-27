import React,{useEffect, useState} from 'react';
import {Link, useNavigate } from 'react-router-dom';
import {Container} from 'react-bootstrap';
import {Row,Col} from 'react-bootstrap';
import axios from 'axios';
import PartyCategory from '../singleshopproduct/PartyCategory';
import ProductCategory from '../singleshopproduct/ProductCategory';




function ClearancePmList({productid}) {

    let navigate = useNavigate();

    

    const [productItem, setProductItem] = useState({
        
    })

    const [imgUrl, setImgUrl] = useState('')

    useEffect(()=>{
        fetch(`http://localhost:3006/products/${productid}`)
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            setProductItem(data);
            setImgUrl(`./product-img/products/${data.titleImg}`); 
            console.log(data);
        });
    },[]);

    const handleAddCart = () =>{
        axios.post(`http://localhost:3005/cartLists/`,{
            productId : productid,
            quantity :1,
            price: productItem.price
        }).then(
            Response =>{
                console.log(Response)
                navigate("/cart")

            }
        )
    }


    





    return ( 
        <div className="col-3">
            
        <div className="product-box mb-40">
            <div className="product-box-wrapper">
                <div className="product-img">
                <Link to={`/singleproduct/${productid}`} className="d-block">
                    <img src={imgUrl} className="w-100" alt={productItem.productName} />
                    
                        </Link>
                        <Link to={`/singleproduct/${productid}`}
                            className="product-img-link quick-view-1 text-capitalize">Quick view
                        </Link>
                        <span className="sale bg-red text-white">sale!</span>
                </div>
                <div className="product-desc pb-20">
                    <div className="product-desc-top">
                        <div className="categories">
                        <Container>
                         <Col>
                            <Row><a href=""className="party-category"><span>{
                            <PartyCategory 
                            item ={productItem.PartyCategoryId}
                            />}</span></a></Row>
                            
                            <Row><a href=""className="party-category"><span>{<ProductCategory 
                            item ={productItem.ProductCategoryId}
                            />}</span></a></Row>
                            
                            <Row><a href=""className="product-category"><span>{productItem.productName}</span></a></Row>
                        </Col>
                        </Container>
                        </div>
                       
                            <Link to={'/wishlist'} className="wishlist float-right">
                                <span><i className="fal fa-heart"></i></span></Link>
                    </div>
                        <Link to={`/singleproduct/${productid}`} className="product-title">{productItem.description}</Link>
                        <div className="price-switcher">
                        <span className="price switcher-item">${productItem.price}</span>
                        <Link to={'/cart'}
                            className="add-cart text-capitalize switcher-item" onClick={handleAddCart}>+add
                            to cart</Link>
                    </div>
                </div>

        
            </div>
            </div>
            </div>
    );
}

export default ClearancePmList;