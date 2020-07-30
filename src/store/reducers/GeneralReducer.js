import { 
    GET_AVAILABLE_QUESTIONS,
    GET_ANSWERS
} from '../actions/types'

const initialState = {
    questions: [],
    answers: [],
}

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_AVAILABLE_QUESTIONS:
            return {
                ...state,
                questions: action.questions && action.questions.data? [ ...action.questions.data ] : []
            }
        case GET_ANSWERS:
            return {
                ...state,
                answers: action.answers && action.answers.data? [ ...action.answers.data ] : []
            }
        default:
            return state
    }
}