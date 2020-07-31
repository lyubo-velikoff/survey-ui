import * as API from '../../utils/API'
import { GET_AVAILABLE_QUESTIONS, GET_ANSWERS, ANSWER_QUESTION } from '../actions/types'

export const getQuestions = (questions) => ({    
    type: GET_AVAILABLE_QUESTIONS,
    questions,
})

export const getAvailableQuestionsAction = (userId, filters) => {
    return async(dispatch) => {
        const data = await API.getAvailableQuestions(userId, filters)
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

export const answerQuestion = (answer) => ({    
    type: ANSWER_QUESTION,
    answer,
})

export const answerQuestionAction = (answer) => {
    return async(dispatch) => {
        const data = await API.answerQuestion(answer)
        if (data && data.errors) {
            // TODO: dispatch error notification when action reducer ready for it
            alert(JSON.stringify(data.errors))
        } else {
            dispatch(answerQuestion(data))
        }
    }
}