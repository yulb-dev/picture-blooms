import React, { Component } from 'react'
import CommentItem from '../Components/common/commentItem/cpmmentItem'
import { getMessage } from '../network/details'
import { addComment, addFavorite } from '../network/details'
import { delIdol, pushIdol } from '../network/mySelf'
import { delFavorite } from '../network/mySelf'
import alertBox from '../alertbox/alertbox'
import '../scss/DetailsPage.scss'

class DetailsPage extends Component {
    constructor(props) {
        super(props)
        if (!this.props.location.query) {
            this.props.history.replace('/home')
        }
        else {
            this.state = {
                isborder: false,
                isShow: false,
                value: ''
            }
            const { cardId } = this.props.location.query
            getMessage(cardId).then((data) => {
                this.setState({ ...data })
            })
        }
        this.Mybody = React.createRef()
    }
    render() {
        if (this.props.location.query) {
            if (this.state.labels) {
                const { _id, value, useravatar, username, ctime, title, imgsrc, labels, content, likesnum, comment, isShow, isborder, userid } = this.state
                const date = new Date(ctime)
                const date1 = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
                if (this.props.user) {
                    let iff = this.props.user.favorites.indexOf(_id) > -1
                    if (this.props.user._id === userid) {
                        this.judge = {
                            isMyself: true,
                            isIdol: false,
                            isFavorite: iff ? true : false
                        }
                    }
                    else {
                        if (this.props.user.idol.indexOf(userid) > -1) {
                            this.judge = {
                                isMyself: false,
                                isIdol: true,
                                isFavorite: iff ? true : false
                            }
                        }
                        else {
                            this.judge = {
                                isMyself: false,
                                isIdol: false,
                                isFavorite: iff ? true : false
                            }
                        }
                    }
                }
                else {
                    this.judge = {
                        isMyself: false,
                        isIdol: false,
                        isFavorite: false
                    }
                }
                return (
                    <div className='detailsPage' onScroll={this.onScroll.bind(this)} ref={this.Mybody}>
                        <div className={isborder ? 'top isborder' : 'top'}>
                            <svg t="1622294932600" onClick={this.goBack.bind(this)} className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2867"><path d="M398.259 312.832V85.348L0.007 483.503 398.259 881.82V648.502c284.4 0 483.565 91.004 625.735 290.15-56.838-284.472-227.502-568.82-625.735-625.82" p-id="2868"></path></svg>
                            <p><span>H</span>ome</p>
                        </div>
                        <div className='box'>
                            <div className='content'>
                                <div className='box2'>
                                    <div className='img'>
                                        <img src={imgsrc} alt='img' />
                                    </div>
                                    <div className='title'>
                                        {
                                            labels.map((item, index) => (
                                                <span className='labels' key={index}>{item}</span>
                                            ))
                                        }
                                        <h4>{title}</h4>
                                        <div className='useravatar'>
                                            <img src={useravatar} alt='useravatar' />
                                            <p>{username}</p>
                                            <span></span>
                                            <p>{date1}</p>
                                            <button
                                                style={{ display: this.judge.isMyself ? 'none' : 'flex' }}
                                                className={this.judge.isIdol ? 'isIdol' : ''}
                                                onClick={this.toIdol.bind(this)}
                                            >
                                                {this.judge.isIdol ? '已关注' : '关注'}
                                            </button>
                                        </div>
                                    </div>
                                    <div className='text'>
                                        <p>{content}</p>
                                    </div>
                                </div>
                                <div className='btnicon'>
                                    <svg className={this.judge.isFavorite ? '' : 'noFavorite'} onClick={this.addFavorite.bind(this)} t="1622300893388" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8014"><path d="M1015.296 381.715692c-8.743385-26.466462-31.350154-45.686154-58.368-49.860923l-263.955692-40.96L578.363077 42.692923C566.311385 16.620308 540.396308 0 512.039385 0S457.767385 16.620308 445.715692 42.692923L331.027692 290.894769l-263.955692 40.96C39.975385 336.029538 17.447385 355.249231 8.704 381.715692c-8.743385 26.466462-2.126769 55.689846 17.014154 75.539692L219.096615 658.510769 174.276923 937.668923c-4.489846 28.120615 7.168 56.241231 30.011077 72.782769C216.969846 1019.431385 231.699692 1024 246.508308 1024c12.130462 0 24.418462-3.150769 35.367385-9.216l230.084923-125.085538 230.084923 125.085538C753.152 1020.849231 765.361231 1024 777.570462 1024c14.808615 0 29.538462-4.568615 42.220308-13.548308 22.843077-16.541538 34.500923-44.662154 29.932308-72.782769L804.903385 658.510769l193.457231-201.255385C1017.422769 437.326769 1023.960615 408.182154 1015.296 381.715692z" p-id="8015"></path></svg>
                                    <span className={this.judge.isFavorite ? '' : 'noFavorite'}>{likesnum}</span>
                                    <svg t="1622300991384" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9974"><path d="M827.68 762.56 529.44 762.56 289.28 929.76 289.28 762.56l-92.8 0c-82.08 0-148.48-66.56-148.48-148.48L48 242.88c0-82.08 66.56-148.48 148.48-148.48l631.2 0c82.08 0 148.48 66.56 148.48 148.48l0 371.36C976.16 696.16 909.6 762.56 827.68 762.56z" p-id="9975"></path><path d="M252.16 363.52l519.84 0c10.24 0 18.56-8.32 18.56-18.56s-8.32-18.56-18.56-18.56L252.16 326.4c-10.24 0-18.56 8.32-18.56 18.56S241.76 363.52 252.16 363.52zM771.84 474.88 252.16 474.88c-10.24 0-18.56 8.32-18.56 18.56 0 10.24 8.32 18.56 18.56 18.56l519.84 0c10.24 0 18.56-8.32 18.56-18.56C790.56 483.2 782.24 474.88 771.84 474.88z" p-id="9976"></path></svg>
                                    {comment.length}
                                </div>
                            </div>
                        </div>
                        <div className='comments'>
                            <div className='comments-box'>
                                <div className='title'>
                                    <h5>{comment.length} 评论</h5>
                                </div>
                                {
                                    comment.map((item) => (
                                        <CommentItem commentId={item} key={item} />
                                    ))
                                }
                                <div className='post-comment'>
                                    <h5>发表评论</h5>
                                    <p>在这里发表你的评论</p>
                                    <div>
                                        <textarea
                                            cols='30'
                                            row='5'
                                            name='message'
                                            value={value}
                                            onChange={this.valueChange.bind(this)}
                                            placeholder='说点什么...'
                                            maxLength='100'
                                        ></textarea>
                                    </div>
                                    <button onClick={this.postAcomment.bind(this)}>发表评论</button>
                                </div>
                            </div>
                        </div>
                        <div className='toTop' style={{ display: isShow ? 'flex' : 'none' }} onClick={this.toTop.bind(this)}>
                            <svg t="1622340193300" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11469"><path d="M752.64 376.32 546.56 202.88c-19.2-16-50.56-16-69.76 0L270.72 376.32C240 402.56 261.76 447.36 305.28 447.36L384 447.36C384 447.36 384 448 384 448l0 320c0 35.2 28.8 64 64 64l128 0c35.2 0 64-28.8 64-64L640 448c0 0 0-0.64 0-0.64l78.08 0C761.6 447.36 783.36 402.56 752.64 376.32z" p-id="11470"></path></svg>
                        </div>
                    </div>
                )
            }
            else {
                return null
            }
        }
        else {
            return null
        }
    }
    addFavorite() {
        if (this.props.user) {
            if (this.judge.isFavorite) {
                //删除收藏
                let i = this.props.user.favorites.indexOf(this.state._id)
                this.props.deleteFavorite(i)
                delFavorite({ userid: this.props.user._id, cardid: this.state._id }).then((data) => {
                    if (data.keyValue) {
                        throw (data)
                    }
                    let likesnum = this.state.likesnum
                    likesnum += -1
                    this.setState({ likesnum })
                    alertBox('取消收藏')
                })
            }
            else {
                //收藏
                addFavorite({ userid: this.props.user._id, cardid: this.state._id }).then((data) => {
                    if (data.keyValue) {
                        throw (data)
                    }
                    this.props.becomeFavorite(this.state._id)
                    let likesnum = this.state.likesnum
                    likesnum += 1
                    this.setState({ likesnum })
                    alertBox('已收藏')
                })
            }
        }
        else {
            alertBox('请登录')
            this.props.history.push('/myself')
        }
    }
    toIdol() {
        if (this.props.user) {
            let i = this.props.user.idol.indexOf(this.state.userid)
            if (i > -1) {
                this.props.deleteIdol(i)
                alertBox("取消关注")
                delIdol({ userid: this.props.user._id, idolid: this.state.userid }).then((data) => {
                    if (data.keyValue) {
                        throw (data)
                    }
                })
            }
            else {
                //关注
                this.props.becomeIdol(this.state.userid)
                alertBox("已关注")
                pushIdol({ userid: this.props.user._id, idolid: this.state.userid }).then((data) => {
                    if (data.keyValue) {
                        throw (data)
                    }
                })
            }
        }
        else {
            alertBox('请登录')
            this.props.history.push('/myself')
        }

    }
    postAcomment() {
        if (this.props.user) {
            if (this.state.value && this.state.value.replace(/^\s*|\s*$/g, "")) {
                let data = {
                    userid: this.props.user._id,
                    content: this.state.value,
                    cardid: this.state._id
                }
                addComment(data).then((commentid) => {
                    let { comment } = this.state
                    comment.push(commentid)
                    this.setState({ comment })
                    this.setState({ value: '' })
                    alertBox('评论成功！')
                })
            }
            else {
                alert('请输入有效值')
            }
        }
        else {
            alertBox('请登录')
            this.props.history.push('/myself')
        }

    }
    valueChange(e) {
        this.setState({ value: e.target.value });
    }
    toTop() {
        this.Mybody.current.scrollTop = 0
    }
    goBack() {
        this.props.history.goBack()
    }
    onScroll(e) {
        if (e.target.scrollTop >= 55) {
            this.setState({ isborder: true })
        }
        else {
            this.setState({ isborder: false })
        }
        if (e.target.scrollTop >= 220) {
            this.setState({ isShow: true })
        }
        else {
            this.setState({ isShow: false })
        }
    }
}

export default DetailsPage