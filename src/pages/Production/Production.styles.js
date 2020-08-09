import styled from '@emotion/styled'

export const ProductionWrapper = styled.div``

export const SliderWrapper = styled.div`
  position: relative;
  width: 65%;
  max-width: 1100px;
  left: 10%;
  margin-left: 0;
  margin-top: 60px;
`
export const LogoImg = styled.img`
  position: absolute;
  left: 96%;
  top: 20%;
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
    transform: scale(1.2) rotate(-20deg);
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
    transform: scale(1.2) rotate(200deg);
  }
`
