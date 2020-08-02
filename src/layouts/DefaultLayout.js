import { withRouter, NavLink } from 'react-router-dom'
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
        const { logoutAction, user, isAdmin } = this.props

        return (
            <div className="default-layout text-center">
                <div className='title'>Hello {user && user.name ? user.name : ''}</div>
                {isAdmin 
                    ? (
                        <nav>
                            <NavLink exact to='/' className='nav-link' activeClassName='is-active'>Home</NavLink>
                            <NavLink exact to='/manage' className='nav-link ml-4 md:ml-0' activeClassName='is-active'>Manage</NavLink>
                            <NavLink exact to='/reports' className='nav-link ml-4 md:ml-0' activeClassName='is-active'>Reports</NavLink>
                        </nav>
                    )
                    : null
                }

                <button className='button mt-8' onClick={logoutAction}>Logout</button>
                {this.props.children}
            </div>
        )
    }
}

function mapStateToProps({ auth }) {
    return {
        user: auth.user,
        isAdmin: auth && auth.isAdmin ? true : false
    }
}

export default withRouter(
    connect(mapStateToProps, { logoutAction })(DefaultLayout)
)