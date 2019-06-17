import React, { Component } from 'react'
import './style.scss'

export default class Scroll extends Component{
    constructor(props){
        super(props);
        this.scrollDOM = React.createRef();
    }
    render(){
        return (
            <div ref={this.scrollDOM} className={"scroll-wrap " + this.props.className}>
                <div className="scroll">
                    {/* <slot/> */}

                    {this.props.children}

                </div>
            </div>
        )
    }

    componentDidMount(){
        // 创建滚动视图
        this.scroll = new window.IScroll(
            this.scrollDOM.current,
            {

            }
        );
        // 监听滚动事件
        this.scroll.on('beforeScrollStart', ()=>{
            this.scroll.refresh();
        })
    }

    scrollTop(){
        // if(this.scroll){
        //     this.scroll.scrollTo(0, 0, 0);
        // }
        this.scroll && this.scroll.scrollTo(0, 0, 0);
    }
}