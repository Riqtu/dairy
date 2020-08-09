import React, { useState } from 'react'
import {
  PhotoWrapper,
  Logo,
  Container,
  Layer,
  Date,
  Button,
} from './Photo.styles'

import logo from './../../assets/pectopah.svg'
import rest1 from './../../assets/rest1.png'
import rest2 from './../../assets/rest2.png'
import rest3 from './../../assets/rest3.png'
import rest4 from './../../assets/rest4.png'
import rest5 from './../../assets/rest5.png'
import rest6 from './../../assets/rest6.png'

import date from './../../assets/2020.svg'
import arrow from './../../assets/Arrow.svg'
import arrowPrev from './../../assets/Arrow2.svg'

import Fade from 'react-reveal/Fade'
const Photo = (props) => {
  const [el, setEl] = useState({ p: true, arr: [rest3, rest2, rest1] })
  const [active, setActive] = useState(false)
  const test = () => {
    setActive(true)
    setTimeout(() => {
      el.p
        ? setEl({ p: false, arr: [rest4, rest5, rest6] })
        : setEl({ p: true, arr: [rest3, rest2, rest1] })
      setActive(false)
    }, 900)
  }
  return (
    <PhotoWrapper>
      <Fade bottom cascade>
        <label>Фотографии</label>
        <Logo>
          <img src={logo} alt="" />
        </Logo>
      </Fade>
      <Fade bottom>
        <Container flash={active}>
          <Date src={date} alt=""></Date>
          <Layer src={el.arr[0]} alt="" top={30}></Layer>
          <Layer src={el.arr[1]} alt="" top={-30}></Layer>
          <Layer src={el.arr[2]} alt="" top={70}></Layer>
          <Button onClick={test} prev>
            <img src={arrowPrev} alt="" />
          </Button>
          <Button onClick={test}>
            <img src={arrow} alt="" />
          </Button>
        </Container>
      </Fade>
    </PhotoWrapper>
  )
}

export default Photo
