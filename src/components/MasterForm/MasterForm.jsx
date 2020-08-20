import React, { useState } from 'react'
import {
  MasterFormWrapper,
  Form,
  Name,
  NameInput,
  Phone,
  PhoneInput,
  Submit,
} from './MasterForm.styles'

import submit from './../../assets/submit.svg'
import InputMask from 'react-input-mask'
import Fade from 'react-reveal/Fade'

const MasterForm = (props) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  return (
    <MasterFormWrapper>
      <Fade bottom cascade>
        <Form>
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
          <Submit>
            <img src={submit} alt="" />
          </Submit>
        </Form>
      </Fade>
    </MasterFormWrapper>
  )
}

export default MasterForm
