import React from 'react'
import {
  MainWrapper,
  AboutWrapper,
  AboutText,
  AboutLogo,
  AboutLine,
  SecondAboutText,
  SecondAboutWrapper,
} from './Main.styles'

import { Header, Logo, Group, Reservation } from '../../components'

import Fade from 'react-reveal/Fade'

const Main = (props) => {
  return (
    <MainWrapper>
      <Header></Header>
      <Logo page={0}></Logo>
      <AboutWrapper>
        <AboutLine></AboutLine>
        <AboutText>
          <Fade left big cascade text>
            Сыр – это живой и изменчивый продукт, за которым непременно стоят
            живые люди. В основе всего стоят сыровары, которые вкладывают в свое
            дело часть души.
          </Fade>
        </AboutText>
        <AboutLogo></AboutLogo>
      </AboutWrapper>
      <Group></Group>
      <SecondAboutWrapper>
        <SecondAboutText>
          <Fade left big cascade text>
            Сыроварня Власенко в самом центре Ростова-на-Дону – это не только
            производство сыра и лавка натуральных продуктов, это еще и уютный
            камерный зал с небольши
          </Fade>
        </SecondAboutText>
      </SecondAboutWrapper>
      <Reservation></Reservation>
    </MainWrapper>
  )
}

export default Main
