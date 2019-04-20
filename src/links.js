import React from 'react'
import {IcoSettings, IcoAdd, IcoRandom, IcoSearch, IcoTags} from './icons'

const Label = ({children}) => <p className="nav-link-label">{children}</p>

const navLinks = [
  {
    path: '/add',
    iconComponent: <IcoAdd/>,
    labelComponent: <Label>{'add'}</Label>,
  },
  {
    path: '/search',
    iconComponent: <IcoSearch/>,
    labelComponent: <Label>{'search'}</Label>,
  },
  {
    path: '/random',
    iconComponent: <IcoRandom/>,
    labelComponent: <Label>{'random'}</Label>,
  },
  {
    path: '/tags',
    iconComponent: <IcoTags/>,
    labelComponent: <Label>{'tags'}</Label>,
  },
  {
    path: '/settings',
    iconComponent: <IcoSettings/>,
    labelComponent: <Label>{'settings'}</Label>,
  },
]

export default navLinks
