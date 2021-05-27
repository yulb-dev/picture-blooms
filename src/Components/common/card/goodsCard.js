import React, { Component } from 'react'
import { getUserMessage } from '../../../network/home'

class GoodsCard extends Component {
    constructor(props) {
        super(props)
        this.Myimg = React.createRef();
        this.state = { avatar: '', username: '' }
        getUserMessage(this.props.message.userid).then((data) => {
            this.setState({ ...data })
        })
    }

    render() {
        const { imgsrc, labels, title, content, comment, likesnum, ctime } = this.props.message
        let date = new Date(ctime)
        let color = ['#36a08a', '#5db4c7', '#e52e2e']
        return (
            <div className='GoodsCard pattern-diagonal-lines-lg'>
                <div className="imgBox">
                    <img src={imgsrc} alt='img' ref={this.Myimg} onLoad={this.imgIsOk.bind(this)} />
                </div>
                <div className='cardLabels'>{labels.map((item, index) => <span key={index} style={{ backgroundColor: color[index] }}>{item}</span>)}{`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`}</div>
                <h1 className='cardTitle'>{title}</h1>
                <p className='cardContent'>{content}</p>
                <div className='cardLikes'>
                    <svg t="1620569185645" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5348" width="20px" height="20px"><path d="M512 85.333333c235.637333 0 426.666667 191.029333 426.666667 426.666667S747.637333 938.666667 512 938.666667a424.778667 424.778667 0 0 1-219.125333-60.501334 2786.56 2786.56 0 0 0-20.053334-11.765333l-104.405333 28.48c-23.893333 6.506667-45.802667-15.413333-39.285333-39.296l28.437333-104.288c-11.008-18.688-18.218667-31.221333-21.802667-37.909333A424.885333 424.885333 0 0 1 85.333333 512C85.333333 276.362667 276.362667 85.333333 512 85.333333z m-102.218667 549.76a32 32 0 1 0-40.917333 49.216A223.178667 223.178667 0 0 0 512 736c52.970667 0 103.189333-18.485333 143.104-51.669333a32 32 0 1 0-40.906667-49.216A159.189333 159.189333 0 0 1 512 672a159.189333 159.189333 0 0 1-102.218667-36.906667z" p-id="5349"></path></svg>
                    {comment.length}
                    <svg t="1620569253332" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6766" width="22px" height="22px"><path d="M689.066667 170.666667c-40.533333 0-132.266667 19.2-177.066667 119.466666C467.2 189.866667 377.6 170.666667 334.933333 170.666667 211.2 170.666667 128 266.666667 128 373.333333 128 631.466667 512 853.333333 512 853.333333s384-221.866667 384-480c0-106.666667-83.2-202.666667-206.933333-202.666666z" p-id="6767"></path></svg>
                    {likesnum}
                </div>
                <div className='cardBto'>
                    <div>
                        <svg t="1620570632760" className="icon" viewBox="0 0 1072 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9030" width="18px" height="18px"><path d="M894.518 664.888c-68.635 0-124.721 36.712-150.81 93.733l-331.73-141.067a195.394 195.394 0 0 0 29.998-106.338c0-16.402-1.927-32.86-5.835-48.326l211.796-164.295c28.072 21.245 63.847 33.849 103.476 33.849 95.772 0 167.324-71.553 167.324-166.222C918.737 71.498 847.184 0 751.414 0S585.08 71.498 585.08 166.222c0 24.163 4.844 46.399 12.605 65.718L402.292 381.705c-38.638-57.957-102.485-98.522-175.029-98.522A214.107 214.107 0 0 0 12.603 496.74v0.935a214.107 214.107 0 0 0 214.66 214.548c44.528 0 86.084-11.559 119.988-32.805l380.99 162.37c4.844 89.826 74.471 156.535 166.277 156.535 95.772 0 166.334-71.553 166.334-166.222 0-94.724-71.553-167.212-166.278-167.212z" p-id="9031"></path></svg>
                    分享
                    </div>
                    <div>
                        来自于<span>{this.state.username}</span>
                        <img src={this.state.avatar} alt='useravatar' />
                    </div>
                </div>
            </div>
        )
    }
    imgIsOk() {
        //this.Myimg.current.clientWidth > this.Myimg.current.clientHeight ? this.Myimg.current.style.width = '100%' : this.Myimg.current.style.height = '100%'
    }

}


export default GoodsCard
