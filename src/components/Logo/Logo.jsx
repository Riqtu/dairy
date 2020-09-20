import React from 'react'
import {
  LogoWrapper,
  FirstLayer,
  SecondLayer,
  ImageLayer,
  ReImageLayer,
} from './Logo.styles'

import name from './../../assets/name2.svg'
import production from './../../assets/production.svg'
import master from './../../assets/master.svg'

import vlasenko from './../../assets/vlasenko2.svg'

import main from './../../assets/zgl1.png'
import proizv from './../../assets/proizv.png'
import master2 from './../../assets/master2.svg'

import rest from './../../assets/rest2.png'
import logo from './../../assets/logo1.png'

const reimage = [main, proizv, master2]
// import rest from './../../assets/rest2.png'

const layer = [name, production, master]
const img = [logo, logo, rest]

const Logo = (props) => {
  return (
    <LogoWrapper
    // invert={props.invert}
    //  scrolled={scrolled}
    >
      {/* <FirstLayer
        src={layer[props.page]}
        alt="Сыроварня"
        isLoaded={props.isLoaded}
        // scrolled={scrolled}
      ></FirstLayer> */}
      {/* {props.page !== 2 && (
        <ImageLayer
          src={img[2]}
          alt="Власенко"
          isLoaded={props.isLoaded}
        ></ImageLayer>
      )} */}
      <ReImageLayer
        src={reimage[props.page]}
        alt="Власенко"
        isLoaded={props.isLoaded}
      ></ReImageLayer>
      {/* <SecondLayer
        src={vlasenko}
        alt="Власенко"
        isLoaded={props.isLoaded}
        // scrolled={scrolled}
      ></SecondLayer> */}
      {/* {props.page !== 2 && (
        <ImageLayer
          src={img[props.page]}
          rot
          alt="Власенко"
          isLoaded={props.isLoaded}
        ></ImageLayer>
      )} */}
    </LogoWrapper>
  )
}

export default Logo
