import {
    createStore,
    applyMiddleware,
    compose
} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { setUser } from './actions/AuthActions'

/**
 * Logger middleware
 * @param action #next action
 */
const logger = store => next => action => {
    // Exclude redux form logging
    if (!action.type.includes('@@redux-form')) {
        console.group(action.type)
        console.info('dispatching', action)
        console.log('next state', store.getState())
        console.groupEnd(action.type)
    }
    let result = next(action)
    return result
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let middleware = applyMiddleware(
    thunk
)

if (process.env.NODE_ENV === 'development') {
    middleware = applyMiddleware(
        thunk,
        logger
    )
}

/**
 * Store
 */
const store = createStore(
    reducer,
    composeEnhancers(
        middleware
    )
)

/**
 * Setting up auth
 */
if (localStorage.user) {
    try {
        const user = JSON.parse(localStorage.user)
        store.dispatch(setUser(user))
    } catch (err) {
        localStorage.clear()
    }
}

export default store