import React from 'react'
import {
  ReservationWrapper,
  BigImage,
  ReservationLogo,
} from './Reservation.styles'

import img5 from './../../assets/img5.png'
import reservation from './../../assets/reserv.svg'

const Reservation = (props) => {
  return (
    <ReservationWrapper>
      <BigImage src={img5} alt="Картинка"></BigImage>
      <ReservationLogo src={reservation} alt="Картинка"></ReservationLogo>
    </ReservationWrapper>
  )
}

export default Reservation
