import React from 'react'
import { LogoWrapper, FirstLayer, SecondLayer, ImageLayer } from './Logo.styles'

import name from './../../assets/sirovarnya.svg'
import production from './../../assets/production.svg'
import vlasenko from './../../assets/vlasenko.svg'
import cheese from './../../assets/cheese.png'
import logo from './../../assets/logo1.png'

import rest from './../../assets/rest2.png'

const layer = [name, production]
const img = [logo, rest, cheese]

const Logo = (props) => {
  return (
    <LogoWrapper>
      <FirstLayer src={layer[props.page]} alt="Сыроварня"></FirstLayer>
      <ImageLayer src={img[2]} alt="Власенко"></ImageLayer>
      <SecondLayer src={vlasenko} alt="Власенко"></SecondLayer>
      <ImageLayer src={img[props.page]} rotate alt="Власенко"></ImageLayer>
    </LogoWrapper>
  )
}

export default Logo
