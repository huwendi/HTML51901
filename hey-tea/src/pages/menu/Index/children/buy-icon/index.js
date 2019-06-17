import React, {Component} from "react";
import { connect } from "react-redux";
import './style.scss';

class BuyIcon extends Component{
    constructor(props) {
        super(props);
        this.dom = React.createRef();
    }
    
    render(){
        return (
            <div 
                ref={this.dom}
                className="buy iconfont icon-caigou" 
                onClick={this.props.onClick}>
            </div>
        )
    }

    componentDidMount() {
        let dom = this.dom.current;


        //获得起始的位置
        let startX = 20;
        let startY = 340;
        //偏移量
        let offsetX = 0;
        let offsetY = 0;
        dom.addEventListener('touchstart', (ev)=>{
            //开始触碰，记录起始点
            let startTouch = ev.changedTouches[0];
            let moveAction = (ev)=>{
                //正在移动，或者当前的位置
                let moveTouch = ev.changedTouches[0];
                let tmpX = moveTouch.clientX - startTouch.clientX + startX;
                let tmpY = moveTouch.clientY - startTouch.clientY + startY;
                //控制边界
                if(tmpY > 0 && tmpY < (document.documentElement.offsetHeight - 40 - 49 - 44)){
                    offsetY = tmpY;
                    dom.style.top = offsetY + 'px';
                }
                if(tmpX > 0 && tmpX < document.documentElement.offsetWidth - 54){
                    offsetX = tmpX;
                    dom.style.left = offsetX + 'px';
                }
                
            };

            let endAction = ()=>{
                //记录停止的位置
                startX = offsetX;
                startY = offsetY;
                //移除事件监听
                dom.removeEventListener('touchmove', moveAction);                        
                dom.removeEventListener('touchend', endAction);                        
            };

            //添加事件监听
            dom.addEventListener('touchmove', moveAction);
            dom.addEventListener('touchend', endAction);
        });

        

        
        

    }
    
}


export default connect()(BuyIcon);