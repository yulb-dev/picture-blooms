import React, { Component } from 'react'
import DynamicItem from '../myselfItems/dynamicItem'
import TopBar from '../top/Top'
import './dynamic.scss'

class Dynamic extends Component {
    constructor(props) {
        super(props)
        this.MyComponent = 0
    }
    render() {
        return (
            <div
                className='myself-dynamic'
            >
                <TopBar title='Myself' goBack={this.props.goMyselfMain} />
                {
                    this.props.dynamic.map((item) => (
                        <DynamicItem cardId={item} key={item + ''} />
                    ))
                }
            </div>
        )
    }
}
export default Dynamic
