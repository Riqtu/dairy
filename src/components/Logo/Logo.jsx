import React from 'react'
import { LogoWrapper, FirstLayer, SecondLayer, ImageLayer } from './Logo.styles'

import name from './../../assets/sirovarnya.svg'
import production from './../../assets/production.svg'
import master from './../../assets/master.svg'

import vlasenko from './../../assets/vlasenko.svg'
import logo from './../../assets/logo1.png'

// import rest from './../../assets/rest2.png'

const layer = [name, production, master]
const img = [logo, logo, logo]

const Logo = (props) => {
  return (
    <LogoWrapper invert={props.invert}>
      <FirstLayer
        src={layer[props.page]}
        alt="Сыроварня"
        isLoaded={props.isLoaded}
      ></FirstLayer>
      {props.page !== 2 && (
        <ImageLayer
          src={img[2]}
          alt="Власенко"
          isLoaded={props.isLoaded}
        ></ImageLayer>
      )}
      <SecondLayer
        src={vlasenko}
        alt="Власенко"
        isLoaded={props.isLoaded}
      ></SecondLayer>
      {props.page !== 2 && (
        <ImageLayer
          src={img[props.page]}
          rot
          alt="Власенко"
          isLoaded={props.isLoaded}
        ></ImageLayer>
      )}
    </LogoWrapper>
  )
}

export default Logo
