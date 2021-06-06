import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './App'
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import store from './app/store'
import { Provider } from 'react-redux'
const history = createBrowserHistory();


ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <App />
      <div id='beforerequestBox'>
        <div className="loader"></div>
      </div>
    </Provider>
  </Router>,
  document.getElementById('root')
);
