import React, { useState } from 'react'
import {
  ContactsWrapper,
  // ContactsVideoWrapper,
  // Video,
  ContactsTextWrapper,
  ContactsLogo,
} from './Contacts.styles'

// import video from './../../assets/video/dairyTest.mp4'
import { useUpdateLocation } from '../../hooks/useUpdateLocation'
import { Preloader, Header } from '../../components'
import logoCircle from './../../assets/logo-circle.png'

import logo from './../../assets/contacts-logo.svg'
const Contacts = (props) => {
  const [isLoaded, setIsLoaded] = useState(false)

  useUpdateLocation()
  return (
    <ContactsWrapper>
      <Preloader setIsLoaded={setIsLoaded} isLoaded={isLoaded}></Preloader>
      <Header></Header>
      {/* <ContactsVideoWrapper>
        <Video
          loop="1"
          muted="1"
          autoPlay={true}
          playsInline
          poster="video/plane.jpg"
        >
          <source src={video} type="video/mp4" />
        </Video>
      </ContactsVideoWrapper> */}
      <ContactsTextWrapper>
        ROSTOV-NA-DONU <br /> SEMASHKO 51 <br />
        <img src={logoCircle} alt="" /> <br /> 8 (863) 269-90-45
      </ContactsTextWrapper>
      <ContactsLogo src={logo} alt=""></ContactsLogo>
    </ContactsWrapper>
  )
}

export default Contacts
