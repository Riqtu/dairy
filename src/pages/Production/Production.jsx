import React from 'react'
import { ProductionWrapper } from './Production.styles'
import { Logo, Header } from '../../components'

const Production = (props) => {
  return (
    <ProductionWrapper>
      <Header></Header>
      <Logo page={1}></Logo>
    </ProductionWrapper>
  )
}

export default Production
