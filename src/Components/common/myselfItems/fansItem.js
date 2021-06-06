import React, { Component } from 'react'
import { getIdol } from '../../../network/mySelf'
import { deleteIdol, becomeIdol } from '../../../features/counter/counterSlice'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

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

class FansItem extends Component {
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
        const { isMutualfans } = this.props
        if (this.state && this.state.name.indexOf(this.props.value) > -1) {
            const { avatar, name, introduction, _id, notOk } = this.state
            return (
                <NavLink to={`/personalSpace/${_id}`}>
                    <div className='idol-item'>
                        <div id='spinnerBox' style={{ display: notOk ? 'block' : 'none' }}>
                            <div className="spinner">
                                <div className="cube1"></div>
                                <div className="cube2"></div>
                            </div>
                        </div>
                        <img src={avatar} alt='avatarImg' onLoad={this.imgOnload.bind(this)} />
                        <p className='message'>{name}<br /><span>{introduction}</span></p>
                        <p
                            className={isMutualfans ? 'isMutualfans' : 'btn2'}
                            onClick={this.AddOrdelFans.bind(this)}
                        >{isMutualfans ? '已互粉' : '+ 关注'}
                        </p>
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
    AddOrdelFans(e) {
        e.preventDefault()
        if (this.props.isMutualfans) {
            //取消关注
            this.setState({ isDel: true })
            this.props.remove()
        }
        else {
            //关注
            this.props.AddIdol()
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FansItem)
