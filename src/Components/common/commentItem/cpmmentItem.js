import React, { Component } from 'react'

class CommentItem extends Component {
    render() {
        const { userid, ctime, content } = this.props
        const { name, avatar } = userid
        let date = new Date(ctime)
        return (
            <div className='commentItem' onClick={this.goPersonalSpace.bind(this)}>
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
    goPersonalSpace() {
        this.props.goPersonalSpace(this.props.userid._id)
    }
}

export default CommentItem