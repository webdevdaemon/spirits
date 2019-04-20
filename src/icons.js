import React from 'react'
import {withBaseIcon} from 'react-icons-kit'
import {dice} from 'react-icons-kit/icomoon/dice'
import {user} from 'react-icons-kit/icomoon/user'
import {cogs} from 'react-icons-kit/icomoon/cogs'
import {plus} from 'react-icons-kit/icomoon/plus'
import {list2} from 'react-icons-kit/icomoon/list2'
import {search} from 'react-icons-kit/icomoon/search'
import {circleLeft} from 'react-icons-kit/icomoon/circleLeft'
import {priceTags} from 'react-icons-kit/icomoon/priceTags'

// Icon Type Containers (HOCs)
const HeaderNavIcon = withBaseIcon({size: '5vh', style: {color: '#a5acaf'}})
const FooterNavIcon = withBaseIcon({
  className: 'nav-link-icon',
  style: {color: '#666666'},
  size: '5vh',
})

export const IcoAdd = () => <FooterNavIcon icon={plus}/>
export const IcoList = () => <FooterNavIcon icon={list2}/>
export const IcoTags = () => <FooterNavIcon icon={priceTags}/>
export const IcoRandom = () => <FooterNavIcon icon={dice}/>
export const IcoSearch = () => <FooterNavIcon icon={search}/>
export const IcoSettings = () => <FooterNavIcon icon={cogs}/>

export const IcoGoBack = () => <HeaderNavIcon icon={circleLeft}/>
export const IcoAccount = () => <HeaderNavIcon icon={user}/>
