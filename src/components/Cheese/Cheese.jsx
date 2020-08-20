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
} from './Cheese.styles'

import line from './../../assets/chLine.svg'
import naming from './../../assets/naming.svg'
import ch1 from './../../assets/ch1.png'
import ch2 from './../../assets/ch2.png'
import ch4 from './../../assets/ch4.png'

import fr from './../../assets/fr.svg'
import sc from './../../assets/sc.svg'
import th from './../../assets/th.svg'
import four from './../../assets/for.svg'

import Fade from 'react-reveal'

const Cheese = (props) => {
  return (
    <CheeseWrapper>
      <Line src={line} alt=""></Line>
      <FirstBlock>
        <Fade bottom cascade>
          <FirstBlockLogo src={naming} alt=""></FirstBlockLogo>
          <FirstBlockNumber src={fr} alt=""></FirstBlockNumber>
          <FirstBlockImg src={ch1} alt=""></FirstBlockImg>
          <FirstBlockText>
            Cillum reprehenderit sint ipsum sit do enim irure dolor. Officia
            Cillum reprehenderit sint
          </FirstBlockText>
        </Fade>
      </FirstBlock>
      <SecBlock>
        <Fade bottom cascade>
          <SecBlockLogo src={naming} alt=""></SecBlockLogo>
          <SecBlockNumber src={sc} alt=""></SecBlockNumber>
          <SecBlockImg src={ch2} alt=""></SecBlockImg>
          <SecBlockText>
            Cillum reprehenderit sint ipsum sit do enim irure dolor. Officia
            Cillum reprehenderit sint
          </SecBlockText>
        </Fade>
      </SecBlock>
      <ThirdBlock>
        <Fade bottom cascade>
          <ThirdBlockLogo src={naming} alt=""></ThirdBlockLogo>
          <ThirdBlockNumber src={th} alt=""></ThirdBlockNumber>
          <ThirdBlockImg src={ch2} alt=""></ThirdBlockImg>
          <ThirdBlockText>
            Cillum reprehenderit sint ipsum sit do enim irure dolor. Officia
            Cillum reprehenderit sint
          </ThirdBlockText>
        </Fade>
      </ThirdBlock>
      <FourBlock>
        <Fade bottom cascade>
          <FourBlockNumber src={four} alt=""></FourBlockNumber>
          <FourBlockImg src={ch4} alt=""></FourBlockImg>
          <FourBlockText>
            Cillum reprehenderit sint ipsum sit do enim irure
          </FourBlockText>
        </Fade>
      </FourBlock>
    </CheeseWrapper>
  )
}

export default Cheese
