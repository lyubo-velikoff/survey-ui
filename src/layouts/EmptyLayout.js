/**
 * Empty layout imports
*/
import React, { Component } from 'react'

/**
 * Empty layout component
 */
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