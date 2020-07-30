import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import AuthReducer from './AuthReducer'
import GeneralReducer from './GeneralReducer'

const rootReducer = combineReducers({
    form: formReducer,
    auth: AuthReducer,
    general: GeneralReducer,
})

export default rootReducer