import React, { Component } from 'react'
import UserNotLogin from '../Components/content/MainUserNotLogin/userNotLogin'
import UserIsLogin from '../Components/content/MainUserIsLogin/userIsLogin'
import { getUser } from '../network/mySelf'
import '../scss/myself.scss'
import alertBox from '../alertbox/alertbox'

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
                    alertBox('登录成功！')
                } else {
                    this.setState({ isUser: false })
                }
            })
        }
    }
    render() {
        if (this.props.user) {
            return (
                <UserIsLogin
                    user={this.props.user}
                    back={this.back.bind(this)}
                    toSetUp={this.toSetUp.bind(this)}
                />
            )
        }
        else {
            if (this.state.isUser) {
                return (<div className='Myself-not-login'></div>)
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
    back() {
        this.props.history.goBack()
    }
    toSetUp() {
        this.props.history.push({ pathname: '/setUp', query: { myselfcome: true } })
    }

}
export default Myself
