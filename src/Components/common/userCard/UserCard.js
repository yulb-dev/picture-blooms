import React, { Component } from 'react'
import './UserCard.scss'
import { connect } from 'react-redux'
import { deleteIdol, becomeIdol } from '../../../features/counter/counterSlice'
import { delIdol, pushIdol } from '../../../network/mySelf'
import { Consumer } from "../../../App";
import alertBox from '../../../alertbox/alertbox'

const mapStateToProps = (state) => {
    return {
        user: state.counter.user
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deleteIdol: (...args) => dispatch(deleteIdol(...args)),
        becomeIdol: (...args) => dispatch(becomeIdol(...args)),
    }
};

class UserCard extends Component {
    constructor(props) {
        super(props)
        this.isIdol = false
    }
    render() {
        const { avatar, name, fans, dynamic, _id, user } = this.props
        if (user) {
            let num = user.idol.indexOf(_id)
            if (num > -1) {
                this.isIdol = true
            }
            else {
                this.isIdol = false
            }
        }
        return (
            <Consumer>
                {
                    (history) => (
                        <div className='UserCard' onClick={this.goPersonalSpace.bind(this, history)}>
                            <img src={avatar} alt="avatar" />
                            <p>
                                {name}
                                <br />
                                <span>{fans.length}粉丝</span>
                                <span>{dynamic.length}动态</span>
                            </p>
                            <button
                                className={this.isIdol ? 'delIdol' : 'becomeIdol'}
                                onClick={this.Idol.bind(this, history)}
                            >
                                {this.isIdol ? '取消关注' : '+关注'}
                            </button>
                        </div>
                    )
                }
            </Consumer>
        )
    }
    Idol(history, e) {
        e.stopPropagation()
        const { user, _id } = this.props
        if (!user) {
            history.push('/myself')
            return
        }
        if (this.isIdol) {
            //取消关注
            let i = user.idol.indexOf(_id)
            this.props.deleteIdol(i)
            delIdol({ userid: user._id, idolid: _id }).then((data) => {
                if (data.keyValue) {
                    throw (data)
                }
                alertBox("已取消关注")
            })
        }
        else {
            //关注
            this.props.becomeIdol(_id)
            pushIdol({ userid: user._id, idolid: _id }).then((data) => {
                if (data.keyValue) {
                    throw (data)
                }
                alertBox("已关注")
            })
        }
    }
    goPersonalSpace(history) {
        history.push(`/personalSpace/${this.props._id}`)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserCard)