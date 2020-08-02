import React from 'react'
import PropTypes from 'prop-types'
import GoogleChart from 'react-google-charts'

const Chart = (props) => {
    return (
        <div className='chart mt-8 lg:p-4'>
            <div className='title'>{props.title}</div>
            <GoogleChart
                width={'100%'}
                loader={<div>Loading Chart</div>}
                {...props}
                // For tests
                // rootProps={{ 'data-testid': '1' }}
            />
        </div>
    )
}

Chart.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array.isRequired,
    options: PropTypes.object.isRequired,
}

Chart.defaultProps = {
    title: 'Chart title here'
}

export default Chart

