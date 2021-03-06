/* Imports */
import LoadingIndicator from '../components/loading/LoadingIndicator'
import Loadable from 'react-loadable'

/**
 * Login page
 */
export const Login = Loadable({
    loader: () => import(/* webpackChunkName: "login" */'../pages/login/index'),
    loading: LoadingIndicator
})

/**
 * Home page
 */
export const Home = Loadable({
    loader: () => import(/* webpackChunkName: "home" */'../pages/home/index'),
    loading: LoadingIndicator
})

/**
 * Manage page
 */
export const Manage = Loadable({
    loader: () => import(/* webpackChunkName: "manage" */'../pages/manage/index'),
    loading: LoadingIndicator
})

/**
 * Reports page
 */
export const Reports = Loadable({
    loader: () => import(/* webpackChunkName: "reports" */'../pages/reports/index'),
    loading: LoadingIndicator
})

/**
 * 404 page
 */
export const NotFound = Loadable({
    loader: () => import(/* webpackChunkName: "not-found" */'../pages/not-found/index'),
    loading: LoadingIndicator
})
