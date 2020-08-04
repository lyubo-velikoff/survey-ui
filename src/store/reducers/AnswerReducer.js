/**
 * Action types import
*/
import {
    GET_ANSWERS,
} from '../actions/types'

/**
 * Reducer initial state
 */
const initialState = {
    answers: [],
}

/**
 * Answer Reducer
 * @param { Object } state 
 * @param { Object } action 
 */
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