import React, { useState } from 'react'
import {
  MasterFormWrapper,
  Form,
  Name,
  NameInput,
  Phone,
  PhoneInput,
  Submit,
  // ReservationLogo,
} from './MasterForm.styles'

import submit from './../../assets/submit.svg'
import submitOk from './../../assets/submitOk.svg'

import InputMask from 'react-input-mask'
import Fade from 'react-reveal/Fade'
// import zapis from './../../assets/zapis.svg'

const MasterForm = (props) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [sub, setSub] = useState(false)

  return (
    <MasterFormWrapper>
      {/* <ReservationLogo src={zapis} alt=""></ReservationLogo> */}
      <Fade bottom cascade>
        <iframe
          title="formPost"
          name="formPost"
          style={{ display: 'none' }}
        ></iframe>
        <Form
          action="https://formspree.io/f/mvovkgpz"
          method="POST"
          target="formPost"
        >
          <Phone>
            <label>Телефон</label>
            <InputMask
              mask="+7 (999) 999-99-99"
              type="text"
              placeholder="+7 (999) 999-99-99"
              maskPlaceholder="+7 (999) 999-99-99"
              value={phone}
              name="Телефон"
              onChange={(e) => {
                setPhone(e.target.value)
              }}
            >
              <PhoneInput disableUnderline />
            </InputMask>
          </Phone>
          <Name len={name.length}>
            <label>Имя</label>
            <NameInput
              type="text"
              placeholder="IVANOV"
              value={name}
              name="Имя"
              onChange={(e) => {
                setName(e.target.value)
              }}
              disableUnderline
              len={name.length}
            />
          </Name>
          <Submit>
            <img
              src={sub ? submitOk : submit}
              sub={sub}
              alt=""
              onClick={() => setSub(true)}
            />
          </Submit>
        </Form>
      </Fade>
    </MasterFormWrapper>
  )
}

export default MasterForm
