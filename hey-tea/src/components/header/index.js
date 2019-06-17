import React from 'react'
import './style.scss'

//函数声明组件，无状态组件
export default (props)=>{
    return (
        <header className="app-header">
            {
                props.back &&
                <span className="back iconfont icon-fanhui" onClick={()=>{
                    props.back();
                }}>
                </span>
            }
            
            <h1 className="title">{props.title}</h1>
            
        </header>
    )
}