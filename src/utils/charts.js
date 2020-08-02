const defaultColors = ['#3182ce', '#48bb78', '#ed8936', '#e53e3e']
const defaultGridLineColor = '#a0aec0'
const defaultBgColor = '#cbd5e0'

export const setupGenderDemographicProps = (data) => {
    return {
        title: 'Demographic gender',
        height: '300px',
        chartType: 'ColumnChart',
        data: [
            ['Gender', 'Not at all', 'Several days', 'More than half the days', 'Nearly every day'],
            ...(data.map(({ gender, notAtAll, severalDays, halfDays, everyDay}) => {
                return [ gender === 'f' ? 'Female' : 'Male', notAtAll, severalDays, halfDays, everyDay ]
            }))
        ],
        options: {
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
            legend: { position: 'top'  },
        }
    }
}

export const setupAvgWeeklyResponsesProps = (data) => {
    console.log(data)
    return {
        title: 'Statistic avg weekly responses',
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
            backgroundColor: defaultBgColor,
            chartArea: { width: '80%',  },
            colors: defaultColors,
            vAxis: {
                title: '',
                gridlines: { color: defaultGridLineColor }
            },
            hAxis: {
                title: '',
                gridlines: { color: defaultGridLineColor }
            },
            legend: { position: 'top'  },
        }
    }
}

export const setupAgeDemographicProps = (data) => {
    return {
        title: 'Demographic age range',
        height: '300px',
        chartType: 'ColumnChart',
        data: [
            ['Age Range', '0 - Not at all', '1 - Several days', '2 - More than half the days', '3 - Nearly every day'],
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
            legend: { position: 'top'  },
        }
    }
}

export const setupPostcodeDemographicProps = (data) => {
    return {
        title: 'Demographic postcode',
        chartType: 'BarChart',
        data: [
            ['Postcode', 'Not at all', ' Several days', 'More than half the days', 'Nearly every day'],
            ...(data.map(({ postcode, notAtAll, severalDays, halfDays, everyDay}) => {
                return [ postcode, notAtAll, severalDays, halfDays, everyDay ]
            }))
        ],
        options: {
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