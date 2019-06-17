import React, { Component } from 'react'
import {connect} from 'react-redux'
import { actions } from '../../../store/modules/shop'

import Scroll from '../../../components/scroll'
import Header from '../../../components/header'
import HotPanel from './children/hot-panel'
import ListPanel from './children/list-panel'

class ShopList extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectCityInfo: {}
        }
    }
    render() {
        console.log('ShopList render');
        let { hotCitys, allShopList, history, setCurrentShop } = this.props;
        let { selectCityInfo } = this.state;

        let hotPanelProps = {
            data: hotCitys,
            onSelectCity: this.handleSelectCity
        };
        
        let listPanelProps = {
            data: allShopList, //所有城市数据
            select: selectCityInfo,//展开的城市
            onSelectCity: this.handleSelectCity, //处理展示收起的事件
            setCurrentShop: setCurrentShop,//设置选择店铺的事件
            back: history.goBack//返回上一页的事件
        }

        return (
            <div id="shop-list" className="page subpage">

                <Header title="选择店铺" back={history.goBack}/>

                <Scroll className="content">

                    <HotPanel {...hotPanelProps}/>

                    <ListPanel {...listPanelProps}/>

                </Scroll>

            </div>
        )
    }

    componentDidMount() {
        //请求店铺的数据
        this.props.getShopData();
    }

    //选择了热门城市, 所有城市列表中选择了城市
    handleSelectCity = (item)=>{
        //判断展开还是收起
        if(item.area === this.state.selectCityInfo.area){
            this.setState({selectCityInfo: {}});//收起
        }else{
            this.setState({selectCityInfo: item});//展开
        }
    }
    

}

const mapStateToProps = (state) => ({
    hotCitys: state.shop.hotCitys,
    allShopList: state.shop.allShopList
})

const mapDispatchToProps = (dispatch) => ({
    //请求店铺数据
    getShopData: ()=>{
        let action = actions.requestShopData();
        dispatch(action);
    },
    //设置选择的下单店铺
    setCurrentShop: (info)=>{
        let action = actions.setCurrentShop(info);
        dispatch(action);
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopList);