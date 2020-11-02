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
  padding-left: 20%;
  @media screen and (max-width: 770px) {
    padding-bottom: 100px;
  }
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
    width: 40%;
    font-size: 8pt;
    left: 30%;
    top: 250px;
  }
`

export const MasterWrapper = styled.div`
  position: relative;
  width: 70%;
  left: 20%;
  margin-top: 170px;
  @media screen and (max-width: 770px) {
    margin-top: 170px;
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
    width: 80%;
    font-size: 8pt;
    margin-left: 10%;
    margin-top: 0px;
  }
`
