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

export const getQuestions = (filters = {}) => {
    let queryString = setupQueryString(filters)
    return axios({
        method: 'get',
        url: `${baseUrl}/questions${queryString}`,
    }).then(res => res = res.data).catch(err => handleError(err))
}

export const addQuestion = (question) => {
    return axios({
        method: 'post',
        url: `${baseUrl}/questions`,
        data: JSON.stringify(question),
    }).then(res => res = res.data).catch(err => handleError(err))
}

export const updateQuestion = (questionId, question) => {
    return axios({
        method: 'put',
        url: `${baseUrl}/questions/${questionId}`,
        data: question,
    }).then(res => res = res.data).catch(err => handleError(err))
}

export const deleteQuestion = (questionId) => {
    return axios({
        method: 'delete',
        url: `${baseUrl}/questions/${questionId}`,
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

/* Report */
export const getGenderDemographic = (filters = {}) => {
    let queryString = setupQueryString(filters)
    return axios({
        method: 'get',
        url: `${baseUrl}/reports/demographic/gender${queryString}`,
    }).then(res => res = res.data).catch(err => handleError(err))
}

export const getPostcodeDemographic = (filters = {}) => {
    let queryString = setupQueryString(filters)
    return axios({
        method: 'get',
        url: `${baseUrl}/reports/demographic/postcode${queryString}`,
    }).then(res => res = res.data).catch(err => handleError(err))
}
export const getAgeRangeDemographic = (filters = {}) => {
    let queryString = setupQueryString(filters)
    return axios({
        method: 'get',
        url: `${baseUrl}/reports/demographic/age${queryString}`,
    }).then(res => res = res.data).catch(err => handleError(err))
}

export const getAvgWeeklyResponses = (filters = {}) => {
    let queryString = setupQueryString(filters)
    return axios({
        method: 'get',
        url: `${baseUrl}/reports/statistic/avg-weekly-responses${queryString}`,
    }).then(res => res = res.data).catch(err => handleError(err))
}

export const getUserListBelowSdva = () => {
    return axios({
        method: 'get',
        url: `${baseUrl}/reports/statistic/list-users-bellow-sdva`,
    }).then(res => res = res.data).catch(err => handleError(err))
}