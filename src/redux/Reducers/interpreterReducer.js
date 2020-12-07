import { LOG_IN } from "../Actions/ActionTypes.js/interpreterActionTypes";

const initialState = {
    interpreter : ''
}

export const interpreterReducer = (state = initialState, Action) => {
    const { type, payload } = Action
    switch (type) {
        case LOG_IN:
            return {...state, interpreter : payload};
    
        default:
            return state;
    }
}