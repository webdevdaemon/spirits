import React from 'react'

import Home from './Home'
import Search from './Search'
import Filter from './Filter'
import Add from './Add'

const Pages = {
  Home: (props => <Home />)(props),
  Search: (props => <Search />)(props),
  Filter: (props => <Filter />)(props),
  Add: (props => <Add />)(props),
}

export default Pages