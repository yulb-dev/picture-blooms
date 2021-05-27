import React, { Component } from 'react'
import DynamicItem from '../myselfItems/dynamicItem'
import './dynamic.scss'

class Dynamic extends Component {
    render() {
        return (
            <div className='myself-dynamic'>
                <div className='top'>
                    <svg onClick={this.props.goMyselfMain} t="1621256688157" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3236"><path d="M781.566553 1011.699354L168.659015 540.690841c-20.402945-16.0254-20.402945-42.009075 0-58.034474L781.566553 11.647854c20.377345-16.0254 53.400932-16.0254 73.778278 0 20.377345 15.9998 20.377345 42.009075 0 58.008875L279.326431 511.686404l576.0184 442.004075c20.377345 15.9998 20.377345 41.983475 0 58.008875-20.377345 16.0254-53.400932 16.0254-73.778278 0z" p-id="3237"></path></svg>
                    <p>我的动态</p>
                </div>
                {
                    this.props.dynamic.map((item) => (
                        <DynamicItem cardId={item} key={item} />
                    ))
                }
            </div>
        )
    }
}
export default Dynamic
