import React from 'react';
import ReactDOM from 'react-dom/client';
// import Test from './test';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './home/home';
import Signin from './users/signin';
import Signup from './users/signup';
import Header from './header';
import Mypage from './home/mypage';
import axios from 'axios';
import Detail from './book/detail';
import Cart from './cart/cart';
import CartOrder from './order/cartorder';

axios.defaults.withCredentials = true;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/detail/:book_id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cartorder" element={<CartOrder />} />
      </Routes>
    </BrowserRouter> 
  </div>
  
);