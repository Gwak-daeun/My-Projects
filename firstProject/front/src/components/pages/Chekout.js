import React from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import CheckArea from "../ui/checkoutpage/CheckArea";

import CheckCrumb from "../ui/checkoutpage/CheckCrumb";

function Checkout() {
    return(
        <main>
       
        <CheckCrumb />       
        <CheckArea />
    
        </main>
    );
}

export default Checkout;