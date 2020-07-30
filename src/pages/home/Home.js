import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class Home extends Component {

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
            <div className="home-page">
                <h1>Home page</h1>
            </div>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    return { menuItems: auth.menuItems }
}

export default connect(mapStateToProps, { })(Home)