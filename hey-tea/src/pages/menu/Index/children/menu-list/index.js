import React, {Component} from 'react'
import {connect} from 'react-redux'
import './style.scss'
import {actions} from '../../../../../store/modules/cart'

/*
const MenuList = (props)=>{
    console.log(props);
    let data = (props.data.length > 0) ? props.data[props.selectIndex] : [];
    return (
        <ul className="menu-list">
        {
            data.map(item=>(
                <li key={item.id}>
                    {item.name}
                </li>
            ))
        }
        </ul>
    )
}
*/

class MenuList extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render(){
        let {data} = this.state;
        
        return (
            <ul className="menu-list">
            {
                data.map(item=>(
                    <li key={item.id} className="list-item border-bottom">
                        <div className="img">
                            <img src={item.imageUrl} alt=""/>
                        </div>
                        <div className="info">
                            <h3>{item.name}</h3>
                            <p>{item.desc}</p>
                            <p>
                                <span>¥{item.price}</span>
                                {/* //添加到购物车的点击事件 */}
                                <b className="iconfont icon-add" 
                                onClick={()=>this.props.add(item)}></b>
                            </p>
                        </div>
                    </li>
                ))
            }
            </ul>
        )
    }

    static getDerivedStateFromProps(props, state){
        //计算选中的菜单列表
        let data = (props.data.length > 0) ? props.data[props.selectIndex] : [];
        return {
            data
        };
    }
    
}

// 
const mapStateToProps = (state)=>({

})

const mapDispatchToProps = (dispatch)=>({
    add(info){
        let action = actions.addTeaAction(info);
        dispatch(action);
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(MenuList);


