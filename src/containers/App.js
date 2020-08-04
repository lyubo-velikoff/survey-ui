/**
 * App container imports
*/
import React from 'react'
import { Switch } from 'react-router-dom'
import CustomRoute from '../components/routes/PrivateRoute'
import PublicRoute from '../components/routes/PublicRoute'
import DefaultLayout from '../layouts/DefaultLayout'
import EmptyLayout from '../layouts/EmptyLayout'
import {
    Login,
    Home,
    Manage,
    Reports,
    NotFound
} from '../utils/lazyLoad'

/**
 * App container component
 */
const App = () => (
    <Switch>
        <CustomRoute path="/" exact layout={DefaultLayout} component={Home} />
        <CustomRoute path="/manage" exact layout={DefaultLayout} component={Manage} />
        <CustomRoute path="/reports" exact layout={DefaultLayout} component={Reports} />
        <PublicRoute path="/login" exact layout={EmptyLayout} component={Login} />
        <PublicRoute path="*" exact layout={EmptyLayout} component={NotFound} />
    </Switch>
)

export default App
