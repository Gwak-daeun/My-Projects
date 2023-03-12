import React from 'react';

import Logo from '../ui/Logo';
import HeaderNav from '../ui/HeaderNav';

import HeaderRightMenu from './HeaderRightMenu';
import ScrollToTop from '../widget/ScrollToTop';
import MobileMenu from '../ui/MobileMenu';


function Header() {

   return ( 

    <header className="header pt-30 pb-30  header-sticky">
      <div className="container-fluid">

          <div className="header-nav position-relative">
              <div className="row align-items-center">
                  <Logo/>
                  <HeaderNav/>
                  <HeaderRightMenu/>
              </div>
          </div>
          
          <MobileMenu/>
          <ScrollToTop />
      </div>
    </header>

    );
}

export default Header;



