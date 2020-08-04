import * as API from '../../utils/API'
import {
    GET_ANSWERS,
    ANSWER_QUESTION,
} from '../actions/types'

export const getAnswers = (answers) => ({    
    type: GET_ANSWERS,
    answers,
})

export const answerQuestion = (answer) => ({    
    type: ANSWER_QUESTION,
    answer,
})

export const getAnswersAction = (filters) => {
    return async(dispatch) => {
        const data = await API.getAnswers(filters)
        dispatch(getAnswers(data))
    }
}

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
