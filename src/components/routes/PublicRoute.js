/**
 * Public route imports
*/
import React from 'react'
import { Route } from 'react-router-dom'

/**
 * Public route component
 * @param { Object } props 
 */
const PublicRoute = ({ component: Component, layout: Layout, ...rest }) => (
    <Route {...rest} render={props => (
        <Layout>
            <Component {...props} />
        </Layout>
    )} />
)

export default PublicRoute