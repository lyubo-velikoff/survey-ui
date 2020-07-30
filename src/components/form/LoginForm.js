import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'

class LoginForm extends Component {

    render() {
        const { loginHandle, registerHandle, handleSubmit, invalid, submitting } = this.props
        return (
            <div className='form login-form w-full max-w-screen-xl m-auto'>

                <div className="flex flex-wrap items-center">
                    <div className="w-full md:w-1/2 p-4">
                        <div className='title text-center'>Register form</div>
                        <form onSubmit={handleSubmit(registerHandle)} className='max-w-sm m-auto'>
                            <div className='mb-4'>
                                <label className='label' htmlFor="name">Name *</label>
                                <Field name="name" component="input" type="text" className='input' placeholder='Your name' />
                            </div>
                            <div className='mb-4'>
                                <label className='label' htmlFor="gender">Gender *</label>
                                <Field name="gender" component="input" type="text" className='input' placeholder='"m" or "f"' />
                            </div>
                            <div className='mt-4'>
                                <label className='label' htmlFor="postcode">Postcode *</label>
                                <Field name="postcode" component="input" type="text" className='input' placeholder='LS21 1FD' />
                            </div>
                            <div className='mt-4'>
                                <label className='label' htmlFor="dob">Date of birth *</label>
                                <Field name="dob" component="input" type="text" className='input' placeholder='1990-02-08' />
                            </div>
                            <button className='button mt-4' type="submit">Register</button>
                        </form>
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                        <div className='title text-center mt-8 md:mt-0 '>Login form</div>
                        <form onSubmit={handleSubmit(loginHandle)} className='max-w-sm m-auto'>
                            <div className='mb-4'>
                                <label className='label' htmlFor="name">Name *</label>
                                <Field  name="name" component="input" type="text" className='input' placeholder='Your name' />
                            </div>
                            <button className='button mt-4' type="submit" disabled={invalid || submitting || false}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

LoginForm.propTypes = {
    loginHandle: PropTypes.func.isRequired,
    registerHandle: PropTypes.func.isRequired,
}

const reduxFormLogin = reduxForm({
    form: 'login'
})(LoginForm)

export default reduxFormLogin