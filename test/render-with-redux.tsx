import React, { ReactNode } from 'react';
import { createStore, Store, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { StoreState } from 'renderer/store';
import { reducer } from 'renderer/root-reducer';

const AppWithRedux = ({ children, store }: { children: ReactNode; store?: Store<StoreState> }) => {
  let storeMock = store;
  if (!storeMock) {
    storeMock = createStore(reducer, applyMiddleware(thunk));
  }
  return <Provider store={storeMock}>{children}</Provider>;
};

const renderWithRedux = (
  ui: React.ReactNode,
  {
    initialState,
    store = createStore(reducer, initialState as StoreState, applyMiddleware(thunk)),
  }: {
    initialState?: RecursivePartial<StoreState>;
    store?: Store<StoreState>;
  } = {}
) => {
  const history = createMemoryHistory();
  return {
    ...render(
      <Provider store={store}>
        <Router history={history}>{ui}</Router>
      </Provider>
    ),
    store,
    history,
  };
};

export { renderWithRedux, AppWithRedux };
