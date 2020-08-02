import * as API from '../../utils/API'
import {
    GET_DEMOGRAPHIC_GENDER,
    GET_DEMOGRAPHIC_POSTCODE,
    GET_DEMOGRAPHIC_AGE,
    GET_STATISTIC_AVG_WEEKLY_RESPONSES
} from '../actions/types'

export const getGenderDemographic = (data) => ({    
    type: GET_DEMOGRAPHIC_GENDER,
    data,
})

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

export const getPostcodeDemographic = (data) => ({    
    type: GET_DEMOGRAPHIC_POSTCODE,
    data,
})

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

export const getAgeRangeDemographic = (data) => ({    
    type: GET_DEMOGRAPHIC_AGE,
    data,
})

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

export const getAvgWeeklyResponses = (data) => ({    
    type: GET_STATISTIC_AVG_WEEKLY_RESPONSES,
    data,
})

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
