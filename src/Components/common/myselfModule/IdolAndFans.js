import React, { Component } from 'react'
import SearchBar from '../../content/MainhomeSearchBar/MainhomeSearchBar'
import IdolItem from '../myselfItems/idolItem'
import FansItem from '../myselfItems/fansItem'
import TopBar from '../top/Top'
import { delIdol, pushIdol } from '../../../network/mySelf'
import { connect } from 'react-redux'
import { deleteIdol, becomeIdol } from '../../../features/counter/counterSlice'
import alertBox from '../../../alertbox/alertbox'
import './IdolAndFans.scss'

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

class MyselfModel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }
    render() {
        const { ItemSelect } = this.props
        return (
            <div className='myself-idol'>
                <TopBar title='Myself' goBack={this.props.goBack} />
                <SearchBar value={this.state.value} valueChange={this.valueChange.bind(this)} />
                {
                    ItemSelect ? this.props.user.fans.map((item, i) => (
                        <FansItem
                            userId={item}
                            key={item}
                            value={this.state.value}
                            i={i}
                            remove={this.removeIdol.bind(this, i, item)}
                            AddIdol={this.AddIdol.bind(this, item)}
                            isMutualfans={this.props.user.idol.indexOf(item) > -1} />
                    )) : this.props.user.idol.map((item, i) => (
                        <IdolItem
                            userId={item}
                            key={item}
                            value={this.state.value}
                            remove={this.removeIdol.bind(this, i, item)}
                        />
                    ))
                }
            </div>
        )
    }
    valueChange(e) {
        this.setState({ value: e.target.value })
    }
    goMyself() {
        console.log(this.props)
    }
    removeIdol(i, idolid) {
        setTimeout(() => {
            this.props.deleteIdol(i)
        }, 300);
        delIdol({ userid: this.props.user._id, idolid }).then((data) => {
            if (data.keyValue) {
                throw (data)
            }
            alertBox("已取消关注")
        })
    }
    AddIdol(idolid) {
        this.props.becomeIdol(idolid)
        pushIdol({ userid: this.props.user._id, idolid }).then((data) => {
            if (data.keyValue) {
                throw (data)
            }
            alertBox("已关注")
        })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyselfModel)
