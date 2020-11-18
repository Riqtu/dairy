import styled from '@emotion/styled'

export const MasterWrapper = styled.div``
export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
`
export const BackgroundVideo = styled.video`
  position: absolute;
  width: auto;
  height: 100%;
  @media (min-aspect-ratio: 16/9) {
    width: 100%;
    height: auto;
  }
  @media (max-aspect-ratio: 16/9) {
    width: auto;
    height: 100%;
  }
`
export const VideoBlockWrapper = styled.div`
  position: relative;
  width: 100%;
  /* background-color: #f1f0ed; */
  padding: 5% 10%;
  padding-top: 0;
  /* margin-bottom: -150px; */
`
export const VideoBlockContainer = styled.div`
  position: relative;
  width: 80%;
  height: 600px;
  @media screen and (max-width: 770px) {
    height: 150px;
  }
`
export const Video = styled.video`
  position: absolute;
  width: 100%;
  height: auto;
`
export const InfoWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: #f1f0ed;
  padding: 5% 15%;
  padding-bottom: 200px;
  @media screen and (max-width: 770px) {
    padding: 0;
    padding-bottom: 200px;
    margin-top: -100px;
    background-color: transparent;
  }
  #info1 {
    position: relative;
    width: 20%;
    margin-left: 27%;
    top: 200px;
    @media screen and (max-width: 770px) {
      margin-left: 0%;
      margin-top: 0;
      top: 320px;

      width: 50%;
    }
  }
  #info2 {
    position: relative;
    width: 20%;
    margin-left: 5%;
    @media screen and (max-width: 770px) {
      margin-left: 55%;
      margin-top: 100px;
      width: 40%;
    }
  }
  #infoNumb {
    position: absolute;
    width: 10%;
    left: 13%;
    top: 40%;
    @media screen and (max-width: 770px) {
      position: absolute;
      width: 40%;
      left: 5%;
      top: 80%;
    }
  }
`
export const InfoTextLeft = styled.p`
  position: absolute;
  width: 13%;
  left: 18%;
  top: 47%;
  font-size: 10pt;

  @media screen and (max-width: 770px) {
    position: absolute;
    width: 13%;
    left: 18%;
    top: 27%;
    width: 40%;
    left: 5%;
    font-size: 10pt;
  }
`
export const InfoTextRight = styled.p`
  position: absolute;
  left: 51.5%;
  /* right: 0; */
  top: auto;
  bottom: 5%;
  width: 16%;
  font-size: 10pt;
  @media screen and (max-width: 770px) {
    position: absolute;
    left: 22%;
    /* right: 0; */
    top: auto;
    bottom: 0%;
    width: 70%;
    font-size: 9pt;
  }
`

export const LogoWrapper = styled.div`
  position: relative;
  /* min-height: 50vh; */
  width: 100%;
  margin-top: -130px;
  transition: 1s;
  margin-bottom: -10%;

  /* @media screen and (max-width: 1024px) {
    min-height: 35vh;
  }
  @media screen and (max-width: 770px) {
    min-height: 30vh;
  } */
`

export const ReImageLayer = styled.img`
  position: relative;
  left: 5%;
  width: 92%;
  transition: 1.8s;
  opacity: 1;
  top: auto;
  @media screen and (max-width: 770px) {
    transition: 1.8s;
    left: 0%;
    width: 100%;
  }
`
