import React from 'react'
import { SectionWrap, Left, Title, Desc, Right } from './GraniteMarbleElement'
import logo from '../../../assets/logoElement.png'
import { useLocation } from 'react-router-dom'

const Granite = () => {
  const { pathname } = useLocation();

  return (
    <SectionWrap>
      <Left>
        <Title>{pathname == '/granite' ? 'Granite' : 'Marble'}</Title>
        <Desc>
          {
            pathname == '/granite' ?
              'Granite is formed from slow-cooling magma, which gives it its unique mineral composition and texture. It is known for its durability, strength, and beauty, making it a popular choice for counter tops, flooring, wall cladding, and more.' :
              'Marble is formed from slow-cooling magma, which gives it its unique mineral composition and texture. It is known for its durability, strength, and beauty, making it a popular choice for counter tops, flooring, wall cladding, and more.'
          }
          Granite is formed from slow-cooling magma, which gives it its unique mineral composition and texture. It is known for its durability, strength, and beauty, making it a popular choice for counter tops, flooring, wall cladding, and more.
        </Desc>
      </Left>
      <Right>
        <img src={logo} alt="logo" />
      </Right>
    </SectionWrap>
  )
}

export default Granite