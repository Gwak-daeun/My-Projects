import React from 'react';
import Logo from '../ui/Logo';
import HeaderNav from '../ui/HeaderNav';
import MobileMenu from '../ui/MobileMenu';
import HeaderRightMenu from './HeaderRightMenu';


function Header() {

   return ( 

      <>
        <header className="header pt-30 pb-30  header-sticky">
          <div className="container-fluid">

                <div className="header-nav position-relative">
                    <div className="row align-items-center">
                        <HeaderNav/>
                        
                        <Logo/>
                        
                        <HeaderRightMenu/>
                    </div>
                </div>

              <MobileMenu/>
              
          </div>
        </header>

      </>

    );
}

export default Header;



