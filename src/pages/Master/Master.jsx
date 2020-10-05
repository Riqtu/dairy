import React, { useState } from 'react'
import {
  MasterWrapper,
  Background,
  BackgroundVideo,
  VideoBlockWrapper,
  VideoBlockContainer,
  Video,
  InfoWrapper,
  InfoTextRight,
  InfoTextLeft,
} from './Master.styles'
import { Logo, Header, Preloader, MasterForm } from './../../components'
import { useUpdateLocation } from '../../hooks/useUpdateLocation'
import video from './../../assets/video/dair.mp4'
import img1 from './../../assets/rest1.png'
import img2 from './../../assets/ms1.png'
import fr from './../../assets/fr.svg'

const Master = (props) => {
  const [isLoaded, setIsLoaded] = useState(false)
  useUpdateLocation()
  return (
    <MasterWrapper>
      <Preloader isLoaded={isLoaded} setIsLoaded={setIsLoaded} />
      <Background>
        <BackgroundVideo
          loop="1"
          muted="1"
          autoPlay={true}
          poster="video/plane.jpg"
          playsInline
        >
          <source src={video} type="video/mp4" />
        </BackgroundVideo>
      </Background>
      <Header invert></Header>
      <Logo page={2} invert isLoaded={isLoaded}></Logo>
      <VideoBlockWrapper>
        <VideoBlockContainer>
          <Video loop="1" muted="1" autoPlay={true} poster="video/plane.jpg">
            <source src={video} type="video/mp4" />
          </Video>
        </VideoBlockContainer>
      </VideoBlockWrapper>
      <InfoWrapper>
        <img src={img1} alt="" id="info1" />
        <img src={img2} alt="" id="info2" />
        <img src={fr} alt="" id="infoNumb" />
        <InfoTextLeft>
          Cillum reprehenderit sint ipsum sit do enim irure dolor. Officia
        </InfoTextLeft>
        <InfoTextRight>
          Мы готовим молодые рассольные, полутвердые, мягкие с плесенью,а также
          твердые выдержанные сыры
        </InfoTextRight>
      </InfoWrapper>
      <MasterForm></MasterForm>
    </MasterWrapper>
  )
}

export default Master
