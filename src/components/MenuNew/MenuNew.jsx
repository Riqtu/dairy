import React, { useState } from 'react'
import {
  MenuNewWrapper,
  Links,
  Img,
  ImgLast,
  Fork,
  Cheese,
  Copy,
  Lines,
} from './MenuNew.styles'

import menuRest from './../../assets/menu-rest.svg'
import production from './../../assets/production.svg'
import master from './../../assets/master.svg'
import boxes from './../../assets/boxes.svg'
import contacts from './../../assets/contacts.svg'
import fork from './../../assets/fork.png'
import backch from './../../assets/chmenu.png'
import copy from './../../assets/copy.svg'
import menurest from './../../assets/menurest.svg'
import lines from './../../assets/kaka.svg'
import pdf from './../../assets/menuJune.pdf'

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
      <Copy src={copy}></Copy>
      <Lines src={lines}></Lines>

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
              margin={window.screen.width > 770 ? 40 : 5}
              width={window.screen.width > 770 ? 30 : 70}
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
              margin={window.screen.width > 770 ? 3 : -10}
              width={window.screen.width > 770 ? 60 : 85}
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
              top={window.screen.width > 770 ? -0.1 : -0.1}
              margin={window.screen.width > 770 ? 10 : 20}
              width={window.screen.width > 770 ? 52 : 80}
              disable={mainStore.href === '/boxes'}
            />
          </DelayLink>
        </li>
        <li>
          <DelayLink to="/master-class" delay={500}>
            <ImgLast
              src={master}
              onClick={() => checkHref('/master-class')}
              delay={1}
              duration={5}
              alt=""
              top={window.screen.width > 770 ? 3 : 5}
              margin={window.screen.width > 770 ? 4 : 24}
              width={window.screen.width > 770 ? 35 : 70}
              disable={mainStore.href === '/master-class'}
            />
          </DelayLink>
          <DelayLink to="/contacts" delay={500}>
            <ImgLast
              src={contacts}
              onClick={() => checkHref('/contacts')}
              delay={2}
              duration={3}
              alt=""
              margin={window.screen.width > 770 ? 16 : 0}
              top={window.screen.width > 770 ? 3 : 10}
              width={window.screen.width > 770 ? 35 : 80}
              disable={mainStore.href === '/contacts'}
            />
          </DelayLink>
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            // delay={500}
            // onClick={() => window.open('./../../assets/menu.pdf')}
          >
            <ImgLast
              src={menurest}
              onClick={() => checkHref('/')}
              delay={2}
              duration={3}
              alt=""
              margin={window.screen.width > 770 ? 30 : 5}
              top={window.screen.width > 770 ? 3 : 10}
              width={window.screen.width > 770 ? 35 : 80}
              disable={mainStore.href === '/contacts'}
            />
          </a>
        </li>
      </Links>
    </MenuNewWrapper>
  )
})

export default MenuNew
