import React, { useState } from 'react'

import {
  MainWrapper,
  AboutWrapper,
  AboutText,
  // AboutLogo,
  AboutLine,
  SecondAboutText,
  SecondAboutWrapper,
  Contact,
  Footer,
} from './Main.styles'

import {
  Header,
  Logo,
  // Group,
  Reservation,
  Photo,
  MenuNew,
} from '../../components'

import Fade from 'react-reveal/Fade'
import Preloader from '../../components/Preloader/Preloader'
import footerimg from './../../assets/footerimg.png'

import { useStores } from './../../hooks/useStores'
import { useUpdateLocation } from '../../hooks/useUpdateLocation'

const Main = (props) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const { mainStore } = useStores()
  useUpdateLocation()
  return (
    <MainWrapper isLoaded={isLoaded}>
      <Preloader isLoaded={isLoaded} setIsLoaded={setIsLoaded} />
      <Header setActive={props.setActive} active={props.active}></Header>
      <Logo page={0} isLoaded={isLoaded}></Logo>
      <AboutWrapper>
        <AboutLine></AboutLine>
        <Fade bottom cascade>
          <AboutText
            onClick={() => {
              console.log(mainStore.redirect)
              mainStore.setRedirect('kek')
              console.log(mainStore.redirect)
            }}
          >
            Сыр – это живой и изменчивый продукт, за которым непременно стоят
            живые люди. В основе всего стоят сыровары, которые вкладывают в свое
            дело часть души.
          </AboutText>
        </Fade>
        {/* <AboutLogo></AboutLogo> */}
      </AboutWrapper>
      {/* <Group></Group> */}
      <MenuNew></MenuNew>
      <SecondAboutWrapper>
        <Fade bottom cascade>
          <SecondAboutText>
            Сыроварня Власенко в самом центре Ростова-на-Дону – это не только
            производство сыра и лавка натуральных продуктов, это еще и уютный
            камерный зал с небольши
          </SecondAboutText>
        </Fade>
      </SecondAboutWrapper>
      <Photo></Photo>
      <Reservation></Reservation>
      <Contact>
        <Fade bottom text>
          <img src={footerimg} alt="" />
        </Fade>
        <Fade bottom text>
          <h1>
            ROSTOV-NA-DONU <br />
            <b>SEMASHKO 51 </b>
            <br />
            <a href="tel:8 (863) 269-90-45">8 (863) 269-90-45</a>
          </h1>
          <p>
            Наш ресторан и производство находится <br />в самом центре
            Ростова-на-Дону
          </p>
        </Fade>
      </Contact>
      <Fade bottom>
        <Footer>
          <p>Сыроварня Власенко</p>
        </Footer>
      </Fade>
    </MainWrapper>
  )
  // )
}

export default Main
