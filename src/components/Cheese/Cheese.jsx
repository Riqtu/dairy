import React from 'react'
import {
  CheeseWrapper,
  FirstBlock,
  FirstBlockLogo,
  FirstBlockImg,
  FirstBlockNumber,
  FirstBlockText,
  SecBlock,
  SecBlockLogo,
  SecBlockImg,
  SecBlockNumber,
  SecBlockText,
  ThirdBlock,
  ThirdBlockLogo,
  ThirdBlockImg,
  ThirdBlockNumber,
  ThirdBlockText,
  FourBlock,
  FourBlockImg,
  FourBlockNumber,
  FourBlockText,
  Line,
  CheeseLogo,
  FirstBlockTextAddition,
  SecBlockTextAddition,
} from './Cheese.styles'

import line from './../../assets/chLine.svg'
// import naming from './../../assets/naming.svg'
import nm1 from './../../assets/nm1.svg'
import nm2 from './../../assets/nm2.svg'
import nm3 from './../../assets/nm3.svg'

import ch1 from './../../assets/milk.png'
import ch2 from './../../assets/ch2.png'
import ch3 from './../../assets/ch3.png'

import ch4 from './../../assets/ch4.png'

import fr from './../../assets/fr.svg'
import sc from './../../assets/sc.svg'
import th from './../../assets/th.svg'
import four from './../../assets/for.svg'
import rotLogo from './../../assets/rotlogo.svg'

import Fade from 'react-reveal'

const Cheese = (props) => {
  return (
    <CheeseWrapper>
      <Line src={line} alt=""></Line>
      <CheeseLogo src={rotLogo} alt="" />
      <FirstBlock>
        <Fade bottom cascade>
          <FirstBlockLogo src={nm1} alt=""></FirstBlockLogo>
          <FirstBlockNumber src={fr} alt=""></FirstBlockNumber>
          <FirstBlockImg src={ch1} alt=""></FirstBlockImg>
          <FirstBlockText>
            Нагревание молока до очень высокой температуры.
          </FirstBlockText>
          <FirstBlockTextAddition>
            В зависимости от используемого молока сыр приобретает свои особенные
            характеристики.
          </FirstBlockTextAddition>
        </Fade>
      </FirstBlock>
      <SecBlock>
        <Fade bottom cascade>
          <SecBlockLogo src={nm2} alt=""></SecBlockLogo>
          <SecBlockNumber src={sc} alt=""></SecBlockNumber>
          <SecBlockImg src={ch2} alt=""></SecBlockImg>
          <SecBlockText>
            Добавление закваски. Время свертывания влияет на формирование
            конечного продукта
          </SecBlockText>
          <SecBlockTextAddition>
            Так же происходт отделение сыворотки от твердой массы
          </SecBlockTextAddition>
        </Fade>
      </SecBlock>
      <ThirdBlock>
        <Fade bottom cascade>
          <ThirdBlockLogo src={nm3} alt=""></ThirdBlockLogo>
          <ThirdBlockNumber src={th} alt=""></ThirdBlockNumber>
          <ThirdBlockImg src={ch3} alt=""></ThirdBlockImg>
          <ThirdBlockText>
            Сыр выкладывается в формы.В зависимости от рецепта применяется
            прессование,чтобы осушить продукт и получить плотную структуру
          </ThirdBlockText>
        </Fade>
      </ThirdBlock>
      <FourBlock>
        <Fade bottom cascade>
          <FourBlockNumber src={four} alt=""></FourBlockNumber>
          <FourBlockImg src={ch4} alt=""></FourBlockImg>
          <FourBlockText>
            Дальше сыр проходит этап созревания, который оказывает ключевое
            влияние на вкусовые качества
          </FourBlockText>
        </Fade>
      </FourBlock>
    </CheeseWrapper>
  )
}

export default Cheese
