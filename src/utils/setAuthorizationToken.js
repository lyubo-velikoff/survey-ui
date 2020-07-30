/* Imports */
import axios from 'axios'

/**
 * Setting up the bearer token in the requests globally
 * @param {*} token string 
 */
export default function setAuthorizationToken(token) {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
        delete axios.defaults.headers.common['Authorization']
    }
}