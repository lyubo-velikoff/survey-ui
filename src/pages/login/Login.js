import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import LoadingIndicator from '../../components/loading/LoadingIndicator'
import LoginForm from '../../components/form/LoginForm'
import { loginAction, registerAction } from '../../store/actions'

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

    onLogin = ({ name }) => {
        this.props.loginAction(name)
            .then(() => {
                console.log('authenticated')
                this.props.auth.isAuthenticated && this.redirect()
            }).catch(err => alert(err))
    }

    onRegister = ({ name, gender, postcode, dob }) => {
        this.props.registerAction({ name, gender, postcode, dob })
            .then(() => {
                this.props.auth.isAuthenticated && this.redirect()
            })
            .catch(err => alert(err))
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
                <LoginForm loginHandle={this.onLogin} registerHandle={this.onRegister} errorMessage={'error'} />
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
    connect(mapStateToProps, { loginAction, registerAction })(Login)
)