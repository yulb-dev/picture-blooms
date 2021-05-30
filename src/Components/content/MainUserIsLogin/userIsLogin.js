import React, { Component } from 'react'
import './userIsLogin.scss'
import MainUserIsLogin from './MainUserIsLogin'
import Dynamic from '../../common/myselfModule/dynamic'
import MyselfModel from '../../common/myselfModule/idol'

function withSubscription(WrappedComponent, selectData) {
    return class extends Component {
        render() {
            return <WrappedComponent  {...this.props} />;
        }
    }
}


const Idol = withSubscription(MyselfModel,)
const Fans = withSubscription(MyselfModel,)

class UserIsLogin extends Component {
    constructor(props) {
        super(props)
        // this.ManuscriptPageDom = React.createRef()
        this.state = {
            show: ''
        }
    }
    render() {
        const { dynamic, idol, fans } = this.props.user
        switch (this.state.show) {
            case 'dynamic':
                return (
                    <div className='Myself-login'>
                        <Dynamic dynamic={dynamic} goMyselfMain={this.goMyselfMain.bind(this)} />
                    </div>
                )
            case 'idol':
                return (
                    <Idol idList={idol}
                        idol={[]}
                        iorf={'i'}
                        title={'我的关注'}
                        goMyselfMain={this.goMyselfMain.bind(this)}
                    />
                )
            case 'fans':
                return (
                    <Fans
                        idList={fans}
                        idol={idol}
                        iorf={'f'}
                        title={'我的粉丝'}
                        goMyselfMain={this.goMyselfMain.bind(this)} />
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
