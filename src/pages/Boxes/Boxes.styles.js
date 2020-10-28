import styled from '@emotion/styled'
import preloader from './../../assets/preloader.svg'

export const BoxesWrapper = styled.div``

export const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  left: 0%;
  margin-left: 0;
  margin-top: -120px;
  @media screen and (max-width: 1152px) {
    margin-top: -160px;
  }
  @media screen and (max-width: 700px) {
    margin-top: 0;
  }
  @media screen and (max-width: 700px) {
    margin-top: -70px;

    width: 120%;
    margin-left: -10%;
  }
`

export const SliderBlock = styled.div`
  position: relative;
  height: 850px;
  @media screen and (max-width: 1442px) {
    height: 650px;
  }
  @media screen and (max-width: 1366px) {
    height: 77vh;
  }
  @media screen and (max-width: 700px) {
    height: 430px;
    /* width: 100%; */
  }
`
export const SliderImg = styled.img`
  width: 30%;
  margin-left: 35%;
  margin-top: 2%;
  @media screen and (max-width: 1040px) {
    width: 70%;
    margin-left: 15%;
    margin-top: 0%;
  }
`
export const BackImgLeft = styled.img`
  position: absolute;
  left: 15%;
  top: 5%;
  width: 15%;
  filter: blur(13px);
`
export const BackImgRight = styled.img`
  position: absolute;
  left: auto;
  right: 15%;
  top: 5%;
  width: 15%;
  filter: blur(13px);
`
export const NextArrow = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  position: absolute;
  left: auto;
  right: 5%;
  top: 45%;
  outline: none;
  transition: 0.3s;
  &:hover {
    transform: scale(1.2) translateX(5px);
  }
  @media screen and (max-width: 700px) {
    left: auto;
    right: 10%;
    top: 35%;
  }
`
export const PrevArrow = styled.button`
  cursor: pointer;
  border: none;
  z-index: 100;
  background-color: transparent;

  position: absolute;
  left: 5%;
  top: 45%;
  outline: none;
  transition: 0.3s;
  transform: rotate(180deg);
  &:hover {
    transform: scale(1.2) translateX(-5px) rotate(180deg);
  }
  @media screen and (max-width: 700px) {
    left: 10%;
    top: 35%;
  }
`
export const Circle = styled.div`
  position: fixed;
  width: 20rem;
  height: 20rem;
  left: calc(50% - 10rem);
  top: calc(50% - 10rem);
  animation: start 1s forwards;

  background-image: url(${preloader});
  background-size: contain;
  transition: 0.3s;
  opacity: ${(props) => (props.swiped ? '0' : 1)};
  animation: preloader 15s linear infinite;
  @keyframes preloader {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
export const SliderTitle = styled.div`
  position: absolute;
  top: auto;
  bottom: 0;
  text-align: center;
  width: 40%;
  margin-left: 30%;
  margin-top: 40px;
  opacity: ${(props) => (props.swiped ? 0 : 1)};
  transition: 0.3s;
  h1 {
    font-family: Uberschrift;
    font-style: normal;
    font-weight: normal;
    font-size: 35pt;
  }
  p {
    margin-top: -15px;
    color: #828282;
    font-size: 10pt;
  }

  @media screen and (max-width: 1152px) {
    margin-top: 0px;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
    margin-left: 0%;
    margin-top: 0%;
  }
`
