import React, { Component } from 'react'
import { getcomment } from '../../../network/details'

class CommentItem extends Component {
    constructor(props) {
        super(props)
        getcomment(this.props.commentId).then((data) => {
            this.setState({ ...data })
        })
    }

    render() {
        if (this.state) {
            const { name, avatar, ctime, content } = this.state
            let date = new Date(ctime)
            return (
                <div className='commentItem'>
                    <img src={avatar} alt='useravatar' />
                    <div className='information'>
                        <p>{name}</p>
                        <span></span>
                        <p>{`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`}</p>
                    </div>
                    <p className='text'>
                        {content}
                    </p>
                </div>
            )
        }
        return null
    }
}

export default CommentItem