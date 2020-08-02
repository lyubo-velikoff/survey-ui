import { 
    GET_DEMOGRAPHIC_GENDER,
    GET_DEMOGRAPHIC_POSTCODE,
    GET_DEMOGRAPHIC_AGE,
    GET_STATISTIC_AVG_WEEKLY_RESPONSES
} from '../actions/types'

const initialState = {
    gender: [],
    postcode: [],
    ageRange: [],
    avgWeeklyResponses: [],
}

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
        default:
            return state
    }
}