import styled from '@emotion/styled'

export const LogoWrapper = styled.div`
  position: relative;
  min-height: 70vh;
  overflow: hidden;

  @media screen and (max-width: 700px) {
    min-height: 20vh;
  }
`
export const FirstLayer = styled.img`
  position: relative;
  width: 90%;
  margin-left: 5%;
  float: none;
  z-index: 2;
  animation: 2s rotate ease forwards;
  @keyframes rotate {
    0% {
      opacity: 0;
      transform: rotate3d(1, 0, 0, 90deg);
    }
    100% {
      opacity: 1;
      transform: rotate3d(1, 0, 0, 0deg);
    }
  }
`

export const SecondLayer = styled.img`
  width: 102%;
  margin-top: 30px;
  animation: 2s rotateSec ease forwards;
  @keyframes rotateSec {
    0% {
      opacity: 0;
      transform: rotate3d(1, 0, 0, 180deg);
    }
    100% {
      opacity: 1;
      transform: rotate3d(1, 0, 0, 0deg);
    }
  }
`

export const ImageLayer = styled.img`
  position: absolute;
  top: 50px;
  left: calc(50% - 100px);
  width: 250px;
  opacity: 0;
  animation: 1s 0.4s rotateImageLayer ease forwards,
    10s 1.5s waveImageLayer ease infinite;
  @media screen and (max-width: 700px) {
    top: 20px;
    left: calc(50% - 35px);
    width: 70px;
  }
  @keyframes rotateImageLayer {
    0% {
      opacity: 0;
      transform: rotate(20deg) translateX(50%);
    }
    100% {
      opacity: 1;
      transform: rotate(0deg) translateX(0px);
    }
  }
  @keyframes waveImageLayer {
    0% {
      transform: rotate(0deg) translateX(0);
    }
    25% {
      transform: rotate(6deg);
    }
    75% {
      transform: rotate(-6deg);
    }
    100% {
      transform: rotate(0deg) translateX(-);
    }
  }
`
