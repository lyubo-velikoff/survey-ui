/**
 * Action types import
 */
import {
    AUTHENTICATED, 
    UNAUTHENTICATED, 
} from '../actions/types'

/**
 * Reducer initial state
 */
const initialState = {
    isAuthenticated: false,
    isAdmin: false,
    user: null
}

/**
 * Iterate through Roles to check if user role is Administrator
 * @param { Array } payload 
 * @returns { Boolean }
 */
const checkAdmin = (payload) => {
    const [ adminRole ] = payload.filter((role) => role.name === 'Administrator')
    return adminRole ? true : false
}

/**
 * Auth Reducer
 * @param { Object } state 
 * @param { Object } action 
 */
export default (state = initialState, action) => {
    switch(action.type) {
        case AUTHENTICATED:
            return {
                isAuthenticated: true,
                isAdmin: action.user && action.user.hasOwnProperty('Roles') ? checkAdmin(action.user['Roles']) : false,
                user: action.user
            }
        case UNAUTHENTICATED:
            return initialState
        default:
            return state
    }
}