import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class NotFind extends Component {
    render() {
        return (
            <div id="not-find" className="page subpage">
                <h1>404</h1>
                <Link to="/">返回首页</Link>
            </div>
        )
    }
}
