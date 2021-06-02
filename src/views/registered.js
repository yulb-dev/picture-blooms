import React, { Component } from 'react'
import { isRegistered } from '../network/registered'
import Notuploaded from '../image/avatar.png'
import '../scss/registered.scss'
import beforeRouteUpdate from '../router/beforeRouteUpdate'
import alertBox from '../alertbox/alertbox'

class Registered extends Component {
    constructor(props) {
        super(props)
        beforeRouteUpdate.call(this)
        this.state = {
            avatar: Notuploaded,
            regName: /^[a-zA-Z0-9_-]{4,16}$/,
            regPassword: /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/,
            username: '',
            password: '',
            file: null,
            errorPrompt: ''
        }
    }
    render() {
        return (
            <div className='main-registered'>
                <h2>Welcome Back,</h2>
                <p>欢迎来到注册页</p>
                <div className='file'>
                    <img src={this.state.avatar} alt='avatar' />
                    <input type="file" id="file" onChange={this.inputChange.bind(this)} name="userAvatar" multiple accept="image/png, image/gif, image/jpeg" />
                </div>
                <div className='message'>
                    <input type='text' name='username' onBlur={this.judg.bind(this)} onChange={this.nameChange.bind(this)} placeholder='用户名' value={this.state.username} />
                </div>
                <div className='message'>
                    <input type='password' name='password' onBlur={this.judg.bind(this)} onChange={this.passwordChange.bind(this)} placeholder='密码' value={this.state.password} />
                </div>
                <div className='submit'>
                    <p>{this.state.errorPrompt}</p>
                    <button onClick={this.submit.bind(this)}>立即注册</button>
                </div>
                <div className='prompt'>
                    <div>
                        <p>用户须知：</p>
                        <ul>
                            <li>
                                显示为默认头像，点击图片更换头像
                        </li>
                            <li>
                                用户名：中文，英文字母，数字及下划线组成，长度4-16位
                        </li>
                            <li>
                                密码：最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符（例如 @）
                        </li>
                        </ul>
                    </div>
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
        if (this.state.regPassword.test(this.state.password) && this.state.regName.test(this.state.username)) {

            let data = new FormData()
            data.append('userAvatar', this.state.file)
            data.append('username', this.state.username)
            data.append('password', this.state.password)
            isRegistered(data).then((data) => {
                if (data.keyValue) {
                    this.setState({ errorPrompt: "用户名已存在" })
                }
                else {
                    alertBox('注册成功！')
                    this.props.increment(data)
                    this.props.history.replace('/myself')
                }
            })
        }
        else {
            this.setState({ errorPrompt: "用户名或密码格式有误" })
        }
    }
    judg() {
        if (!this.state.regPassword.test(this.state.password)) {
            this.setState({ errorPrompt: "密码格式有误" })
            return
        }
        if (!this.state.regName.test(this.state.username)) {
            this.setState({ errorPrompt: "用户名格式有误" })
            return
        }
        this.setState({ errorPrompt: '' })

    }
    inputChange(e) {
        // 用户上传头像后修改头像内容
        let file = e.target.files[0]
        if (file) {
            this.setState({ file: file })
            let reader = new FileReader();
            reader.addEventListener('load', () => {
                this.setState({ avatar: reader.result })
            }, false);
            reader.readAsDataURL(file);
        }
    }
}

export default Registered
