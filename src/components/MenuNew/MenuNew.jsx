import React, { useState } from 'react'
import {
  MenuNewWrapper,
  Links,
  Img,
  ImgLast,
  Fork,
  Cheese,
} from './MenuNew.styles'

import menuRest from './../../assets/menu-rest.svg'
import production from './../../assets/production.svg'
import master from './../../assets/master.svg'
import boxes from './../../assets/boxes.svg'
import contacts from './../../assets/contacts.svg'
import fork from './../../assets/fork.png'
import backch from './../../assets/chmenu.png'

import DelayLink from './../DelayLink'
import { useStores } from './../../hooks/useStores'
import { observer } from 'mobx-react'
const MenuNew = observer((props) => {
  const [active, setActive] = useState(true)

  const { mainStore } = useStores()

  const checkHref = (href) => {
    if (mainStore.href !== href) {
      setActive(!active)
      mainStore.setHref(href)
    }
  }

  return (
    <MenuNewWrapper active={true}>
      <Fork src={fork} alt=""></Fork>
      <Cheese src={backch} alt=""></Cheese>

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
              margin={40}
              width={30}
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
              margin={3}
              width={60}
              disable={mainStore.href === '/production'}
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
              alt=""
              margin={10}
              width={35}
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
              alt=""
              margin={10}
              top={10}
              width={42}
              disable={mainStore.href === '/contacts'}
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
              alt=""
              margin={30}
              width={50}
              disable={mainStore.href === '/master-class'}
            />
          </DelayLink>
        </li>
      </Links>
    </MenuNewWrapper>
  )
})

export default MenuNew
