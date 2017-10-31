import * as types from './actionTypes';

export function toggleDrawerStatus(status) {
    return {type: types.TOGGLE_DRAWER_STATUS, status};
}
