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
  SurName,
  InfoImg,
  InfoText,
  MasterImg,
  MasterWrapper,
  MasterLogo,
  MasterVlas,
} from './Production.styles'
import { Logo, Header, Cheese, MasterForm, Preloader } from '../../components'
import Slider from 'react-slick'
import Fade from 'react-reveal/Fade'

import rest from './../../assets/gal1.jpeg'
import rest1 from './../../assets/gal2.jpeg'
import rest2 from './../../assets/gal3.jpeg'

import vlas from './../../assets/vlas.svg'
import name from './../../assets/sirovarnya1.svg'
import vlasenko from './../../assets/vlasenko3.svg'
import inf1 from './../../assets/inf11.png'
import inf2 from './../../assets/inf22.png'
import inf3 from './../../assets/inf33.png'

import msk from './../../assets/msk1.png'
import mskLogo from './../../assets/msklg.svg'

import arrow from './../../assets/Arrow.svg'
// import { useStores } from './../../hooks/useStores'
import { useUpdateLocation } from '../../hooks/useUpdateLocation'

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
            Для приготовления наших сыров используется молоко коров Швицкой
            породы родиной которых является далекая Швейцария. Коровы этой
            породы отлично прижились в Ростовской области и дают молоко богатое
            белком
          </AboutText>
        </Fade>
      </AboutWrapper>
      <InfoWrapper>
        <Fade bottom cascade>
          <Name src={name} alt=""></Name>
          <SurName src={vlasenko} alt=""></SurName>
        </Fade>
        <InfoImg
          src={inf1}
          alt=""
          zind={2}
          duration={Math.random() * (4 - 2) + 2}
          delay={Math.floor(Math.random() * 1)}
        ></InfoImg>
        <InfoImg
          src={inf2}
          alt=""
          margin={100}
          zind={0}
          duration={Math.random() * (4 - 2) + 2}
          delay={Math.floor(Math.random() * 1)}
        ></InfoImg>
        <InfoImg
          w="35"
          src={inf3}
          alt=""
          zind={2}
          duration={Math.random() * (4 - 2) + 2}
          delay={Math.floor(Math.random() * 1)}
        ></InfoImg>
        <Fade bottom cascade>
          <InfoText>
            Мы готовим молодые рассольные, полутвердые, мягкие с плесенью, а
            также твердые выдержанные сыры, используя полюбившиеся во всем мире
            итальянские и французские рецептуры, и, конечно, авторские,
            родившиеся методом проб и ошибок.
          </InfoText>
        </Fade>
      </InfoWrapper>
      <Cheese></Cheese>
      <MasterWrapper>
        <MasterImg src={msk} alt=""></MasterImg>
        <MasterLogo src={mskLogo} alt=""></MasterLogo>
        <MasterVlas src={vlas} alt=""></MasterVlas>
      </MasterWrapper>
      <AboutWrapper>
        <Fade bottom>
          <AboutText>
            Мы готовим молодые рассольные, полутвердые, мягкие с плесенью, а
            также твердые выдержанные сыры, используя полюб
          </AboutText>
        </Fade>
      </AboutWrapper>
      <MasterForm></MasterForm>
    </ProductionWrapper>
  )
}

export default Production
