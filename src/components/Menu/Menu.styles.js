import styled from '@emotion/styled'

export const MenuWrapper = styled.div`
  position: fixed;
  width: 100vw;
  display: block;
  height: 100vh;
  background: linear-gradient(0deg, #f1f0ed 50%, rgba(255, 255, 255, 0) 100%);
  transform: translateY(${(props) => (props.active ? '-50%' : '100%')});
  /* ${(props) => setInterval(() => console.log(props.active), 500)}; */
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
`
export const Img = styled.img`
  width: 50%;
  position: relative;
  margin-left: ${(props) => props.margin}%;
  margin-top: 50px;
  animation: topWaveImg ${(props) => props.duration}s ${(props) => props.delay}s
    ease infinite alternate;
  transition: 0.3s;
  opacity: ${(props) => (props.disable ? '0.5' : '1')};
  &:hover {
    filter: invert(${(props) => (props.disable ? '0%' : '50%')});
  }
`
export const ImgLast = styled.img`
  width: 30%;
  position: relative;
  margin-left: ${(props) => props.margin}%;
  margin-top: 50px;
  animation: topWaveImg ${(props) => props.duration}s ${(props) => props.delay}s
    ease infinite alternate;
  transition: 0.3s;
  opacity: ${(props) => (props.disable ? '0.5' : '1')};
  float: left;
  &:hover {
    filter: invert(${(props) => (props.disable ? '0%' : '50%')});
  }
`
