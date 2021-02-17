import { combineReducers } from 'redux'
import { userReducer } from '../redux/Reducers/Client/userReducer'
import onBoardReducer from '../redux/Reducers/Client/onBoardReducer'
import { interpreterTempReducer} from '../redux/Reducers/Interpreter/interpreterTempReducer'
import { HeroReducer } from '../redux/Reducers/HeroReducers'
import { ModalReducers } from '../redux/Reducers/ModalReducers'

const rootReducer = combineReducers({
    userState : userReducer,
    interpreterTempState : interpreterTempReducer,
    onBoardState : onBoardReducer,
    HeroState : HeroReducer,
    ModalState : ModalReducers
})

export default rootReducer