import {
    SET_VERIFY,
    SET_CLICKED,
    SET_MODALSTATE
} from '../ActionTypes/HeroActionTypes'

export const setVerify = data => dispatch =>{
    dispatch({
        type : SET_VERIFY,
        payload : data
    })
}
export const setClicked = data => dispatch =>{
    dispatch({
        type : SET_CLICKED,
        payload : data
    })
}
export const setmodalState = data => dispatch =>{
    dispatch({
        type : SET_MODALSTATE,
        payload : data
    })
}