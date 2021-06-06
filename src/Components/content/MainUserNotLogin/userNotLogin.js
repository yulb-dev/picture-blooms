import React, { Component } from 'react'
import imgsrc from '../../../image/message.png'


class UserNotLogin extends Component {
    render() {
        return (
            <div className='Myself-not-login'>
                <img src='http://39.107.98.159:6060/img/background/message.bdb554e0.png' alt='message' width='100%' />
                <p className='title'>来  Picture Blooms</p>
                <p className='title2'>看你想看</p>
                <div className='registered'>
                    <p onClick={this.toRegistered.bind(this, false)}>
                        注册
                    </p>
                </div>
                <span>已经有账号？</span>
                <div className='login'>
                    <p onClick={this.toRegistered.bind(this, true)}>
                        登录
                    </p>
                </div>
            </div>
        )
    }
    toRegistered(a) {
        this.props.toLogin(a)
    }

}

export default UserNotLogin
