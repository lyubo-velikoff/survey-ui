import React, { Component } from 'react'

class EmptyLayout extends Component {
    render() {
        return (
            <div className="body-content empty-layout">
                {this.props.children}
            </div>
        )
    }
}

export default EmptyLayout