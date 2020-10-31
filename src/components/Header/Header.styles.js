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
  left: 57px;
  top: 36px;
  list-style-type: none;
  font-size: 0.7rem;
  line-height: 17px;
  @media screen and (max-width: 320px) {
    display: none;
  }
  a {
    color: black;
    text-decoration: none;
    transition: 0.3s;
    &:hover {
      opacity: 0.5;
      font-size: 0.9rem;
    }
  }
  li {
    color: ${(props) => (props.color ? 'green' : 'black')};
  }
  @media screen and (max-width: 700px) {
    left: 0;
    top: 20px;
  }
`
export const MenuButton = styled.button`
  /* position: ${(props) => (props.active ? 'fixed' : 'absolute')}; */
  position: fixed;
  filter: invert(${(props) => (props.invert ? '1' : '0')});

  cursor: pointer;
  width: 50px;
  height: 50px;
  background-repeat: no-repeat;
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
  &:hover {
    transform: scale(1.2) rotate(20deg);
  }

  @media screen and (max-width: 700px) {
    /* left: 0; */
    top: 30px;
    right: 30px;
  }
`
