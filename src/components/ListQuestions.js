/**
 * List questions imports
*/
import React from 'react'
import PropTypes from 'prop-types'
import PossibleOptions from './PossibleOptions'

/**
 * Option component
 * @param { Object } props
 */
const Option = ({ id, title }) => (
    <option value={id}>{title}</option>
)

/**
 * Select field component
 * @param { Object } props 
 */
const SelectField = ({ question, answers, handleSelect, selectedAnswer }) => {
    const onChangeHandle = (e, question) => {
        handleSelect(parseInt(e.target.value, 16), question)
    }
    return (
        <select className={`select`} value={selectedAnswer} onChange={(e) => onChangeHandle(e, question)}>
            <option value={0}></option>
            {answers.map((answer, key) => (
                <Option key={key} {...answer} />
            ))}
        </select>
    )
}

/**
 * Question component
 * @param { Object } props 
 */
const Question = ({ question, answers, handleSelect, selectedAnswer, onSubmit }) => (
    <div className='mt-8 text-center'>
        <div className='my-4 text-base md:text-xl'>{question.title}?{question.priority ? ' *' : ''}</div>
        <div className="relative max-w-sm m-auto">
            <SelectField question={question} answers={answers} handleSelect={handleSelect} selectedAnswer={selectedAnswer} onSubmit={onSubmit} />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-800">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
        </div>
        <div className='mt-6'>
            <button className='button button-green text-center' onClick={() => onSubmit(question)}>Submit answer</button>
        </div>
    </div>
)

/**
 * List questions component
 * @param { Object } props 
 */
const ListQuestions = (props) => {
    const { questions, answers } = props
    return (
        <div className='questions'>
            {questions && questions.length > 0     
                ? 
                    questions.map((question, key) => (
                        <div key={key}>
                            <PossibleOptions answers={answers} />
                            <div className='my-8'><hr /></div>
                            <Question
                                question={question}
                                {...props}
                            />
                        </div>
                    ))
                : <div className='text-lg font-bold text-center mt-2'>No more questions for this week, thank you!</div>
            }
        </div>
    )
}

/**
 * List questions prop types
 */
ListQuestions.propTypes = {
    questions: PropTypes.array,
    answers: PropTypes.array,
    handleSelect: PropTypes.func.isRequired,
    selectedAnswer: PropTypes.number.isRequired,
    onSubmit: PropTypes.func.isRequired,
}

export default ListQuestions