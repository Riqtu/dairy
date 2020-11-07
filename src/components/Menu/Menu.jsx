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
              w={50}
              alt=""
              disable={mainStore.href === '/'}
            />
          </DelayLink>
        </li>
        <li>
          <DelayLink to="/production" delay={500}>
            <Img
              src={production}
              onClick={() => checkHref('/production')}
              delay={2}
              duration={3}
              alt=""
              w={70}
              margin={window.screen.width > 770 ? 40 : ''}
              disable={mainStore.href === '/production'}
            />
          </DelayLink>
        </li>
        <li>
          <DelayLink to="/master-class" delay={500}>
            <Img
              src={master}
              onClick={() => checkHref('/master-class')}
              delay={1}
              duration={5}
              w={70}
              alt=""
              margin={window.screen.width > 770 ? 20 : ''}
              disable={mainStore.href === '/master-class'}
            />
          </DelayLink>
        </li>
        <li>
          <DelayLink to="/boxes" delay={500}>
            <ImgLast
              src={boxes}
              onClick={() => checkHref('/boxes')}
              delay={2}
              duration={4}
              w={80}
              alt=""
              margin={window.screen.width > 770 ? 4 : ''}
              disable={mainStore.href === '/boxes'}
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
              w={50}
              alt=""
              margin={window.screen.width > 770 ? 10 : ''}
              disable={mainStore.href === '/contacts'}
            />
          </DelayLink>
        </li>
      </Links>
    </MenuWrapper>
  )
})

export default Menu
