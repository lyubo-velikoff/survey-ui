import { 
    GET_AVAILABLE_QUESTIONS,
    ADD_QUESTION,
    UPDATE_QUESTION,
    DELETE_QUESTION,
    ANSWER_QUESTION
} from '../actions/types'

const initialState = {
    questions: [],
}

/**
 * Check if questions is array and not empty
 * @param { Object } state 
 * @param { Object } action 
 * @returns { Int } index
 */
 const checkAnswered = (state, action) => {
    if (state.questions === undefined || state.questions.length === 0) return -1
    return state.questions.findIndex(question => question.id === (action.answer && action.answer.questionId ? action.answer.questionId : 0))
}

export default (state = initialState, action) => {
    let index = -1
    switch(action.type) {
        case GET_AVAILABLE_QUESTIONS:
            return {
                ...state,
                questions: action.questions && action.questions.data? [ ...action.questions.data ] : []
            }
        case ADD_QUESTION:
            return {
                ...state,
                questions: [
                    ...state.questions,
                    action.question
                ]
            }
        case UPDATE_QUESTION:
            index = state.questions.findIndex(question => question.id === (action.question && action.question.id ? action.question.id : 0))
            return {
                ...state,
                ...(index !== -1
                    ? {
                        questions: [
                            ...state.questions.slice(0, index),
                            action.question,
                            ...state.questions.slice(index + 1),
                        ]
                    }
                    : {}
                )
            }
        case DELETE_QUESTION:
            return {
                ...state,
                questions: state.questions.filter(question => question.id !== action.questionId)
            }
        case ANSWER_QUESTION:
            index = checkAnswered(state, action)
            return {
                ...state,
                ...(index !== -1
                    ? {
                        questions: [
                            ...state.questions.slice(0, index),
                            {
                                ...state.questions[index],
                                answered: action.answer && action.answer.userId ? true : false,
                            },
                            ...state.questions.slice(index + 1),
                        ]
                    }
                    : {}
                )
            }            
        default:
            return state
    }
}