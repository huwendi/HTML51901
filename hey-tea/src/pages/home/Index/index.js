import React, { Component, Fragment } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { actions } from '../../../store/modules/home'

import Scroll from '../../../components/scroll'
import Header from '../../../components/header'
import Banner from './children/banner'
import HomeList from './children/home-list'

class Home extends Component {
    render() {
        return (
            <div id="home" className="page">
                <Header title='首页'/>
                
                {/* <Scroll content={
                    <Fragment>
                        <Banner data={this.props.banner}/>
                        <Link to="/home/shop_list">test</Link>
                        <HomeList/>
                    </Fragment>
                }>
                </Scroll> */}
                <Scroll className="content">

                    <Banner data={this.props.banner}/>
                    <Link to="/home/shop_list">{this.props.currentShop || '正在定位...'}</Link>
                    <HomeList/>

                </Scroll>

            </div>
        )
    }
    componentDidMount() {   
        this.props.getBannerData();
    }
    
}

const mapStateToProps = (state)=>({
    banner: state.home.banner,
    currentShop: state.shop.currentShop.name
});

const mapDispatchToProps = (dispatch)=>({
    //派发请求，获得banner数据
    getBannerData(){
        let action = actions.requestHomeBannerData();
        dispatch(action);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
