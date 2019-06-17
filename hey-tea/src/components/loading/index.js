import React from 'react'
import './style.scss'
import img from '../../assets/loading.gif'

const Loading = ()=>{
    return (
        <div className="loading">
            <img src={img} alt=""/>
            {/* <img src='/img/loading.gif' alt=""/> */}
        </div>
    )
}

export default Loading;