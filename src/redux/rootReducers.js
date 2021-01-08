import { combineReducers } from 'redux'
import { userReducer } from '../redux/Reducers/Client/userReducer'
import onBoardReducer from '../redux/Reducers/Client/onBoardReducer'
import { interpreterReducer } from '../redux/Reducers/Interpreter/interpreterReducer'

const rootReducer = combineReducers({
    userState : userReducer,
    interpreterState : interpreterReducer,
    onBoardState : onBoardReducer
})

export default rootReducer