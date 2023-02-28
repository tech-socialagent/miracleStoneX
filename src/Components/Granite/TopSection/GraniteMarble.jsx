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
              'Granite is a type of natural stone that is formed from the slow cooling and solidification of magma or lava. It is characterized by its granular texture and is composed primarily of quartz, feldspar, and mica. Granite is known for its durability and resistance to weathering and erosion, making it a popular choice for building materials, such as counter tops, floor tiles, and monumental stones. It comes in a variety of colors, ranging from light pinks and grays to deep blacks and greens, and its natural patterns make each piece of granite unique.' :
              'Marbles are made from a variety of materials including natural stones like limestone, and serpentine, as well as synthetic materials like glass, ceramics, and plastic. Natural marble come in a range of colors and patterns, while synthetic marbles can be made in a variety of hues, making them ideal for decoration. They are often used as building and landscaping materials, as well as in art, and collectible items. They are durable and long-lasting, and are prized for their beauty and versatility.'
          }
        </Desc>
      </Left>
      <Right>
        <img src={logo} alt="logo" />
      </Right>
    </SectionWrap>
  )
}

export default Granite