import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/layout/Header';
import Cart from './components/pages/Cart';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Shop from './components/pages/Shop';
import Footer from './components/layout/Footer';
import Clearance from './components/pages/Clearance';
import Wish from './components/pages/Wish';
import SingleShopProduct from './components/pages/SingleShopProduct';
import Contact from './components/pages/Contact';
import Blog from './components/pages/Blog';
import Ballons from './components/pages/Ballons';
import Unicorn from './components/pages/Unicorn';
import Birthday from './components/pages/Birthday';
import Halloween from './components/pages/Halloween';
import Gold from './components/pages/Gold';
import Checkout from './components/pages/Chekout';
import Register from './components/pages/Register';





function App() {
  return (
  
      <BrowserRouter>
          
          <Header/>

          <Routes>
          
          <Route path="/" element={<Home/>} />
          <Route path="/shop" element = {<Shop />} />
          <Route path="/birthday" element = {<Birthday />} />
          <Route path="/halloween" element = {<Halloween />} />
          <Route path="/clearance" element = {<Clearance />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/wishlist" element={<Wish/>} />
          <Route path="/singleProduct/:id" element={<SingleShopProduct />} />
          <Route path="/singletoshop/:id" element={<SingleShopProduct />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element = {<Contact />} />
          <Route path="/blog" element = {<Blog />} />
          <Route path="/ballons" element = {<Ballons />} />
          <Route path="/unicorn" element = {<Unicorn />} />
          <Route path="/gold" element = {<Gold />} />

          </Routes>

          <Footer/>



      </BrowserRouter>

      
  
  );
}

export default App;
