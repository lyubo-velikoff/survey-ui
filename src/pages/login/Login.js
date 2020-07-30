import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import LoadingIndicator from '../../components/loading/LoadingIndicator'
import LoginForm from '../../components/form/LoginForm'
import { loginAction } from '../../store/actions'

class Login extends Component {

    state = {
        isLoading: false
    }

    componentDidMount() {
        this.mounted = true
        this.props.auth.isAuthenticated && this.redirect()
    }

    componentWillUnmount() {
        this.mounted = false
    }

    onSubmit = () => {
        this.props.loginAction('Lyubo')
            .then(() => {
                this.props.auth.isAuthenticated && this.redirect()
            })
    }
    
    redirect() {
        if (this.mounted) {
            this.props.history.push('/')
        }
    }

    render() {
        const { isLoading } = this.state
        return (
            <div className='login-page'>
                {isLoading && <LoadingIndicator />}
                <LoginForm loginHandle={this.onSubmit} errorMessage={'error'} />
            </div>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    return { 
        auth: auth,
        errorMessage: auth.error
    }
}

export default withRouter(
    connect(mapStateToProps, { loginAction })(Login)
)