import React, { ReactNode } from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { RootState } from 'renderer/store';
import { reducer } from 'renderer/root-reducer';
import { configureStore } from '@reduxjs/toolkit';

export function AppWithRedux({ children, store }: { children: ReactNode; store?: Store<RootState> }) {
  let storeMock = store;
  if (!storeMock) {
    storeMock = configureStore({
      reducer,
    });
  }

  return <Provider store={storeMock}>{children}</Provider>;
}

type RenderWithReduxOptions = {
  initialState?: DeepPartial<RootState>;
  store?: Store<RootState>;
};
export function renderWithRedux(
  ui: React.ReactNode,
  {
    initialState,
    store = configureStore({
      reducer,
      preloadedState: initialState as RootState,
    }),
  }: RenderWithReduxOptions = {}
) {
  return {
    ...render(
      <Provider store={store}>
        <MemoryRouter>{ui}</MemoryRouter>
      </Provider>
    ),
    store,
  };
}
