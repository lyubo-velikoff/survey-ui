/* Imports */
import axios from 'axios'

/* Default headers */
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.validateStatus = function() { return true }

/* Variables */
const baseUrl = 'http://localhost:3001'

const handleError = (err) => alert(err)

const setupQueryString = (filters) => {
    let queryString = ''
    if (filters && Object.keys(filters) && Object.keys(filters).length) {
        queryString = '?' + Object.keys(filters).map(key => key + '=' + filters[key]).join('&')
    }
    return queryString
}

/* Auth */
export const login = (name) => {
    return axios({
        method: 'get',
        url: `${baseUrl}/users/names/${name}`,
    }).then(res => res = res.data).catch(err => handleError(err))
}

export const register = (user) => {
    return axios({
        method: 'post',
        url: `${baseUrl}/users`,
        data: JSON.stringify(user),
    }).then(res => res = res.data).catch(err => handleError(err))
}

/* Question */
export const getAvailableQuestions = (userId, filters = {}) => {
    let queryString = setupQueryString(filters)
    return axios({
        method: 'get',
        url: `${baseUrl}/users/${userId}/questions${queryString}`,
    }).then(res => res = res.data).catch(err => handleError(err))
}

/* Answer */
export const getAnswers = (filters = {}) => {
    let queryString = setupQueryString(filters)
    return axios({
        method: 'get',
        url: `${baseUrl}/answers${queryString}`,
    }).then(res => res = res.data).catch(err => handleError(err))
}

export const answerQuestion = ({ userId, questionId, answerId }) => {
    return axios({
        method: 'post',
        url: `${baseUrl}/users/${userId}/answers`,
        data: JSON.stringify({ questionId, answerId }),
    }).then(res => res = res.data).catch(err => handleError(err))
}