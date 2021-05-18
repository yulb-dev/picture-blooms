import React, { Component } from 'react'
import './ListItem.scss'
import { getCard } from '../../../network/mySelf'

class ListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imgsrc: '',
            title: ''
        }
        getCard(this.props.cardId).then((data) => {
            this.setState({ imgsrc: data.imgsrc, title: data.title })
        })
    }
    render() {
        return (
            <div className='listItem'>
                <div className='left-border'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className='context'>
                    <img src={this.state.imgsrc} alt='card' width='100%' />
                    <p>{this.state.title}</p>
                </div>
            </div>
        )
    }
}

export default ListItem
