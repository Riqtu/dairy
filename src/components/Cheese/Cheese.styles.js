import styled from '@emotion/styled'

export const CheeseWrapper = styled.div`
  position: relative;
  width: 60%;
  left: 25%;
  margin-top: 230px;
  @media screen and (max-width: 700px) {
    width: 90%;
    left: 5%;
  }
`
export const Line = styled.img`
  position: absolute;
  left: 55%;
  z-index: 2;
`
export const FirstBlock = styled.div`
  position: relative;
  width: 40%;
  z-index: 2;
  /* @media screen and (max-width: 700px) {
    width: 90%;
  } */
`
export const FirstBlockLogo = styled.img`
  position: absolute;
  width: 70%;
  left: 30%;
  top: 10%;
  /* @media screen and (max-width: 700px) {
    left: 5%;
  } */
`
export const FirstBlockNumber = styled.img`
  position: absolute;
  left: 0;
  top: 25%;
  width: 50%;
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
`
export const SecBlockNumber = styled.img`
  position: absolute;
  left: auto;
  right: 5%;
  top: auto;
  bottom: 10%;
  width: 10%;
`
export const SecBlockImg = styled.img`
  position: relative;
  width: 40%;
  left: 40%;
  opacity: 0;
  mix-blend-mode: darken !important;
`
export const SecBlockText = styled.p`
  position: absolute;
  left: 0%;
  top: 55%;
  font-size: 10pt;
  width: 40%;
  float: left;
  color: #828282;
`

export const ThirdBlock = styled.div`
  position: relative;
  width: 55%;
  margin-top: 150px;
  z-index: 1;
  @media screen and (max-width: 700px) {
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
    left: 50px;
  }
`
export const ThirdBlockNumber = styled.img`
  position: absolute;
  left: -10%;
  top: auto;
  bottom: 0;
  width: 20%;
`
export const ThirdBlockImg = styled.img`
  position: relative;
  width: 45%;
  left: 10%;
  @media screen and (max-width: 700px) {
    opacity: 0 !important;
    left: -50%;
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
    left: 50px;
  }
`

export const FourBlock = styled.div`
  position: relative;
  width: 60%;
  left: 20%;
  background-color: #f1f0ed;
  z-index: 1;
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
    left: 60%;
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
