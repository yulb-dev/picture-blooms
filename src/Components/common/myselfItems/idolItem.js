import React, { Component } from 'react'
import { getIdol } from '../../../network/mySelf'
import { deleteIdol, becomeIdol } from '../../../features/counter/counterSlice'
import { connect } from 'react-redux'
import { delIdol, pushIdol } from '../../../network/mySelf'
import promptBox from '../../../alertbox/alertbox'

const mapStateToProps = (state) => {
    return {
        user: state.counter.user
    }
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deleteIdol: (...args) => dispatch(deleteIdol(...args)),
        becomeIdol: (...args) => dispatch(becomeIdol(...args)),
    }
};

class IdolItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDel: false,
            name: ''
        }
        getIdol(this.props.userId).then((data) => {
            this.setState({ ...data })
        })
    }
    render() {
        const { isMutualfans } = this.props
        if (this.props.iorf === 'i') {
            if (this.state && this.state.name.indexOf(this.props.value) > -1) {
                const { avatar, name, introduction, isDel } = this.state
                return (
                    <div className={isDel ? 'idol-item idol-item-del' : 'idol-item'}>
                        <img src={avatar} alt='avatarImg' />
                        <p className='message'>{name}<br /><span>{introduction}</span></p>
                        <p className='btn' onClick={this.removeIdol.bind(this)}>取消关注</p>
                    </div>
                )
            }
            else {
                return null
            }
        }
        if (this.props.iorf === 'f') {
            if (this.state && this.state.name.indexOf(this.props.value) > -1) {
                const { avatar, name, introduction, isDel } = this.state
                return (
                    <div className={isDel ? 'idol-item idol-item-del' : 'idol-item'}>
                        <img src={avatar} alt='avatarImg' />
                        <p className='message'>{name}<br /><span>{introduction}</span></p>
                        <p
                            className={isMutualfans ? 'isMutualfans' : 'btn2'}
                            onClick={this.becomeIdol.bind(this)}
                        >{isMutualfans ? '已互粉' : '+ 关注'}
                        </p>
                    </div>
                )
            }
            else {
                return null
            }
        }
        else {
            return null
        }

    }
    removeIdol() {
        promptBox("已取消关注")
        this.setState({ isDel: true })
        setTimeout(() => {
            this.props.deleteIdol(this.props.i)
        }, 300);
        delIdol({ userid: this.props.user._id, idolid: this.props.userId }).then((data) => {
            if (data.keyValue) {
                throw (data)
            }
        })
    }
    becomeIdol() {
        this.props.becomeIdol(this.props.userId)
        promptBox("已关注")
        pushIdol({ userid: this.props.user._id, idolid: this.props.userId }).then((data) => {
            if (data.keyValue) {
                throw (data)
            }
        })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(IdolItem)
