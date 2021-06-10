import React, { Component } from 'react'
import { Consumer } from "../../../App";
import './personalSpaceCard.scss'

class Card extends Component {
    render() {
        const { imgsrc, labels, title, content, avatar, name, ctime } = this.props
        let date = new Date(ctime)
        let time = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        return (
            <Consumer>
                {
                    (history) => (
                        <div className='personalSpaceCard' onClick={this.goDetails.bind(this, history)}>
                            <img className='main-src' src={imgsrc} alt='imgsrc' />
                            <div className='labels'>
                                {
                                    labels.map((item, i) => (
                                        <span key={i}
                                            onClick={this.goLabelsPage.bind(this, item, history)}
                                        >
                                            {item}
                                        </span>
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
            </Consumer>
        )
    }
    goLabelsPage(label, history, e) {
        e.stopPropagation()
        history.push(`/labelsPage/${label}`)
    }
    goDetails(history) {
        const { goDetailsPage, _id } = this.props
        if (goDetailsPage) {
            goDetailsPage(_id)
            return
        }

        history.push(`/detailsPage/${_id}`)
    }
}

export default Card
