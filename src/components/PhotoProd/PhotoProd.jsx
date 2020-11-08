import React from 'react'
import {
  PhotoWrapper,
  //   Logo,
  Container,
  Layer,
  //   Date,
  Button,
  LayerWrapper,
} from './PhotoProd.styles'

// import logo from './../../assets/pectopah.svg'
import rest1 from './../../assets/photoProd/p2.png'
import rest2 from './../../assets/photoProd/p1.png'
import rest3 from './../../assets/photoProd/p3.png'

// import date from './../../assets/date.svg'
import arrow from './../../assets/Arrow.svg'
import arrowPrev from './../../assets/Arrow2.svg'

import Fade from 'react-reveal/Fade'
import Slider from 'react-slick'
import { useState } from 'react'

function SampleNextArrow(props) {
  const { onClick } = props
  return (
    <Button onClick={onClick}>
      <img src={arrow} alt="" />
    </Button>
  )
}
function SamplePrevArrow(props) {
  const { onClick } = props
  return (
    <Button onClick={onClick} prev>
      <img src={arrowPrev} alt="" />
    </Button>
  )
}

const PhotoProd = (props) => {
  const [swiped, setSwiped] = useState()
  const settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
    // adaptiveHeight: true,
  }

  const arr = [
    {
      img: rest1,
      top: 0,
    },
    {
      img: rest2,
      top: 30,
    },
    {
      img: rest3,
      top: -10,
    },
    {
      img: rest1,
      top: 0,
    },
    {
      img: rest2,
      top: 30,
    },
    {
      img: rest3,
      top: -10,
    },
  ]
  const layers = arr.map((el, index) => {
    return (
      <LayerWrapper
        key={index}
        duration={Math.random() * (4 - 2) + 2}
        delay={Math.floor(Math.random() * 1)}
        // opacity={index % 2 !== 0 ? '0.75' : '1'}
        swiped={swiped}
      >
        <Layer src={el.img} alt="" top={el.top}></Layer>
      </LayerWrapper>
    )
  })
  return (
    <PhotoWrapper>
      <Fade bottom cascade>
        {/* <label>Фотографии</label> */}
      </Fade>
      <Fade bottom>
        <Container>
          <Slider
            {...settings}
            beforeChange={() => setSwiped(true)}
            afterChange={() => setSwiped(false)}
          >
            {/* {window.innerWidth > 700 ? <EmptyLayer></EmptyLayer> : ''} */}
            {layers}
          </Slider>
        </Container>
      </Fade>
    </PhotoWrapper>
  )
}

export default PhotoProd
