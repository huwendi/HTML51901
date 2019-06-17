import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'
const HomeList = ()=>{
    let list = [
        {id: 1, name: '立即购买', path: '/menu'},
        {id: 2, name: '我的订单', path: '/order'},
        {id: 3, name: '喜茶时光', path: '/time', state: {type: '动态'}},
        {id: 4, name: '查看评价', path: '/time', state: {type: '评价'}},
        {id: 5, name: '我的优惠', path: '/home/coupon'}
    ]
    return (
        <ul className="home-list">
        {
            list.map(item=>(
                <Link className="item border-bottom" key={item.id} to={item.path}>
                    <span>{item.name}</span>
                    <span className="iconfont icon-youjiantou"></span>
                </Link>
            ))
        }
        </ul>
    )

}

export default HomeList;