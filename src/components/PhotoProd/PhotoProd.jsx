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
import p1 from './../../assets/proizPhoto/p1.png'
import p2 from './../../assets/proizPhoto/p2.png'
import p3 from './../../assets/proizPhoto/p3.png'
import p4 from './../../assets/proizPhoto/p4.png'
import p5 from './../../assets/proizPhoto/p5.png'
import p6 from './../../assets/proizPhoto/p6.png'
import p7 from './../../assets/proizPhoto/p7.png'
import p8 from './../../assets/proizPhoto/p8.png'
import p9 from './../../assets/proizPhoto/p9.png'
import p10 from './../../assets/proizPhoto/p10.png'
import p11 from './../../assets/proizPhoto/p11.png'
import p12 from './../../assets/proizPhoto/p12.png'
import p13 from './../../assets/proizPhoto/p13.png'
import p14 from './../../assets/proizPhoto/p14.png'
import p15 from './../../assets/proizPhoto/p15.png'
import p16 from './../../assets/proizPhoto/p16.png'
import p17 from './../../assets/proizPhoto/p17.png'
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
      img: p1,
      top: 0,
    },
    {
      img: p2,
      top: 30,
    },
    {
      img: p3,
      top: -10,
    },
    {
      img: p4,
      top: 0,
    },
    {
      img: p5,
      top: 30,
    },
    {
      img: p6,
      top: -10,
    },
    {
      img: p7,
      top: 0,
    },
    {
      img: p8,
      top: 30,
    },
    {
      img: p9,
      top: -10,
    },
    {
      img: p10,
      top: 0,
    },
    {
      img: p11,
      top: 30,
    },
    {
      img: p12,
      top: -10,
    },
    {
      img: p13,
      top: 0,
    },
    {
      img: p14,
      top: 30,
    },
    {
      img: p15,
      top: -10,
    },
    {
      img: p16,
      top: 0,
    },
    {
      img: p17,
      top: 30,
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
