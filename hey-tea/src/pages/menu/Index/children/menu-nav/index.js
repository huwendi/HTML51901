import React from 'react'
import {connect} from 'react-redux'
import './style.scss'

const MenuNav = (props)=>{
    let {data, selectIndex, onChange} = props;
    return (
        <nav className="menu-nav">
        {
            data.map((item, index)=>(
                <li key={index} className={`nav-item border-bottom${index === selectIndex ? ' active': ''}`}
                    onClick={()=>onChange(index)}>
                    {item}
                </li>
            ))
        }
        </nav>
    )
}

export default connect()(MenuNav);
