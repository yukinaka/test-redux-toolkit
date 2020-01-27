import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { appReducer as app, appModule } from "./modules/app";
// import thunk from 'redux-thunk'
// import { createBrowserHistory } from 'history'

// export const history = createBrowserHistory()

const reducer = combineReducers({
  // router: connectRouter(history),
  // app,
  app: appModule.reducer
})

export type StoreState = ReturnType<typeof reducer>

const composeEnhancers = (() => {
  return (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose
})()

export const store = createStore(
  reducer,
  // composeEnhancers(applyMiddleware(thunk, routerMiddleware(history)))
)

export function subscribe(callback: (state: StoreState) => void) {
  return store.subscribe(() => {
    callback(store.getState())
  })
}
