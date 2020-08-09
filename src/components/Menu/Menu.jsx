import React from 'react'
import { MenuWrapper, Links, Img } from './Menu.styles'

import menuRest from './../../assets/menu-rest.svg'
import production from './../../assets/production.svg'
import master from './../../assets/master.svg'
import { Link } from 'react-router-dom'

const Menu = (props) => {
  return (
    <MenuWrapper active={props.active}>
      <Links>
        <li>
          <Link to="/">
            <Img src={menuRest} alt="" />
          </Link>
        </li>
        <li>
          <Link to="/restaurant">
            <Img src={production} alt="" margin={40} />
          </Link>
        </li>
        <li>
          <Img src={master} alt="" margin={20} />
        </li>
      </Links>
    </MenuWrapper>
  )
}

export default Menu
