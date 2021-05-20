import React, { Component } from 'react'
import { setUpbeforeRouteUpdate } from '../router/beforeRouteUpdate'

class SetUp extends Component {
    constructor(props) {
        super(props)
        setUpbeforeRouteUpdate.call(this)
    }
    render() {
        if (this.props.user) {
            return (<div className='setUp'>我是设置页面</div>)
        }
        else {
            return null
        }
    }
}
export default SetUp
