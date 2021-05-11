import React, { Component } from 'react'
import GoodsCard from '../../common/card/goodsCard'
import './GoodsCardLIst.scss'

class GoodsCardLIst extends Component {
    constructor(props) {
        super(props)
        this.MyGoodsCardBOx = React.createRef();
        this.MyrefreshUpbox = React.createRef();
        this.MyrefreshDownbox = React.createRef();
        this.state = {
            startY: 0,
        }
        this.page = 0
        this.cardLength = 0
    }
    componentDidUpdate() {
        this.cardLength = this.props.cardList.length
    }
    render() {
        return (
            <div className='GoodsCardLIst' onTouchStart={this.GoodsCardLIstTouchStart.bind(this)} onTouchEnd={this.GoodsCardLIstTouchEnd.bind(this)} onTouchMove={this.GoodsCardLIstTouchMove.bind(this)}>
                <div className='GoodsCardBOx' ref={this.MyGoodsCardBOx}>
                    <div className='refreshBox'>
                        <svg t="1620727465234" ref={this.MyrefreshUpbox} className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10087" width="200" height="200"><path d="M511.582491 63.413262C265.134543 63.413262 64.62588 263.921925 64.62588 510.369873s200.508663 446.957635 446.957635 446.957635 446.957635-200.508663 446.957635-446.957635S758.031463 63.413262 511.582491 63.413262zM509.001713 751.859903c-98.517781 0-182.467775-62.623269-214.771505-150.056598l0.327458-0.134053c-2.007727-4.036943-3.38305-8.422833-3.38305-13.237489 0-16.647145 13.494339-30.142507 30.142507-30.142507 13.389962 0 24.358781 8.877181 28.2893 20.955264l0.422625-0.172939c23.269983 65.442478 85.645612 112.503307 158.972665 112.503307 93.106538 0 168.845523-75.738985 168.845523-168.845523s-75.738985-168.845523-168.845523-168.845523c-20.432355 0-39.874149 3.980661-58.013275 10.66899l21.248953 40.742936c2.486634 2.677992 4.0175 6.2831 4.0175 10.243295 0 8.417717-8.404414 14.921851-15.365966 15.07023-0.102331 0-0.206708 0-0.309038 0-0.220011 0-0.427742 0-0.647753-0.013303l-150.579507-6.463202c-5.372358-0.234337-10.229992-3.310396-12.716626-8.093329-2.486634-4.76963-2.236947-10.509355 0.647753-15.055904l80.890308-127.179564c2.8847-4.533246 8.006348-7.151887 13.365402-6.960529 5.372358 0.234337 10.227945 3.312442 12.71458 8.095375l18.580171 35.625382c26.629497-10.855232 55.683207-16.963347 86.168522-16.963347 126.338407 0 229.130537 102.791108 229.130537 229.130537S635.340119 751.859903 509.001713 751.859903z" p-id="10088"></path></svg>
                        松开刷新...
                    </div>
                    {this.props.cardList.map((item, index) =>
                        <GoodsCard key={item._id + index} message={item} />
                    )}
                    <div className='refreshBox'>
                        <svg ref={this.MyrefreshDownbox} t="1620727465234" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10087" width="200" height="200"><path d="M511.582491 63.413262C265.134543 63.413262 64.62588 263.921925 64.62588 510.369873s200.508663 446.957635 446.957635 446.957635 446.957635-200.508663 446.957635-446.957635S758.031463 63.413262 511.582491 63.413262zM509.001713 751.859903c-98.517781 0-182.467775-62.623269-214.771505-150.056598l0.327458-0.134053c-2.007727-4.036943-3.38305-8.422833-3.38305-13.237489 0-16.647145 13.494339-30.142507 30.142507-30.142507 13.389962 0 24.358781 8.877181 28.2893 20.955264l0.422625-0.172939c23.269983 65.442478 85.645612 112.503307 158.972665 112.503307 93.106538 0 168.845523-75.738985 168.845523-168.845523s-75.738985-168.845523-168.845523-168.845523c-20.432355 0-39.874149 3.980661-58.013275 10.66899l21.248953 40.742936c2.486634 2.677992 4.0175 6.2831 4.0175 10.243295 0 8.417717-8.404414 14.921851-15.365966 15.07023-0.102331 0-0.206708 0-0.309038 0-0.220011 0-0.427742 0-0.647753-0.013303l-150.579507-6.463202c-5.372358-0.234337-10.229992-3.310396-12.716626-8.093329-2.486634-4.76963-2.236947-10.509355 0.647753-15.055904l80.890308-127.179564c2.8847-4.533246 8.006348-7.151887 13.365402-6.960529 5.372358 0.234337 10.227945 3.312442 12.71458 8.095375l18.580171 35.625382c26.629497-10.855232 55.683207-16.963347 86.168522-16.963347 126.338407 0 229.130537 102.791108 229.130537 229.130537S635.340119 751.859903 509.001713 751.859903z" p-id="10088"></path></svg>
                        松开刷新...
                    </div>
                </div>
            </div>
        )
    }
    GoodsCardLIstTouchStart(e) {
        this.setState({ startY: e.changedTouches.item(0).clientY })
    }
    GoodsCardLIstTouchEnd(e) {
        if (this.state.startY - e.changedTouches.item(0).clientY >= 60) {
            //上拉刷新
            if (this.page === this.cardLength - 1) {
                this.MyrefreshDownbox.current.style.animation = 'turn 1s linear infinite'
                this.props.refresh(0, this.MyrefreshDownbox, this.MyGoodsCardBOx)
                return
            }
            else {
                this.MyGoodsCardBOx.current.style.top = `${(-this.MyGoodsCardBOx.current.clientHeight - 18) * ++this.page - 50}px`
            }
        }
        if (this.state.startY - e.changedTouches.item(0).clientY <= -60) {
            //下拉刷新
            if (this.page === 0) {
                this.MyrefreshUpbox.current.style.animation = 'turn 1s linear infinite'
                this.props.refresh(1, this.MyrefreshUpbox, this.MyGoodsCardBOx)
                return;
            }
            else {
                this.MyGoodsCardBOx.current.style.top = `${(-this.MyGoodsCardBOx.current.clientHeight - 18) * --this.page - 50}px`
            }
        }

        this.MyGoodsCardBOx.current.style.transform = `translateY(0)`;
    }
    GoodsCardLIstTouchMove(e) {
        this.MyGoodsCardBOx.current.style.transform = `translateY(${e.changedTouches.item(0).clientY - this.state.startY}px)`;
        this.setState({ endY: e.changedTouches.item(0).clientY })
    }
}


export default GoodsCardLIst
