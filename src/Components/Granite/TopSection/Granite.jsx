import React from 'react'
import { SectionWrap,Left, Title, Desc, Right } from './GraniteElement'
import logo from '../../../assets/logoElement.png'

const Granite = () => {
  return (
    <SectionWrap>
      <Left>
        <Title>Granite</Title>
        <Desc>Granite is formed from slow-cooling magma, which gives it its unique mineral composition and texture. It is known for its durability, strength, and beauty, making it a popular choice for counter tops, flooring, wall cladding, and more.</Desc>
      </Left>
      <Right>
        <img src={logo} alt="logo" />
      </Right>
    </SectionWrap>
  )
}

export default Granite