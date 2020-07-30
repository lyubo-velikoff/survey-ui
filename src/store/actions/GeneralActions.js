import * as API from '../../utils/API'
import { GET_AVAILABLE_QUESTIONS, GET_ANSWERS } from '../actions/types'

export const getQuestions = (questions) => ({    
    type: GET_AVAILABLE_QUESTIONS,
    questions,
})

export const getAvailableQuestionsAction = (filters) => {
    return async(dispatch) => {
        const data = await API.getAvailableQuestions(filters)
        dispatch(getQuestions(data))
    }
}

export const getAnswers = (answers) => ({    
    type: GET_ANSWERS,
    answers,
})

export const getAnswersAction = (filters) => {
    return async(dispatch) => {
        const data = await API.getAnswers(filters)
        dispatch(getAnswers(data))
    }
}
