import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions } from '../../../store/modules/menu'
import './style.scss'

import Header from '../../../components/header'
import Scroll from '../../../components/scroll'
import MenuNav from './children/menu-nav'
import MenuList from './children/menu-list'
import BuyIcon from "./children/buy-icon";

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectIndex: 3
        }
        this.listScroll = React.createRef();
    }
    
    render() {
        //console.log('render');
        let {menuNav, menuList} = this.props;
        let {selectIndex} = this.state;
        return (
            <div id="menu" className="page">

                <Header title='菜单'/>

                <div className="content">
                    <Scroll className="nav">
                        <MenuNav data={menuNav} selectIndex={selectIndex} onChange={this.handleChange}/>
                    </Scroll>
                    <Scroll className="list" ref={this.listScroll}>
                        <MenuList data={menuList} selectIndex={selectIndex}/>
                    </Scroll>
                    <BuyIcon onClick={this.goCartAction}/>
                </div>

            </div>
        )
    }

    componentDidMount() {
        this.props.getMenuData();
    }

    //菜单栏的导航发生变化
    handleChange = (index)=>{
        this.setState({ selectIndex: index }, ()=>{
            //console.log('dom更新完毕');
            this.listScroll.current.scrollTop();
        });
       // console.log('数据变化了');
    }

    //进入购物车页面
    goCartAction = ()=>{
        this.props.history.push('/menu/cartlist');
    }
    
}

const mapStateToProps = (state)=>({
    menuNav: (()=>{
        let newData = state.menu.menu.map(item=>{
            return item.categoryName
        })
        return newData;
    })(),
    menuList: (()=>{
        let newData = state.menu.menu.map(item=>{
            return item.spuList;
        })
        return newData;
    })()
});

const mapDispatchToProps = (dispatch)=>({
    //派发请求，获得菜单数据
    getMenuData(){
        let action = actions.requestMenuData();
        dispatch(action);
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(Menu);
