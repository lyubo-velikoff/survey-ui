import * as API from '../../utils/API'
import { AUTHENTICATED, UNAUTHENTICATED, AUTHENTICATION_ERROR } from '../actions/types'
import { isEmpty } from '../../utils/helpers'

export const setUser = (user) => ({    
    type: AUTHENTICATED,
    user,
})

export const unsetUser = () => ({    
    type: UNAUTHENTICATED,
})

export const setAuthError = () => ({    
    type: AUTHENTICATION_ERROR,
})

export const loginAction = (user) => {
    return async(dispatch) => {
        const data = await API.login(user)
        // TODO: better validation
        if (isEmpty(data) || data === '' || !data.hasOwnProperty('id')) {
            alert(`Unable to login ${JSON.stringify(data)}`) 
        } else {
            localStorage.setItem('user', JSON.stringify(data))
            dispatch(setUser(data))
        }
    }
}

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

export const logoutAction = () => {
    return async(dispatch) => {
        localStorage.clear()
        dispatch(unsetUser())
    }
}