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
  AboutPhone,
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
            Сыр – это безграничное вдохновение. Это образ жизни, категорически
            уникальный, яркий и живой продукт, за производством которого стоят
            живые люди. Именно они вкладывают в него частичку своей души, – тот
            самый секретный ингредиент, ради которого мы изменяем своим
            привычным вкусовым ощущениям и переходим к сырным экспериментам
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
            камерный зал ресторана <br />
            {window.screen.width > 700 &&
              `Чем не идеальное место для спокойного проведения досуга, деловой
               или личной встречи, праздного торжества, семейного или романтического ужина?`}
          </SecondAboutText>
        </Fade>
      </SecondAboutWrapper>
      <Photo></Photo>
      {window.screen.width < 700 && (
        <AboutPhone>
          Чем не идеальное место для спокойного проведения досуга, деловой или
          личной встречи, праздного торжества, семейного или романтического
          ужина?
        </AboutPhone>
      )}
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
            <a href="tel:8 (938) 151-21-14">8 (938) 151-21-14</a>
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
