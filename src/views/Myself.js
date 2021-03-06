import React, { Component } from 'react'
import UserNotLogin from '../Components/content/MainUserNotLogin/userNotLogin'
import ListItem from '../Components/common/border/ListItem'
import MainDynamic from '../Components/common/myselfModule/dynamic'
import MyselfModel from '../Components/common/myselfModule/IdolAndFans'
import { getUser } from '../network/mySelf'
import { Route, Switch } from 'react-router-dom';
import '../scss/myself.scss'
import '../Components/content/MainUserIsLogin/userIsLogin.scss'
import alertBox from '../alertbox/alertbox'
import withSubscription from '../Components/Hcomponents/MyselfModel'

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
            const { avatar, name, introduction, dynamic, idol, fans, favorites } = this.props.user
            return (
                <div className='Myself-login'>
                    <div className='myself-main'>
                        <div className='top'>
                            <svg onClick={this.back.bind(this)} t="1621256688157" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3236"><path d="M781.566553 1011.699354L168.659015 540.690841c-20.402945-16.0254-20.402945-42.009075 0-58.034474L781.566553 11.647854c20.377345-16.0254 53.400932-16.0254 73.778278 0 20.377345 15.9998 20.377345 42.009075 0 58.008875L279.326431 511.686404l576.0184 442.004075c20.377345 15.9998 20.377345 41.983475 0 58.008875-20.377345 16.0254-53.400932 16.0254-73.778278 0z" p-id="3237"></path></svg>
                            <svg onClick={this.toSetUp.bind(this)} t="1621256333148" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2396"><path d="M512.25928 704c-108.8 0-192-83.2-192-192s83.2-192 192-192 192 83.2 192 192-83.2 192-192 192z m0-320c-70.4 0-128 57.6-128 128s57.6 128 128 128 128-57.6 128-128-57.6-128-128-128z" p-id="2397"></path><path d="M640.25928 1024H384.25928c-19.2 0-32-12.8-32-32v-121.6c-25.6-12.8-51.2-25.6-70.4-38.4l-102.4 64c-12.8 6.4-32 6.4-44.8-12.8l-128-224C-6.14072 640 0.25928 620.8 19.45928 614.4l102.4-64v-76.8l-102.4-64C0.25928 403.2-6.14072 384 6.65928 364.8l128-224c6.4-12.8 25.6-19.2 44.8-6.4l102.4 64c19.2-12.8 44.8-32 70.4-38.4V32c0-19.2 12.8-32 32-32h256c19.2 0 32 12.8 32 32v121.6c25.6 12.8 51.2 25.6 70.4 38.4l102.4-64c12.8-6.4 32-6.4 44.8 12.8l128 224c12.8 19.2 6.4 38.4-12.8 44.8l-102.4 64v76.8l102.4 64c12.8 6.4 19.2 25.6 12.8 44.8l-128 224c-6.4 12.8-25.6 19.2-44.8 12.8l-102.4-64c-19.2 12.8-44.8 32-70.4 38.4V992c0 19.2-12.8 32-32 32z m-224-64h192v-108.8c0-12.8 6.4-25.6 19.2-32 32-12.8 64-32 89.6-51.2 12.8-6.4 25.6-6.4 38.4 0l96 57.6 96-166.4-96-57.6c-12.8-12.8-19.2-25.6-12.8-38.4 0-19.2 6.4-32 6.4-51.2s0-32-6.4-51.2c0-12.8 6.4-25.6 12.8-32l96-57.6-96-166.4-96 57.6c-12.8 6.4-25.6 6.4-38.4 0-25.6-19.2-57.6-38.4-89.6-51.2-12.8-12.8-19.2-25.6-19.2-38.4V64H416.25928v108.8c0 12.8-6.4 25.6-19.2 32-32 12.8-64 32-89.6 51.2-12.8 6.4-25.6 6.4-38.4 0l-96-51.2-96 166.4 96 57.6c12.8 6.4 19.2 19.2 12.8 32 0 19.2-6.4 32-6.4 51.2 0 19.2 0 32 6.4 51.2 6.4 12.8 0 25.6-12.8 32l-96 57.6 96 166.4 96-57.6c12.8-6.4 25.6-6.4 38.4 0 25.6 19.2 57.6 38.4 89.6 51.2 12.8 6.4 19.2 19.2 19.2 32V960z" p-id="2398"></path></svg>
                        </div>
                        <div className='main-information'>
                            <img src={avatar} alt='useravatar' />
                            <p>{name}</p>
                            <p>{introduction}</p>
                        </div>
                        <div className='other-information'>
                            <div onClick={this.goDynamic.bind(this)}><h3>{dynamic.length}</h3><p>动态</p></div>
                            <div onClick={this.goIdol.bind(this)}><h3>{idol.length}</h3><p>关注</p></div>
                            <div onClick={this.goFans.bind(this)}><h3>{fans.length}</h3><p>粉丝</p></div>
                        </div>
                        <div className='sticky-note'>
                            <div className='sticky-note-top'>
                                <div className='left'>
                                    <svg t="1621344936892" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6342"><path d="M511.3 175.4l66.3 134.3c27.5 55.7 80.6 94.3 142 103.2l148.2 21.5-107.2 104.5c-44.5 43.3-64.7 105.8-54.2 167l25.3 147.6-132.5-69.7c-27-14.2-57.3-21.7-87.8-21.7s-60.8 7.5-87.8 21.7L291 853.5l25.3-147.6c10.5-61.2-9.8-123.6-54.2-167L154.9 434.4 303 412.9c61.4-8.9 114.5-47.5 142-103.2l66.3-134.3m0-95.9c-24 0-48.1 12.5-60.4 37.6l-77.6 157.2c-15.8 32.1-46.4 54.3-81.8 59.4L118 358.9c-55.3 8-77.3 76-37.3 114.9l125.5 122.4c25.6 25 37.3 60.9 31.2 96.1l-29.6 172.8c-7.5 43.6 27.1 78.9 66.4 78.9 10.4 0 21.1-2.5 31.4-7.9l155.2-81.6c15.8-8.3 33.2-12.5 50.5-12.5s34.7 4.2 50.5 12.5L717 936.2c10.3 5.4 21 7.9 31.4 7.9 39.3 0 73.9-35.4 66.4-78.9l-29.6-172.8c-6-35.2 5.6-71.2 31.2-96.1L942 473.9c40-39 17.9-106.9-37.3-114.9l-173.5-25.2c-35.4-5.1-66-27.4-81.8-59.4l-77.6-157.2c-12.4-25.2-36.4-37.7-60.5-37.7z" p-id="6343"></path></svg>
                         我的收藏
                    </div>
                                <div className='right'>
                                    <p>{`[${favorites.length}]`}</p>
                                </div>
                            </div>
                            <div className="todo-list">
                                {favorites.map((id) => (
                                    <ListItem cardId={id} key={id} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <Switch>
                        <Route path="/myself/dynamic" component={MainDynamic} />
                        <Route path="/myself/idol" component={withSubscription(MyselfModel, 0)} />
                        <Route path="/myself/fans" component={withSubscription(MyselfModel, 1)} />
                    </Switch>
                </div>
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
    goDynamic() {
        this.props.history.push('/myself/dynamic')
    }
    goIdol() {
        this.props.history.push('/myself/idol')
    }
    goFans() {
        this.props.history.push('/myself/fans')
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
