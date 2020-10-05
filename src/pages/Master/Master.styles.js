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
  background-color: #f1f0ed;
  padding: 5% 10%;
`
export const VideoBlockContainer = styled.div`
  position: relative;
  width: 80%;
  height: 600px;
  @media screen and (max-width: 700px) {
    height: 200px;
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
  @media screen and (max-width: 700px) {
    padding: 0;
    padding-bottom: 200px;
  }
  #info1 {
    position: relative;
    width: 20%;
    margin-left: 27%;
    top: 200px;
    @media screen and (max-width: 700px) {
      margin-left: 0%;
      margin-top: 0;
      width: 50%;
    }
  }
  #info2 {
    position: relative;
    width: 20%;
    margin-left: 5%;
    @media screen and (max-width: 700px) {
      margin-left: 55%;
      margin-top: 0;
      width: 40%;
    }
  }
  #infoNumb {
    position: absolute;
    width: 10%;
    left: 13%;
    top: 40%;
  }
`
export const InfoTextLeft = styled.p`
  position: absolute;
  width: 13%;
  left: 18%;
  top: 47%;
  font-size: 10pt;

  @media screen and (max-width: 700px) {
    position: absolute;
    width: 13%;
    left: 18%;
    top: 70%;
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
  @media screen and (max-width: 700px) {
    position: absolute;
    left: 51.5%;
    /* right: 0; */
    top: auto;
    bottom: 5%;
    width: 40%;
    font-size: 10pt;
  }
`
