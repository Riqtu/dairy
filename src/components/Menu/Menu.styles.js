import styled from '@emotion/styled'

export const MenuWrapper = styled.div`
  position: fixed;
  width: 100vw;
  display: block;
  height: 100vh;
  background: linear-gradient(0deg, #f1f0ed 50%, rgba(255, 255, 255, 0) 100%);
  transform: translateY(${(props) => (props.active ? '-50%' : '100%')});
  /* visibility: ${(props) => (props.visible ? 'visible' : 'hidden')}; */
  transition: 1.3s;
  top: 0;
  left: 0;
  z-index: 7 !important;
  padding-top: 100vh;
`
export const Links = styled.ul`
  list-style-type: none;
  margin-top: 120px;
  transition: 0.5s;
  opacity: ${(props) => (props.active ? '1' : '0')};
  @media screen and (max-width: 700px) {
    margin-top: 30%;
  }
`
export const Img = styled.img`
  width: 50%;
  position: relative;
  margin-left: ${(props) => props.margin}%;
  margin-top: 50px;
  /* animation: topWaveImg ${(props) => props.duration}s ${(props) =>
    props.delay}s
    ease infinite alternate; */
  transition: 0.3s;
  filter: ${(props) =>
    props.disable
      ? 'invert(0.6) sepia(1) saturate(11.3) hue-rotate(0deg) brightness(1)'
      : ''};
  &:hover {
    filter: ${(props) =>
      props.disable
        ? ''
        : 'invert(0.6) sepia(1) saturate(11.3) hue-rotate(0deg) brightness(1)'};
  }

  @media screen and (max-width: 1366px) {
    width: 40%;
  }
  @media screen and (max-width: 700px) {
    margin-top: 30px;
    width: ${(props) => props.w}%;
  }
`
export const ImgLast = styled.img`
  width: 30%;
  position: relative;
  margin-left: ${(props) => props.margin}%;
  margin-top: 50px;
  /* animation: topWaveImg ${(props) => props.duration}s ${(props) =>
    props.delay}s
    ease infinite alternate; */
  transition: 0.3s;
  /* opacity: ${(props) => (props.disable ? '0.5' : '1')}; */
  float: ${window.screen.width > 770 && 'left'};
  &:first-child {
    width: 38%;
  }
  filter: ${(props) =>
    props.disable
      ? 'invert(0.6) sepia(1) saturate(11.3) hue-rotate(0deg) brightness(1)'
      : ''};
  &:hover {
    filter: ${(props) =>
      props.disable
        ? ''
        : 'invert(0.6) sepia(1) saturate(11.3) hue-rotate(0deg) brightness(1)'};
  }

  @media screen and (max-width: 700px) {
    margin-top: 30px;
    width: ${(props) => props.w}%;
  }
`
