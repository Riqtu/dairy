import styled from '@emotion/styled'

import cursor from './../../assets/cursor3.png'

export const PhotoWrapper = styled.div`
  position: relative;
  margin-top: 0px;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  /* cursor: url(${cursor}) 35 35, auto; */
  label {
    color: rgba(0, 0, 0, 0.5);
    position: relative;
    margin-left: 100px;
  }
  @media screen and (max-width: 700px) {
    label {
      margin-left: 50px;
    }
    padding-top: 50px;
    padding-bottom: -50px;
  }
  .slick-slide,
  .slick-slide * {
    outline: none !important;
    padding: 10px 0;
    /* background-color: blueviolet; */
  }
`
export const Logo = styled.div`
  position: absolute;
  left: auto;
  right: 50px;
  img {
    width: 400px;
  }
  @media screen and (max-width: 700px) {
    img {
      width: 200px;
    }
    top: 150px;
    right: auto;
    left: 0;
  }
`

export const Container = styled.div`
  position: relative;
  margin-top: 135px;
  width: 100%;
  outline: none !important;

  min-height: 600px;

  opacity: ${(props) => (props.flash ? 0 : 1)};
  transition: 0.5s;
  padding-bottom: 100px;
  text-align: right;
  @media screen and (max-width: 700px) {
    text-align: center;
    /* margin-top: 205px; */
    padding-bottom: 0;
    min-height: 0px;
  }
`
export const LayerWrapper = styled.div`
  position: relative;
  z-index: 4;
  opacity: ${(props) => props.opacity};
  translate: 1.5s;
  /* animation: topWaveImg ${(props) => props.duration}s ${(props) =>
    props.delay}s
    ease infinite alternate; */
  @keyframes topWaveImg {
    0% {
      transform: 0;
    }
    100% {
      transform: translateY(20px);
    }
  }
  /* transform: scale(${(props) => (props.swiped ? '0.5' : '1')}); */

  animation: ${(props) => (props.swiped ? 'slider' : '')} 1.5s ease forwards;
  @keyframes slider {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1);
    }
  }
`
export const EmptyLayer = styled.div`
  position: relative;
  width: 25%;
  @media screen and (max-width: 700px) {
    display: none;
    width: 50%;
    margin-left: 0;
  }
`
export const Layer = styled.img`
  position: relative;
  width: 90%;
  margin-left: 5%;
  outline: none;
  top: ${(props) => props.top}px;
  z-index: 5;
  translate: 1s;
  /* width: ${(props) => (props.swiped ? '80%' : '90%')}; */

  @media screen and (max-width: 700px) {
    width: 90%;
  }
`
export const Date = styled.img`
  position: absolute;
  width: 500px;
  top: auto;
  left: 13%;
  bottom: 130px;
  /* z-index: 100; */
  /* margin-top: 50px; */
  @media screen and (max-width: 700px) {
    width: 250px;
    top: auto;
    left: 3%;
    bottom: 90px;
    /* display: none; */
  }
`

export const Button = styled.button`
  cursor: pointer;
  position: absolute;
  top: auto;
  left: auto;
  bottom: -50px;
  right: ${(props) => (props.prev ? '280px' : '150px')};
  background-color: transparent;
  border: none;
  transition: 0.3s;
  outline: none;
  z-index: 7;
  &:hover {
    transform: scale(1.2)
      translateX(${(props) => (props.prev ? '-5px' : '5px')});
  }
  @media screen and (max-width: 700px) {
    right: ${(props) => (props.prev ? '75%' : '45%')};
    bottom: -40px;
    /* display: none; */
  }
`
