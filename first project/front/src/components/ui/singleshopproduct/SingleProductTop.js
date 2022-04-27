import React ,{useState, useEffect} from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import PartyCategory from './PartyCategory';
import ProductCategory from './ProductCategory';

function SingleProductTop() {
    let navigate = useNavigate();

    const { id } = useParams();

    const [product, setProduct] =useState({
         })

    useEffect(()=>{
        fetch(`http://localhost:3006/Products/${id}`)
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            setProduct(data)
            console.log(data)
        })
    },[id])

    const handleAddCart = () =>{
        axios.post(`http://localhost:3005/cartLists/`,{
            productId : id,
            quantity :1,
            price: product.price
        }).then(
            Response =>{
                console.log(Response)
                navigate("/cart")

            }
        )
    }


    return (
        <div className="single-product-top">
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-12">
                    <div className="shop-img">
                        <div className="row">
                            <div className="col-10">
                                <div className="tab-content" id="v-pills-tabContent">
                                    <div className="tab-pane fade show active" id="tab-1">
                                        <div className="product-img">
                                            <a className="popup-image" href="img/product/farniture-7.jpg"><img
                                                    src={`/product-img/products/${product.titleImg}`}className="w-100" alt=""/></a>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab-2">
                                        <div className="product-img">
                                            <a className="popup-image" href="img/product/farniture-8.jpg"><img
                                                    src={`/product-img/products/${product.titleImg}`} className="w-100" alt=""/></a>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab-3">
                                        <div className="product-img">
                                            <a className="popup-image" href="img/product/farniture-9.jpg"><img
                                                    src="img/product/farniture-9.jpg" className="w-100" alt=""/></a>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab-4">
                                        <div className="product-img">
                                            <a className="popup-image" href="img/product/farniture-10.jpg"><img
                                                    src="img/product/farniture-10.jpg" className="w-100" alt=""/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-12">
                    <div className="single-product-sidebar">
                        <div className="product-content">
                            <div className="single-product-title">
                                <h2> { product.productName }</h2>
                            </div>
                            <div className="single-product-price">$<span>{product.price}</span></div>
                            <div className="single-product-desc mb-25">
                                <p>{product.description}</p>
                                <p>{product.description2}</p>
                            </div>
                            <div className="single-product-component">
                                <h6>Color: <span className="color-value">{product.colorId}</span></h6>
                                <form action="#" style={{ overflow: "hidden"}} className="mt-15">
                                    <div className="color-input">
                                        <label for="gold" style={{background: "#d0021b"}}></label>
                                        <input type="radio" className="d-none" id="gold"/>
                                        <span>Red</span>
                                    </div>
                                    <div className="color-input">
                                        <label for="green" style={{background: '#FFFFFF'}}></label>
                                        <input type="radio" className="d-none" id="green"/>
                                        <span>White</span>
                                    </div>
                                    <div className="color-input">
                                        <label for="white" style={{background: '#FFD700'}}></label>
                                        <input type="radio" className="d-none" id="white"/>
                                        <span>Gold</span>
                                    </div>
                                    <div className="color-input">
                                        <label for="yellow" style={{background: '#cccccc'}}></label>
                                        <input type="radio" className="d-none" id="yellow"/>
                                        <span>Silver</span>
                                    </div>
                                    <div className="color-input">
                                        <label for="green" style={{background: '#008000'}}></label>
                                        <input type="radio" className="d-none" id="green"/>
                                        <span>Green</span>
                                    </div>
                                    <div className="color-input">
                                        <label for="white" style={{background: '#e5ddb3'}}></label>
                                        <input type="radio" className="d-none" id="white"/>
                                        <span>Beige</span>
                                    </div>
                                    <div className="color-input">
                                        <label for="yellow" style={{background: '#bbdefb'}}></label>
                                        <input type="radio" className="d-none" id="yellow"/>
                                        <span>Pastel</span>
                                    </div>
                                </form>
                            </div>
                            <div className="single-product-component mt-15">
                                <div className="size">
                                    <h6>Size: <span>S</span></h6>
                                </div>
                            </div>
                            <div className="quick-quantity mt-60">
                                <form action="#" method="POST">
                                    <Link to={'/cart'}><button onClick={handleAddCart} type="submit" className="list-add-cart-btn red-hover-btn border-0"style={{paddingleft: '80px',paddingright: '80px', transition: 'all .5s'}}>add to cart
                                    </button></Link>
                                </form>
                            </div>
                            <div className="single-product-action mt-15">
                                <ul>
                                    <li><a href="wishlist.html"><i className="fal fa-heart"></i> add to wishlist</a></li>
                                </ul>
                            </div>
                            <div className="single-product-category">
                                <ul>
                                    <li className="mb-0"><a href="index.html" className="title">Categories: </a></li>
                                    
                                    <li className="mb-0"><Link to={`/halloween`}>{<PartyCategory 
                                            item = {product.PartyCategoryId}
                                            />}</Link></li>
                                    <li className="mb-0"><Link to={'/ballons'}>{ <ProductCategory
                                            item = {product.ProductCategoryId}
                                            />}</Link></li>
                                </ul>
                            </div>
                            <div className="share-product mt-20">
                                <ul>
                                    <li><a href="index.html" className="title">Share this product</a></li>
                                    <li><a href="index.html" data-toggle="tooltip" data-placement="top"
                                            title="facebook"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="index.html" data-toggle="tooltip" data-placement="top"
                                            title="twitter"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="index.html" data-toggle="tooltip" data-placement="top"
                                            title="pinterest"><i className="fab fa-pinterest"></i></a></li>
                                    <li><a href="index.html" data-toggle="tooltip" data-placement="top"
                                            title="google +"><i className="fab fa-google-plus-g"></i></a></li>
                                    <li><a href="index.html" data-toggle="tooltip" data-placement="top"
                                            title="Linkdin"><i className="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 

    );
}

export default SingleProductTop;