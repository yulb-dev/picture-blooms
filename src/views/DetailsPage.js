import React, { Component } from 'react'
import CommentItem from '../Components/common/commentItem/cpmmentItem'
import TopBar from '../Components/common/top/Top'
import alertBox from '../alertbox/alertbox'
import { getMessage } from '../network/details'
import { addComment, addFavorite } from '../network/details'
import { delIdol, pushIdol } from '../network/mySelf'
import { delFavorite } from '../network/mySelf'
import '../scss/DetailsPage.scss'

class DetailsPage extends Component {
    constructor(props) {
        super(props)
        if (!this.props.match.params.cardid) {
            this.props.history.replace('/home')
            return
        }
        else {
            this.state = {
                isborder: false,
                value: ''
            }
            const { cardid } = this.props.match.params
            getMessage(cardid).then(({ card, comments }) => {
                if (!card.notdel) {
                    alertBox('文章已删除')
                    this.props.history.replace('/myself')
                    return
                }
                this.setState({ ...card, comments })
            })
        }
    }
    render() {
        if (this.state.labels) {
            const { _id, value, ctime, title, imgsrc, labels, content, likesnum, userid, comments } = this.state
            const { name, avatar } = userid
            const date = new Date(ctime)
            const date1 = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
            if (this.props.user) {
                let iff = this.props.user.favorites.indexOf(_id) > -1
                if (this.props.user._id === userid._id) {
                    this.judge = {
                        isMyself: true,
                        isIdol: false,
                        isFavorite: iff ? true : false
                    }
                }
                else {
                    if (this.props.user.idol.indexOf(userid._id) > -1) {
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
                <div className='detailsPage'>
                    <TopBar title='Back' />
                    < div className='box' >
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
                                        <img src={avatar} alt='useravatar' />
                                        <p>{name}</p>
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
                                {comments.length}
                            </div>
                        </div>
                    </div >
                    <div className='comments'>
                        <div className='comments-box'>
                            <div className='title'>
                                <h5>{comments.length} 评论</h5>
                            </div>
                            {
                                comments.map((item) => (
                                    <CommentItem
                                        goPersonalSpace={this.goPersonalSpace.bind(this)}
                                        {...item}
                                        key={item._id}
                                    />
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
                </div >
            )
        }
        else {
            return (
                <div className='detailsPage'></div>
            )
        }
    }
    goPersonalSpace(userid) {
        this.props.history.push(`/personalSpace/${userid}`)
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
            const { _id } = this.state.userid
            let i = this.props.user.idol.indexOf(_id)
            if (i > -1) {
                this.props.deleteIdol(i)
                alertBox("取消关注")
                delIdol({ userid: this.props.user._id, idolid: _id }).then((data) => {
                    if (data.keyValue) {
                        throw (data)
                    }
                })
            }
            else {
                //关注
                this.props.becomeIdol(_id)
                alertBox("已关注")
                pushIdol({ userid: this.props.user._id, idolid: _id }).then((data) => {
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
                const { avatar, name, _id } = this.props.user
                let data = {
                    userid: _id,
                    content: this.state.value,
                    cardid: this.state._id
                }
                addComment(data).then((data) => {
                    data.userid = {
                        name,
                        avatar,
                        _id
                    }
                    let { comments } = this.state
                    comments.unshift(data)
                    this.setState({ comments })
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
}

export default DetailsPage