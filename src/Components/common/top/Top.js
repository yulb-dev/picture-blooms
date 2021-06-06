import React, { Component } from 'react'
import { Consumer } from "../../../App";
import './TopBar.scss'

class TopBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isborder: false,
            isShow: false
        }
        this.My = React.createRef()
    }
    componentDidMount() {
        this.My.current.parentNode.onscroll = this.onScroll.bind(this)
    }
    render() {
        const { isborder, isShow } = this.state
        const { title } = this.props
        return (
            <Consumer>
                {
                    (history) => (
                        <>
                            <div className={isborder ? 'topbar isborder' : 'topbar'} ref={this.My}>
                                <svg t="1622294932600" onClick={this.goBack.bind(this, history)} className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2867"><path d="M398.259 312.832V85.348L0.007 483.503 398.259 881.82V648.502c284.4 0 483.565 91.004 625.735 290.15-56.838-284.472-227.502-568.82-625.735-625.82" p-id="2868"></path></svg>
                                <p>{title}</p>
                            </div>
                            <div
                                className='toTopNavBar'
                                style={{ display: isShow ? 'flex' : 'none' }}
                                onClick={this.toTop.bind(this)}
                            >
                                <svg t="1622340193300" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11469"><path d="M752.64 376.32 546.56 202.88c-19.2-16-50.56-16-69.76 0L270.72 376.32C240 402.56 261.76 447.36 305.28 447.36L384 447.36C384 447.36 384 448 384 448l0 320c0 35.2 28.8 64 64 64l128 0c35.2 0 64-28.8 64-64L640 448c0 0 0-0.64 0-0.64l78.08 0C761.6 447.36 783.36 402.56 752.64 376.32z" p-id="11470"></path></svg>
                            </div>
                        </>
                    )
                }
            </Consumer>
        )
    }
    toTop() {
        this.My.current.parentNode.scrollTop = 0
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
    goBack(history) {
        history.goBack()
    }
}

export default TopBar