import React from "react";
import { Link } from "react-router-dom";

function LoginCrumb() {
    return(
        <section className="breadcrumb-area" data-background="img/bg/page-title.png">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="breadcrumb-content" style={{flexdirection: 'column'}}>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb p-0 m-0">
                                    <li className="breadcrumb-item"><a href="index5.html"><Link to={'/'}>Home</Link></a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Login</li>
                                </ol>
                            </nav>
                            <h2 className="login-title mt-40">Login</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LoginCrumb;