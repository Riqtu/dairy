import styled from '@emotion/styled'

import logoCircle from './../../assets/logo-circle.png'

export const HeaderWrapper = styled.header`
  position: relative;
  height: 200px;
  width: 100%;
  font-family: 'Open Sans';
  z-index: 6;
  animation: 2s flash ease forwards;
  filter: invert(${(props) => (props.invert ? '1' : '0')});
  @keyframes flash {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  z-index: 6 !important;
`
export const Links = styled.ul`
  position: absolute;
  left: 20px;
  top: 42px;
  list-style-type: none;
  font-size: 0.8rem;
  line-height: 19px;
  a {
    color: black;
    text-decoration: none;
    transition: 0.3s;
    &:hover {
      opacity: 0.5;
      font-size: 0.9rem;
    }
  }
  @media screen and (max-width: 700px) {
    left: 0;
    top: 20px;
  }
`
export const MenuButton = styled.button`
  position: ${(props) => (props.active ? 'fixed' : 'absolute')};
  filter: invert(${(props) => (props.invert ? '1' : '0')});

  cursor: pointer;
  width: 68px;
  height: 66px;
  left: auto;
  right: 80px;
  top: 60px;
  border: none;
  background-color: transparent;
  background-image: url('${logoCircle}');
  background-size: contain;
  background-position: center;
  transition: 0.3s;
  outline: none;
  z-index: 8 !important;
  &:hover{
      transform: scale(1.2) rotate(20deg)
  }
  
  @media screen and (max-width: 700px) {
    /* left: 0; */
    top: 40px;
    right: 50px;
  }
`
