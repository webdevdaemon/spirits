import {BrowserRouter as Router, Route} from 'react-router-dom'
import Pages from './Components/Pages/index'

export default () => {
  return (
    <Router>
      <Route
        exact
        path="/"
        render={props => {
          return <Pages.Home />
        }}
      />

      <Route
        path="/search"
        render={props => {
          return <Pages.Search />
        }}
      />

      <Route
        path="/filter"
        render={props => {
          return <Pages.Filter />
        }}
      />

      <Route
        path="/add"
        render={props => {
          return <Pages.Add />
        }}
      />
    </Router>
  )
}
