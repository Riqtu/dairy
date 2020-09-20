import React, { useState } from 'react'
import {
  BoxesWrapper,
  SliderWrapper,
  SliderBlock,
  NextArrow,
  PrevArrow,
  SliderImg,
  BackImgLeft,
  BackImgRight,
  SliderTitle,
} from './Boxes.styles'
import { Header, Preloader } from '../../components'
import { useUpdateLocation } from '../../hooks/useUpdateLocation'
import Slider from 'react-slick'

import Fade from 'react-reveal/Fade'

import rest from './../../assets/sld1.png'
import rest1 from './../../assets/ch2.png'
import arrow from './../../assets/Arrow.svg'

import b1 from './../../assets/baskets/b1.png'
import b2 from './../../assets/baskets/b2.png'
import b3 from './../../assets/baskets/b3.png'
import b4 from './../../assets/baskets/b4.png'
import b5 from './../../assets/baskets/b5.png'
import b6 from './../../assets/baskets/b6.png'

import { Circle } from '../../components/Preloader/Preloader.styles'

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

const Boxes = (props) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [swiped, setSwiped] = useState(false)

  const baskets = [
    {
      img: b1,
      title: `KORZINA1`,
      text: `Прошутто / Хлебные палочки / Сыр Дон Пеппер / Качотта / Мягкий
      сыр с благородной плесенью / Твердый выдержанный сыр /
      Испанские оливки`,
    },
    {
      img: b2,
      title: `KORZINA2`,
      text: `Прошутто / Хлебные палочки / Сыр Дон Пеппер / Качотта / Мягкий сыр с благородной плесенью / Твердый выдержанный сыр / Испанские оливки`,
    },
    {
      img: b3,
      title: `KORZINA3`,
      text: `                  Прошутто / Хлебные палочки / Сыр Дон Пеппер / Качотта / Мягкий
      сыр с благородной плесенью / Твердый выдержанный сыр /
      Испанские оливки`,
    },
    {
      img: b4,
      title: `KORZINA4`,
      text: `                  Прошутто / Хлебные палочки / Сыр Дон Пеппер / Качотта / Мягкий
      сыр с благородной плесенью / Твердый выдержанный сыр /
      Испанские оливки`,
    },
    {
      img: b5,
      title: `KORZINA5`,
      text: `                  Прошутто / Хлебные палочки / Сыр Дон Пеппер / Качотта / Мягкий
      сыр с благородной плесенью / Твердый выдержанный сыр /
      Испанские оливки`,
    },
    {
      img: b6,
      title: `KORZINA6`,
      text: `                  Прошутто / Хлебные палочки / Сыр Дон Пеппер / Качотта / Мягкий
      сыр с благородной плесенью / Твердый выдержанный сыр /
      Испанские оливки`,
    },
  ]

  useUpdateLocation()
  const settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  const basketsMap = baskets.map((el, index) => {
    return (
      <SliderBlock>
        <SliderImg src={el.img} alt="" />
        <SliderTitle swiped={swiped}>
          <h1>{el.title}</h1>
          <p>{el.text}</p>
        </SliderTitle>
      </SliderBlock>
    )
  })
  return (
    <BoxesWrapper>
      <Preloader isLoaded={isLoaded} setIsLoaded={setIsLoaded} />
      <Header></Header>
      <SliderWrapper>
        <Circle></Circle>
        <BackImgLeft src={rest1} alt=""></BackImgLeft>
        <BackImgRight src={rest1} alt=""></BackImgRight>
        <Fade bottom cascade>
          <Slider
            {...settings}
            beforeChange={() => setSwiped(true)}
            afterChange={() => setSwiped(false)}
          >
            {basketsMap}
          </Slider>
        </Fade>
      </SliderWrapper>
    </BoxesWrapper>
  )
}

export default Boxes
