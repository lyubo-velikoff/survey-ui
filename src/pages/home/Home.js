import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAvailableQuestionsAction, getAnswersAction, answerQuestionAction } from '../../store/actions'
import ListQuestions from '../../components/ListQuestions'
import PossibleOptions from '../../components/PossibleOptions'

class Home extends Component {

    state = {
        isLoading: false,
    }

    componentDidMount() {
        this.mounted = true
        this.props.getAnswersAction()
        this.props.getAvailableQuestionsAction(this.props.auth.user.id)
    }

    componentWillUnmount() {
        this.mounted = false
    }

    handleChange = (e, question) => {
        if (e.target.value === '' || question.answered) return
        const answer = {
            userId: this.props.auth.user.id,
            answerId: parseInt(e.target.value, 16),
            questionId: question.id,
        }
        this.props.answerQuestionAction(answer)
    }

    render() {
        const { questions, answers } = this.props
        return (
            <div className="home-page">
                <div className='mt-8 py-8 text-left max-w-xl m-auto'>
                    <PossibleOptions answers={answers} />
                    <div className='my-8'><hr /></div>
                   <ListQuestions questions={questions} answers={answers} handleSelect={this.handleChange} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ general, auth }) => {
    return { 
        questions: general.questions || [],
        answers: general.answers || [],
        auth: auth,
     }
}

export default connect(mapStateToProps, { getAvailableQuestionsAction, getAnswersAction, answerQuestionAction })(Home)