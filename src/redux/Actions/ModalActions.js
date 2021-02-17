import { PHONE_MODAL, CLIENT_SIGNUP_MODAL, EMAIL_VERIFICATION, ORG_MODAL } from "../ActionTypes/ModalActionTypes"

export const setPhoneModal = data => dispatch =>{
    dispatch({
        type : PHONE_MODAL,
        payload : data
    })
}

export const setClientSignupModal = data => dispatch =>{
    dispatch({
        type : CLIENT_SIGNUP_MODAL,
        payload : data
    })
}

export const setEmailVerifyModal = data => dispatch =>{
    dispatch({
        type : EMAIL_VERIFICATION,
        payload : data
    })
}

export const setOrganisationModal = data => dispatch =>{
    dispatch({
        type : ORG_MODAL,
        payload : data
    })
}