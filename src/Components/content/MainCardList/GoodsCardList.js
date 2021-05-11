import React, { Component } from 'react'
import GoodsCard from '../../common/card/goodsCard'
import './GoodsCardLIst.scss'

class GoodsCardLIst extends Component {
    constructor(props) {
        super(props)
        this.MyGoodsCardBOx = React.createRef();
        this.state = {
            startY: 0,
        }
        this.page = 1
    }
    componentDidMount() {
    }
    render() {
        return (
            <div className='GoodsCardLIst' onTouchStart={this.GoodsCardLIstTouchStart.bind(this)} onTouchEnd={this.GoodsCardLIstTouchEnd.bind(this)} onTouchMove={this.GoodsCardLIstTouchMove.bind(this)}>
                <div className='GoodsCardBOx' ref={this.MyGoodsCardBOx}>
                    {this.props.cardList.map((item) =>
                        <GoodsCard key={item._id} message={item} />
                    )}
                </div>
            </div>
        )
    }
    GoodsCardLIstTouchStart(e) {
        this.setState({ startY: e.changedTouches.item(0).clientY })

    }
    GoodsCardLIstTouchEnd(e) {
        if (this.state.startY - e.changedTouches.item(0).clientY >= 60) {

            this.MyGoodsCardBOx.current.style.top = `${(-this.MyGoodsCardBOx.current.clientHeight - 18) * this.page++}px`
        }
        if (this.state.startY - e.changedTouches.item(0).clientY <= -60) {

            this.MyGoodsCardBOx.current.style.top = `${(-this.MyGoodsCardBOx.current.clientHeight - 18) * --this.page}px`
        }
        this.MyGoodsCardBOx.current.style.transform = `translateY(0)`;
    }
    GoodsCardLIstTouchMove(e) {
        this.MyGoodsCardBOx.current.style.transform = `translateY(${e.changedTouches.item(0).clientY - this.state.startY}px)`;
        this.setState({ endY: e.changedTouches.item(0).clientY })
    }
}


export default GoodsCardLIst
