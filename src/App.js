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
      <Provider value={this.props.history}>
        <div className='App'>
          <Home className={(pathname === '/home' || pathname === '/') || pathname.indexOf('index.html') > -1 ? 'home' : 'home no'} />
          <Switch>
            {routes.map((item) =>
              <Route {...item} key={item.path} />
            )}
          </Switch>
          <MainNavBar />
        </div>
      </Provider>
    )
  }

}

export default withRouter(App);
