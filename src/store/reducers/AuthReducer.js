import { 
    AUTHENTICATED, 
    UNAUTHENTICATED, 
} from '../actions/types'

const initialState = {
    isAuthenticated: false,
    isAdmin: false,
    user: null
}

const checkAdmin = (payload) => {
    const [ adminRole ] = payload.filter((role) => role.name === 'Administrator')
    return adminRole ? true : false
}

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