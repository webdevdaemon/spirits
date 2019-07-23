/**
* @augments {Component<{  showHUD:boolean,  toggleHUD:Function,>}
*/
import React, {lazy, Suspense} from 'react'
import {Switch, Route} from 'react-router-dom'
import LoadingScreen from './Components/Pages/LoadingScreen'
import PropTypes from 'prop-types'

const Add = lazy(() => import('./Components/Pages/Add'))
const Tags = lazy(() => import('./Components/Pages/Tags'))
const Home = lazy(() => import('./Components/Pages/Home'))
const Search = lazy(() => import('./Components/Pages/Search'))
const Random = lazy(() => import('./Components/Pages/Random'))

const PageRouter = ({ showHUD, toggleHUD, ...props }) => {
  const hudProps = {showHUD, toggleHUD}
  return (
    <Switch>
      <Suspense fallback={<LoadingScreen />}>
        <Route
          exact
          path="/"
          render={routeProps => {
            return (
              <Home
              {...props}
              {...routeProps}
              {...hudProps}
              />
            )
          }}
        />

        <Route
          path="/search"
          render={routeProps => {
            return (
              <Search
              {...props}
              {...routeProps}
              {...hudProps}
              />
            )
          }}
        />

        <Route
          path="/tags"
          render={routeProps => {
            return (
              <Tags
              {...props}
              {...routeProps}
              {...hudProps}
              />
            )
          }}
        />

        <Route
          path="/add"
          render={routeProps => {
            return (
              <Add
              {...props}
              {...routeProps}
              {...hudProps}
              />
            )
          }}
        />

        <Route
          path="/random"
          render={routeProps => {
            return (
              <Random
              {...props}
              {...routeProps}
              {...hudProps}
              />
            )
          }}
        />
      </Suspense>
    </Switch>
  )
}

PageRouter.propTypes = {
  showHUD: PropTypes.bool,
  toggleHUD: PropTypes.func,
}

export default PageRouter
