import './scss/App.scss';
import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom';
import routes from './router/index'
import MainNavBar from './Components/content/MainNavBar/MainNavBar'
import Home from './views/home'
export const { Provider, Consumer } = React.createContext("router");

class App extends Component {
  render() {
    const { pathname } = this.props.location
    return (
      <div className='App'>
        <Provider value={this.props.history}>
          <Home className={pathname === '/home' ? 'home' : 'home no'} />
        </Provider>
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
