/**
 * Some default variables here
 */
const defaultColors = ['#3182ce', '#48bb78', '#ed8936', '#e53e3e']
const defaultGridLineColor = '#a0aec0'
const defaultBgColor = '#cbd5e0'
const defaultAnimation = {
    startup: true,
    easing: 'linear',
    duration: 500,
}

const genderDescription = {
    m: 'Male',
    f: 'Female',
    o: 'Other'
}

/**
 * Prepare chart options for gender demographic
 * @param { Array } data 
 */
export const setupGenderDemographicProps = (data) => {
    return {
        title: '3a. Demographic gender',
        height: '300px',
        chartType: 'ColumnChart',
        data: [
            ['Gender', 'Not at all', 'Several days', 'More than half the days', 'Nearly every day'],
            ...(data.map(({ gender, notAtAll, severalDays, halfDays, everyDay }) => {
                return [genderDescription[gender], notAtAll, severalDays, halfDays, everyDay]
            }))
        ],
        options: {
            animation: { ...defaultAnimation, },
            backgroundColor: defaultBgColor,
            chartArea: { width: '80%' },
            colors: defaultColors,
            vAxis: {
                title: '',
                gridlines: { color: defaultGridLineColor }
            },
            hAxis: {
                title: '',
                gridlines: { color: defaultGridLineColor }
            },
            legend: { position: 'top' },
        }
    }
}

/**
 * Prepare chart options for avg weekly responses
 * @param { Array } data 
 */
export const setupAvgWeeklyResponsesProps = (data) => {
    console.log(data)
    return {
        title: '4a. Statistic avg response per answer type per week',
        height: '300px',
        chartType: 'ColumnChart',
        data: [
            ['Week', 'Not at all', 'Several days', 'More than half the days', 'Nearly every day'],
            ...(data.map((row) => {
                return [
                    row['week'],
                    parseFloat(row['0 - Not at all']),
                    parseFloat(row['1 - Several days']),
                    parseFloat(row['2 - More than half the days']),
                    parseFloat(row['3 - Nearly every day']),
                ]
            }))
        ],
        options: {
            animation: { ...defaultAnimation, },
            backgroundColor: defaultBgColor,
            chartArea: { width: '80%', },
            colors: defaultColors,
            vAxis: {
                title: '',
                gridlines: { color: defaultGridLineColor },
            },
            hAxis: {
                title: '',
                gridlines: { color: defaultGridLineColor },
            },
            legend: { position: 'top' },
        }
    }
}

/**
 * Prepare chart options for age range demographic
 * @param { Array } data 
 */
export const setupAgeDemographicProps = (data) => {
    return {
        title: '3b. Demographic age range',
        height: '300px',
        chartType: 'ColumnChart',
        data: [
            ['Age Range', 'Not at all', 'Several days', 'More than half the days', 'Nearly every day'],
            ...(data.map((range) => {
                return [
                    range['ageRange'],
                    range['0 - Not at all'],
                    range['1 - Several days'],
                    range['2 - More than half the days'],
                    range['3 - Nearly every day'],
                ]
            }))
        ],
        options: {
            animation: { ...defaultAnimation, },
            backgroundColor: defaultBgColor,
            chartArea: { width: '80%' },
            colors: defaultColors,
            vAxis: {
                title: '',
                gridlines: { color: defaultGridLineColor }
            },
            hAxis: {
                title: '',
                gridlines: { color: defaultGridLineColor }
            },
            legend: { position: 'top' },
        }
    }
}

/**
 * Prepare chart options for postcode demographic
 * @param { Array } data 
 */
export const setupPostcodeDemographicProps = (data) => {
    return {
        title: '3a. Demographic postcode',
        chartType: 'BarChart',
        data: [
            ['Postcode', 'Not at all', ' Several days', 'More than half the days', 'Nearly every day'],
            ...(data.map(({ postcode, notAtAll, severalDays, halfDays, everyDay }) => {
                return [postcode, notAtAll, severalDays, halfDays, everyDay]
            }))
        ],
        options: {
            animation: { ...defaultAnimation, },
            backgroundColor: defaultBgColor,
            chartArea: { width: '70%', height: '80%' },
            colors: defaultColors,
            vAxis: {
                title: '',
                gridlines: { color: defaultGridLineColor }
            },
            hAxis: {
                title: 'Answers',
                format: '0',
                gridlines: { color: defaultGridLineColor }
            },
            legend: 'top',
            height: '700px',
        }
    }
}

/**
 * Prepare chart options for user list below 1 standard deviation statistic
 * @param { Array } data 
 */
export const setupUserListBellowSdva = (data) => {
    return {
        title: '4b. Statistic list of users bellow 1 sdva',

        chartType: 'Table',
        data: [
            ['Row', 'User name'],
            ...(data.map(({ userName }, key) => {
                return [ key + 1, userName ]
            }))
        ],
        options: {
            height: '285px',
            animation: { ...defaultAnimation, },
            backgroundColor: defaultBgColor,
            chartArea: { width: '70%', height: '80%' },
            colors: defaultColors,
            text: { color: 'black'},
            vAxis: {
                title: '',
            },
            hAxis: {
                title: 'Answers',
                format: '0',

            },
            legend: 'top',
        }
    }
}