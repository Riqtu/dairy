import styled from '@emotion/styled'
import logoCircle from './../../assets/logo-circle.png'

export const MainWrapper = styled.div`
  font-family: 'Open Sans';
`
export const AboutWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  top: 100px;
  padding: 40px;
`
export const AboutText = styled.p`
  position: relative;
  width: 40%;
  font-style: italic;
  margin-left: 20%;
`
export const AboutLine = styled.div`
  position: absolute;
  width: 46.25px;
  left: 13%;
  margin-top: 30px;
  height: 0px;
  border: 1px solid #797979;
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
  height: 100px;
  top: 400px;
  padding: 40px;
  float: none;
`
export const SecondAboutText = styled.p`
  position: relative;
  width: 40%;
  font-style: italic;
  margin-left: 20%;
`
