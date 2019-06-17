import React, { Component } from 'react'
import {connect} from 'react-redux'
import Header from '../../../components/header'
import Scroll from '../../../components/scroll'
import './style.scss'
import CartItem from './children/cart-item'

class CartList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        let {data} = this.props;
        return (
            <div id="cart-list" className="page subpage">
                {/* 头部 */}
                <Header back={this.props.history.goBack} title="购物车"/>
                <Scroll className="content">
                {
                    data.map(item=>(
                        <CartItem key={item.id} data={item}/>
                    ))
                }
                </Scroll>
                {/* 底部 */}
                <div className="tool border-top">
                    <div className="tip">
                        <p>合计：<span>¥{this.state.count}</span></p>
                        <p>新用户优惠</p>
                    </div>
                    <div className="order-btn">下单</div>
                </div>
            </div>
        )
    }

    static getDerivedStateFromProps(props){
        //计算总价
        let data = props.data;
        let tmp = 0;
        data.forEach(item=>{
            tmp += item.price*item.count;
        })
        return {
            count: tmp
        }
    }

}


const mapStateToProps = (state)=>({
    data: state.cart.data
})

const mapDispatchToProps = (dispatch)=>({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(CartList);