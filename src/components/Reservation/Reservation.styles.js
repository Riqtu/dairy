import styled from '@emotion/styled'

export const ReservationWrapper = styled.div`
  position: relative;
  overflow: hidden;
`
export const BigImage = styled.img`
  position: relative;
  width: 700px;
  left: 40%;
  @media screen and (max-width: 700px) {
    width: 400px;
  }
`
export const ReservationLogo = styled.img`
  position: absolute;
  width: 700px;
  left: 0%;
  top: 370px;
  @media screen and (max-width: 700px) {
    width: 300px;
    top: 250px;
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
  }
  @media screen and (max-width: 700px) {
    width: 80%;
    height: 150px;
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

  /* border-bottom: 1px solid black; */
  @media screen and (max-width: 700px) {
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
  margin-top: 130px;
  height: 5px;
  background-color: black;
  margin-left: 12%;
  float: left;
  @media screen and (max-width: 700px) {
    margin-top: 130px;
    height: 3px;
    background-color: transparent;
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
  }
  @media screen and (max-width: 700px) {
    width: 80%;
    margin-left: 10%;
    height: 90px;
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

  /* border-bottom: 1px solid black; */
  @media screen and (max-width: 700px) {
    font-size: 60pt;
    height: auto;

    line-height: normal;
  }
`

export const Name = styled.div`
  position: relative;
  margin-top: 50px;
  width: 45%;
  height: ${(props) => (props.len < 6 ? '270px' : '170px')};
  /* background-color: blue; */
  margin-left: 17%;
  transition: 0.6s;
  /* left: auto;
  right: 0; */
  float: left;
  label {
    line-height: 0;
    opacity: 0.5;
    position: absolute;
    top: 100px;
    left: 0;
    @media screen and (max-width: 700px) {
      top: 50px;
    }
  }
  @media screen and (max-width: 700px) {
    width: 70%;
    margin-left: 10%;
    height: 80px;
  }
`

export const NameInput = styled.input`
  position: relative;
  width: 100%;
  height: 100%;
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

  @media screen and (max-width: 700px) {
    margin-left: 50px;
    font-size: 60pt;
    line-height: normal;
    height: auto;
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
  label {
    line-height: 0;
    opacity: 0.5;
    position: absolute;
    top: 40px;
    left: 0;
    @media screen and (max-width: 700px) {
      top: 15px;
    }
  }
  @media screen and (max-width: 700px) {
    width: 56%;
    margin-left: 10%;
    margin-top: 20%;

    height: 150px;
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

  @media screen and (max-width: 700px) {
    margin-left: 100px;
    font-size: 23pt;
    line-height: normal;
    height: auto;
  }
`

export const Submit = styled.button`
  position: relative;
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-top: 120px;
  left: 10%;
  img {
    width: 300px;
  }
  transition: 0.3s;
  outline: none;
  &:hover {
    transform: scale(1.2) rotate(-20deg);
  }
  @media screen and (max-width: 700px) {
    img {
      width: 200px;
    }
    left: calc(50% - 100px);
    margin-top: 0px;
  }
`
