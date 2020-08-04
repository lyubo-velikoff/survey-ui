import * as API from '../../utils/API'
import {
    GET_AVAILABLE_QUESTION,
    GET_QUESTIONS,
    ADD_QUESTION,
    UPDATE_QUESTION,
    DELETE_QUESTION
} from '../actions/types'

/**
 * Action creator - get an object of questions with metadata
 * @param { Object } questions 
 */
export const getQuestions = (questions) => ({    
    type: GET_QUESTIONS,
    questions,
})

/**
 * Action creator - get available question
 * @param { array } question 
 */
export const getAvailableQuestion = (question) => ({    
    type: GET_AVAILABLE_QUESTION,
    question,
})

/**
 * Action creator - delete a question
 * @param { Integer } questionId 
 */
export const deleteQuestion = (questionId) => ({    
    type: DELETE_QUESTION,
    questionId,
})

/**
 * Action creator -  add a new question
 * @param { Object } question 
 */
export const addQuestion = (question) => ({    
    type: ADD_QUESTION,
    question,
})

/**
 * Action creator - update a question
 * @param { Object } question 
 */
export const updateQuestion = (question) => ({    
    type: UPDATE_QUESTION,
    question,
})

/**
 * Fetch api to get available question for a user and dispatch an action creator
 * @param { Integer } userId 
 */
export const getAvailableQuestionAction = (userId) => {
    return async(dispatch) => {
        const data = await API.getAvailableQuestion(userId)
        dispatch(getAvailableQuestion(data))
    }
}

/**
 * Fetch api to get an object containing list of questions and metadata
 * @param { Object } filters 
 */
export const getQuestionsAction = (filters) => {
    return async(dispatch) => {
        const data = await API.getQuestions(filters)
        dispatch(getQuestions(data))
    }
}

/**
 * Send a api request to add a question
 * @param { Object } question 
 */
export const addQuestionAction = (question) => {
    return async(dispatch) => {
        const data = await API.addQuestion(question)
        if (data && data.errors) {
            alert(JSON.stringify(data.errors))
        } else {
            dispatch(addQuestion(data))
        }
    }
}

/**
 * Send a request to api to update a question
 * @param { Integer } questionId 
 * @param { Object } question 
 */
export const updateQuestionAction = (questionId, question) => {
    return async(dispatch) => {
        const data = await API.updateQuestion(questionId, question)
        if (data && data.errors) {
            alert(JSON.stringify(data.errors))
        } else {
            dispatch(updateQuestion(data))
        }
    }
}

/**
 * Send an api request to delete a question
 * @param { Integer } questionId 
 */
export const deleteQuestionAction = (questionId) => {
    return async(dispatch) => {
        const data = await API.deleteQuestion(questionId)
        if (data && data.result && data.result === 'Deleted') {
            dispatch(deleteQuestion(questionId))
        } else {
            alert(JSON.stringify(data))
        }
    }
}