import React, { Component } from 'react'
import TopBar from '../Components/common/top/Top'
import Card from '../Components/common/personalSpaceCard/personalSpaceCard'
import { getUser } from '../network/personalSpace'
import '../scss/PersonalSpace.scss'


class PersonalSpace extends Component {
    constructor(props) {
        super(props)
        if (this.props.user && this.props.user._id === this.props.match.params.userid) {
            this.props.history.replace('/myself')
            return
        }
        getUser(this.props.match.params.userid).then((data) => {
            if (data.keyValue) {
                throw data
            }
            this.setState({ ...data })
        })
    }
    render() {
        if (!this.state) {
            return null
        }
        const { avatar, name, dynamic, idol, fans, introduction } = this.state
        return (
            <div className='PersonalSpace'>
                <TopBar title='Home' goBack={this.goBack.bind(this)} />
                <div className='Personal-information'>
                    <img src={avatar} alt='avatar' />
                    <h6>你好，我是 {name}</h6>
                    <div className='labels'>
                        <span>{dynamic.length}动态</span>
                        <span>{idol.length}关注</span>
                        <span>{fans.length}粉丝</span>
                    </div>
                    <p>{introduction}</p>
                </div>
                <div className='crad'>
                    {
                        dynamic.map((id) => (
                            <Card cardId={id} key={id} goDetails={this.goDetails.bind(this)} />
                        ))
                    }
                </div>
            </div>
        )
    }
    goDetails(cardId) {
        this.props.history.push({ pathname: '/detailsPage', query: { cardId } })
    }
    goBack() {
        this.props.history.goBack()
    }
}

export default PersonalSpace