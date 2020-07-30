// import * as API from '../../utils/API'
// import setAuthorizationToken from '../../utils/setAuthorizationToken'
import { AUTHENTICATED, UNAUTHENTICATED } from '../actions/types'

export const setUser = (user) => ({    
    type: AUTHENTICATED,
    user,
})

export const unsetUser = () => ({    
    type: UNAUTHENTICATED,
})

export const loginAction = (user) => {
    return async(dispatch) => {
        localStorage.setItem('user', user)
        dispatch(setUser(user))
    }
}

export const logoutAction = () => {
    return async(dispatch) => {
        localStorage.clear()
        dispatch(unsetUser())
    }
}