import React, { Component } from 'react'
import HomeSearchBar from '../Components/content/MainhomeSearchBar/New'
import SearchUsers from '../Components/content/MainDiscover/SearchUsers'
import MainDiscover from '../Components/content/MainDiscover/MainDiscover'
import { Route, Switch } from 'react-router-dom';
import '../scss/Discover.scss'

class Discover extends Component {
    render() {
        return (
            <div className='discover-page'>
                <HomeSearchBar />
                <MainDiscover history={this.props.history} />
                <Switch>
                    <Route path="/discover/searchUsers" component={SearchUsers} />
                    {/* <Route path="/myself/idol" component={withSubscription(MyselfModel, 0)} />
                    <Route path="/myself/fans" component={withSubscription(MyselfModel, 1)} /> */}
                </Switch>
            </div>
        )
    }
}

export default Discover