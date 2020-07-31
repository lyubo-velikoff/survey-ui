import React from 'react'
import PropTypes from 'prop-types'

const PossibleOptions = ({ answers }) => (
    <div className='answers text-center'>
        <h3 className='font-bold'>Possible Options</h3>
        {answers.map(({ title }, key) => (
            <span key={key} className='my-4 block md:inline-block'>{key !== 0 ? <span className="hidden md:inline-block">,&nbsp;</span> : ''}{title} </span>
        ))}
    </div>
)

PossibleOptions.propTypes = {
    answers: PropTypes.array,
}

export default PossibleOptions