import { createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { reducer } from 'renderer/root-reducer'
import { KEY_API_ADDRESS } from 'renderer/constants/local-storage'
import { DEFAULT_API_ADDRESS } from 'renderer/constants/api'

type StoreState = ReturnType<typeof reducer>

const getInitialState = (): Pick<StoreState, 'settings'> => {
  const apiAddress = localStorage.getItem(KEY_API_ADDRESS)
  return {
    settings: {
      apiAddress: apiAddress !== null ? apiAddress : DEFAULT_API_ADDRESS,
    },
  }
}

const makeStore = () => {
  const middlewares = [thunkMiddleware]

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true,
        taceLimit: 25,
      })
    : compose

  const store = createStore(reducer, getInitialState(), composeEnhancers(applyMiddleware(...middlewares)))

  return store
}

export { makeStore, StoreState }
