import React from 'react'
import { GroupWrapper, GroupBlock } from './Group.styles'
import Slide from 'react-reveal/Slide'
import Zoom from 'react-reveal/Zoom'

const Group = (props) => {
  return (
    <GroupWrapper>
      <Slide duration={2000} left>
        <GroupBlock back={0}></GroupBlock>
      </Slide>
      <Zoom duration={2000}>
        <GroupBlock back={1}></GroupBlock>
      </Zoom>
      <Slide duration={2000} right>
        <GroupBlock back={2}></GroupBlock>
      </Slide>
      <Slide duration={2000} left>
        <GroupBlock back={3}></GroupBlock>
      </Slide>
      <Zoom duration={2000}>
        <GroupBlock back={4}></GroupBlock>
      </Zoom>
      <Slide duration={2000} right>
        <GroupBlock back={5}></GroupBlock>
      </Slide>
    </GroupWrapper>
  )
}

export default Group
