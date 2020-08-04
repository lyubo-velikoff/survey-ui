/**
 * List questions imports
*/
import React from 'react'
import PropTypes from 'prop-types'

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
const SelectField = ({ question, answers, handleSelect }) => {
    const onChangeHandle = (e, question) => {
        handleSelect(e, question)
    }
    return (
        <select className={`select${question.answered ? ' completed' : ''}`} onChange={(e) => onChangeHandle(e, question)}>
            <option></option>
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
const Question = ({ question, answers, handleSelect }) => (
    <div className='mt-8'>
        <div className='my-4 text-base md:text-xl'>{question.title}</div>
        <div className="relative">
            <SelectField question={question} answers={answers} handleSelect={handleSelect} />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-800">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
        </div>
    </div>
)

/**
 * List questions component
 * @param { Object } props 
 */
const ListQuestions = ({ questions, answers, handleSelect }) => {
    return (
        <div className='questions'>
            {questions.map((question, key) => (
                <Question key={key} question={question} answers={answers} handleSelect={handleSelect} />
            ))}
        </div>
    )
}

/**
 * List questions prop types
 */
ListQuestions.propTypes = {
    questions: PropTypes.array,
    answers: PropTypes.array,
    handleSelect: PropTypes.func,
}

export default ListQuestions