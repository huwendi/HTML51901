import React from "react";
import './style.scss'
import {connect} from 'react-redux'

const HotPanel = (props) => {
  console.log('HotPanel render');
  return (
    <div className="hot-panel">
      <h4 className="title">热门城市:</h4>
      <ul className="list">
        {props.data.map(item => (
          <li className="item" key={item.area_id}
            onClick={()=>props.onSelectCity(item)}>
            {item.area}
          </li>
        ))}
      </ul>
    </div>
  );
};


// export default HotPanel;

// connect高阶组件，是一个函数。
// 参数是组件，返回值还是组件
export default connect()(HotPanel);


