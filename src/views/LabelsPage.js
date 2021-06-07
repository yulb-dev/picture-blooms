import React, { Component } from 'react'
import TopBar from '../Components/common/top/Top'
import Card from '../Components/common/personalSpaceCard/personalSpaceCard'
import { getLabelsInfo } from '../network/personalSpace'
import '../scss/LabelsPage.scss'

class LabelsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cardList: []
        }
        getLabelsInfo(this.props.match.params.label)
            .then((data) => {
                if (data.keyValue) {
                    throw data
                }
                this.setState({ cardList: data })
            })
    }
    render() {
        const { label } = this.props.match.params
        return (
            <div className='labels-page'>
                <TopBar title='Back' />
                <h3>
                    标签：<span>{label}</span>
                </h3>
                {
                    this.state.cardList.map((item) => (
                        <Card
                            {...item}
                            name={item.userid.name}
                            avatar={item.userid.avatar}
                            key={item._id}
                        />
                    ))
                }
            </div>
        )
    }
}

export default LabelsPage
