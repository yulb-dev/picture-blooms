import React, { Component } from 'react'
import { getDynamic } from '../../../network/mySelf'
import { Consumer } from "../../../App";
import { delDynamic } from '../../../features/counter/counterSlice'
import { connect } from 'react-redux'
import { pullDynamic } from '../../../network/mySelf'
import { OpenrequestBox, CLoserequestBox } from '../../../alertbox/BeforerequestBox'
import alertBox from '../../../alertbox/alertbox'


const mapStateToProps = (state) => {
    return {
        user: state.counter.user
    }
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        delDynamic: (...args) => dispatch(delDynamic(...args)),
    }
};

class DynamicItem extends Component {
    constructor(props) {
        super(props)
        OpenrequestBox()
        getDynamic(this.props.cardId).then((data) => {
            this.setState({ ...data, isDel: false })
            CLoserequestBox()
        })
    }
    render() {
        if (this.state) {
            const { imgsrc, title, ctime, comment, likesnum, isDel } = this.state
            let date = new Date(ctime)
            return (
                <Consumer>
                    {
                        (history) => {
                            return (
                                <div className={isDel ? 'isDel' : 'outBox'}>
                                    <div className='dynamicItem'>
                                        <div className='dynamicItem-top' onClick={this.goDetails.bind(this, history)} >
                                            <div>
                                                <img src={imgsrc} alt='img' />
                                            </div>
                                            <p>{title}</p>
                                            <p>{`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`}</p>
                                        </div>
                                        <div className='dynamicItem-center'>
                                            <svg t="1622300893388" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8014"><path d="M1015.296 381.715692c-8.743385-26.466462-31.350154-45.686154-58.368-49.860923l-263.955692-40.96L578.363077 42.692923C566.311385 16.620308 540.396308 0 512.039385 0S457.767385 16.620308 445.715692 42.692923L331.027692 290.894769l-263.955692 40.96C39.975385 336.029538 17.447385 355.249231 8.704 381.715692c-8.743385 26.466462-2.126769 55.689846 17.014154 75.539692L219.096615 658.510769 174.276923 937.668923c-4.489846 28.120615 7.168 56.241231 30.011077 72.782769C216.969846 1019.431385 231.699692 1024 246.508308 1024c12.130462 0 24.418462-3.150769 35.367385-9.216l230.084923-125.085538 230.084923 125.085538C753.152 1020.849231 765.361231 1024 777.570462 1024c14.808615 0 29.538462-4.568615 42.220308-13.548308 22.843077-16.541538 34.500923-44.662154 29.932308-72.782769L804.903385 658.510769l193.457231-201.255385C1017.422769 437.326769 1023.960615 408.182154 1015.296 381.715692z" p-id="8015"></path></svg>
                                            <span>{likesnum}</span>
                                            <svg t="1622300991384" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9974"><path d="M827.68 762.56 529.44 762.56 289.28 929.76 289.28 762.56l-92.8 0c-82.08 0-148.48-66.56-148.48-148.48L48 242.88c0-82.08 66.56-148.48 148.48-148.48l631.2 0c82.08 0 148.48 66.56 148.48 148.48l0 371.36C976.16 696.16 909.6 762.56 827.68 762.56z" p-id="9975"></path><path d="M252.16 363.52l519.84 0c10.24 0 18.56-8.32 18.56-18.56s-8.32-18.56-18.56-18.56L252.16 326.4c-10.24 0-18.56 8.32-18.56 18.56S241.76 363.52 252.16 363.52zM771.84 474.88 252.16 474.88c-10.24 0-18.56 8.32-18.56 18.56 0 10.24 8.32 18.56 18.56 18.56l519.84 0c10.24 0 18.56-8.32 18.56-18.56C790.56 483.2 782.24 474.88 771.84 474.88z" p-id="9976"></path></svg>
                                            {comment.length}

                                        </div>
                                        <div className='dynamicItem-bottom'>
                                            <p onClick={this.goEditPage.bind(this, history)}>编辑</p>
                                            <p onClick={this.delDynamic.bind(this)}>删除</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    }
                </Consumer>
            )
        }
        else {
            return null
        }
    }
    delDynamic() {
        this.setState({ isDel: true })
        pullDynamic(this.state._id).then((data) => {
            if (data.keyValue) {
                throw (data)
            }
            let s = setTimeout(() => {
                this.props.delDynamic(this.props.user.dynamic.indexOf(this.state._id))
                alertBox('删除成功！')
                clearTimeout(s)
            }, 400);
        })
    }
    goEditPage(history) {
        history.push({ pathname: '/edit', query: { cardid: this.state._id } })
    }
    goDetails(history) {
        history.push(`/detailsPage/${this.props.cardId}`)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DynamicItem)
