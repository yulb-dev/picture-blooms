import React, { Component } from 'react'
import { getIdol } from '../../../network/mySelf'
import { NavLink } from 'react-router-dom'

class IdolItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDel: false,
            name: '',
            notOk: true,
        }
        getIdol(this.props.userId).then((data) => {
            this.setState({ ...data })
        })
    }
    render() {
        if (this.state && this.state.name.indexOf(this.props.value) > -1) {
            const { avatar, name, introduction, isDel, _id, notOk } = this.state
            return (
                <NavLink to={`/personalSpace/${_id}`}>
                    <div className={isDel ? 'idol-item idol-item-del' : 'idol-item'} >
                        <div id='spinnerBox' style={{ display: notOk ? 'block' : 'none' }}>
                            <div className="spinner">
                                <div className="cube1"></div>
                                <div className="cube2"></div>
                            </div>
                        </div>
                        <img src={avatar} alt='avatarImg' onLoad={this.imgOnload.bind(this)} />
                        <p className='message'>{name}<br /><span>{introduction}</span></p>
                        <p className='btn' onClick={this.removeIdol.bind(this)}>取消关注</p>
                    </div>
                </NavLink>
            )
        }
        else {
            return null
        }
    }
    imgOnload() {
        this.setState({ notOk: false })
    }
    removeIdol(e) {
        e.preventDefault()
        this.setState({ isDel: true })
        this.props.remove()
    }
}
export default IdolItem
