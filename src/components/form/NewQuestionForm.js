/**
 * New question form component imports
*/
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm, reset } from 'redux-form'

/**
 * New question form component
 */
class NewQuestionForm extends Component {

    render() {
        const { newQuestionHandle, handleSubmit, invalid, submitting } = this.props
        return (
            <div className='form w-full my-8'>
                 <form onSubmit={handleSubmit(newQuestionHandle)} className='flex flex-wrap items-center'>
                    <div className='w-full md:w-4/6'>
                        <Field name="title" component="input" type="text" className='input' placeholder='Question title' />
                    </div>

                    <div className="w-full md:w-1/6 md:text-center">
                        <label className='mt-4 md:mt-0 block text-gray-500 font-bold'>
                        <Field name="priority" component="input" type="checkbox" className='mr-2 leading-tight' />
                            <span className='text-sm md:hidden'>Priority</span>
                        </label>
                    </div>

                    <div className="w-full md:w-1/6">
                        <button className='button mt-4 md:mt-0' type="submit" disabled={invalid || submitting || false}>Add</button>
                    </div>
                </form>
            </div>
        )
    }
}

/**
 * New question form prop types
 */
NewQuestionForm.propTypes = {
    newQuestionHandle: PropTypes.func.isRequired,
}

/**
 * Funtion that resets new question form
 * @param {*} result 
 * @param {*} dispatch 
 */
const afterSubmit = (result, dispatch) => dispatch(reset('new-question'))

const reduxFormLogin = reduxForm({
    form: 'new-question',
    onSubmitSuccess: afterSubmit,
})(NewQuestionForm)

export default reduxFormLogin