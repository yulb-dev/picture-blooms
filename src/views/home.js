import { Component } from 'react'
import { getCardList, isRefresh } from '../network/home'
import GoodsCardLIst from '../Components/content/MainCardList/GoodsCardList'
import HomeSearchBar from '../Components/content/MainhomeSearchBar/New'
import { OpenrequestBox, CLoserequestBox } from '../alertbox/BeforerequestBox'
import '../scss/home.scss'

class Home extends Component {
    constructor(props) {
        super(props)
        OpenrequestBox()
        this.state = {
            page: 1,
            cardList: []
        }
        getCardList(this.state.page).then((data) => {
            this.setState({ cardList: data })
            CLoserequestBox()
        })
    }
    render() {
        return (
            <div className={this.props.className}>
                <HomeSearchBar />
                <GoodsCardLIst cardList={this.state.cardList} refresh={this.refresh.bind(this)} />
            </div>
        );
    }
    refresh(value, refreshBox, goodsCardBOx) {
        if (value) {
            isRefresh().then((data) => {
                //数组头部插入
                let cardList = this.state.cardList
                for (let i = data.length - 1; i >= 0; i--) {
                    cardList.unshift(data[i])
                }
                this.setState({ cardList })
            })
            setTimeout(() => {
                refreshBox.current.style.animation = ''
                goodsCardBOx.current.style.transform = 'translateY(0)'
            }, 600);
        }
        else {
            setTimeout(() => {
                isRefresh().then((data) => {
                    //数组尾部插入
                    let cardList = this.state.cardList
                    for (let i = 0; i < data.length; i++) {
                        cardList.push(data[i])
                    }
                    refreshBox.current.style.animation = ''
                    goodsCardBOx.current.style.transform = 'translateY(0)'
                    this.setState({ cardList })
                })
            }, 600);
        }
    }
}

export default Home
