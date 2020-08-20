import styled from '@emotion/styled'

export const ContactsWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
`

export const ContactsTextWrapper = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  color: white;
  font-size: 40pt;
  font-family: 'Uberschrift';
  font-weight: lighter;
  padding-bottom: 120px;
  img {
    width: 5%;
    filter: invert(1);
    margin: 50px 0 150px 0;
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
