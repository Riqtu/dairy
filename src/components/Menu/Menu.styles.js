import styled from '@emotion/styled'

export const MenuWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(0deg, #f1f0ed 50%, rgba(173, 0, 255, 0) 100%);
  transform: translateY(${(props) => (props.active ? '-50%' : '100%')});
  transition: 1.3s;
  top: 0;
  left: 0;
  z-index: 6 !important;
  padding-top: 100vh;
`
export const Links = styled.ul`
  list-style-type: none;
  margin-top: 150px;
`
export const Img = styled.img`
  width: 50%;
  position: relative;
  margin-left: ${(props) => props.margin}%;
  margin-top: 50px;
`
