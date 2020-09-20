import styled from '@emotion/styled'

export const BoxesWrapper = styled.div``

export const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  left: 0%;
  margin-left: 0;
  /* margin-top: 120px; */
  @media screen and (max-width: 700px) {
    width: 80%;
  }
`

export const SliderBlock = styled.div`
  position: relative;
  height: 600px;
  @media screen and (max-width: 700px) {
    height: 200px;
  }
`
export const SliderImg = styled.img`
  width: 20%;
  margin-left: 40%;
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
    transform: scale(1.2) rotate(-20deg);
  }
  @media screen and (max-width: 700px) {
    left: 40%;
    top: 116%;
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
    transform: scale(1.2) rotate(200deg);
  }
  @media screen and (max-width: 700px) {
    left: 0%;
    top: 116%;
  }
`
export const SliderTitle = styled.div`
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
    font-size: 11pt;
  }
`
