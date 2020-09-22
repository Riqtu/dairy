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
  @media screen and (max-width: 700px) {
    width: 80%;
  }
`
export const LogoImg = styled.img`
  position: absolute;
  left: 96%;
  top: 20%;
  @media screen and (max-width: 700px) {
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
  @media screen and (max-width: 700px) {
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
  @media screen and (max-width: 700px) {
    left: 40%;
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
  @media screen and (max-width: 700px) {
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
  @media screen and (max-width: 700px) {
    padding: 0;
  }
`
export const AboutText = styled.p`
  position: relative;
  width: 30%;
  opacity: 0.5;
  margin-left: 60%;

  @media screen and (max-width: 700px) {
    width: 70%;
    font-size: 10pt;
    margin-left: 15%;
    margin-top: 40px;
  }
`

export const AboutLogo = styled.div`
  position: absolute;
  width: 102px;
  height: 100px;
  left: 10%;
  transition: 0.4s;
  top: 20%;
  border: none;
  background-image: url('${logoCircle}');
  background-size: contain;
  background-position: center;

  animation: 10s rotateImg linear infinite;
  @media screen and (max-width: 700px) {
    top: 80%;
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
  padding-left: 20%;
`
export const Name = styled.img`
  position: absolute;
  left: 0;
  width: 40%;
  z-index: 3;
  top: 50px;
`
export const SurName = styled.img`
  position: absolute;
  left: 30%;
  width: 40%;
  top: 180px;
  z-index: 1;
  @media screen and (max-width: 700px) {
    top: 80px;
  }
`
export const InfoImg = styled.img`
  position: relative;
  width: 25%;
  margin-right: 50px;
  margin-top: ${(props) => props.margin}px;
  vertical-align: top;
  z-index: ${(props) => props.zind};

  animation: topWaveImg ${(props) => props.duration}s ${(props) => props.delay}s
    ease infinite alternate;

  @media screen and (max-width: 700px) {
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

  @media screen and (max-width: 700px) {
    width: 70%;
    font-size: 10pt;
    left: 3%;
    top: 250px;
  }
`

export const MasterWrapper = styled.div`
  position: relative;
  width: 70%;
  left: 20%;
  margin-top: 170px;
`
export const MasterLogo = styled.img`
  position: absolute;
  width: 35%;
  left: 0;
`
export const MasterVlas = styled.img`
  position: absolute;
  width: 15%;
  left: -10%;
  top: 80%;
`
export const MasterImg = styled.img`
  position: relative;
  margin-top: 100px;
  width: 100%;
`
