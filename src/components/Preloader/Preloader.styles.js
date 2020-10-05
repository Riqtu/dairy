import styled from '@emotion/styled'

import preloader from './../../assets/preloader.svg'

export const PreloaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: blue;
  z-index: 1000000000;
  opacity: ${(props) => (props.isLoaded ? '0' : '1')};
  transition: 1.5s;

  /* transform: translateY(${(props) => (props.isLoaded ? '-100%' : '0')}); */
  background-color: #f1f0ed;
  display: ${(props) => (props.disActive ? 'none' : 'grid')};
  align-content: center;
  justify-content: center;
  font-size: 5rem;
  font-family: 'Uberschrift';
  overflow: hidden;
  p {
    animation: start 1s forwards;
  }
  @keyframes start {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
export const Container = styled.div`
  width: 20rem;
  height: 20rem;
  display: grid;
  align-content: center;
  justify-content: center;
  p {
    margin-top: 70px;
    color: rgba(82, 72, 39, 1);
  }
`
export const Circle = styled.div`
  position: fixed;
  width: 20rem;
  height: 20rem;
  /* left: calc(50% - 10rem);
  top: calc(50% - 10rem); */
  animation: start 1s forwards;

  background-image: url(${preloader});
  background-size: contain;

  animation: preloader 15s linear infinite;
  @keyframes preloader {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
