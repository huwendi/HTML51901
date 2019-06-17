import React from 'react'
import './style.scss'

const Nav = (props)=>{
    let {activeIndex} = props;
    let list = ['动态', '评价'];
    return (
        <div className="header">
            <nav className="time-nav border-bottom">
            {
                list.map((item, index)=>(
                    <li className={"item "+(activeIndex===index?'active':'')}
                        key={index}
                        onClick={()=>props.onChange(index)}>
                        {item}
                    </li>
                ))
            }
            </nav>
        </div>
    )
}

export default Nav;