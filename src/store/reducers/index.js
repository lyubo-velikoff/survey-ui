import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import AuthReducer from './AuthReducer'
import GeneralReducer from './GeneralReducer'
import ReportReducer from './ReportReducer'
import QuestionReducer from './QuestionReducer'
import AnswerReducer from './AnswerReducer'

const rootReducer = combineReducers({
    form: formReducer,
    auth: AuthReducer,
    general: GeneralReducer,
    report: ReportReducer,
    question: QuestionReducer,
    answer: AnswerReducer,
})

export default rootReducer