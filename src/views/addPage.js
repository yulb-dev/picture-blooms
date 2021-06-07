import React, { Component } from 'react'
import HomeSearchBar from '../Components/content/MainhomeSearchBar/New'
import { getUser } from '../network/mySelf'
import { pushCard } from '../network/registered'
import alertBox from '../alertbox/alertbox'
import '../scss/AddPage.scss'


class AddPage extends Component {
    constructor(props) {
        super(props)
        this.Labelinput = React.createRef()
        this.state = {
            imgsrc: 'http://39.107.98.159:6060/img/background/imgUpdate.4ac83675.png',
            file: null,
            title: '',
            content: '',
            labels: [],
            labelsText: '',
            isSpin: false,
        }
        if (!this.props.user) {
            getUser().then((data) => {
                if (data && !data.keyValue) {
                    this.props.increment(data)
                }
            })
        }
    }
    render() {
        if (this.props.user) {
            const { imgsrc, title, content, labels, labelsText, isSpin } = this.state
            return (
                <div className='AddPage'>
                    <HomeSearchBar />
                    <div className='topimg'>
                        <input type="file" id="file" onChange={this.inputChange.bind(this)} name="userAvatar" multiple accept="image/png, image/gif, image/jpeg" />
                        <img src={imgsrc} alt='img' />
                    </div>
                    <div className='form-content'>
                        <div className='labels-box'>
                            <div className='top'>
                                <p>标签</p>
                            </div>
                            <div className='bto'>
                                {
                                    labels.map((item, i) => (
                                        <span key={i} className='outer'>
                                            <span onClick={this.delLabels.bind(this, i)}>
                                                <svg t="1622463734086" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5381"><path d="M568.6 512l346.6-346.6c15.6-15.6 15.6-40.9 0-56.6-15.6-15.6-40.9-15.6-56.6 0L512 455.4 165.4 108.9c-15.6-15.6-40.9-15.6-56.6 0-15.6 15.6-15.6 40.9 0 56.6L455.4 512 108.9 858.6c-15.6 15.6-15.6 40.9 0 56.6 7.8 7.8 18 11.7 28.3 11.7s20.5-3.9 28.3-11.7L512 568.6l346.6 346.6c7.8 7.8 18 11.7 28.3 11.7s20.5-3.9 28.3-11.7c15.6-15.6 15.6-40.9 0-56.6L568.6 512z" p-id="5382"></path></svg>
                                            </span>
                                            {item}
                                        </span>
                                    ))
                                }
                                <div className='addBox'>
                                    <input
                                        className={isSpin ? 'open' : ''}
                                        type="text"
                                        name='labelsText'
                                        maxLength='8'
                                        value={labelsText}
                                        onChange={this.valueChange.bind(this, 'labelsText')}
                                        ref={this.Labelinput}
                                        onKeyDown={this.onKeyDown.bind(this)}
                                    />
                                    <svg onClick={this.isOpen.bind(this)} t="1622450554269" className={isSpin ? 'spin' : ''} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3066"><path d="M874.24 150.016C777.6 53.376 648.96 0.256 512 0.256s-265.6 53.12-362.24 149.76c-199.68 199.68-199.68 524.16 0 723.84 96.64 96.64 225.28 149.76 362.24 149.76s265.6-53.12 362.24-149.76c96.64-96.64 149.76-224.64 149.76-361.6s-53.12-265.6-149.76-362.24z m-72.32 652.16c-77.44 76.8-180.48 119.68-289.92 119.68-109.44 0-212.48-42.88-289.92-119.68-160-160-160-419.84 0-579.2 77.44-77.44 180.48-119.68 289.92-119.68 109.44 0 212.48 42.88 289.92 119.68 77.44 77.44 119.68 180.48 119.68 289.92 0 109.44-42.88 211.84-119.68 289.28z m-85.12-341.12h-153.6v-153.6c0-28.16-23.04-51.2-51.2-51.2s-51.2 23.04-51.2 51.2v153.6h-153.6c-28.16 0-51.2 23.04-51.2 51.2s23.04 51.2 51.2 51.2h153.6v153.6c0 28.16 23.04 51.2 51.2 51.2s51.2-23.04 51.2-51.2v-153.6h153.6c28.16 0 51.2-23.04 51.2-51.2s-23.04-51.2-51.2-51.2z" p-id="3067"></path></svg>

                                </div>
                            </div>
                        </div>
                        <div className='content-box'>
                            <label htmlFor='title'>标题</label>
                            <input
                                className='text'
                                type='text'
                                name='title'
                                id='title'
                                value={title}
                                placeholder='...'
                                onChange={this.valueChange.bind(this, 'title')}
                            />
                        </div>
                        <div className='content-box'>
                            <label htmlFor='content'>内容</label>
                            <textarea
                                className='text'
                                name='content'
                                id='content'
                                value={content}
                                cols='30'
                                rows='5'
                                placeholder='...'
                                onChange={this.valueChange.bind(this, 'content')}
                            ></textarea>
                        </div>
                        <button onClick={this.publishAnArticle.bind(this)}>发表文章</button>
                    </div>
                </div >
            )
        }
        else {
            return (
                <div className='AddPage'>
                    <img src='http://39.107.98.159:6060/img/background/message.bdb554e0.png' className='bgImage' alt='bgImage' />
                    <p className='notLogin' onClick={this.toLogin.bind(this)}>先去登录吧</p>
                </div>
            )
        }
    }
    publishAnArticle() {
        const { title, file, labels, content } = this.state
        if (!file) {
            alert('请上传图片！')
            return
        }
        if (labels.length < 1) {
            alert('添加标签！')
            return
        }
        if (labels.length > 4) {
            alert('标签过多！')
            return
        }
        if (!title.replace(/\s/g, "")) {
            alert('请规范标题！')
            return
        }
        if (!content.replace(/\s/g, "")) {
            alert('请规范内容！')
            return
        }
        let data = new FormData()
        data.append('title', title)
        data.append('img', file)
        data.append('labels', labels)
        data.append('content', content)
        data.append('userid', this.props.user._id)
        pushCard(data).then((data) => {
            if (data.keyValue) {
                throw (data)
            }
            else {
                this.props.publishAnArticle(data)
                this.props.history.push('/myself')
                alertBox('发表成功！')
            }
        })
    }
    delLabels(i) {
        let { labels } = this.state
        labels.splice(i, 1)
        this.setState({ labels })
    }
    onKeyDown(e) {
        if (e.keyCode === 13) {
            let labelsText = this.state.labelsText.replace(/\s/g, "")
            let { labels } = this.state
            if (labelsText.length > 0) {
                this.setState({ labels: [...labels, labelsText] })
                this.isOpen()
            }
            else {
                this.isOpen()
            }
        }
    }
    isOpen() {
        let { isSpin } = this.state
        if (!isSpin) {
            this.Labelinput.current.focus()
        }
        this.setState({ isSpin: !isSpin, labelsText: '' })
    }
    valueChange(value, e) {
        this.setState({ [value]: e.target.value });
    }
    inputChange(e) {
        // 用户上传头像后修改头像内容
        let file = e.target.files[0]
        if (file) {
            this.setState({ file: file })
            let reader = new FileReader();
            reader.addEventListener('load', () => {
                this.setState({ imgsrc: reader.result })
            }, false);
            reader.readAsDataURL(file);
        }
    }
    toLogin() {
        this.props.history.push('/myself')
    }
}

export default AddPage
