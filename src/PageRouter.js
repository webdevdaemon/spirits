import React, {lazy, Suspense} from 'react'
import {Switch, Route} from 'react-router-dom'
import LoadingScreen from './Components/Pages/LoadingScreen'

const Add = lazy(() => import('./Components/Pages/Add'))
const Tags = lazy(() => import('./Components/Pages/Tags'))
const Home = lazy(() => import('./Components/Pages/Home'))
const Search = lazy(() => import('./Components/Pages/Search'))
const Random = lazy(() => import('./Components/Pages/Random'))

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
      </Suspense>
    </Switch>
  )
}

export default PageRouter