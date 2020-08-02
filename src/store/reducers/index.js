import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import AuthReducer from './AuthReducer'
import GeneralReducer from './GeneralReducer'
import ReportReducer from './ReportReducer'

const rootReducer = combineReducers({
    form: formReducer,
    auth: AuthReducer,
    general: GeneralReducer,
    report: ReportReducer,
})

export default rootReducer