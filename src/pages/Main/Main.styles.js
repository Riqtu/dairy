import styled from '@emotion/styled'
import logoCircle from './../../assets/logo-circle.png'

export const MainWrapper = styled.div`
  font-family: 'Open Sans';
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
  width: 40%;
  font-style: italic;
  margin-left: 20%;
  @media screen and (max-width: 700px) {
    width: 70%;
    font-size: 10pt;
    margin-left: 15%;
    margin-top: 40px;
  }
`
export const AboutLine = styled.div`
  position: absolute;
  width: 46.25px;
  left: 13%;
  margin-top: 30px;
  height: 0px;
  border: 1px solid #797979;
  @media screen and (max-width: 700px) {
    margin-top: 0;
  }
`
export const AboutLogo = styled.div`
  position: absolute;
  width: 102px;
  height: 100px;
  left: auto;
  right: 12%;
  top: 20%;
  border: none;
  background-image: url('${logoCircle}');
  background-size: contain;
  background-position: center;
    transform: scale(1.2) rotate(20deg);
    animation: 10s  rotateImg linear infinite;
    @media screen and (max-width: 700px) {
      top: 60%;
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

export const SecondAboutWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  /* top: 400px; */
  margin-top: 150px;
  padding: 40px;
  float: none;
  @media screen and (max-width: 700px) {
    padding: 0;
  }
`
export const SecondAboutText = styled.p`
  position: relative;
  width: 40%;
  font-style: italic;
  margin-left: 20%;
  @media screen and (max-width: 700px) {
    width: 70%;
    font-size: 10pt;
    margin-left: 15%;
  }
`

export const Contact = styled.div`
  position: relative;
  margin-top: 120px;
  margin-bottom: 200px;

  left: 30%;
  width: 40%;
  min-width: 100px;
  min-height: 100px;

  line-height: 1.2;
  p {
    font-size: 10pt;
    margin-bottom: 120px;
  }
  h1 {
    font-size: 40pt;
    font-family: 'Uberschrift';
  }
  a {
    color: black;
    text-decoration: none;
  }
  @media screen and (max-width: 700px) {
    width: 80%;
    left: 10%;
    h1 {
      font-size: 30pt;
      font-family: 'Uberschrift';
    }
  }
`
export const Footer = styled.footer`
  position: relative;
  width: 90%;
  height: 100px;
  border-top: 1px solid black;
  margin-left: 5%;
  opacity: 0.5;
  p {
    margin: 20px 70px;
  }
`
