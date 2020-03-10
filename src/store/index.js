import {createStore,applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import sagas from './sagas'
const sageMiddleware = createSagaMiddleware()
const store = createStore(reducer,applyMiddleware(sageMiddleware))
sageMiddleware.run(sagas)
export default store