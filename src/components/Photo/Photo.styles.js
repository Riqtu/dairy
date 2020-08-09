import styled from '@emotion/styled'

export const PhotoWrapper = styled.div`
  position: relative;
  margin-top: 100px;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;

  label {
    color: rgba(0, 0, 0, 0.5);
    position: relative;
    margin-left: 100px;
  }
  @media screen and (max-width: 700px) {
    label {
      margin-left: 50px;
    }
  }
`
export const Logo = styled.div`
  position: absolute;
  left: auto;
  right: 50px;
  img {
    width: 400px;
  }
  @media screen and (max-width: 700px) {
    img {
      width: 300px;
    }
    top: 100px;
    right: 0;
  }
`

export const Container = styled.div`
  position: relative;
  margin-top: 135px;
  width: 100%;
  min-height: 500px;
  opacity: ${(props) => (props.flash ? 0 : 1)};
  transition: 0.5s;
  padding-bottom: 100px;
  text-align: right;
  @media screen and (max-width: 700px) {
    text-align: center;
    margin-top: 205px;
  }
`

export const Layer = styled.img`
  position: relative;
  width: 350px;
  margin-left: 50px;
  top: ${(props) => props.top}px;
  /* margin-top: 50px; */
  @media screen and (max-width: 700px) {
    width: 50%;
    margin-left: 0;
  }
`
export const Date = styled.img`
  position: absolute;
  width: 350px;
  top: auto;
  left: calc(100% - (400px * 3) - 20px);
  bottom: 0;
  /* margin-top: 50px; */
`

export const Button = styled.button`
  cursor: pointer;
  position: absolute;
  top: auto;
  left: auto;
  bottom: 0;
  right: ${(props) => (props.prev ? '590px' : '490px')};
  background-color: transparent;
  border: none;
  transition: 0.3s;
  outline: none;
  &:hover {
    transform: scale(1.2) rotate(-20deg);
  }
  @media screen and (max-width: 700px) {
    right: ${(props) => (props.prev ? '55%' : '35%')};
  }
`
