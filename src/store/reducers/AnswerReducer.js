import { 
    GET_ANSWERS,
} from '../actions/types'

const initialState = {
    answers: [],
}

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_ANSWERS:
            return {
                ...state,
                answers: action.answers && action.answers.data? [ ...action.answers.data ] : []
            }
        default:
            return state
    }
}