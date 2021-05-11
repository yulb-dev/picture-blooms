import './scss/App.scss';
import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom';
import routes from './router/index'

import MainNavBar from './Components/content/MainNavBar/MainNavBar'

export const { Provider, Consumer } = React.createContext("router");
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          {routes.map((item) =>
            <Route {...item} key={item.path} />
          )}
        </Switch>
        <Provider value={this.props.history}>
          <MainNavBar />
        </Provider>
      </div>
    )
  }

}


export default withRouter(App);
