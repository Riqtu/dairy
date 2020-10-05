import React, { useState } from 'react'
import {
  ReservationWrapper,
  // BigImage,
  ReservationLogo,
  Form,
  Time,
  TimeInput,
  Line,
  Date,
  DateInput,
  Name,
  NameInput,
  Phone,
  PhoneInput,
  Submit,
} from './Reservation.styles'

// import img5 from './../../assets/img5.png'
import submit from './../../assets/submit.svg'
import reservation from './../../assets/reserv.svg'

import InputMask from 'react-input-mask'
import Fade from 'react-reveal/Fade'

const Reservation = (props) => {
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  return (
    <ReservationWrapper>
      <Fade bottom cascade>
        {/* <BigImage src={img5} alt="Картинка"></BigImage> */}
        <ReservationLogo src={reservation} alt="Картинка"></ReservationLogo>
        <Form>
          <Time>
            <label>Во сколько</label>
            <InputMask
              mask="99:99"
              type="text"
              placeholder="19:00"
              maskPlaceholder="19:00"
              value={time}
              onChange={(e) => {
                setTime(e.target.value)
              }}
            >
              <TimeInput disableUnderline />
            </InputMask>
          </Time>
          <Line></Line>
          <Date>
            <label>Когда</label>
            <InputMask
              mask="99.99/20"
              type="text"
              placeholder="25.08/20"
              maskPlaceholder="25.08/20"
              value={date}
              onChange={(e) => {
                setDate(e.target.value)
              }}
            >
              <DateInput disableUnderline />
            </InputMask>
          </Date>
          <Name len={name.length}>
            <label>Имя</label>
            <NameInput
              type="text"
              placeholder="IVANOV"
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
              disableUnderline
              len={name.length}
            />
          </Name>
          <Phone>
            <label>Телефон</label>
            <InputMask
              mask="+7 (999) 999-99-99"
              type="text"
              placeholder="+7 (999) 999-99-99"
              maskPlaceholder="+7 (999) 999-99-99"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value)
              }}
            >
              <PhoneInput disableUnderline />
            </InputMask>
          </Phone>
          <Submit>
            <img src={submit} alt="" />
          </Submit>
        </Form>
      </Fade>
    </ReservationWrapper>
  )
}

export default Reservation
