import React, { Component } from "react";
import './style.scss'
import { connect } from "react-redux";

class Com extends Component{
    
    render(){
        console.log('list render');
        let {area, store } = this.props.info;
        let cName = this.props.value?'show':'hide';
        return (
            <div>
                <h3 className={"city-name " + cName} onClick={this.triggerAction}>
                    <span>{area}</span>
                    <span className="iconfont icon-jiantouyou"></span>
                </h3>
                <ul className={"store-list " + cName}>
                {
                    store.map((item, index)=>(
                        <li className="store-item" key={index} onClick={()=>this.selectShopAction(item)}>
                            {item.name}
                        </li>
                    ))
                }
                </ul>
            </div>
        )
    }   

    //点击展示该城市店铺
    triggerAction = ()=>{
        //将点击的数据传入外部（父）组件
        this.props.onChange({
            area: this.props.info.area,
            area_id: this.props.info.area_id
        });
    }

    // 选择了店铺
    selectShopAction = (store) => {
        //派发数据给全局的store-shop
        this.props.setCurrentShop(store);
        // 返回上一页
        this.props.back();
    }

    // shouldComponentUpdate(newProps){
    //     let isChange = false;
    //     Object.entries(newProps).forEach(([key, newValue])=>{
    //         let oldValue = this.props[key];
    //         if(newValue !== oldValue){
    //             isChange = true;
    //         }
    //     })
    //     return isChange;
    // }

}

let List = connect()(Com);

class ListPanel extends Component{

    render(){
        let {data, select, setCurrentShop, back} = this.props;
        // data = [data[0]];
        // if(data.length > 0){
        
        //     data = [data[0]];

        // }
        return (
            <div className="list-panel border-top">
            <h4 className="title">所有城市:</h4>
            {
                data.map(item=>{
                    let bool = item.area === select.area;
                    let listProps = {
                        info: item, //一个城市的所有店铺信息
                        value: bool, //是否展开店铺列表
                        onChange: this.handleSelectCity,
                        setCurrentShop,
                        back
                    };
                    return (
                        <List key={item.area_id} {...listProps} />
                    )
                })
            }
            </div>
        );
        
    }

    handleSelectCity = (info)=>{
        this.props.onSelectCity(info);
    }
}

export default ListPanel;
