import React, { Component } from 'react'
import { getMessage } from '../../../network/details'
import './personalSpaceCard.scss'

class Card extends Component {
    constructor(props) {
        super(props)
        getMessage(this.props.cardId).then((data) => {
            this.setState({ ...data })
        })
    }
    render() {
        if (!this.state) {
            return null
        }
        const { imgsrc, labels, title, content, useravatar, username, ctime } = this.state
        let date = new Date(ctime)
        let time = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        return (
            <div className='personalSpaceCard' onClick={this.goDetails.bind(this)}>
                <img className='main-src' src={imgsrc} alt='imgsrc' />
                <div className='labels'>
                    {
                        labels.map((item, i) => (
                            <span key={i}>{item}</span>
                        ))
                    }
                </div>
                <h5>{title}</h5>
                <p className='content'>{content}</p>
                <div className='userMessage'>
                    <img src={useravatar} alt='useravatar' />
                    <p>{username}</p>
                    <span></span>
                    <p>{time}</p>
                </div>
            </div>
        )
    }
    goDetails() {
        this.props.goDetails(this.state._id)
    }
}

export default Card
