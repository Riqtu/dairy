import styled from '@emotion/styled'

export const ReservationWrapper = styled.div`
  position: relative;
  overflow: hidden;
  color: rgba(82, 72, 39, 1);
  margin-bottom: 400px;
  @media screen and (max-width: 770px) {
    margin-bottom: 100px;
  }
`
export const BigImage = styled.img`
  position: relative;
  width: 770px;
  left: 40%;
  @media screen and (max-width: 770px) {
    width: 400px;
  }
`
export const ReservationLogo = styled.img`
  position: relative;
  width: 770px;
  left: 0%;
  top: 0px;
  margin-top: 80px;
  margin-bottom: 120px;
  @media screen and (max-width: 770px) {
    width: 300px;
    top: 250px;
    margin-bottom: 140px;
  }
`

export const Form = styled.form`
  position: relative;
  width: 100%;

  /* height: 100vh; */
`

export const Time = styled.div`
  position: relative;
  margin-top: 50px;
  width: 30%;
  height: 250px;
  left: 10%;
  float: left;
  label {
    line-height: 0;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 10pt;
  }
  @media screen and (max-width: 770px) {
    width: 80%;
    height: 150px;
    label {
      top: 50%;
    }
  }
`
export const TimeInput = styled.input`
  position: relative;
  margin-top: 50px;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  font-size: 150pt;
  line-height: 0;
  margin-top: -20px;
  padding-left: 20px;
  outline: none;
  font-family: 'Uberschrift';
  line-height: normal;
  color: rgba(82, 72, 39, 1);

  @media screen and (max-width: 1366px) {
    font-size: 120pt;
  }
  @media screen and (max-width: 1240px) {
    font-size: 100pt;
  }
  /* border-bottom: 1px solid black; */
  @media screen and (max-width: 770px) {
    font-size: 100pt;
    margin-top: 50px;
    height: auto;
    line-height: normal;
  }
`
export const Line = styled.div`
  position: relative;
  width: 150px;
  /* left: 42.5%; */
  margin-top: 160px;
  height: 5px;
  background-color: rgba(82, 72, 39, 1);
  margin-left: 12%;
  float: left;
  @media screen and (max-width: 770px) {
    margin-top: 130px;
    height: 0px;
    background-color: transparent;
    /* display: none; */
  }
`
export const Date = styled.div`
  position: relative;
  margin-top: 50px;
  width: 46%;
  height: 250px;
  /* left: auto;
  right: 0; */
  float: left;
  label {
    line-height: 0;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 10pt;
  }
  @media screen and (max-width: 770px) {
    width: 80%;
    margin-left: 10%;
    height: 90px;
    top: 0;
  }
`
export const DateInput = styled.input`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  font-size: 150pt;
  line-height: 0;
  margin-top: -20px;
  padding-left: 20px;
  outline: none;
  font-family: 'Uberschrift';
  line-height: normal;
  color: rgba(82, 72, 39, 1);

  @media screen and (max-width: 1366px) {
    font-size: 120pt;
  }
  @media screen and (max-width: 1240px) {
    font-size: 100pt;
  }
  /* border-bottom: 1px solid black; */
  @media screen and (max-width: 770px) {
    font-size: 60pt;
    height: auto;

    line-height: normal;
  }
`

export const Name = styled.div`
  position: relative;
  margin-top: 0px;
  width: 45%;
  height: ${(props) => (props.len < 6 ? '270px' : '170px')};
  /* background-color: blue; */
  margin-left: 17%;
  transition: 0.6s;
  /* left: auto;
  right: 0; */
  float: left;
  @media screen and (min-width: 1600px) {
    height: ${(props) => (props.len < 6 ? '300px' : '170px')};
  }
  label {
    line-height: 0;
    opacity: 0.5;
    position: absolute;
    top: 100px;
    left: -15%;
    font-size: 10pt;

    @media screen and (max-width: 770px) {
      top: 50px;
    }
  }
  @media screen and (max-width: 770px) {
    width: 80%;
    margin-left: 10%;
    height: 90px;
    top: 0;
    position: relative;
    margin-top: 80px;
    label {
      line-height: 0;
      opacity: 0.5;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`

export const NameInput = styled.input`
  position: relative;
  width: 100%;
  height: 80%;
  background-color: transparent;
  border: none;
  font-size: ${(props) => (props.len < 5 ? '150pt' : '90pt')};
  line-height: 0;
  margin-top: -20px;
  margin-left: 70px;
  transition: 0.6s;
  /* padding-left: 20px; */
  outline: none;
  font-family: 'Uberschrift';
  border-bottom: 1px solid black;
  line-height: normal;
  color: rgba(82, 72, 39, 1);

  @media screen and (max-width: 1366px) {
    width: 90%;
    height: 67%;
    font-size: ${(props) => (props.len < 5 ? '120pt' : '70pt')};
  }
  @media screen and (max-width: 1240px) {
    font-size: ${(props) => (props.len < 5 ? '100pt' : '50pt')};
    width: 90%;
  }
  @media screen and (max-width: 770px) {
    margin-left: 0;
    margin-top: -20px;
    padding-left: 20px;
    font-size: 60pt;
    height: auto;
    line-height: normal;
  }
`

export const Phone = styled.div`
  position: relative;
  width: 48%;
  height: 100px;
  margin-top: 30px;

  /* background-color: blue; */
  margin-left: 10%;
  /* left: auto;
  right: 0; */
  float: left;
  /* label {
    line-height: 0;
    opacity: 0.5;
    position: absolute;
    top: 40px;
    left: 0;
    @media screen and (max-width: 770px) {
      top: 15px;
    }
  } */
  label {
    line-height: 0;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 10pt;
  }
  @media screen and (max-width: 1366px) {
    margin-top: -50px;
  }
  @media screen and (max-width: 770px) {
    width: 80%;
    margin-left: 10%;
    height: 90px;
    top: 0;
    position: relative;
    margin-top: 80px;
    label {
      line-height: 0;
      opacity: 0.5;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`

export const PhoneInput = styled.input`
  position: relative;
  margin-top: 70px;
  width: 100%;
  /* height: 140px; */
  background-color: transparent;
  border: none;
  font-size: 70pt;
  line-height: 0;
  margin-top: -20px;
  margin-left: 110px;
  /* padding-left: 20px; */
  outline: none;
  font-family: 'Uberschrift';
  border-bottom: 1px solid black;
  float: left;

  line-height: normal;
  color: rgba(82, 72, 39, 1);

  @media screen and (max-width: 1366px) {
    font-size: 60pt;
    width: 90%;
  }
  @media screen and (max-width: 1240px) {
    font-size: 45pt;
    width: 90%;
  }
  @media screen and (max-width: 770px) {
    margin-left: 0;
    margin-top: 40px;
    padding-left: 20px;
    height: auto;
    line-height: normal;
    font-size: 26pt;
  }
`

export const Submit = styled.button`
  position: relative;
  border: none;
  background-color: transparent;

  cursor: pointer;
  margin-top: 120px;
  left: 10%;
  /* z-index: 5; */
  img {
    width: 250px;
  }
  transition: 0.3s;
  outline: none;
  &:hover {
    transform: ${(props) => (props.sub ? '' : 'scale(1.2) rotate(-20deg)')};
  }
  transform: ${(props) => (props.sub ? 'scale(0.3) rotate(-120deg);' : '')};

  @media screen and (max-width: 1366px) {
    img {
      width: 150px;
    }
  }
  @media screen and (max-width: 1240px) {
    img {
      width: 130px;
    }
    left: 0;
    margin-top: 60%;
  }
  @media screen and (max-width: 770px) {
    img {
      width: 200px;
    }
    left: calc(50% - 100px);
    margin-top: 50px;
  }
`
