import ReactDOM from 'react-dom';
// Required to avoid React not found error
import React from 'react';
import { Provider } from 'react-redux';
// Load CSS
import '../bower_components/bootstrap/dist/css/bootstrap.css';
import '../node_modules/react-select/dist/react-select.min.css';
import './app.css';
import App from './containers/App';
import store from './stores/configureStore';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app')
);
