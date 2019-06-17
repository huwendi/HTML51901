import React, { Component } from 'react'
import './style.scss'

export default class Banner extends Component{
    constructor(props) {
        super(props);
        this.bannerDOM = React.createRef();
    }
    
    render(){
        return (
            <div className="banner">
                <div ref={this.bannerDOM} className="swiper-container">
                    <div className="swiper-wrapper">
                    {
                        this.props.data.map(item=>(
                            <div className="swiper-slide" key={item.id}>
                                <img src={item.picUrl} alt=''/>
                            </div>
                        ))
                    }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        //创建轮播图
        this.swiper = new window.Swiper(this.bannerDOM.current, {
            loop: true,
            pagination: '.swiper-pagination',
        });
    }

    componentDidUpdate(){
        //更新轮播图
        this.swiper.update();
        //重新循环
        this.swiper.reLoop();
        //确定正确的位置
        this.swiper.slideTo(1, 0);

    }
    
}
