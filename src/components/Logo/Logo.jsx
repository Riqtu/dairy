import React from 'react'
import { LogoWrapper, FirstLayer, SecondLayer, ImageLayer } from './Logo.styles'

import name from './../../assets/sirovarnya.svg'
import production from './../../assets/production.svg'
import vlasenko from './../../assets/vlasenko.svg'
import cheese from './../../assets/cheese1.png'

const layer = [name, production]

const Logo = (props) => {
  return (
    <LogoWrapper>
      <FirstLayer src={layer[props.page]} alt="Сыроварня"></FirstLayer>
      <SecondLayer src={vlasenko} alt="Власенко"></SecondLayer>
      <ImageLayer src={cheese} alt="Власенко"></ImageLayer>
    </LogoWrapper>
  )
}

export default Logo
