import React, { Component } from 'react'
import Nav from './children/nav'
import Scroll from '../../../components/scroll'
import News from './children/news'
import {connect} from "react-redux"
import {actions} from '../../../store/modules/time'
class Time extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        }
    }
    
    render() {
        let {activeIndex} = this.state;
        return (
            <div id="time" className="page">
                <Nav activeIndex={activeIndex} onChange={this.handleChangeAction}/>
                <Scroll className="content">
                    <News data={this.props.newsData}/>
                </Scroll>
            </div>
        )
    }

    handleChangeAction = (index)=>{
        this.setState({activeIndex: index});
    }

    componentDidMount(){
        this.props.getNewsData();
    }
};

const mapStateToProps = (state)=>({
    // newsData: state.time.newsData
})

const mapDispatchToProps = (dispatch)=>({
    getNewsData(){
        let action = actions.requestTimeNewsData();
        dispatch(action);
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Time);
