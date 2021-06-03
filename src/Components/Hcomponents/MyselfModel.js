import React, { Component } from 'react'

export default function withSubscription(WrappedComponent, ItemSelect) {
    return class extends Component {
        render() {
            return <WrappedComponent ItemSelect={ItemSelect} goBack={this.goBack.bind(this)} />;
        }
        goBack() {
            this.props.history.goBack()
        }
    }
}