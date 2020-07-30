import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAvailableQuestionsAction, getAnswersAction } from '../../store/actions'

class Home extends Component {

    state = {
        isLoading: false,
    }

    componentDidMount() {
        this.mounted = true
        this.props.getAnswersAction()
        this.props.getAvailableQuestionsAction()
    }

    componentWillUnmount() {
        this.mounted = false
    }

    handleChange(e) {
        console.log(e.target.value)
        // answer question, prepare answerId, questionId, userId
    }

    render() {
        const { questions, answers } = this.props
        return (
            <div className="home-page">
                <div className='mt-8 py-8 text-left max-w-xl m-auto'>
                    <div className='answers text-center'>
                        <h3 className='font-bold'>Possible Options</h3>
                        {answers.map(({ answer, title }, key) => (
                            <span key={key} className='my-4 block md:inline-block'>{key !== 0 ? <span className="hidden md:inline-block">,&nbsp;</span> : ''}{answer} - {title} </span>
                        ))}
                    </div>
                    <div className='my-8'>
                        <hr />
                    </div>
                    <div className='questions'>
                        {questions.map(({ title }, key) => (
                            <div className='mt-8' key={key} >
                                <div className='my-4 text-xl'>{title}</div>
                                <div className="relative">
                                    <select className="select" onChange={this.handleChange}>
                                        <option></option>
                                        {answers.map(({ id, answer, title }, key) => (
                                            <option key={id}>{answer} - {title}</option>
                                        ))}
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-800">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ general }) => {
    return { 
        questions: general.questions || [],
        answers: general.answers || [],
     }
}

export default connect(mapStateToProps, { getAvailableQuestionsAction, getAnswersAction })(Home)