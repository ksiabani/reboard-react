import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from '../reducers/counterReducer'

export default combineReducers({
    routing: routerReducer,
    counter
})