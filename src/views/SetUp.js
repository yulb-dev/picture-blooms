import React, { Component } from 'react'
import { isSetUp, isQuit } from '../network/registered'
import alertBox from '../alertbox/alertbox'

class SetUp extends Component {
    constructor(props) {
        super(props)
        if (this.props.location.query) {
            this.state = {
                name: this.props.user.name,
                introduction: this.props.user.introduction,
                avatar: this.props.user.avatar,
                id: this.props.user._id,
                file: null,
                errorPrompt: '',
                regName: /^[a-zA-Z0-9_-]{4,16}$/,
                gender: this.props.user.gender
            }
        }
        else {
            this.props.history.replace('/myself')
        }
    }
    render() {
        if (this.state) {
            return (
                <div className='setUp'>
                    <div className='top'>
                        <svg onClick={this.toBack.bind(this)} t="1621256688157" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3236"><path d="M781.566553 1011.699354L168.659015 540.690841c-20.402945-16.0254-20.402945-42.009075 0-58.034474L781.566553 11.647854c20.377345-16.0254 53.400932-16.0254 73.778278 0 20.377345 15.9998 20.377345 42.009075 0 58.008875L279.326431 511.686404l576.0184 442.004075c20.377345 15.9998 20.377345 41.983475 0 58.008875-20.377345 16.0254-53.400932 16.0254-73.778278 0z" p-id="3237"></path></svg>
                        <p>设置</p>
                    </div>
                    <div className='context'>
                        <div className='file'>
                            <img src={this.state.avatar} alt='avatar' />
                            <input type="file" id="file" onChange={this.inputChange.bind(this)} name="userAvatar" multiple accept="image/png, image/gif, image/jpeg" />
                            <p>点击修改头像</p>
                        </div>
                        <div className='message'>
                            <label htmlFor="name">姓名</label>
                            <input id='name' type='text' name='name' onBlur={this.judg.bind(this)} onChange={this.nameChange.bind(this)} value={this.state.name} />
                        </div>
                        <div className='radio'>
                            <span>性别</span>
                            <br />
                            <svg t="1622009428237" onClick={this.genderChange.bind(this, 1)} className={this.state.gender === 1 ? 'blue' : ''} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="825"><path d="M938.666667 0 512 0c-46.933333 0-85.333333 38.4-85.333333 85.333333 0 46.933333 38.4 85.333333 85.333333 85.333333l221.866667 0-217.6 217.6C465.066667 358.4 405.333333 341.333333 341.333333 341.333333c-187.733333 0-341.333333 153.6-341.333333 341.333333s153.6 341.333333 341.333333 341.333333 341.333333-153.6 341.333333-341.333333c0-64-17.066667-123.733333-46.933333-174.933333L853.333333 290.133333 853.333333 512c0 46.933333 38.4 85.333333 85.333333 85.333333s85.333333-38.4 85.333333-85.333333L1024 85.333333C1024 38.4 985.6 0 938.666667 0zM341.333333 853.333333c-93.866667 0-170.666667-76.8-170.666667-170.666667s76.8-170.666667 170.666667-170.666667 170.666667 76.8 170.666667 170.666667S435.2 853.333333 341.333333 853.333333z" p-id="826"></path></svg>
                            <svg t="1622010435135" onClick={this.genderChange.bind(this, 0)} className={this.state.gender === 0 ? 'pink' : ''} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5345"><path d="M768 682.666667l-170.666667 0 0-12.8c145.066667-38.4 256-170.666667 256-328.533333 0-187.733333-153.6-341.333333-341.333333-341.333333S170.666667 153.6 170.666667 341.333333c0 157.866667 110.933333 290.133333 256 328.533333L426.666667 682.666667 256 682.666667c-46.933333 0-85.333333 38.4-85.333333 85.333333 0 46.933333 38.4 85.333333 85.333333 85.333333l170.666667 0 0 85.333333c0 46.933333 38.4 85.333333 85.333333 85.333333s85.333333-38.4 85.333333-85.333333l0-85.333333 170.666667 0c46.933333 0 85.333333-38.4 85.333333-85.333333C853.333333 721.066667 814.933333 682.666667 768 682.666667zM341.333333 341.333333c0-93.866667 76.8-170.666667 170.666667-170.666667s170.666667 76.8 170.666667 170.666667-76.8 170.666667-170.666667 170.666667S341.333333 435.2 341.333333 341.333333z" p-id="5346"></path></svg>
                            <svg t="1622010626832" onClick={this.genderChange.bind(this, 2)} className={this.state.gender === 2 ? 'green' : ''} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8865" ><path d="M868.018201 392.930029h-79.379804V252.956975C789.432195 101.34155 665.070503 0 512.13208 0S234.567366 102.664546 234.567366 254.279972v138.650057h-79.379804A68.266631 68.266631 0 0 0 87.450129 460.932062v495.065377a68.266631 68.266631 0 0 0 68.531231 68.002032H868.018201a68.266631 68.266631 0 0 0 68.531231-68.002032V460.932062a68.266631 68.266631 0 0 0-68.531231-68.002033z m-317.519215 328.367789v108.221133a8.996378 8.996378 0 0 1-8.996378 8.996378h-59.005655a8.996378 8.996378 0 0 1-8.996377-8.996378v-108.221133a84.407192 84.407192 0 0 1-46.834085-74.881615 85.465589 85.465589 0 0 1 170.666579 0 83.877993 83.877993 0 0 1-46.834084 74.881615z m132.299673-326.515593H341.200902V243.695998c0-79.379804 76.73381-144.735843 170.931178-144.735842s170.931178 65.091439 170.931178 144.735842z" p-id="8866"></path></svg>
                        </div>
                        <div className='introduction'>
                            <label htmlFor="introduction">个性签名</label>
                            <textarea
                                id="introduction"
                                name="introduction"
                                rows="5"
                                cols="33"
                                maxLength="60"
                                spellCheck='true'
                                onChange={this.introductionChange.bind(this)}
                                value={this.state.introduction}
                            />
                        </div>
                        <div className='submit'>
                            <p>{this.state.errorPrompt}</p>
                            <button onClick={this.submit.bind(this)}>确定</button>
                        </div>
                        <p className='quit' onClick={this.quit.bind(this)}>退出</p>
                    </div>
                </div >
            )
        }
        else {
            return null
        }
    }
    toBack() {
        this.props.history.goBack()
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
    nameChange(event) {
        this.setState({ name: event.target.value });
    }
    introductionChange(event) {
        this.setState({ introduction: event.target.value });
    }
    judg() {
        if (!this.state.regName.test(this.state.name)) {
            this.setState({ errorPrompt: "用户名格式有误" })
            return
        }
        this.setState({ errorPrompt: '' })
    }
    genderChange(gender) {
        this.setState({ gender })
    }
    submit() {
        if (this.state.regName.test(this.state.username)) {
            let data = new FormData()
            data.append('userAvatar', this.state.file)
            data.append('name', this.state.name)
            data.append('gender', this.state.gender)
            data.append('introduction', this.state.introduction)
            data.append('id', this.state.id)
            isSetUp(data).then((data) => {
                if (data.keyValue) {
                    this.setState({ errorPrompt: "用户名已存在" })
                }
                else {
                    alertBox("修改成功！")
                    this.props.setUp(data)
                    this.props.history.replace('/myself')
                }
            })
        }
        else {
            this.setState({ errorPrompt: "用户名格式有误" })
        }
    }
    quit() {
        isQuit().then((data) => {
            alertBox("退出登录")
            this.props.increment(null)
            this.props.history.replace('/myself')
        })

    }
}
export default SetUp
