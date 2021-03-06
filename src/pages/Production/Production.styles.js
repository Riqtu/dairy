import styled from '@emotion/styled'
import logoCircle from './../../assets/logo-circle.png'

export const ProductionWrapper = styled.div`
  padding-bottom: 50px;
  overflow-x: hidden;
`

export const SliderWrapper = styled.div`
  position: relative;
  width: 65%;
  max-width: 1100px;
  left: 10%;
  margin-left: 0;
  margin-top: 120px;
  @media screen and (max-width: 770px) {
    width: 80%;
    margin-top: 500px;
  }
  @media screen and (max-width: 770px) {
    width: 80%;
    margin-top: 120px;
  }
`
export const LogoImg = styled.img`
  position: absolute;
  left: 96%;
  top: 20%;
  @media screen and (max-width: 770px) {
    display: none;
  }
`

export const SliderBlock = styled.div`
  /* width: 200px; */
  height: 500px;
  text-align: center;
  background-image: url(${(props) => props.back});
  background-size: cover;
  background-position: center;
  img {
    /* width: 100%; */
    text-align: center;
  }
  @media screen and (max-width: 770px) {
    height: 200px;
  }
`

export const NextArrow = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  position: absolute;
  left: 115%;
  top: 80%;
  outline: none;
  transition: 0.3s;
  &:hover {
    transform: scale(1.2) translateX(5px);
  }
  @media screen and (max-width: 770px) {
    left: 25%;
    top: 116%;
  }
`
export const PrevArrow = styled.button`
  cursor: pointer;
  border: none;

  background-color: transparent;

  position: absolute;
  left: 105%;
  top: 80%;
  outline: none;
  transition: 0.3s;
  transform: rotate(180deg);
  &:hover {
    transform: scale(1.2) translateX(-5px) rotate(180deg);
  }
  @media screen and (max-width: 770px) {
    left: 0%;
    top: 116%;
  }
`

export const AboutWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  margin-top: 100px;
  padding: 40px;
  @media screen and (max-width: 770px) {
    padding: 0;
    height: auto;
  }
`
export const AboutText = styled.p`
  position: relative;
  width: 30%;
  opacity: 0.5;
  margin-left: 50%;
  font-size: 10pt;

  @media screen and (max-width: 770px) {
    width: 50%;
    font-size: 8pt;
    margin-left: 40%;
    margin-top: 40px;
  }
`

export const AboutLogo = styled.div`
  position: absolute;
  width: 102px;
  height: 100px;
  left: 15%;
  transition: 0.4s;
  top: 20%;
  border: none;
  background-image: url('${logoCircle}');
  background-size: contain;
  background-position: center;
  opacity: 0.6;
  animation: 10s rotateImg linear infinite;
  @media screen and (max-width: 770px) {
    width: 52px;
    height: 50px;
    top: 0%;
    right: 30%;
  }
  @keyframes rotateImg {
    0% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(0);
    }
  }
`

export const InfoWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 70px;
  /* padding-left: 20%; */
  @media screen and (max-width: 770px) {
    padding-bottom: 50px;
  }
`

export const LinkWrapper = styled.div`
  text-align: center;
  a {
    position: relative;
    /* border-radius: 10px; */
    margin: 40px 0;
    padding: 2% 6%;
    text-decoration: none;
    border: 1px solid #9e9987;
    font-family: 'Uberschrift', sans-serif;
    color: #9e9987;
    font-size: 40px;
    transition: 0.3s;
    &:hover {
      color: white;
      background-color: #9e9987;
    }

    @media screen and (max-width: 770px) {
      padding: 4% 8%;

      font-size: 25px;
      top: 70px;
      left: 35px;
    }
  }

  @media screen and (max-width: 770px) {
    text-align: left;
  }
`
export const Name = styled.img`
  position: absolute;
  left: 0;
  width: 50%;
  z-index: 3;
  top: 50px;
  left: calc(50% - 25%);
  @media screen and (max-width: 770px) {
    width: 90%;
    left: 5%;
    top: 170px;
  }
`
export const SurName = styled.img`
  position: absolute;
  left: 30%;
  width: 40%;
  top: 180px;
  z-index: 1;
  @media screen and (max-width: 770px) {
    top: 80px;
  }
`
export const InfoImg = styled.img`
  position: relative;
  width: ${(props) => (props.w ? props.w : '25')}%;
  margin-right: 50px;
  margin-top: ${(props) => props.margin}px;
  vertical-align: top;
  z-index: ${(props) => props.zind};

  animation: topWaveImg ${(props) => props.duration}s ${(props) => props.delay}s
    ease infinite alternate;

  @media screen and (max-width: 770px) {
    margin-right: 0;
  }
  @keyframes topWaveImg {
    0% {
      transform: 0;
    }
    100% {
      transform: translateY(20px);
    }
  }
`

export const InfoText = styled.p`
  position: absolute;
  width: 25%;
  left: 6%;
  top: auto;
  bottom: 20px;
  opacity: 0.5;
  color: #828282;
  font-size: 10pt;

  @media screen and (max-width: 770px) {
    width: 60%;
    font-size: 8pt;
    left: 10%;
    top: 280px;
  }
`

export const MasterWrapper = styled.div`
  position: relative;
  width: 70%;
  left: 20%;
  margin-top: 170px;
  @media screen and (max-width: 770px) {
    margin-top: 20px;
  }
`
export const MasterLogo = styled.img`
  position: absolute;
  width: 35%;
  left: 0;
  @media screen and (max-width: 770px) {
    margin-top: 70px;
    left: -10%;
    width: 43%;
  }
`
export const MasterVlas = styled.img`
  position: absolute;
  width: 15%;
  left: -10%;
  top: 80%;
  @media screen and (max-width: 770px) {
    margin-top: 70px;
    display: none;
  }
`
export const MasterImg = styled.img`
  position: relative;
  margin-top: 100px;
  width: 100%;
`
export const AboutTextMaster = styled.p`
  position: relative;
  width: 30%;
  opacity: 0.5;
  margin-left: 50%;
  font-size: 10pt;

  @media screen and (max-width: 770px) {
    width: 67%;
    font-size: 8pt;
    margin-left: 10%;
    margin-top: 0px;
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
    margin-top: 205px;
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
