import React, { Component } from 'react'
import './ListItem.scss'
import { getCard } from '../../../network/mySelf'
import { deleteFavorite } from '../../../features/counter/counterSlice'
import { connect } from 'react-redux'
import { delFavorite } from '../../../network/mySelf'
import { Consumer } from "../../../App";
import alertBox from '../../../alertbox/alertbox'

const mapStateToProps = (state) => {
    return {
        user: state.counter.user
    }
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deleteFavorite: (...args) => dispatch(deleteFavorite(...args)),
    }
};

class ListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imgsrc: '',
            title: '',
            isDelete: false
        }
        getCard(this.props.cardId).then((data) => {
            this.setState({ imgsrc: data.imgsrc, title: data.title })
        })
    }
    render() {
        return (
            <Consumer>
                {
                    (history) => {
                        return (
                            <div
                                className={this.state.isDelete ? 'listItem isDelete' : 'listItem'}
                                onClick={this.goDetails.bind(this, history)}
                            >
                                <div className='left-border'>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div className='context' >
                                    <img src={this.state.imgsrc} alt='card' width='100%' />
                                    <p>{this.state.title}</p>
                                    <svg onClick={this.deleteFavorite.bind(this)} t="1621415666385" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8028"><path d="M320 832a32 32 0 0 0 32-32V448a32 32 0 1 0-64 0v352a32 32 0 0 0 32 32z m192 0a32 32 0 0 0 32-32V448a32 32 0 1 0-64 0v352a32 32 0 0 0 32 32z m192 0a32 32 0 0 0 32-32V448a32 32 0 0 0-64 0v352a32 32 0 0 0 32 32zM864 96H731.443A128 128 0 0 0 608 0H416a128 128 0 0 0-123.494 96H160A128 128 0 0 0 32 224v32h32v32h64v608a128 128 0 0 0 128 128h512a128 128 0 0 0 128-128V288h64v-32h32v-32A128 128 0 0 0 864 96zM416 64h192a63.795 63.795 0 0 1 55.091 32h-302.08A63.795 63.795 0 0 1 416 64z m416 832a64.051 64.051 0 0 1-64 64H256c-35.277 0-68.454-28.672-68.454-64L192 288h640v608zM96 224a64.051 64.051 0 0 1 64-64h704a64.051 64.051 0 0 1 64 64z" p-id="8029"></path></svg>
                                </div>
                            </div>
                        )
                    }
                }
            </Consumer>
        )
    }
    goDetails(history) {
        history.push({ pathname: '/detailsPage', query: { cardId: this.props.cardId } })
    }
    deleteFavorite() {
        this.setState({ isDelete: true })
        alertBox("删除成功")
        setTimeout(() => {
            this.props.deleteFavorite(this.props.user.favorites.indexOf(this.props.cardId))
            delFavorite({ userid: this.props.user._id, cardid: this.props.cardId }).then((data) => {
                if (data.keyValue) {
                    throw (data)
                }
            })
        }, 300);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)
