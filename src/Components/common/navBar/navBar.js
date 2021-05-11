import React, { Component } from 'react'
import NavBarItem from './navBarItem'
import './navBar.scss'


class NavBar extends Component {
    constructor(props) {
        super(props)
        this.myBox = React.createRef();
        this.My = React.createRef();
        this.boxnum = 0
    }
    componentDidMount() {
        this.width = this.My.current.clientWidth
        this.boxMove(this.boxnum)
    }
    render() {
        return (
            <div className='NavBar' ref={this.My}>
                <div className='box' ref={this.myBox}>
                    <div className='context'></div>
                </div>
                {this.props.itemList.map((item, i) =>
                    <NavBarItem pathname={item.pathname} key={item.pathname} num={i} isActive={this.boxMove.bind(this)} value={item.value} initBox={this.initBox.bind(this)}>
                        {item.svg}
                    </NavBarItem>
                )}
            </div>
        )
    }
    boxMove(num) {
        this.myBox.current.style.left = `${this.width / this.props.itemList.length * num}px`
    }
    initBox(num) {
        //第一次渲染,此函数调用时组件没有渲染完成所以拿不到 this.width
        //需要将第一次的num保存在组件中，待组件渲染完成后通过 componentDidMount 生命周期函数初始化box位置
        this.boxnum = num
        this.width && this.boxMove(num)
    }
}

export default NavBar



