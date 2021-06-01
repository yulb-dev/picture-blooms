import React, { Component } from 'react'
import SearchBar from '../../content/MainhomeSearchBar/MainhomeSearchBar'
import IdolItem from '../myselfItems/idolItem'
import './idol.scss'

class MyselfModel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }
    render() {
        return (
            <div className='Myself-login'>
                <div className='myself-idol'>
                    <div className='top'>
                        <svg t="1622294932600" onClick={this.props.goMyselfMain} className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2867"><path d="M398.259 312.832V85.348L0.007 483.503 398.259 881.82V648.502c284.4 0 483.565 91.004 625.735 290.15-56.838-284.472-227.502-568.82-625.735-625.82" p-id="2868"></path></svg>
                        <p>{this.props.title}</p>
                    </div>
                    <SearchBar value={this.state.value} valueChange={this.valueChange.bind(this)} />
                    {
                        this.props.idList.map((item, index) => (
                            <IdolItem userId={item} key={item} value={this.state.value} i={index} iorf={this.props.iorf} isMutualfans={this.props.idol.indexOf(item) > -1} />
                        ))
                    }
                </div>
            </div>
        )
    }
    valueChange(e) {
        this.setState({ value: e.target.value })
    }
}
export default MyselfModel
