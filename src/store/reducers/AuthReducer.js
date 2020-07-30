import { 
    AUTHENTICATED, 
    UNAUTHENTICATED, 
} from '../actions/types'

const initialState = {
    isAuthenticated: false,
    user: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case AUTHENTICATED:
            return {
                isAuthenticated: true,
                user: action.user
            }
        case UNAUTHENTICATED:
            return initialState
        default:
            return state
    }
}