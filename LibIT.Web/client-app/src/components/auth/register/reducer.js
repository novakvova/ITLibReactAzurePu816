import * as types from './types';
const intialState = {
    loading: false
}

export const registerReducer = (state = intialState, action) => {
    console.log("Reducer working", action);
    switch (action.type) {
        case types.REGISTER_STARTED:
            return {
                //...this.state,
                loading: true
            }
            break;
    
        default:
            break;
    }
    return state;
}