import { DASHBOARD } from '../../ActionTypes/Interpreter/interpreterActionTypes'

const initialState = {
    o: false,
    phone: "",
    formState: 0,
    otp: "",
    matchedOtp: "",
    disabled: true,
    verified: false,
    base: "https://whispering-lake-75400.herokuapp.com",
    loader: false,
    phoneVer: false,
    cityVer: false,
    langVer: false,
    backVer: false,
    timer: 0,
    active: "",
}

export const interpreterTempReducer = (state=initialState, Action) => {
    const { type, payload } =  Action
    switch (type) {
        case DASHBOARD:
            return {
                ...state, [payload[0]] : payload[1]
            }
    
        default:
            return state;
    }
}