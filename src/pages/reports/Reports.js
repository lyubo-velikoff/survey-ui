/**
 * Reports page imports
*/
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    getQuestionsAction,
    getGenderDemographicAction,
    getPostcodeDemographicAction,
    getAgeRangeDemographicAction,
    getAvgWeeklyResponsesAction,
    getUserListBelowSdvaAction,
} from '../../store/actions'
import Chart from '../../components/Chart'
import {
    setupGenderDemographicProps,
    setupPostcodeDemographicProps,
    setupAgeDemographicProps,
    setupAvgWeeklyResponsesProps,
    setupUserListBellowSdva
} from '../../utils/charts'

/**
 * Reports page component
 */
class Reports extends Component {

    state = {
        filters: {}
    }

    componentDidMount() {
        this.mounted = true
        this.loadCharts()
    }

    componentWillUnmount() {
        this.mounted = false
    }

    loadCharts = () => {
        const { filters } = this.state
        this.props.getQuestionsAction()
        this.props.getGenderDemographicAction(filters)
        this.props.getPostcodeDemographicAction(filters)
        this.props.getAgeRangeDemographicAction(filters)
        this.props.getAvgWeeklyResponsesAction(filters)
        this.props.getUserListBelowSdvaAction(filters)
    }

    onQuestionFilter = (e) => {
        this.setState({ filters: { 
            ...(e.target.value ? { questionId: e.target.value } : {})
        }}, () => {
            this.loadCharts()
        })
    }

    render() {
        const { questions, genderData, postcodeData, ageRangeData, avgWeeklyResponsesData, userListBellowSdvaData } = this.props
        const genderChartOptions = setupGenderDemographicProps(genderData)
        const postcodeChartOptions = setupPostcodeDemographicProps(postcodeData)
        const ageRangeOptions = setupAgeDemographicProps(ageRangeData)
        const avgWeeklyResponsesOptions = setupAvgWeeklyResponsesProps(avgWeeklyResponsesData)
        const userListBellowSdvaOptions = setupUserListBellowSdva(userListBellowSdvaData)
        return (
            <div className='reports-page mt-8 py-8 text-left max-w-xl lg:max-w-screen-xl m-auto'>

                <div className='filters w-full lg:max-w-lg lg:p-4'>
                    <label className='label'>Filter by question</label>
                    <select className={`select`} onChange={this.onQuestionFilter}>
                        <option></option>
                        {questions.map(({ id, title }, key) => (
                            <option key={key} value={id}>{id} - {title}</option>
                        ))}
                    </select>
                </div>

                <div className='flex-wrap lg:flex'>
                    <div className='w-full lg:w-1/2'>
                        <Chart {...genderChartOptions} />
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <Chart {...ageRangeOptions} />
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <Chart {...postcodeChartOptions} />
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <Chart {...avgWeeklyResponsesOptions} />
                        <Chart {...userListBellowSdvaOptions} />

                    </div>
                    <div className='w-full lg:w-1/2'>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ report, question }) => {
    return {
        questions: question.questions || [],
        genderData: report.gender,
        postcodeData: report.postcode,
        ageRangeData: report.ageRange,
        avgWeeklyResponsesData: report.avgWeeklyResponses,
        userListBellowSdvaData: report.userListBellowSdva ,
    }
}

export default connect(mapStateToProps, {
    getQuestionsAction,
    getGenderDemographicAction,
    getPostcodeDemographicAction,
    getAgeRangeDemographicAction,
    getAvgWeeklyResponsesAction,
    getUserListBelowSdvaAction,
})(Reports)