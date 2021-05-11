// index.js
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './App'
import { Router } from "react-router";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);
