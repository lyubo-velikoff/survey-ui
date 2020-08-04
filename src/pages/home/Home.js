/**
 * Home page imports
*/
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAvailableQuestionAction, getAnswersAction, answerQuestionAction } from '../../store/actions'
import ListQuestions from '../../components/ListQuestions'

/**
 * Home page component
 */
class Home extends Component {

    state = {
        selectedAnswer: 0,
    }

    componentDidMount() {
        this.mounted = true
        this.props.getAnswersAction()
        this.getAvailableQuestion()
    }

    componentWillUnmount() {
        this.mounted = false
    }

    /**
     * Fetch api to get available question
     */
    getAvailableQuestion = () => {
        this.props.getAvailableQuestionAction(this.props.auth.user.id)
    }

    /**
     * ON select change
     * @param { Integer } answerId 
     */
    handleChange = (answerId) => {
        this.setState({ selectedAnswer: answerId })
    }

    /**
     * On submit handle - user answers question
     * @param { Object } question 
     */
    onSubmit = (question) => {
        if (this.state.selectedAnswer === 0) return
        this.setState({ selectedAnswer: 0 })
        const answer = {
            userId: this.props.auth.user.id,
            answerId: this.state.selectedAnswer,
            questionId: question.id,
        }
        this.props.answerQuestionAction(answer)
            .then(() => {
                // usually if submitted and ok set ok notification but for now just load new question
                this.getAvailableQuestion()
            })
    }

    render() {
        const { questions, answers } = this.props
        const { selectedAnswer } = this.state
        return (
            <div className="home-page mt-8 py-8 text-left max-w-xl m-auto">
                <ListQuestions
                    questions={questions}
                    answers={answers}
                    handleSelect={this.handleChange}
                    selectedAnswer={selectedAnswer}
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

const mapStateToProps = ({ auth, question, answer }) => {
    return { 
        questions: question.question || [],
        answers: answer.answers || [],
        auth: auth,
     }
}

export default connect(mapStateToProps, {
    getAvailableQuestionAction,
    getAnswersAction,
    answerQuestionAction
})(Home)