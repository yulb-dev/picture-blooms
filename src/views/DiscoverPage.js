import React, { Component } from 'react'
import HomeSearchBar from '../Components/content/MainhomeSearchBar/New'
import SearchUsers from '../Components/content/MainDiscover/SearchUsers'
import MainDiscover from '../Components/content/MainDiscover/MainDiscover'
import LabelsPage from './LabelsPage'
import DetailsPage from './DetailsPage'
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
                    <Route path="/discover/label/:label" component={LabelsPage} />
                    <Route path="/discover/detailsPage/:cardid" component={DetailsPage} />
                </Switch>
            </div>
        )
    }
}

export default Discover