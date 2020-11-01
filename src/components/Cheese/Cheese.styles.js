import styled from '@emotion/styled'

export const CheeseWrapper = styled.div`
  position: relative;
  width: 60%;
  left: 25%;
  margin-top: 230px;
  @media screen and (max-width: 700px) {
    width: 90%;
    left: 5%;
    margin-top: 0;
  }
`
export const Line = styled.img`
  position: absolute;
  left: 55%;
  z-index: 2;
  @media screen and (max-width: 700px) {
    left: 40%;
    opacity: 0.4;
  }
`
export const FirstBlock = styled.div`
  position: relative;
  width: 40%;
  z-index: 2;
  @media screen and (max-width: 700px) {
    width: 80%;
  }
`
export const FirstBlockLogo = styled.img`
  position: absolute;
  width: 70%;
  left: 30%;
  top: 10%;
  @media screen and (max-width: 700px) {
    left: 20%;
    top: 80%;
  }
  @media screen and (max-width: 320px) {
    top: 75%;
  }
`
export const FirstBlockNumber = styled.img`
  position: absolute;
  left: 0;
  top: 25%;
  width: 50%;
  @media screen and (max-width: 700px) {
    left: auto;
    right: -85%;
    width: 80%;
  }
`
export const FirstBlockImg = styled.img`
  position: relative;
  width: 80%;
  left: 20%;
  mix-blend-mode: multiply;
`
export const FirstBlockText = styled.p`
  position: relative;
  left: 20%;
  font-size: 10pt;
  width: 80%;
  margin-top: -20px;
  color: #828282;
  @media screen and (max-width: 700px) {
    margin-top: 0px;
  }
  @media screen and (max-width: 320px) {
    margin-top: 10px;
  }
`
export const SecBlock = styled.div`
  position: relative;
  width: 100%;
  margin-top: 100px;
  z-index: 2;
`
export const SecBlockLogo = styled.img`
  position: absolute;
  width: 35%;
  left: 0%;
  top: 10%;
  @media screen and (max-width: 700px) {
    left: 10%;
    top: 110%;
  }
`
export const SecBlockNumber = styled.img`
  position: absolute;
  left: auto;
  right: 5%;
  top: auto;
  bottom: 10%;
  width: 10%;
  @media screen and (max-width: 700px) {
    left: -15%;
    top: 0%;
    width: 30%;
  }
`
export const SecBlockImg = styled.img`
  position: relative;
  width: 40%;
  left: 40%;
  opacity: 0;
  mix-blend-mode: darken !important;
  @media screen and (max-width: 700px) {
    left: 15%;
    width: 70%;
  }
`
export const SecBlockText = styled.p`
  position: absolute;
  left: 0%;
  top: 55%;
  font-size: 10pt;
  width: 40%;
  float: left;
  color: #828282;
  @media screen and (max-width: 700px) {
    position: relative;
    margin-top: 100px;
    top: 90%;
    width: 70%;
    left: 10%;
  }
`

export const ThirdBlock = styled.div`
  position: relative;
  width: 55%;
  margin-top: 150px;
  z-index: 1;
  @media screen and (max-width: 700px) {
    margin-top: 250px;
    padding-bottom: 50px;
    width: 100%;
    /* background-color: #e5e5e5; */
  }
`
export const ThirdBlockLogo = styled.img`
  position: absolute;
  width: 40%;
  left: auto;
  right: 0;
  top: 10%;
  @media screen and (max-width: 700px) {
    width: 80%;
    top: 67%;
    left: 50px;
  }
  @media screen and (max-width: 320px) {
    top: 64%;
  }
`
export const ThirdBlockNumber = styled.img`
  position: absolute;
  left: -10%;
  top: auto;
  bottom: 0;
  width: 20%;
  @media screen and (max-width: 700px) {
    left: auto;
    right: -5%;
    width: 30%;
    top: 0;
  }
`
export const ThirdBlockImg = styled.img`
  position: relative;
  width: 45%;
  left: 10%;
  @media screen and (max-width: 700px) {
    width: 80%;
  }
`
export const ThirdBlockText = styled.p`
  position: absolute;
  left: auto;
  right: 0;
  top: 25%;
  font-size: 10pt;
  width: 40%;
  color: #828282;
  @media screen and (max-width: 700px) {
    position: relative;
    width: 80%;
    left: 50px;
    margin-top: 50px;
  }
`

export const FourBlock = styled.div`
  position: relative;
  width: 60%;
  left: 20%;
  background-color: #f1f0ed;
  z-index: 1;
  @media screen and (max-width: 700px) {
    left: 0%;
    width: 100%;
  }
`
export const FourBlockLogo = styled.img`
  position: absolute;
  width: 70%;
  left: 30%;
  top: 10%;
`
export const FourBlockNumber = styled.img`
  position: absolute;
  left: 85%;
  top: 46%;
  width: 40%;
  @media screen and (max-width: 700px) {
    left: 0;
  }
`
export const FourBlockImg = styled.img`
  position: relative;
  width: 80%;
  left: 20%;
  mix-blend-mode: darken;
  @media screen and (max-width: 700px) {
    margin-top: 30px;
    left: 0%;
    width: 150%;
  }
`
export const FourBlockText = styled.p`
  position: absolute;
  left: 85%;
  top: 55%;
  width: 40%;
  font-size: 10pt;
  color: #828282;
  @media screen and (max-width: 700px) {
    left: 0;
    font-size: 10pt;
  }
`

export const CheeseLogo = styled.img`
  position: absolute;
  width: 15%;
  top: 0%;
  left: -45%;
  opacity: 1;
`
