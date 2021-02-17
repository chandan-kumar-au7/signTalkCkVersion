import { PHONE_MODAL, CLIENT_SIGNUP_MODAL, EMAIL_VERIFICATION, ORG_MODAL } from "../ActionTypes/ModalActionTypes";

const initialstate = {
    phoneModal : false,
    clientSignUpModal : false,
    emailVerificationModal : false,
    organisationModal : false
}

export const ModalReducers = (state = initialstate, Action) => {
    const { type, payload } = Action

    switch (type) {
        
        case PHONE_MODAL:
            return{
                ...state, phoneModal : payload 
            };

        case CLIENT_SIGNUP_MODAL:
            return{
                ...state, clientSignUpModal : payload 
            };
        
        case EMAIL_VERIFICATION :
            return{
                ...state, emailVerificationModal : payload
            }
        case ORG_MODAL :
            return{
                ...state, organisationModal : payload
            }

        default:
            return state;
    }
}