import React, { Component } from 'react'
import './userIsLogin.scss'
import MainUserIsLogin from './MainUserIsLogin'
import Dynamic from '../../common/myselfModule/dynamic'
import Idol from '../../common/myselfModule/idol'
import Fans from '../../common/myselfModule/fans'


class UserIsLogin extends Component {
    constructor(props) {
        super(props)
        this.ManuscriptPageDom = React.createRef()
        this.state = {
            show: ''
        }
    }

    render() {
        switch (this.state.show) {
            case 'dynamic':
                return (
                    <div className='Myself-login'>
                        <Dynamic dynamic={this.props.user.dynamic} goMyselfMain={this.goMyselfMain.bind(this)} />
                    </div>
                )
            case 'idol':
                return (
                    <div className='Myself-login'>
                        <Idol idol={this.props.user.idol} goMyselfMain={this.goMyselfMain.bind(this)} />
                    </div>
                )
            case 'fans':
                return (
                    <div className='Myself-login'>
                        <Fans />
                    </div>
                )
            default:
                return (
                    <div className='Myself-login'>
                        <MainUserIsLogin
                            {...this.props.user}
                            back={this.back.bind(this)}
                            toSetUp={this.toSetUp.bind(this)}
                            show={this.show.bind(this)}
                        />

                    </div>
                )
        }
    }
    toSetUp() {
        this.props.toSetUp()
    }
    back() {
        this.props.back()
    }
    show(show) {
        this.setState({ show })
    }
    goMyselfMain() {
        this.setState({ show: '' })
    }

}

export default UserIsLogin
