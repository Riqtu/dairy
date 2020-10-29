import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

const rotate = keyframes`
    0% {
      opacity: 0;
      transform: rotate3d(1, 0, 0, 90deg);
    }
    100% {
      opacity: 1;
      transform: rotate3d(1, 0, 0, 0deg);
    }
`

export const LogoWrapper = styled.div`
  position: relative;
  min-height: 70vh;
  /* overflow: hidden; */
  padding-top: ${(props) => (props.scrolled ? '200px' : '')};
  transition: 1s;
  filter: invert(${(props) => (props.invert ? '1' : '0')});
  @media screen and (max-width: 1024px) {
    min-height: 35vh;
  }
  @media screen and (max-width: 770px) {
    min-height: 30vh;
  }
`
export const FirstLayer = styled.img`
  position: relative;
  width: 74%;
  transition: 1s;
  margin-left: 13%;
  float: none;
  z-index: 2;
  animation: 2s ${(props) => props.isLoaded && rotate} ease forwards;
  top: ${(props) => (props.scrolled ? '-50px' : '0')};
`

export const SecondLayer = styled.img`
  position: relative;

  left: 5%;
  width: 90%;
  margin-top: 30px;
  transition: 1s;
  top: ${(props) => (props.scrolled ? '50px' : '0')};
  ${(props) => props.isLoaded && 'animation: 2s rotateSec ease forwards'};
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
  left: calc(50% - ${(props) => (props.scrolled ? props.x + '%' : '100px')});
  width: 250px;
  transition: 1.8s;
  opacity: 0;
  top: ${(props) => (props.scrolled ? props.y + 'px' : '50px')};

  animation: ${(props) =>
      props.isLoaded &&
      (props.rot
        ? ' 1.2s 1s rotateImageLayer ease forwards '
        : ' 1.2s 0.5s rotateImageLayer ease forwards ')},
    ${(props) =>
      props.isLoaded &&
      (props.rot ? 'none' : '10s waveImageLayer ease infinite alternate')};
  @media screen and (max-width: 700px) {
    transition: 1.8s;

    top: ${(props) => (props.scrolled ? props.y + 50 + 'px' : '20px')};
    left: calc(50% - ${(props) => (props.scrolled ? props.x + '%' : '35px')});
    width: 70px;
  }
  @keyframes rotateImageLayer {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @keyframes waveImageLayer {
    0% {
      transform: rotate(2deg) translateX(0);
    }
    50% {
      transform: rotate(6deg);
    }
    100% {
      transform: rotate(-6deg);
    }
  }
`

export const ReImageLayer = styled.img`
  position: absolute;
  left: 5%;
  width: 92%;
  transition: 1.8s;
  opacity: 1;
  top: ${(props) => props.margin}%;
  /* animation: ${(props) =>
    props.isLoaded &&
    (props.rot
      ? ' 1.2s 1s rotateImageLayer ease forwards '
      : ' 1.2s 0.5s rotateImageLayer ease forwards ')},
    ${(props) =>
    props.isLoaded &&
    (props.rot ? 'none' : '10s waveImageLayer ease infinite alternate')}; */
  @media screen and (max-width: 1366px) {
    top: -27%;
  }
  @media screen and (max-width: 770px) {
    transition: 1.8s;
    left: 0%;
    width: 100%;
  }
  @keyframes rotateImageLayer {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @keyframes waveImageLayer {
    0% {
      transform: rotate(2deg) translateX(0);
    }
    50% {
      transform: rotate(6deg);
    }
    100% {
      transform: rotate(-6deg);
    }
  }
`
