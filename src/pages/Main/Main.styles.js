import styled from '@emotion/styled'
import logoCircle from './../../assets/logo-circle.png'

export const MainWrapper = styled.div`
  font-family: 'Open Sans';
  opacity: ${(props) => (props.redirect ? '0' : '1')};
`
export const AboutWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  margin-top: 100px;
  padding: 40px;

  @media screen and (max-width: 770px) {
    padding: 0;
    /* margin-top: 300vh; */
  }
`
export const AboutText = styled.p`
  position: relative;
  width: 40%;
  font-style: italic;
  margin-left: 15%;
  font-size: 10pt;
  color: rgba(130, 130, 130, 1);

  @media screen and (max-width: 770px) {
    width: 70%;
    font-size: 10pt;
    margin-left: 15%;
    margin-top: 50px;
    top: 20px;
  }
`
export const AboutLine = styled.div`
  position: absolute;
  width: 46.25px;
  left: 7.5%;
  margin-top: 30px;
  height: 0px;
  border: 1px solid #797979;
  @media screen and (max-width: 770px) {
    margin-top: 0;
  }
`
export const AboutLogo = styled.div`
  position: absolute;
  width: 48px;
  height: 46px;
  left: auto;
  right: 14%;
  top: 20%;
  border: none;
  background-image: url('${logoCircle}');
  background-size: contain;
  background-position: center;
  transform: scale(1.2) rotate(20deg);
  animation: 10s rotateImg linear infinite;
  @media screen and (max-width: 770px) {
    top: 65%;
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
  margin-top: -300px;
  padding: 40px;
  float: none;
  @media screen and (max-width: 770px) {
    padding: 0;
    margin-top: 0;
  }
`
export const SecondAboutText = styled.p`
  position: relative;
  width: 40%;
  /* font-style: italic; */
  margin-left: 8%;
  color: rgba(130, 130, 130, 1);
  font-size: 10pt;
  @media screen and (max-width: 770px) {
    width: 70%;
    font-size: 10pt;
    margin-left: 15%;
  }
`

export const Contact = styled.div`
  position: relative;
  margin-top: 120px;
  margin-bottom: 200px;

  /* left: 15%;  */
  width: 100%;
  min-width: 100px;
  min-height: 100px;

  line-height: 1.2;

  p {
    font-size: 10pt;
    margin-bottom: 120px;
    margin-top: 30px;
    float: left;
    margin-right: 20%;
  }
  h1 {
    font-size: 40pt;
    font-family: 'Uberschrift';
    font-weight: lighter;
    b {
      font-weight: normal;
      transition: 0.3s;
      cursor: pointer;
    }
    b:hover {
      color: rgba(255, 168, 0, 1);
    }
  }
  a {
    color: black;
    text-decoration: none;
  }
  img {
    width: 40%;
    margin-right: 10%;
    margin-left: 10%;
    margin-top: -100px;

    float: left;
    @media screen and (max-width: 770px) {
      /* display: none; */
      /* width: 300px; */
    }
  }
  @media screen and (max-width: 1366px) {
    p {
      font-size: 10pt;
      margin-bottom: 200px;
      margin-top: 30px;
      float: left;
      margin-right: 20%;
    }
    img {
      width: 30%;
      margin-right: 10%;
      margin-left: 10%;
      margin-top: -50px;

      float: left;
    }
  }
  @media screen and (max-width: 770px) {
    width: 80%;
    left: 10%;
    margin-bottom: 50px;
    h1 {
      font-size: 25pt;
      font-family: 'Uberschrift';
      text-align: center;
    }
    p {
      display: none;
    }
    img {
      width: 80%;
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
  overflow: hidden;
  margin-bottom: 0px;

  p {
    margin: 20px 70px;
  }
`
