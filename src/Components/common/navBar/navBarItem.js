import React, { Component } from 'react'
import { Consumer } from "../../../App";

class NavBarItem extends Component {
    render() {
        return (
            <Consumer>
                {(history) => {
                    let isActive = history.location.pathname.indexOf(this.props.pathname) !== -1;
                    if (isActive) this.props.initBox(this.props.num);
                    return <div className={isActive ? 'itemIsActive' : 'NavBarItem'} onClick={this.changeRouter.bind(this, history.push, this.props.pathname)}>
                        {this.props.children}
                        <p>{this.props.value}</p>
                    </div>
                }

                }
            </Consumer >
        )
    }
    changeRouter(push, pathname) {
        push(pathname)
        this.props.isActive(this.props.num)
    }
}

export default NavBarItem
