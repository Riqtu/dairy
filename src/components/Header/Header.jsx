import React from 'react'
import { HeaderWrapper, Links, MenuButton } from './Header.styles'

import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <HeaderWrapper>
      <Links>
        <li>
          <Link to="/restaurant">Ресторан</Link>
        </li>
        <li>
          <Link to="/restaurant">Производство</Link>
        </li>
        <li>
          <Link to="/restaurant">Подарочные наборы</Link>
        </li>
        <li>
          <Link to="/restaurant">Мастерклассы</Link>
        </li>
      </Links>
      <MenuButton></MenuButton>
    </HeaderWrapper>
  )
}

export default Header
