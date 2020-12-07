import { combineReducers } from 'redux'
import { userReducer } from '../redux/Reducers/userReducer'
import { interpreterReducer } from '../redux/Reducers/interpreterReducer'

const rootReducer = combineReducers({
    userState : userReducer,
    interpreterState : interpreterReducer
})

export default rootReducer