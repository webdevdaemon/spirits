import React, {lazy, Suspense} from 'react'
import {Route, Switch} from 'react-router-dom'
import LoadingScreen from './Components/Pages/LoadingScreen'

const Add = lazy(() => import('./Components/Pages/Add'))
const Home = lazy(() => import('./Components/Pages/Home'))
const Tags = lazy(() => import('./Components/Pages/Tags'))
const Login = lazy(() => import('./Components/Pages/Login'))
const Random = lazy(() => import('./Components/Pages/Random'))
const Search = lazy(() => import('./Components/Pages/Search'))
const AuthResult = lazy(() => import('./Components/Pages/AuthResult'))

const PageRouter = ({showHUD, ...props}) => {
  return (
    <Switch>
      <Suspense fallback={<LoadingScreen />}>
      
        <Route
          exact
          path="/"
          render={routeProps => {
            return <Home showHUD={showHUD} {...props} {...routeProps} />
          }}
        />

        <Route
          path="/search"
          render={routeProps => {
            return <Search showHUD={showHUD} {...props} {...routeProps} />
          }}
        />

        <Route
          path="/tags"
          render={routeProps => {
            return <Tags showHUD={showHUD} {...props} {...routeProps} />
          }}
        />

        <Route
          path="/add"
          render={routeProps => {
            return <Add showHUD={showHUD} {...props} {...routeProps} />
          }}
        />

        <Route
          path="/random"
          render={routeProps => {
            return <Random showHUD={showHUD} {...props} {...routeProps} />
          }}
        />

        <Route
          path="/login"
          render={routeProps => {
            return <Login showHUD={showHUD} {...props} {...routeProps} />
          }}
        />
        
        <Route
          path="/auth-result"
          render={routeProps => {
            return <AuthResult showHUD={showHUD} {...props} {...routeProps} />
          }}
        />
        
        <Route
          path="/login"
          render={routeProps => {
            return <Login showHUD={showHUD} {...props} {...routeProps} />
          }}
        />
        
      </Suspense>
    </Switch>
  )
}

export default PageRouter
