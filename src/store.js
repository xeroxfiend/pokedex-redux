import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import userReducer from './ducks/userReducer'
import pokeReducer from './ducks/pokeReducer'

// We can give createStore either a single reducer,
// or combine multiple reducers using the
// combineReducers method from 'redux'
const reducers = combineReducers({
  user: userReducer,
  pokemon: pokeReducer
})

const enhancers = compose(applyMiddleware(promiseMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default createStore(
  reducers,enhancers
)
