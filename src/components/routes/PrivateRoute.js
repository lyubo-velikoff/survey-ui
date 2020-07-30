import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const CustomRoute = ({ component: Component, layout: Layout, auth, showAlert, onConfirm, onCancel, ...rest }) => (
    <Route {...rest} render={props => (
        auth.isAuthenticated
            ? <Layout>
                <Component {...props} />
            </Layout>
            : <Redirect to="/login" />
    )} />
)

class PrivateRoute extends Component {

    state = {
        showAlert: false,
        confirmed: false
    }

    componentDidMount() {
        this.mounted = true
    }

    componentWillUnmount() {
        this.mounted = false
    }

    render() {
        return (
            <CustomRoute 
                {...this.props}
            />
        ) 
    }
}

const mapStateToProps = ({ auth }) => {
    return { auth: auth }
}

export default connect(mapStateToProps, { })(PrivateRoute)