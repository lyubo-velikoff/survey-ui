import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class Manage extends Component {

    state = {
        isLoading: false,
    }

    componentDidMount() {
        this.mounted = true
    }

    componentWillUnmount() {
        this.mounted = false
    }

    render() {

        return (
            <div className="manage-page">
                <h1>Manage page</h1>
            </div>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    return { menuItems: auth.menuItems }
}

export default connect(mapStateToProps, { })(Manage)