import { withRouter } from 'react-router-dom'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logoutAction } from '../store/actions'

class DefaultLayout extends Component {

    state = {

    }

    componentDidMount() {
        this.mounted = true
    }
    render() {
        const { logoutAction, user } = this.props

        return (
            <div className="default-layout text-center">
                <div className='title'>Hello {user}</div>
                <button className='button' onClick={logoutAction}>Logout</button>
            </div>
        )
    }
}

function mapStateToProps({ auth }) {
    return {
        user: auth.user,
    }
}

export default withRouter(
    connect(mapStateToProps, { logoutAction })(DefaultLayout)
)