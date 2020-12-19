import React, { useState } from 'react'
import {
  ProductionWrapper,
  SliderWrapper,
  SliderBlock,
  NextArrow,
  PrevArrow,
  LogoImg,
  AboutText,
  AboutWrapper,
  AboutLogo,
  InfoWrapper,
  Name,
  // SurName,
  // InfoImg,
  // InfoText,
  MasterImg,
  MasterWrapper,
  MasterLogo,
  MasterVlas,
  AboutTextMaster,
  LinkWrapper,
} from './Production.styles'
import {
  Logo,
  Header,
  Cheese,
  MasterForm,
  Preloader,
  // Photo,
} from '../../components'
import Slider from 'react-slick'
import Fade from 'react-reveal/Fade'

import rest from './../../assets/gal1.jpeg'
import rest1 from './../../assets/gal2.jpeg'
import rest2 from './../../assets/gal3.png'

import vlas from './../../assets/vlas.svg'
import name from './../../assets/syr3.svg'
// import vlasenko from './../../assets/vlasenko3.svg'
// import inf1 from './../../assets/inf11.png'
// import inf2 from './../../assets/inf22.png'
// import inf3 from './../../assets/inf33.png'

import msk from './../../assets/msk1.png'
import mskLogo from './../../assets/msklg.svg'

import arrow from './../../assets/Arrow.svg'
// import { useStores } from './../../hooks/useStores'
import { useUpdateLocation } from '../../hooks/useUpdateLocation'
import PhotoProd from '../../components/PhotoProd/PhotoProd'

import pdf from './../../assets/cheeses.pdf'

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
  const [isLoaded, setIsLoaded] = useState(false)
  useUpdateLocation()
  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <ProductionWrapper>
      <Preloader isLoaded={isLoaded} setIsLoaded={setIsLoaded} />

      <Header></Header>
      <Logo page={1} isLoaded={isLoaded}></Logo>
      <SliderWrapper>
        <Fade bottom cascade>
          <Slider {...settings}>
            <SliderBlock back={rest} id="ldld"></SliderBlock>
            <SliderBlock back={rest1}></SliderBlock>
            <SliderBlock back={rest2}></SliderBlock>
          </Slider>
          <LogoImg src={vlas} alt="" />
        </Fade>
      </SliderWrapper>
      <AboutWrapper>
        <AboutLogo></AboutLogo>
        <Fade bottom>
          <AboutText>
            Центр города. Собственное производство. Уютная лавка натуральных
            продуктов – лишь вершина айсберга. Наш сыр – это время. Время
            пробовать что-то новое, что произведено своими руками.
          </AboutText>
        </Fade>
      </AboutWrapper>
      {window.screen.width < 700 && <Cheese></Cheese>}
      <InfoWrapper>
        <Fade bottom cascade>
          <Name src={name} alt=""></Name>
        </Fade>
        <PhotoProd></PhotoProd>
        <Fade bottom cascade>
          <LinkWrapper>
            <a href={pdf} target="_blank" rel="noopener noreferrer">
              ПОСМОТРЕТЬ ВСЕ
            </a>
          </LinkWrapper>
        </Fade>
      </InfoWrapper>
      {window.screen.width > 700 && <Cheese></Cheese>}
      {window.screen.width > 700 && (
        <MasterWrapper>
          <MasterImg src={msk} alt=""></MasterImg>
          <MasterLogo src={mskLogo} alt=""></MasterLogo>
          <MasterVlas src={vlas} alt=""></MasterVlas>
        </MasterWrapper>
      )}
      <AboutWrapper>
        <Fade bottom>
          <AboutTextMaster>
            Под чутким руководством основательницы проекта Ирины Павловны
            Власенко вы можете попробовать себя в роли сыровара, приготовить 2
            молодых рассольных сыра – моцареллу и итальянский деревенский сыр
          </AboutTextMaster>
        </Fade>
      </AboutWrapper>
      {window.screen.width < 700 && (
        <MasterWrapper>
          <MasterImg src={msk} alt=""></MasterImg>
          <MasterLogo src={mskLogo} alt=""></MasterLogo>
          <MasterVlas src={vlas} alt=""></MasterVlas>
        </MasterWrapper>
      )}
      <MasterForm></MasterForm>
    </ProductionWrapper>
  )
}

export default Production
