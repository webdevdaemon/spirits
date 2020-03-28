import React from 'react'
import {withBaseIcon} from 'react-icons-kit'
import {userCircleO as user} from 'react-icons-kit/fa/userCircleO'
import {circleLeft} from 'react-icons-kit/icomoon/circleLeft'
import {cogs} from 'react-icons-kit/icomoon/cogs'
import {dice} from 'react-icons-kit/icomoon/dice'
import {list2} from 'react-icons-kit/icomoon/list2'
import {plus} from 'react-icons-kit/icomoon/plus'
import {priceTags} from 'react-icons-kit/icomoon/priceTags'
import {search} from 'react-icons-kit/icomoon/search'
import {COLOR} from './style-vars'
// import {user} from 'react-icons-kit/icomoon/user'

// Icon Type Containers (HOCs)
const HeaderNavIcon = withBaseIcon({
  size: '5vh',
  style: {color: COLOR.silver},
})
const FooterNavIcon = withBaseIcon({
  className: 'nav-link-icon',
  style: {color: '#aaaa99'},
  size: '5vh',
})
const InputGroupIcon = withBaseIcon({
  size: '6vh',
  style: {color: '#222', margin: '1vh auto'},
})

export const IcoAdd = () => <FooterNavIcon icon={plus} />
export const IcoList = () => <FooterNavIcon icon={list2} />
export const IcoTags = () => <FooterNavIcon icon={priceTags} />
export const IcoRandom = () => <FooterNavIcon icon={dice} />
export const IcoSearch = () => <FooterNavIcon icon={search} />
export const IcoSettings = () => <FooterNavIcon icon={cogs} />

export const IcoGoBack = () => <HeaderNavIcon icon={circleLeft} />
export const IcoAccount = () => <HeaderNavIcon icon={user} />

export const IcoInputSearch = () => <InputGroupIcon icon={search} />
