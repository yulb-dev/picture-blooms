import React, { Component } from 'react'
import DynamicItem from '../myselfItems/dynamicItem'
import TopBar from '../top/Top'
import { connect } from 'react-redux'
import './dynamic.scss'

const mapStateToProps = (state) => {
    return {
        user: state.counter.user
    }
};


class Dynamic extends Component {
    constructor(props) {
        super(props)
        if (!this.props.user) {
            this.props.history.replace('/myself')
            return
        }
    }
    render() {
        return (
            <div
                className='myself-dynamic'
            >
                <TopBar title='Myself' goBack={this.goMyself.bind(this)} />
                {
                    this.props.user.dynamic.map((item) => (
                        <DynamicItem cardId={item} key={item + ''} />
                    ))
                }
            </div>
        )
    }
    goMyself() {
        this.props.history.replace('/myself')
    }
}
export default connect(mapStateToProps,)(Dynamic)
