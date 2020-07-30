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
                <div className='title'>Hello {user && user.name ? user.name : ''}</div>
                <button className='button mt-8' onClick={logoutAction}>Logout</button>
                {this.props.children}
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