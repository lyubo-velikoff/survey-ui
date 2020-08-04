import * as API from '../../utils/API'
import {
    GET_DEMOGRAPHIC_GENDER,
    GET_DEMOGRAPHIC_POSTCODE,
    GET_DEMOGRAPHIC_AGE,
    GET_STATISTIC_AVG_WEEKLY_RESPONSES,
    GET_STATISTIC_USER_LIST_BELLOW_SDVA
} from '../actions/types'

/**
 * Action creator - get gender demographic
 * @param { Array } data 
 */
export const getGenderDemographic = (data) => ({    
    type: GET_DEMOGRAPHIC_GENDER,
    data,
})

/**
 * Action creator - get postcode demographic
 * @param { Array } data 
 */
export const getPostcodeDemographic = (data) => ({    
    type: GET_DEMOGRAPHIC_POSTCODE,
    data,
})

/**
 * Action creator - get age range demographic
 * @param { Array } data 
 */
export const getAgeRangeDemographic = (data) => ({    
    type: GET_DEMOGRAPHIC_AGE,
    data,
})

/**
 * Action creator - get weekly average responses
 * @param { Array } data 
 */
export const getAvgWeeklyResponses = (data) => ({    
    type: GET_STATISTIC_AVG_WEEKLY_RESPONSES,
    data,
})

/**
 * Action creator - get user list bellow 1 standard deviation statistic
 * @param { Array } data 
 */
export const getUserListBelowSdva = (data) => ({    
    type: GET_STATISTIC_USER_LIST_BELLOW_SDVA,
    data,
})

/**
 * Send a request to api to get a gender demographic data
 * @param { Object } filters 
 */
export const getGenderDemographicAction = (filters) => {
    return async(dispatch) => {
        const data = await API.getGenderDemographic(filters)
        if (data && data.errors) {
            alert(JSON.stringify(data.errors))
        } else {
            dispatch(getGenderDemographic(data))
        }
    }
}

/**
 * Send an api request to get postcode demographic data
 * @param { Object } filters 
 */
export const getPostcodeDemographicAction = (filters) => {
    return async(dispatch) => {
        const data = await API.getPostcodeDemographic(filters)
        if (data && data.errors) {
            alert(JSON.stringify(data.errors))
        } else {
            dispatch(getPostcodeDemographic(data))
        }
    }
}

/**
 * Send an api request to get age range demographic data
 * @param { Object } filters 
 */
export const getAgeRangeDemographicAction = (filters) => {
    return async(dispatch) => {
        const data = await API.getAgeRangeDemographic(filters)
        if (data && data.errors) {
            alert(JSON.stringify(data.errors))
        } else {
            dispatch(getAgeRangeDemographic(data))
        }
    }
}

/**
 * Send an api request to get avg weekly responses data
 * @param { Object } filters 
 */
export const getAvgWeeklyResponsesAction = (filters) => {
    return async(dispatch) => {
        const data = await API.getAvgWeeklyResponses(filters)
        if (data && data.errors) {
            alert(JSON.stringify(data.errors))
        } else {
            dispatch(getAvgWeeklyResponses(data))
        }
    }
}

/**
 * Send an api request to get a list of users below 1 standard deviation
 */
export const getUserListBelowSdvaAction = () => {
    return async(dispatch) => {
        const data = await API.getUserListBelowSdva()
        if (data && data.errors) {
            alert(JSON.stringify(data.errors))
        } else {
            dispatch(getUserListBelowSdva(data))
        }
    }
}
