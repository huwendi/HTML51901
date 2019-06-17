import React, {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import CacheRoute, { CacheSwitch } from 'react-router-cache-route'
import './App.scss'

import Tabs from './components/tabs'
import Loading from './components/loading'

const Login = lazy(()=>import('./pages/common/Login'));
const Home = lazy(()=>import('./pages/home/Index'));
const Menu = lazy(()=>import('./pages/menu/Index'));
const Time = lazy(()=>import('./pages/time/Index'));
const Order = lazy(()=>import('./pages/order/Index'));
const Mine = lazy(()=>import('./pages/mine/Index'));

const ShopList = lazy(()=>import('./pages/home/ShopList'));
const Coupon = lazy(()=>import('./pages/common/Coupon'));
const CartList = lazy(()=>import('./pages/menu/CartList'));
const OrderDetail = lazy(()=>import('./pages/common/OrderDetail'));
const EditComment = lazy(()=>import('./pages/order/EditComment'));
const Score = lazy(()=>import('./pages/mine/Score'));
const Feedback = lazy(()=>import('./pages/mine/Feedback'));
const About = lazy(()=>import('./pages/mine/About'));
const NotFind = lazy(()=>import('./pages/common/NotFind'));


function App() {
  
  return (
    <Router>
      <div id="app">
        <Suspense fallback={<Loading/>}>

          {/* 根页面 */}
          <CacheSwitch>
            <Route path="/" exact render={()=>{
              //判断是否登录了,如果登录了，进入home，如果没有登录，进入login
              return <Redirect to="/home"/>
            }}/>
            <Route path="/login" component={Login}/>
            <CacheRoute path="/home" component={Home}/>
            <CacheRoute path="/menu" component={Menu}/>
            <CacheRoute path="/time" component={Time}/>
            <CacheRoute path="/order" component={Order}/>
            <CacheRoute path="/mine" component={Mine}/>
            {/* 404 */}
            <Route component={NotFind}/>

          </CacheSwitch>
          
          {/* 首页子页面 */}
          <Route path="/home/shop_list" component={ShopList}/>
          <Route path="/home/coupon" component={Coupon}/>
          {/* 菜单子页面 */}
          <Route path="/menu/cartlist" component={CartList}/>
          <Route path="/menu/cartlist/orderdetail/:id" component={OrderDetail}/>
          {/* 时光子页面 */}
          {/* 取茶子页面 */}
          <Route path="/order/orderdetail/:id" component={OrderDetail}/>
          <Route path="/order/editcomment/:id" component={EditComment}/>
          {/* 我的子页面 */}
          <Route path="/mine/score" component={Score}/>
          <Route path="/mine/coupon" component={Coupon}/>
          <Route path="/mine/feedback" component={Feedback}/>
          <Route path="/mine/about" component={About}/>



          
          
        </Suspense>

        <Tabs/>

      </div>
    </Router>
  );
}

export default App;
