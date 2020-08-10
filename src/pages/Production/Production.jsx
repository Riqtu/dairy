import React, { useState, useEffect } from 'react'
import {
  ProductionWrapper,
  SliderWrapper,
  SliderBlock,
  NextArrow,
  PrevArrow,
  LogoImg,
} from './Production.styles'
import { Logo, Header } from '../../components'
import Slider from 'react-slick'
import Fade from 'react-reveal/Fade'

import rest from './../../assets/sld1.png'
import rest1 from './../../assets/rest1.png'
import vlas from './../../assets/vlas.svg'

import arrow from './../../assets/Arrow.svg'

function SampleNextArrow(props) {
  const { onClick } = props
  return (
    <NextArrow onClick={onClick}>
      <img src={arrow} alt="" />
    </NextArrow>
  )
}
function SamplePrevArrow(props) {
  const { onClick } = props
  return (
    <PrevArrow onClick={onClick}>
      <img src={arrow} alt="" />
    </PrevArrow>
  )
}
const Production = (props) => {
  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    // adaptiveHeight: true,
  }
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
    }, 500)
  }, [])

  return (
    isLoaded && (
      <ProductionWrapper>
        <Header></Header>
        <Logo page={1}></Logo>
        <SliderWrapper>
          <Fade bottom cascade>
            <Slider {...settings}>
              <SliderBlock back={rest}></SliderBlock>
              <SliderBlock back={rest1}></SliderBlock>
            </Slider>
            <LogoImg src={vlas} alt="" />
          </Fade>
        </SliderWrapper>
      </ProductionWrapper>
    )
  )
}

export default Production
