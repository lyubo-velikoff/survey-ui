import * as API from '../../utils/API'
import { AUTHENTICATED, UNAUTHENTICATED } from '../actions/types'
import { isEmpty } from '../../utils/helpers'

/**
 * Send user action
 * @param { Object } user 
 */
export const setUser = (user) => ({    
    type: AUTHENTICATED,
    user,
})

/**
 * Unset user action
 */
export const unsetUser = () => ({    
    type: UNAUTHENTICATED,
})

/**
 * Login - send request to api and dispatch action accordingly
 * @param { String } user 
 */
export const loginAction = (user) => {
    return async(dispatch) => {
        const data = await API.login(user)
        if (isEmpty(data) || data === '' || !data.hasOwnProperty('id')) {
            alert(`Unable to login ${JSON.stringify(data)}`) 
        } else {
            localStorage.setItem('user', JSON.stringify(data))
            dispatch(setUser(data))
        }
    }
}

/**
 * Register - send request to api to add a new user
 * @param { Object } user 
 */
export const registerAction = (user) => {
    return async(dispatch) => {
        const data = await API.register(user)
        if (!data || isEmpty(data) || data === '' || !data.hasOwnProperty('id')) {
            alert(`Unable to register ${JSON.stringify(data)}`) 
        } else {
            localStorage.setItem('user', JSON.stringify(data))
            dispatch(setUser(data))
        }
    }
}

/**
 * Logout - clear local storage and send unset user action
 */
export const logoutAction = () => {
    return async(dispatch) => {
        localStorage.clear()
        dispatch(unsetUser())
    }
}