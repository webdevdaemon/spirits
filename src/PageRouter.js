import React, {lazy, Suspense} from 'react'
import {Switch, Route} from 'react-router-dom'
import LoadingScreen from './Components/Pages/LoadingScreen'

const Add = lazy(() => import('./Components/Pages/Add'))
const Tags = lazy(() => import('./Components/Pages/Tags'))
const Home = lazy(() => import('./Components/Pages/Home'))
const Search = lazy(() => import('./Components/Pages/Search'))
const Random = lazy(() => import('./Components/Pages/Random'))

export default () => {
  return (
    <Switch>
      <Suspense fallback={<LoadingScreen/>}>
        <Route
          exact
          path="/"
          render={routeProps => {
            return <Home {...routeProps}/>
          }}
        />

        <Route
          path="/search"
          render={routeProps => {
            return <Search {...routeProps}/>
          }}
        />

        <Route
          path="/tags"
          render={routeProps => {
            return <Tags {...routeProps}/>
          }}
        />

        <Route
          path="/add"
          render={routeProps => {
            return <Add {...routeProps}/>
          }}
        />

        <Route
          path="/random"
          render={routeProps => {
            return <Random {...routeProps}/>
          }}
        />
      </Suspense>
    </Switch>
  )
}
