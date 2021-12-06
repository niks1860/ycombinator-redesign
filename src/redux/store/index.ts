import createSagaMiddleware from "@redux-saga/core"
import { applyMiddleware, compose, createStore } from "redux"
import reducers, { preloadedState, StoreState } from "redux/reducers"
import rootSaga from "redux/sagas/index,"

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE_?: typeof compose
  }
}

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

function configureStore(preloadedState: StoreState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose
  const store = createStore(
    reducers,
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares))
  )

  sagaMiddleware.run(rootSaga)

  if (module.hot) {
    module.hot.accept("../reducers/index", () => {
      const nextRootReducer = require("../reducers/index") // eslint-disable-line
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

const store = configureStore(preloadedState)

export default store
