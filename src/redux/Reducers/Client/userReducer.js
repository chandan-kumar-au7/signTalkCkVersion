import { LOG_IN_USER } from "../../ActionTypes/Client/userActionTypes";

const initialState = {
    user : ''
}

export const userReducer = (state = initialState, Action) => {
    const { type, payload } = Action
    switch (type) {
        case LOG_IN_USER:
            return {...state, user : payload};
    
        default:
            return state;
    }
}