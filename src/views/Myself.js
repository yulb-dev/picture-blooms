import React, { Component } from 'react'
import UserNotLogin from '../Components/content/MainUserNotLogin/userNotLogin'
import UserIsLogin from '../Components/content/MainUserIsLogin/userIsLogin'
import { getUser } from '../network/mySelf'
import '../scss/myself.scss'

class Myself extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isUser: true
        }
        if (!this.props.user) {
            getUser().then((data) => {
                if (data && !data.keyValue) {
                    this.props.increment(data)
                } else {
                    this.setState({ isUser: false })
                }
            })
        }
    }
    render() {
        if (this.props.user) {
            return (
                <UserIsLogin user={this.props.user} />
            )
        }
        else {
            if (this.state.isUser) {
                return (<div></div>)
            }
            return (
                <UserNotLogin toLogin={this.toLogin.bind(this)} />
            )
        }
    }
    toLogin(data) {
        if (data) {
            //登录
            this.props.history.push('/login')
        }
        else {
            //注册
            this.props.history.push('/registered')
        }
    }

}
export default Myself
