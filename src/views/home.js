import { Component } from 'react'
import { getCardList } from '../network/home'
import GoodsCardLIst from '../Components/content/MainCardList/GoodsCardList'
import HomeSearchBar from '../Components/content/MainhomeSearchBar/MainhomeSearchBar'
import '../scss/home.scss'


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 1,
            cardList: []
        }
        getCardList(this.state.page).then((data) => {
            this.setState({ cardList: data })
        })
    }
    render() {
        return (
            <div className="home">
                <HomeSearchBar />
                <GoodsCardLIst cardList={this.state.cardList} />
            </div>
        );
    }
}

export default Home
