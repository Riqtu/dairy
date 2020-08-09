import styled from '@emotion/styled'

import img1 from './../../assets/img1.png'
import img0 from './../../assets/img0.svg'
import img2 from './../../assets/img2.png'
import img3 from './../../assets/img3.png'
import img4 from './../../assets/img4.svg'

const back = [img0, img1, img0, img2, img4, img3]

export const GroupWrapper = styled.div`
  position: relative;
  width: 90%;
  left: 6%;
  margin-top: 250px;
  min-height: 100px;
  height: 520px;
  @media screen and (max-width: 700px) {
    width: 90%;
    left: 5%;
  }
`
export const GroupBlock = styled.div`
  position: relative;
  width: 33%;
  height: 260px;
  float: left;
  /* background-color: green; */
  background-image: url(${(props) => back[props.back]});
  background-repeat: no-repeat;
  background-position: center;
  animation: ${(props) => Math.random() * (6 - 4) + 4}s
    ${(props) => Math.random() * props.back}s scaleBacks ease infinite;
  @media screen and (max-width: 700px) {
    width: 50%;
    height: 120px;
    background-size: contain;
  }
  @keyframes scaleBacks {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
`
