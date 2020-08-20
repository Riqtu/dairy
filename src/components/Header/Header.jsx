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
        <Links active={props.active}>
          <li onClick={() => mainStore.setHref('/')}>
            <DelayLink to="/">Ресторан</DelayLink>
          </li>
          <li onClick={() => mainStore.setHref('/restaurant')}>
            <DelayLink to="/restaurant" id="qwe">
              Производство
            </DelayLink>
          </li>
          <li>
            <Link to="/restaurant">Подарочные наборы</Link>
          </li>
          <li>
            <Link to="/restaurant">Мастерклассы</Link>
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
