import styled from '@emotion/styled'

export const MenuNewWrapper = styled.div`
  position: relative;
  width: 100vw;
  display: block;
  /* height: 20vh; */
  /* background: linear-gradient(0deg, #f1f0ed 50%, rgba(255, 255, 255, 0) 100%); */
  transform: translateY(${(props) => (props.active ? '-50%' : '100%')});
  /* visibility: ${(props) => (props.visible ? 'visible' : 'hidden')}; */
  transition: 1.3s;
  top: 0;
  left: 0;
  z-index: 3 !important;
  margin-top: 300px;
  /* padding-top: 40vh; */
`
export const Links = styled.ul`
  list-style-type: none;
  margin-top: 120px;
  transition: 0.5s;
  opacity: ${(props) => (props.active ? '1' : '0')};
`
export const Img = styled.img`
  width: ${(props) => (props.width ? props.width : 50)}%;
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
  width: ${(props) => (props.width ? props.width : 30)}%;
  position: relative;
  margin-left: ${(props) => props.margin}%;
  margin-top: ${(props) => (props.top ? props.top + '%' : '50px')};
  animation: topWaveImg ${(props) => props.duration}s ${(props) => props.delay}s
    ease infinite alternate;
  transition: 0.3s;
  opacity: ${(props) => (props.disable ? '0.5' : '1')};
  float: left;
  &:hover {
    filter: invert(${(props) => (props.disable ? '0%' : '50%')});
  }
`

export const Fork = styled.img`
  width: 40%;
  top: -20%;
  position: absolute;
  margin-left: 0;
  margin-top: 0;
  animation: topWaveImg ${(props) => props.duration}s ${(props) => props.delay}s
    ease infinite alternate;
  transition: 0.3s;
`

export const Cheese = styled.img`
  width: 35%;
  top: 0;
  left: auto;
  right: 10%;
  position: absolute;
  animation: topWaveImg ${(props) => props.duration}s ${(props) => props.delay}s
    ease infinite alternate;
  transition: 0.3s;
`
