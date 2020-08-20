import React, { useState } from 'react'
import { MenuWrapper, Links, Img, ImgLast } from './Menu.styles'

import menuRest from './../../assets/menu-rest.svg'
import production from './../../assets/production.svg'
import master from './../../assets/master.svg'
import boxes from './../../assets/boxes.svg'
import contacts from './../../assets/contacts.svg'

import DelayLink from './../DelayLink'
import { useStores } from './../../hooks/useStores'
import { observer } from 'mobx-react'
const Menu = observer((props) => {
  const [active, setActive] = useState(true)

  const { mainStore } = useStores()

  const checkHref = (href) => {
    if (mainStore.href !== href) {
      setActive(!active)
      mainStore.setHref(href)
    }
  }

  return (
    <MenuWrapper active={mainStore.menuActive}>
      <Links active={active}>
        <li>
          <DelayLink to="/" delay={500}>
            <Img
              src={menuRest}
              onClick={() => {
                checkHref('/')
              }}
              delay={3}
              duration={4}
              alt=""
              disable={mainStore.href === '/'}
            />
          </DelayLink>
        </li>
        <li>
          <DelayLink to="/restaurant" delay={500}>
            <Img
              src={production}
              onClick={() => checkHref('/restaurant')}
              delay={2}
              duration={3}
              alt=""
              margin={40}
              disable={mainStore.href === '/restaurant'}
            />
          </DelayLink>
        </li>
        <li>
          <DelayLink to="/restaurant" delay={500}>
            <Img
              src={master}
              onClick={() => checkHref('/restaurant')}
              delay={1}
              duration={5}
              alt=""
              margin={20}
              disable={mainStore.href === '/restaurant'}
            />
          </DelayLink>
        </li>
        <li>
          <DelayLink to="/restaurant" delay={500}>
            <ImgLast
              src={boxes}
              onClick={() => checkHref('/restaurant')}
              delay={2}
              duration={4}
              alt=""
              margin={10}
              disable={mainStore.href === '/restaurant'}
            />
          </DelayLink>
        </li>
        <li>
          <DelayLink to="/contacts" delay={500}>
            <ImgLast
              src={contacts}
              onClick={() => checkHref('/contacts')}
              delay={2}
              duration={3}
              alt=""
              margin={20}
              disable={mainStore.href === '/contacts'}
            />
          </DelayLink>
        </li>
      </Links>
    </MenuWrapper>
  )
})

export default Menu
