import React from 'react'
import { HeaderWrapper, Links, MenuButton } from './Header.styles'

import { Link } from 'react-router-dom'
import Menu from '../Menu/Menu'
import DelayLink from '../DelayLink/DelayLink'
import { useStores } from './../../hooks/useStores'
import { observer } from 'mobx-react'
const Header = observer((props) => {
  const { mainStore } = useStores()
  return (
    <div>
      <HeaderWrapper invert={props.invert}>
        <Links active={props.active} style={{ zIndex: 5 }}>
          <li onClick={() => mainStore.setHref('/')}>
            <DelayLink to="/">Ресторан</DelayLink>
          </li>
          <li style={{ float: 'none' }}>
            <Link to="/master-class">Мастерклассы</Link>
          </li>
          <li>
            <Link to="/boxes">Подарочные наборы</Link>
          </li>
        </Links>
        <Links active={props.active}>
          <li
            onClick={() => mainStore.setHref('/production')}
            style={{ marginLeft: '150px' }}
          >
            <DelayLink to="/production" id="qwe">
              Производство
            </DelayLink>
          </li>
        </Links>
      </HeaderWrapper>
      <MenuButton
        invert={props.invert}
        onClick={() => {
          mainStore.setMenuActive(!mainStore.menuActive)
          console.log(mainStore.menuActive)
        }}
        active={mainStore.menuActive}
      ></MenuButton>
      <Menu></Menu>
    </div>
  )
})

export default Header
