import styled from '@emotion/styled'

export const ContactsWrapper = styled.div`
  position: relative;
  /* height: 100vh; */
  width: 100%;
`

export const ContactsTextWrapper = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  color: rgba(82, 72, 39, 1);
  font-size: 40pt;
  font-family: 'Uberschrift';
  font-weight: lighter;
  padding-bottom: 120px;
  img {
    width: 5%;
    /* filter: invert(1); */
    filter: invert(0.4) sepia(1) saturate(1.1) hue-rotate(0deg) brightness(0.58);

    margin: 100px 0 100px 0;
  }
  a {
    text-decoration: none;
    color: rgba(82, 72, 39, 1);
  }
  b {
    font-size: 20pt;
    font-weight: normal;
  }
  @media screen and (max-width: 320px) {
    font-size: 30pt;
  }
`
export const ContactsVideoWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  margin-top: -200px;
  overflow: hidden;
`
export const ContactsLogo = styled.img`
  position: relative;
  width: 100%;
  filter: invert(0.4) sepia(1) saturate(1.1) hue-rotate(0deg) brightness(0.58);
  opacity: 0.9;
`
export const Video = styled.video`
  position: absolute;
  /* top: -50%;
  left: -50%; */
  width: auto;
  height: 100%;
  @media (min-aspect-ratio: 16/9) {
    width: 100%;
    height: auto;
  }
  @media (max-aspect-ratio: 16/9) {
    width: auto;
    height: 100%;
  }
`
