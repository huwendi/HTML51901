import React, { Component } from 'react'

export default class ErrorBoundary extends Component{
    constructor(...rest){
        super(...rest);
        this.state = {
            hasError: false
        }
    }
    render(){
        console.log(this.state);
        if(!this.state.hasError){
            //显示App界面
            return this.props.children;
        }else{
            return (
                <div>
                    异常错误
                    <button>返回首页</button>
                </div>
            )
        }
    }

    // componentDidCatch(error, info){
    //     console.log('捕获到了异常');
    //     //用户友好提示
    //     this.setState({hasError : true});
    //     //将错误信息（用户信息用户设备，错误信息）发送给后台
    // }


    static getDerivedStateFromError(error, info){
        console.log('捕获到了异常1');
        //用户友好提示
        return {hasError: true}
        //将错误信息（用户信息用户设备，错误信息）发送给后台
    }
}