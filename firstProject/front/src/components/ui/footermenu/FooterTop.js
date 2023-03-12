import React from "react";

function FooterTop() {

   return (  

      <>
      
        <div className="newsletter ">
            <div className="row">
                <div className="col-xl-6 col-lg-6">
                    <h2 className="title m-0">Sign Up For Our Newsletter</h2>
                    <p>Subscribe our newsletter and get discount 20% Off</p>
                </div>
                <div className="col-xl-6 col-lg-6">
                    <div className="newsletter-form">
                        <form action="#" method="POST">
                            <input type="text" placeholder="Search for our newsletter..."/>
                            <button type="submit"
                                className="generic-btn red-hover-btn text-uppercase float-right">Subscribe
                                Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      
      </>

   );
}

export default FooterTop;