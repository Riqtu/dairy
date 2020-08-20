import React from 'react'
import { LogoWrapper, FirstLayer, SecondLayer, ImageLayer } from './Logo.styles'

import name from './../../assets/sirovarnya.svg'
import production from './../../assets/production.svg'
import vlasenko from './../../assets/vlasenko.svg'
import cheese from './../../assets/rest2.png'
import logo from './../../assets/logo1.png'

// import rest from './../../assets/rest2.png'

const layer = [name, production]
const img = [logo, logo, cheese]

const Logo = (props) => {
  return (
    <LogoWrapper>
      <FirstLayer
        src={layer[props.page]}
        alt="Сыроварня"
        isLoaded={props.isLoaded}
      ></FirstLayer>
      <ImageLayer
        src={img[2]}
        alt="Власенко"
        isLoaded={props.isLoaded}
      ></ImageLayer>
      <SecondLayer
        src={vlasenko}
        alt="Власенко"
        isLoaded={props.isLoaded}
      ></SecondLayer>
      <ImageLayer
        src={img[props.page]}
        rot
        alt="Власенко"
        isLoaded={props.isLoaded}
      ></ImageLayer>
    </LogoWrapper>
  )
}

export default Logo
