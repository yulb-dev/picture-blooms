import React, { Component } from 'react'
import './personalSpaceCard.scss'

class Card extends Component {
    render() {
        const { imgsrc, labels, title, content, avatar, name, ctime } = this.props
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
                    <img src={avatar} alt='useravatar' />
                    <p>{name}</p>
                    <span></span>
                    <p>{time}</p>
                </div>
            </div>
        )
    }
    goDetails() {
        this.props.goDetails(this.props._id)
    }
}

export default Card
