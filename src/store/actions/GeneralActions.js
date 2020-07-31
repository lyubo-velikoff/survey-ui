import * as API from '../../utils/API'
import {
    GET_AVAILABLE_QUESTIONS,
    GET_ANSWERS,
    ANSWER_QUESTION,
    ADD_QUESTION,
    UPDATE_QUESTION,
    DELETE_QUESTION
} from '../actions/types'

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

export const getQuestionsAction = (filters) => {
    return async(dispatch) => {
        const data = await API.getQuestions(filters)
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

export const addQuestion = (question) => ({    
    type: ADD_QUESTION,
    question,
})

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

export const updateQuestion = (question) => ({    
    type: UPDATE_QUESTION,
    question,
})

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

export const deleteQuestion = (questionId) => ({    
    type: DELETE_QUESTION,
    questionId,
})

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