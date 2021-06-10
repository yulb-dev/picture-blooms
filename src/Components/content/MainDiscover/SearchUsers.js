import React, { Component } from 'react'
import UserCard from '../../common/userCard/UserCard'
import DiscoverSearch from '../../common/DiscoverSearch/DiscoverSearch'
import TopBar from '../../common/top/Top'
import Card from '../../common/personalSpaceCard/personalSpaceCard'
// import wln from '../../../image/wuliannan.png'
import { getUser } from '../../../network/discoverPage'
import './MainSearchUsers.scss'

class SearchUsers extends Component {
    constructor(props) {
        super(props)
        this.MyResultBox = React.createRef()
        this.state = {
            wln: 'http://39.107.98.159:6060/img/background/wuliannan.png',
            userList: [],
            cardList: [],
            articleList: [],
            i: 0,
            searchValue: ''
        }
    }
    render() {
        const { userList, i, searchValue, cardList, articleList, wln } = this.state
        return (
            <div className='MainSearchUsers'>
                <TopBar title='Back' />
                <DiscoverSearch
                    i={i}
                    searchValue={searchValue}
                    inputChange={this.inputChange.bind(this)}
                    goSearchUsers={this.goSearchUsers.bind(this)}
                    goChange={this.goChange.bind(this)}
                />
                <div className='result-box' ref={this.MyResultBox}>
                    <div className='result-user'>
                        {
                            userList.map((item) => (
                                <UserCard
                                    {...item}
                                    key={item._id}
                                />
                            ))
                        }
                        {
                            userList.length ? null : (
                                <img className='wln' src={wln} alt='wln' />
                            )
                        }
                    </div>
                    <div className='result-user' style={{ paddingTop: '30px' }}>
                        {
                            cardList.map((item) => (
                                <Card
                                    {...item}
                                    name={item.userid.name}
                                    avatar={item.userid.avatar}
                                    key={item._id}
                                />
                            ))
                        }
                        {
                            cardList.length ? null : (
                                <img className='wln' src={wln} alt='wln' />
                            )
                        }
                    </div>
                    <div className='result-user' style={{ paddingTop: '30px' }}>
                        {
                            articleList.map((item) => (
                                <Card
                                    {...item}
                                    name={item.userid.name}
                                    avatar={item.userid.avatar}
                                    key={item._id}
                                />
                            ))
                        }
                        {
                            articleList.length ? null : (
                                <img className='wln' src={wln} alt='wln' />
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
    goChange(i) {
        const { searchValue } = this.state
        let value = searchValue.replace(/\s/g, "")
        this.setState({ i })
        if (value) {
            getUser(searchValue).then(({ userList, cardList, articleList }) => {
                this.setState({ userList, cardList, articleList })
            })
        }
        this.MyResultBox.current.style.transform = `translateX(-${i * 100}%)`;
    }
    goSearchUsers() {
        const { searchValue } = this.state
        let value = searchValue.replace(/\s/g, "")
        if (value) {
            getUser(searchValue).then(({ userList, cardList, articleList }) => {
                this.setState({ userList, cardList, articleList })
            })
        }
        else {
            this.setState({ searchValue: '' })
            alert('请输入有效值')
        }
    }
    inputChange(event) {
        this.setState({ searchValue: event.target.value });
        let value = event.target.value.replace(/\s/g, "")
        if (!value) {
            this.setState({ userList: [], cardList: [] })
        }
    }
}

export default SearchUsers