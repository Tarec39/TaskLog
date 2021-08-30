import { createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import reducer  from '../reducer/reducer'



export const store = createStore(reducer, applyMiddleware(logger))

