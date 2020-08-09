import React, { useState, useEffect } from 'react'

import {
  MainWrapper,
  AboutWrapper,
  AboutText,
  AboutLogo,
  AboutLine,
  SecondAboutText,
  SecondAboutWrapper,
  Contact,
  Footer,
} from './Main.styles'

import { Header, Logo, Group, Reservation, Photo } from '../../components'

import Fade from 'react-reveal/Fade'

const Main = (props) => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
    }, 500)
  }, [])

  return (
    isLoaded && (
      <MainWrapper>
        <Header setActive={props.setActive} active={props.active}></Header>
        <Logo page={0}></Logo>
        <AboutWrapper>
          <AboutLine></AboutLine>
          <AboutText>
            <Fade bottom cascade>
              Сыр – это живой и изменчивый продукт, за которым непременно стоят
              живые люди. В основе всего стоят сыровары, которые вкладывают в
              свое дело часть души.
            </Fade>
          </AboutText>
          <AboutLogo></AboutLogo>
        </AboutWrapper>
        <Group></Group>
        <SecondAboutWrapper>
          <SecondAboutText>
            <Fade bottom cascade>
              Сыроварня Власенко в самом центре Ростова-на-Дону – это не только
              производство сыра и лавка натуральных продуктов, это еще и уютный
              камерный зал с небольши
            </Fade>
          </SecondAboutText>
        </SecondAboutWrapper>
        <Reservation></Reservation>
        <Photo></Photo>
        <Contact>
          <Fade bottom text>
            <p>
              Наш ресторан и производство находится <br />в самом центре
              Ростова-на-Дону
            </p>
          </Fade>
          <Fade bottom text>
            <h1>
              ROSTOV-NA-DONU <br />
              SEMASHKO 51 <br />
              <a href="tel:8 (863) 269-90-45">8 (863) 269-90-45</a>
            </h1>
          </Fade>
        </Contact>
        <Fade bottom>
          <Footer>
            <p>Сыроварня Власенко</p>
          </Footer>
        </Fade>
      </MainWrapper>
    )
  )
}

export default Main
