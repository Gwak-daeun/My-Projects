import React from "react";
import {Link} from 'react-router-dom'

function RegisterCrumb(){
    return(
        <>
        <section class="breadcrumb-area" data-background="img/bg/page-title.png">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="breadcrumb-content" style="flex-direction: column;">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb p-0 m-0">
                                    <li class="breadcrumb-item"><a href="index4.html"><Link to={'/'}>Home</Link></a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Login</li>
                                </ol>
                            </nav>
                         <h2 class="login-title mt-40">Login</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default RegisterCrumb;