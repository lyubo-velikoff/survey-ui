import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { reduxForm } from 'redux-form'

class LoginForm extends Component {

    render() {
        const { loginHandle } = this.props
        return (
            <div className='form login-form text-center'>
                <div className='title'>Login form</div>
                <button className='button' onClick={loginHandle}>Login</button>
            </div>
        )
    }
}

LoginForm.propTypes = {
    loginHandle: PropTypes.func.isRequired,
}

const reduxFormLogin = reduxForm({
    form: 'login'
})(LoginForm)

export default reduxFormLogin