import React, { Component } from 'react'
import { isLogin } from '../network/login'
import '../scss/Login.scss'
import notLoginImg from '../image/notLogin.png'
import beforeRouteUpdate from '../router/beforeRouteUpdate'
import promptBox from '../alertbox/alertbox'

class Login extends Component {
    constructor(props) {
        super(props)
        beforeRouteUpdate.call(this)
        this.state = {
            username: '',
            password: '',
            errorPrompt: ''
        }
    }
    render() {
        return (
            <div className='Login'>
                <img src={notLoginImg} alt='notLoginImg' width='100%' />
                <div className='message'>
                    <input type='text' name='username' onChange={this.nameChange.bind(this)} placeholder='用户名' value={this.state.username} />
                </div>
                <div className='message'>
                    <input type='password' name='password' onChange={this.passwordChange.bind(this)} placeholder='密码' value={this.state.password} />
                </div>
                <div className='submit'>
                    <span>{this.state.errorPrompt}</span>
                    <button onClick={this.submit.bind(this)}>立即登录</button>
                </div>
            </div>
        )
    }
    passwordChange(event) {
        this.setState({ password: event.target.value });
    }
    nameChange(event) {
        this.setState({ username: event.target.value });
    }
    submit() {
        if (this.state.username.replace(/^\s*|\s*$/g, "") && this.state.password.replace(/^\s*|\s*$/g, "")) {
            isLogin({ name: this.state.username, password: this.state.password }).then((data) => {
                if (data && !data.keyValue) {
                    promptBox('欢迎回来：' + data.name)
                    this.props.increment(data)
                    this.props.history.replace('/myself')
                } else {
                    this.setState({ errorPrompt: '用户名或密码错误' })
                }
            })
            this.setState({ errorPrompt: '' })
        } else {
            this.setState({ errorPrompt: '请输入有效字符' })
        }
    }

}
export default Login
