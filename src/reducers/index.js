import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// import counter from './counterReducer';
// import drawerStatus from './wrapperReducer';

const rootReducer =  combineReducers({
    routing: routerReducer
    // drawerStatus
    // counter
});

export default rootReducer;
