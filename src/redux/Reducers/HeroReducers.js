import {
    SET_VERIFY,
    SET_CLICKED,
    SET_MODALSTATE
} from '../ActionTypes/HeroActionTypes'

const initialState = {
  modalState: false,
  clicked: "",
  verify: null,
};

export const HeroReducer = (state = initialState, Action) => {
    const { type, payload } = Action
    switch (type) {
        case SET_VERIFY:
            return{
                ...state, verify : payload
            }
        case SET_CLICKED : 
            return {
                ...state, clicked : payload 
            }
        case SET_MODALSTATE:
            return {
                ...state, modalState : payload
            }
        default:
            return state;
    }
};
