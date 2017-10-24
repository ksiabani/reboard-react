import * as types from '../actions/actionTypes';

export default function wrapperReducer(state = false, action) {
    switch (action.type) {
        case types.TOGGLE_DRAWER_STATUS:
            return !action.whatever;
        default:
            return state;
    }
}
