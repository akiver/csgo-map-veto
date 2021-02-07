import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { makeStore } from 'renderer/store';
import { App } from 'renderer/app';

const store = makeStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
