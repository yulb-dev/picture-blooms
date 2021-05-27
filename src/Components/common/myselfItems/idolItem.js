import React, { Component } from 'react'
import { getIdol } from '../../../network/mySelf'

class IdolItem extends Component {
    constructor(props) {
        super(props)
        getIdol(this.props.userId).then((data) => {
            this.setState({ ...data })
        })
    }
    render() {
        if (this.state && this.state.name.indexOf(this.props.value) > -1) {
            const { avatar, name, introduction } = this.state
            return (
                <div className='idol-item'>
                    <img src={avatar} alt='avatarImg' />
                    <p>{name}<br /><span>{introduction}</span></p>
                </div>
            )
        }
        else {
            return null
        }
    }
}
export default IdolItem
