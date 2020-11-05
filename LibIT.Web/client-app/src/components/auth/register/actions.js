import * as types from './types';

export const registerUser = () => {
    return (dispatch) => {
        dispatch({type: types.REGISTER_STARTED})
    }
}