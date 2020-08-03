import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { getQuestionsAction, addQuestionAction, updateQuestionAction, deleteQuestionAction } from '../../store/actions'
import AdminListQuestions from '../../components/AdminListQuestions'

class Manage extends Component {

    state = {
        isLoading: false,
    }

    componentDidMount() {
        this.mounted = true
        this.props.getQuestionsAction()
    }

    componentWillUnmount() {
        this.mounted = false
    }

    addQuestion = ({ title, priority }) => {
        this.props.addQuestionAction({ title, priority: priority ? 1 : 0 })
    }

    updateQuestion = (event, questionId) => {
        this.props.updateQuestionAction(questionId, {  priority: event.target.checked ? 1 : 0 })
    }

    deleteQuestion = (questionId) => {
        if(window.confirm('Are you sure?')) {
            this.props.deleteQuestionAction(questionId)
        }
    }

    render() {
        const { questions } = this.props
        return (
            <div className='manage-page mt-8 py-8 text-left max-w-xl m-auto'>
                <AdminListQuestions
                    questions={questions}
                    newQuestionHandle={this.addQuestion}
                    priorityChangeHandle={this.updateQuestion}
                    deleteHandle={this.deleteQuestion}
                />
            </div>
        )
    }
}

const mapStateToProps = ({ general }) => {
    return {
        questions: general.questions || [],
    }
}

export default connect(mapStateToProps, {
    getQuestionsAction,
    addQuestionAction,
    updateQuestionAction,
    deleteQuestionAction
})(Manage)