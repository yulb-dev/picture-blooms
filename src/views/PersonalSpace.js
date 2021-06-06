import React, { Component } from 'react'
import TopBar from '../Components/common/top/Top'
import Card from '../Components/common/personalSpaceCard/personalSpaceCard'
import { getUser } from '../network/personalSpace'
import '../scss/PersonalSpace.scss'


class PersonalSpace extends Component {
    constructor(props) {
        super(props)
        if (this.props.user && this.props.user._id === this.props.match.params.userid) {
            this.props.history.replace('/myself')
            return
        }
        getUser(this.props.match.params.userid).then((data) => {
            if (data.keyValue) {
                throw data
            }
            const { user, dynamicList } = data
            this.setState({ ...user, dynamicList })
        })
    }
    render() {
        if (!this.state) {
            return (
                <div className='PersonalSpace'></div>
            )
        }
        const { avatar, name, dynamic, idol, fans, introduction, gender, dynamicList } = this.state
        return (
            <div className='PersonalSpace'>
                <TopBar title='Back' />
                <div className='Personal-information'>
                    <img src={avatar} alt='avatar' />
                    <h6>
                        你好，我是 {name}

                        {
                            gender ?
                                gender === 1 ? <svg t="1622009428237" className='blue' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="825"><path d="M938.666667 0 512 0c-46.933333 0-85.333333 38.4-85.333333 85.333333 0 46.933333 38.4 85.333333 85.333333 85.333333l221.866667 0-217.6 217.6C465.066667 358.4 405.333333 341.333333 341.333333 341.333333c-187.733333 0-341.333333 153.6-341.333333 341.333333s153.6 341.333333 341.333333 341.333333 341.333333-153.6 341.333333-341.333333c0-64-17.066667-123.733333-46.933333-174.933333L853.333333 290.133333 853.333333 512c0 46.933333 38.4 85.333333 85.333333 85.333333s85.333333-38.4 85.333333-85.333333L1024 85.333333C1024 38.4 985.6 0 938.666667 0zM341.333333 853.333333c-93.866667 0-170.666667-76.8-170.666667-170.666667s76.8-170.666667 170.666667-170.666667 170.666667 76.8 170.666667 170.666667S435.2 853.333333 341.333333 853.333333z" p-id="826"></path></svg>
                                    : <svg t="1622010626832" className='green' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8865" ><path d="M868.018201 392.930029h-79.379804V252.956975C789.432195 101.34155 665.070503 0 512.13208 0S234.567366 102.664546 234.567366 254.279972v138.650057h-79.379804A68.266631 68.266631 0 0 0 87.450129 460.932062v495.065377a68.266631 68.266631 0 0 0 68.531231 68.002032H868.018201a68.266631 68.266631 0 0 0 68.531231-68.002032V460.932062a68.266631 68.266631 0 0 0-68.531231-68.002033z m-317.519215 328.367789v108.221133a8.996378 8.996378 0 0 1-8.996378 8.996378h-59.005655a8.996378 8.996378 0 0 1-8.996377-8.996378v-108.221133a84.407192 84.407192 0 0 1-46.834085-74.881615 85.465589 85.465589 0 0 1 170.666579 0 83.877993 83.877993 0 0 1-46.834084 74.881615z m132.299673-326.515593H341.200902V243.695998c0-79.379804 76.73381-144.735843 170.931178-144.735842s170.931178 65.091439 170.931178 144.735842z" p-id="8866"></path></svg>
                                :
                                <svg t="1622010435135" className='pink' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5345"><path d="M768 682.666667l-170.666667 0 0-12.8c145.066667-38.4 256-170.666667 256-328.533333 0-187.733333-153.6-341.333333-341.333333-341.333333S170.666667 153.6 170.666667 341.333333c0 157.866667 110.933333 290.133333 256 328.533333L426.666667 682.666667 256 682.666667c-46.933333 0-85.333333 38.4-85.333333 85.333333 0 46.933333 38.4 85.333333 85.333333 85.333333l170.666667 0 0 85.333333c0 46.933333 38.4 85.333333 85.333333 85.333333s85.333333-38.4 85.333333-85.333333l0-85.333333 170.666667 0c46.933333 0 85.333333-38.4 85.333333-85.333333C853.333333 721.066667 814.933333 682.666667 768 682.666667zM341.333333 341.333333c0-93.866667 76.8-170.666667 170.666667-170.666667s170.666667 76.8 170.666667 170.666667-76.8 170.666667-170.666667 170.666667S341.333333 435.2 341.333333 341.333333z" p-id="5346"></path></svg>
                        }
                    </h6>
                    <div className='labels'>
                        <span>{dynamic.length}动态</span>
                        <span>{idol.length}关注</span>
                        <span>{fans.length}粉丝</span>
                    </div>
                    <p>{introduction}</p>
                </div>
                <div className='crad'>
                    {
                        dynamicList.map((item) => (
                            <Card
                                {...item}
                                name={name}
                                avatar={avatar}
                                key={item._id}
                                goDetails={this.goDetails.bind(this)}
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
    goDetails(cardId) {
        this.props.history.push(`/detailsPage/${cardId}`)
    }
}

export default PersonalSpace