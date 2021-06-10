import React, { Component } from 'react'
import Card from '../../common/personalSpaceCard/personalSpaceCard'
import { getDiscoverPage } from '../../../network/discoverPage'

class MainDiscover extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cardList: [],
            labelsList: []
        }
        getDiscoverPage().then((data) => {
            this.setState({ ...data })
        })
    }
    render() {
        const { labelsList, cardList } = this.state
        return (
            <>
                <div className='top'>
                    <div className='search-bar' onClick={this.goSearch.bind(this)}>
                        <input
                            type='search'
                            placeholder='你在找什么?'
                        />
                        <button>搜索🔍</button>
                    </div>
                    <div className='label-box'>
                        <div className='refresh-box'>
                            <p>
                                热门标签：
                        </p>
                            <p className='refresh' onClick={this.LabelsRefresh.bind(this)}>
                                <svg t="1623079213103" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6981"><path d="M896 198.4 896 198.4l0 179.2 0 0c0 19.2-6.4 32-19.2 44.8-12.8 12.8-32 19.2-44.8 19.2l0 0-179.2 0 0 0c-19.2 0-32-6.4-44.8-19.2-25.6-25.6-25.6-64 0-89.6C620.8 320 633.6 313.6 652.8 313.6l0 0 25.6 0C627.2 275.2 576 256 518.4 256 441.6 256 377.6 281.6 332.8 332.8l0 0c-25.6 25.6-64 25.6-89.6 0-25.6-25.6-25.6-64 0-89.6l0 0C313.6 172.8 409.6 128 518.4 128c96 0 185.6 38.4 249.6 96L768 198.4l0 0c0-19.2 6.4-32 19.2-44.8 25.6-25.6 64-25.6 89.6 0C889.6 160 896 179.2 896 198.4zM416 691.2c-12.8 12.8-32 19.2-44.8 19.2l0 0L352 710.4C396.8 748.8 448 768 505.6 768c70.4 0 134.4-25.6 179.2-76.8l0 0c25.6-25.6 64-25.6 89.6 0 25.6 25.6 25.6 64 0 89.6l0 0C710.4 851.2 614.4 896 505.6 896c-96 0-185.6-38.4-249.6-96l0 32 0 0c0 19.2-6.4 32-19.2 44.8-25.6 25.6-64 25.6-89.6 0C134.4 864 128 844.8 128 825.6l0 0 0-179.2 0 0c0-19.2 6.4-32 19.2-44.8C160 588.8 172.8 582.4 192 582.4l0 0 179.2 0 0 0c19.2 0 32 6.4 44.8 19.2C441.6 627.2 441.6 665.6 416 691.2z" p-id="6982"></path></svg>换一批
                        </p>
                        </div>
                        {
                            labelsList.map((item, i) => (
                                <span
                                    key={i}
                                    onClick={this.goLabelsPage.bind(this, item.value)}
                                >
                                    {item.value}
                                </span>
                            ))
                        }
                    </div>
                </div>
                <div className='dynamic-box'>
                    <div className='refresh-box trans'>
                        <p>
                            热门文章：
                        </p>
                        <p className='refresh' onClick={this.DynamicRefresh.bind(this)}>
                            <svg t="1623079213103" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6981"><path d="M896 198.4 896 198.4l0 179.2 0 0c0 19.2-6.4 32-19.2 44.8-12.8 12.8-32 19.2-44.8 19.2l0 0-179.2 0 0 0c-19.2 0-32-6.4-44.8-19.2-25.6-25.6-25.6-64 0-89.6C620.8 320 633.6 313.6 652.8 313.6l0 0 25.6 0C627.2 275.2 576 256 518.4 256 441.6 256 377.6 281.6 332.8 332.8l0 0c-25.6 25.6-64 25.6-89.6 0-25.6-25.6-25.6-64 0-89.6l0 0C313.6 172.8 409.6 128 518.4 128c96 0 185.6 38.4 249.6 96L768 198.4l0 0c0-19.2 6.4-32 19.2-44.8 25.6-25.6 64-25.6 89.6 0C889.6 160 896 179.2 896 198.4zM416 691.2c-12.8 12.8-32 19.2-44.8 19.2l0 0L352 710.4C396.8 748.8 448 768 505.6 768c70.4 0 134.4-25.6 179.2-76.8l0 0c25.6-25.6 64-25.6 89.6 0 25.6 25.6 25.6 64 0 89.6l0 0C710.4 851.2 614.4 896 505.6 896c-96 0-185.6-38.4-249.6-96l0 32 0 0c0 19.2-6.4 32-19.2 44.8-25.6 25.6-64 25.6-89.6 0C134.4 864 128 844.8 128 825.6l0 0 0-179.2 0 0c0-19.2 6.4-32 19.2-44.8C160 588.8 172.8 582.4 192 582.4l0 0 179.2 0 0 0c19.2 0 32 6.4 44.8 19.2C441.6 627.2 441.6 665.6 416 691.2z" p-id="6982"></path></svg>换一批
                        </p>
                    </div>
                    {
                        cardList.map((item) => (
                            <Card
                                {...item}
                                name={item.userid.name}
                                avatar={item.userid.avatar}
                                key={item._id}
                                goDetailsPage={this.goDetailsPage.bind(this)}
                            />
                        ))
                    }
                </div>
            </>
        )
    }
    goDetailsPage(id) {
        this.props.history.push(`/discover/detailsPage/${id}`)
    }
    goSearch(e) {
        e.preventDefault();
        this.props.history.push('/discover/searchUsers')
    }
    goLabelsPage(label) {
        this.props.history.push(`/discover/label/${label}`)
    }
    DynamicRefresh() {
        getDiscoverPage().then(({ cardList }) => {
            this.setState({ cardList })
        })
    }
    LabelsRefresh() {
        getDiscoverPage().then(({ labelsList }) => {
            this.setState({ labelsList })
        })
    }
}

export default MainDiscover