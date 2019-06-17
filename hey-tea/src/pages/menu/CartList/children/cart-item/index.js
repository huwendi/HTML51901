import React, {Component} from 'react'
import {connect} from 'react-redux'
import './style.scss'
import {actions } from '../../../../../store/modules/cart'

class CartItem extends Component{
    render(){
        let data = this.props.data;

        return (
            <div className="cart-item border-bottom">

                <div className="cart-item-wrap">
                    <div className="img">
                        <img src={data.imageUrl} alt=""/>
                    </div>
                    <div className="info">
                        <h3>{data.name}</h3>
                        <p>¥{data.price}</p>
                        <div>
                            <span className={data.count <= 1 ? 'disable': ''}
                            onClick={()=>this.props.reduce(data)}>-</span>
                            <span>{data.count}</span>
                            <span className={data.count >= 5 ? 'disable': ''}
                            onClick={()=>this.props.add(data)}>+</span>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state)=>({

})

const mapDispatchToProps = (dispatch)=>({
    add(info){
        let action = actions.addTeaAction(info);
        dispatch(action);
    },
    reduce(info){
        let action = actions.reduceTeaAction(info);
        dispatch(action);
    },
    delete(info){
        let action = actions.deleteTeaAction(info);
        dispatch(action);
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);