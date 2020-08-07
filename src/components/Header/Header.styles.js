import styled from '@emotion/styled'

import logoCircle from './../../assets/logo-circle.png'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 200px;
  width: 100%;
  font-family: 'Open Sans';
  animation: 2s flash ease forwards;
  @keyframes flash {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
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
`
export const MenuButton = styled.button`
  position: absolute;
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
  &:hover{
      transform: scale(1.2) rotate(20deg)
  }
`
