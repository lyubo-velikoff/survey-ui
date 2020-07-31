import React from 'react'
import PropTypes from 'prop-types'
import NewQuestionForm from './form/NewQuestionForm'

const useToggle = (initialState) => {
    const [ isToggled, setIsToggled ] = React.useState(initialState)
    const toggle = React.useCallback(
      () => setIsToggled(state => !state),
      [ setIsToggled ],
    )
    return [ isToggled, toggle ]
  }

const AdminListQuestions = ({ questions, newQuestionHandle, priorityChangeHandle, deleteHandle }) => {
    const [ isAddNewToggled, toggleAddNew ] = useToggle(false)
    return (
        <div className='mt-8'>
            <button className={`button button-green${isAddNewToggled ? ' active' : ''}`} onClick={toggleAddNew}>Add new</button>
            {isAddNewToggled 
                ? <NewQuestionForm newQuestionHandle={newQuestionHandle}/>
                : null
            }
            <div className='flex-wrap hidden sm:flex mt-8'>
                <div className='w-full sm:w-4/6 font-bold text-lg'>Questions</div>
                <div className='w-full sm:w-1/6 font-bold text-lg'>Priority</div>
                <div className='w-full sm:w-1/6 font-bold text-lg'>Delete</div>
            </div>
            {questions.map(({ id, title, priority}, key) => (
                <div className='flex flex-wrap mt-6' key={key}>
                    <div className='w-full sm:w-4/6'>{title}</div>
                    <div className='w-full sm:w-1/6'>
                        <label className='mt-2 block text-gray-500 font-bold'>
                            <input checked={priority === 1 ? true : false} className='mr-2 leading-tight' type='checkbox' onChange={(e) => priorityChangeHandle(e, id)} />
                            <span className='text-sm sm:hidden'>Priority</span>
                        </label>
                    </div>
                    <div className='w-full sm:w-1/6'>
                        <button className='text-red-600 font-bold mt-2 sm:mt-0 hidden sm:block' onClick={() => deleteHandle(id)}>X</button>
                        <button className='text-red-600 font-bold mt-2 sm:mt-0 sm:hidden' onClick={() => deleteHandle(id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

AdminListQuestions.propTypes = {
    questions: PropTypes.array,
    newQuestionHandle: PropTypes.func.isRequired,
    priorityChangeHandle: PropTypes.func.isRequired,
    deleteHandle: PropTypes.func.isRequired,
}

export default AdminListQuestions