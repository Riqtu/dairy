import React, { useState } from 'react'
import {
  BoxesWrapper,
  SliderWrapper,
  SliderBlock,
  NextArrow,
  PrevArrow,
  SliderImg,
  SliderTitle,
  Circle,
  Number,
} from './Boxes.styles'
import { Header, Preloader } from '../../components'
import { useUpdateLocation } from '../../hooks/useUpdateLocation'
import Slider from 'react-slick'

import Fade from 'react-reveal/Fade'

// import rest from './../../assets/sld1.png'
// import rest1 from './../../assets/ch2.png'
import arrow from './../../assets/Arrow.svg'

import b1 from './../../assets/baskets/b1.png'
import b2 from './../../assets/baskets/b2.png'
import b3 from './../../assets/baskets/b3.png'
import b4 from './../../assets/baskets/b4.png'
import b5 from './../../assets/baskets/b5.png'
import b6 from './../../assets/baskets/b6.png'
import b7 from './../../assets/baskets/b7.png'
import b8 from './../../assets/baskets/b8.png'
import bn1 from './../../assets/baskets/bn1.png'
import bn2 from './../../assets/baskets/bn2.png'
// import { Circle } from '../../components/Preloader/Preloader.styles'

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
      title: `КОРОБКА КРАФТ 1200`,
      text: `сыр Качотта с вяленными томатами / мягкий сыр Бри / мягкий сыр для жарки Халуми / оливки`,
    },
    {
      img: b2,
      title: `КОРЗИНА 1550`,
      text: `
      Джем ежевичный / Мармелад / Свежий сыр Халуми / Полутвердый сыр Качотта / Мягкий сыр с белой плесенью`,
    },
    {
      img: b3,
      title: `КОРЗИНА 1950`,
      text: `
      Прошутто / Испанские оливки / Полутвердый сыр Качотта / Сыр Дон Пеппер / Твердый сыр Дон Томато`,
    },

    {
      img: bn1,
      title: `КОРЗИНА С БУКЕТОМ 2100`,
      text: `
      Сыр твердый Венское Золото / Сыр Проволоне / Сыр мягкий Халуми / Джем ежевичный / Мармелад / Букет цветов`,
    },
    {
      img: bn2,
      title: `КОРЗИНА 1980`,
      text: `Сыр Дон Пеппер / Сыр Монтрей Джек с халапеньо / Сыр Таледжо / Сыр мягкий Ливаро / Соус Песто / Перец стручковый в баночке`,
    },
    {
      img: b4,
      title: `КОРЗИНА 3300`,
      text: `Гриссини / сыр Качотта / Сыр Дон Пеппер / Мягкий сыр с белой плесенью / Твердый выдержанный сыр / Прошутто / Оливки / Сладкий перец фаршированный сыром`,
    },
    {
      img: b5,
      title: `КОРЗИНА 3100`,
      text: `Сыр Качотта с трюфелем / Сыр Качотта с чабером / Сыр Дон Пеппер / Мягкий сыр Валансе / Мягкий сыр Реблошон / Мягкий сыр Бри / Ягодный джем / Мармелад`,
    },
    {
      img: b6,
      title: `КОРОБКА ДЕРЕВЯННАЯ 3200`,
      text: `Сыр полутвердый Провооне / Сыр Качотта с вяленными томатами /Сыр Качотта с паприкой / Полутвердый сыр Хаварти / Ягодный джем / Перец фаршированный мягким сыром / Оливки `,
    },
    {
      img: b7,
      title: `КОРОБКА ДЕРЕВЯННАЯ 4800`,
      text: `Сыр полутвердый Проволоне / Сыр Дон Пеппер / Сыр Качотта с трюфелем / Мягкий сыр Катар / Твердый сыр Канестрато / Гриссини / Прошутто / Вяленые томаты / Соус песто`,
    },
    {
      img: b8,
      title: `КОРЗИНА 4600`,
      text: `Сыр Халуми / Сыр Дон Пеппер / Сыр с голубой плесенью Горгонзола /Мягкий сыр Реблошон / сыр Качотта / Полутвердый сыр Хаварти / Прошутто / Вяленные томаты / Сладкий перец фаршированный мягким сыром / Оливки / Соус Песто / Сливочное масло с вяленными томатами`,
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

  const basketsMap = baskets.map((el, index, arr) => {
    return (
      <SliderBlock>
        <SliderImg src={el.img} alt="" />
        <SliderTitle swiped={swiped}>
          <h1>
            {el.title} <b>Р.</b>
          </h1>
          <p>{el.text}</p>
        </SliderTitle>
        <Number>
          {index + 1}/{arr.length}
        </Number>
      </SliderBlock>
    )
  })
  return (
    <BoxesWrapper>
      <Preloader isLoaded={isLoaded} setIsLoaded={setIsLoaded} />
      <Header></Header>
      <SliderWrapper>
        <Circle swiped={swiped}></Circle>
        {/* <BackImgLeft src={rest1} alt=""></BackImgLeft>
        <BackImgRight src={rest1} alt=""></BackImgRight> */}
        <Fade bottom cascade>
          <Slider
            {...settings}
            beforeChange={() => setSwiped(true)}
            afterChange={() => setSwiped(false)}
          >
            {basketsMap}
          </Slider>
        </Fade>
      </SliderWrapper>{' '}
    </BoxesWrapper>
  )
}

export default Boxes
