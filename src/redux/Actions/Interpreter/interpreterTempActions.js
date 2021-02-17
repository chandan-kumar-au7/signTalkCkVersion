import {DASHBOARD} from '../../ActionTypes/Interpreter/interpreterActionTypes'

export const setDashboard = data => dispatch => {
    console.log('i am dispatched')
    dispatch({
        type : DASHBOARD,
        payload : [
            Object.keys(data)[0], 
            Object.values(data)[0]
        ]
    })
}