import React from "react";
import { Link } from "react-router-dom";
 

function WishBreadCrumb() {
    return(
        <>
        <section className="breadcrumb-area" data-background="img/bg/page-title.png">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="breadcrumb-content" style={{flexDirection:"column"}} className="cart-body mb-0 gray-border-top pt-140">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb p-0 m-0">
                                    <li className="breadcrumb-item"><a href="index4.html"><Link to={'/'}>Home</Link></a></li>
                                    <li className="breadcrumb-item active" aria-current="page">WishList</li>
                                </ol>
                            </nav>
                        <h2 className="cart-title mt-40">WishList</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default WishBreadCrumb;