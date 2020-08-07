import styled from '@emotion/styled'

export const LogoWrapper = styled.div`
  position: relative;
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
  transform: rotate3d(1, 0, 0, 180deg);
  animation: 1s 0.4s rotateImg ease forwards;
  @keyframes rotateImg {
    0% {
      opacity: 0;
      transform: rotateX(20deg) translateX(50%);
    }
    100% {
      opacity: 1;
      transform: rotate3d(1, 0, 0, 0deg) translateX(0px);
    }
  }
`
