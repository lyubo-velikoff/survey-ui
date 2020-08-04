/**
 * Action types import
*/
import {
    GET_DEMOGRAPHIC_GENDER,
    GET_DEMOGRAPHIC_POSTCODE,
    GET_DEMOGRAPHIC_AGE,
    GET_STATISTIC_AVG_WEEKLY_RESPONSES,
    GET_STATISTIC_USER_LIST_BELLOW_SDVA
} from '../actions/types'

/**
 * Reducer initial state
 */
const initialState = {
    gender: [],
    postcode: [],
    ageRange: [],
    avgWeeklyResponses: [],
    userListBellowSdva: [],
}

/**
 * Report Reducer
 * @param { Object } state 
 * @param { Object } action 
 */
export default (state = initialState, action) => {
    switch(action.type) {
        case GET_DEMOGRAPHIC_GENDER:
            return {
                ...state,
                gender: action.data || []
            }
        case GET_DEMOGRAPHIC_POSTCODE:
            return {
                ...state,
                postcode: action.data || []
            }
        case GET_DEMOGRAPHIC_AGE:
            return {
                ...state,
                ageRange: action.data || []
            }
        case GET_STATISTIC_AVG_WEEKLY_RESPONSES:
            return {
                ...state,
                avgWeeklyResponses: action.data || []
            }
        case GET_STATISTIC_USER_LIST_BELLOW_SDVA:
            return {
                ...state,
                userListBellowSdva: action.data || []
            }
        default:
            return state
    }
}