import React, { Component } from 'react'
import { getUserMessage } from '../../../network/home'
import { Consumer } from "../../../App";
import { NavLink } from 'react-router-dom'

class GoodsCard extends Component {
    constructor(props) {
        super(props)
        this.Myimg = React.createRef();
        this.state = { useravatar: '', username: '' }
        getUserMessage(this.props.message.userid).then((data) => {
            this.setState({ ...data })
        })
    }

    render() {
        const { imgsrc, labels, title, content, comment, likesnum, ctime, userid } = this.props.message
        let date = new Date(ctime)
        let color = ['#36a08a', '#5db4c7', '#e52e2e', "#506172"]
        return (
            <Consumer>
                {
                    (history) => {
                        return (
                            <div
                                className='GoodsCard pattern-diagonal-lines-lg'
                                onClick={this.goDetails.bind(this, history)}
                            >
                                <div className='box'>
                                    <div className="imgBox">
                                        <div className='imBox-div'>
                                            <img src={imgsrc} alt='img' ref={this.Myimg} />
                                        </div>
                                    </div>
                                    <div className='cardLabels'>
                                        {labels.map((item, index) =>
                                            <span
                                                key={index}
                                                style={{ backgroundColor: color[index] }}
                                                onClick={this.goLabelsPage.bind(this, item, history)}
                                            >
                                                {item}
                                            </span>
                                        )}
                                        <span style={{ color: 'rgb(83, 83, 83)', fontSize: '14px' }}>{`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`}</span>
                                    </div>
                                    <h1 className='cardTitle'>{title}</h1>
                                    <p className='cardContent'>{content}</p>
                                    <div className='cardLikes'>
                                        <svg t="1622300893388" className='icon' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8014" width='20px' height='20px'><path d="M1015.296 381.715692c-8.743385-26.466462-31.350154-45.686154-58.368-49.860923l-263.955692-40.96L578.363077 42.692923C566.311385 16.620308 540.396308 0 512.039385 0S457.767385 16.620308 445.715692 42.692923L331.027692 290.894769l-263.955692 40.96C39.975385 336.029538 17.447385 355.249231 8.704 381.715692c-8.743385 26.466462-2.126769 55.689846 17.014154 75.539692L219.096615 658.510769 174.276923 937.668923c-4.489846 28.120615 7.168 56.241231 30.011077 72.782769C216.969846 1019.431385 231.699692 1024 246.508308 1024c12.130462 0 24.418462-3.150769 35.367385-9.216l230.084923-125.085538 230.084923 125.085538C753.152 1020.849231 765.361231 1024 777.570462 1024c14.808615 0 29.538462-4.568615 42.220308-13.548308 22.843077-16.541538 34.500923-44.662154 29.932308-72.782769L804.903385 658.510769l193.457231-201.255385C1017.422769 437.326769 1023.960615 408.182154 1015.296 381.715692z" p-id="8015"></path></svg>
                                        {likesnum}
                                        <svg t="1622300991384" className='icon' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9974" width='20px' height='20px'><path d="M827.68 762.56 529.44 762.56 289.28 929.76 289.28 762.56l-92.8 0c-82.08 0-148.48-66.56-148.48-148.48L48 242.88c0-82.08 66.56-148.48 148.48-148.48l631.2 0c82.08 0 148.48 66.56 148.48 148.48l0 371.36C976.16 696.16 909.6 762.56 827.68 762.56z" p-id="9975"></path><path d="M252.16 363.52l519.84 0c10.24 0 18.56-8.32 18.56-18.56s-8.32-18.56-18.56-18.56L252.16 326.4c-10.24 0-18.56 8.32-18.56 18.56S241.76 363.52 252.16 363.52zM771.84 474.88 252.16 474.88c-10.24 0-18.56 8.32-18.56 18.56 0 10.24 8.32 18.56 18.56 18.56l519.84 0c10.24 0 18.56-8.32 18.56-18.56C790.56 483.2 782.24 474.88 771.84 474.88z" p-id="9976"></path></svg>
                                        {comment.length}
                                    </div>
                                    <div className='cardBto' onClick={this.stop.bind(this)}>
                                        <div>
                                            <svg t="1620570632760" className="icon" viewBox="0 0 1072 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9030" width="18px" height="18px"><path d="M894.518 664.888c-68.635 0-124.721 36.712-150.81 93.733l-331.73-141.067a195.394 195.394 0 0 0 29.998-106.338c0-16.402-1.927-32.86-5.835-48.326l211.796-164.295c28.072 21.245 63.847 33.849 103.476 33.849 95.772 0 167.324-71.553 167.324-166.222C918.737 71.498 847.184 0 751.414 0S585.08 71.498 585.08 166.222c0 24.163 4.844 46.399 12.605 65.718L402.292 381.705c-38.638-57.957-102.485-98.522-175.029-98.522A214.107 214.107 0 0 0 12.603 496.74v0.935a214.107 214.107 0 0 0 214.66 214.548c44.528 0 86.084-11.559 119.988-32.805l380.99 162.37c4.844 89.826 74.471 156.535 166.277 156.535 95.772 0 166.334-71.553 166.334-166.222 0-94.724-71.553-167.212-166.278-167.212z" p-id="9031"></path></svg>
                    分享
                    </div>
                                        <NavLink to={`/personalSpace/${userid}`}>
                                            <p> 来自于</p>
                                            <span></span>
                                            <p>{this.state.username}</p>


                                            <img src={this.state.useravatar} alt='useravatar' />
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                }

            </Consumer>
        )
    }
    goLabelsPage(label, history, e) {
        e.stopPropagation()
        history.push(`/labelsPage/${label}`)
    }
    goDetails(history) {
        history.push(`/detailsPage/${this.props.message._id}`)
    }
    stop(e) {
        e.stopPropagation();
    }
}


export default GoodsCard
