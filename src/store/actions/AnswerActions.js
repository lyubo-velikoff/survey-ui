import * as API from '../../utils/API'
import {
    GET_ANSWERS,
    ANSWER_QUESTION,
} from '../actions/types'

/**
 * Get an object containing metadata and a list of answers
 * @param { Object } answers 
 */
export const getAnswers = (answers) => ({    
    type: GET_ANSWERS,
    answers,
})

/**
 * User answers question action
 * @param { Object } answer 
 */
export const answerQuestion = (answer) => ({    
    type: ANSWER_QUESTION,
    answer,
})

/**
 * Get an object of answer containing a list of answers and metadata
 * @param { Object } filters 
 */
export const getAnswersAction = (filters) => {
    return async(dispatch) => {
        const data = await API.getAnswers(filters)
        dispatch(getAnswers(data))
    }
}

/**
 * Send a request to api - user answer question
 * @param { Object } answer 
 */
export const answerQuestionAction = (answer) => {
    return async(dispatch) => {
        const data = await API.answerQuestion(answer)
        if (data && data.errors) {
            alert(JSON.stringify(data.errors))
        } else {
            dispatch(answerQuestion(data))
        }
    }
}
