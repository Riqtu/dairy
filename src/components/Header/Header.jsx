import React, { useState } from 'react'
import { HeaderWrapper, Links, MenuButton } from './Header.styles'

import { Link } from 'react-router-dom'
import Menu from '../Menu/Menu'
import DelayLink from '../DelayLink/DelayLink'

const Header = (props) => {
  const [active, setActive] = useState(false)
  return (
    <HeaderWrapper>
      <Links active={props.active}>
        <li>
          <Link to="/restaurant">Ресторан</Link>
        </li>
        <li>
          <DelayLink to="/restaurant" delay={3000}>
            {' '}
            Производство
          </DelayLink>
          {/* <Link to="/restaurant" delay={3000}>
            Производство
          </Link> */}
        </li>
        <li>
          <Link to="/restaurant">Подарочные наборы</Link>
        </li>
        <li>
          <Link to="/restaurant">Мастерклассы</Link>
        </li>
      </Links>
      <MenuButton
        onClick={() => setActive(!active)}
        active={active}
      ></MenuButton>
      <Menu active={active}></Menu>
    </HeaderWrapper>
  )
}

export default Header
