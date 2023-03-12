import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {Container} from 'react-bootstrap';
import {Row,Col} from 'react-bootstrap';
import PartyCategory from './singleshopproduct/PartyCategory';
import ProductCategory from './singleshopproduct/ProductCategory';


function ShopProductsView1({productid}) {

      let navigate = useNavigate();

      const [productItem, setProductItem] = useState({
         titleImg : '',
         productName:'',
         ProductCategoryId: '',
         price:'',
         PartyCategoryId:''
         
   })

   const [imgUrl, setImgUrl] = useState('')

   useEffect(()=>{
        
         fetch(`http://localhost:3006/Products/${productid}`)
         .then(res=>{
            return res.json()
         })
         .then(data=>{
            setProductItem(data)
            setImgUrl(`./product-img/products/${data.titleImg}`)
            console.log(data)
         })
   },[productid]);

      const handleAddWish = () =>{
      axios.post(`http://localhost:3005/wishLists/`,{
         productId : productid,
            price: productItem.price
      }).then(
         Response =>{
            console.log(Response)
            navigate("/wishlist")

         }
      )
      }

   return ( 

      <>
         <div className="col-6 col-md-4">
            <div className="product-box mb-40">
                  <div className="product-box-wrapper">
                     <div className="product-img">
                        <img src={imgUrl} className="w-100" alt={productItem.titleImg}/>
                        <Link to={`/singletoshop/${productid}`} className="d-block">
                              <div className="second-img">
                                 <img src={imgUrl} alt={productItem.titleImg}
                                    className="w-100"/>
                              </div>
                        </Link>
                        <Link to={`/singletoshop/${productid}`}
                              className="product-img-link quick-view-1 text-capitalize">Quick
                              view</Link>
                     </div>

                     <div className="product-desc pb-20">
                        <div className="product-desc-top">
                              <div className="categories">
                              <Container>
                                 <Col>
                                    <Row><a href=""className="party-category">{
                                    <PartyCategory
                                    item ={productItem.PartyCategoryId} />}</a></Row>
                                    <Row><a href=""className="product-category"><span>{
                                    <ProductCategory
                                    item={productItem.ProductCategoryId} /> }</span></a></Row>
                                 </Col>
                              </Container>
                              </div>
                              <div className="wishlist float-right">
                                 <span><Link to={'/wishlist'} className="fal fa-heart" onClick={handleAddWish}></Link></span>
                              </div>
                        </div>
                        <a href="" className="product-title">{productItem.productName}</a>
                        <div className="price-switcher">
                              <span className="price switcher-item">${productItem.price}</span>
                              <a href=""
                                 className="add-cart text-capitalize switcher-item">+add
                                 to cart</a>
                        </div>
                     </div>
                  </div>
            </div>
         </div>
           
      </>

    );
}
export default ShopProductsView1;



