import React from 'react'
import { Title, Desc } from '../Map/MapElement'
import { OurProductWrap, Product, Granite, Marble, MContent, GContent } from './OurProductElement'
import image from "../../../assets/graniteHome.jpg"
import { useNavigate } from "react-router-dom";

function OurProduct() {

  const navigate = useNavigate()

  return (
    <OurProductWrap id='products'>
      <Title>Our Products</Title>
      <Desc>
        The Miracle StoneX history includes the best stones obtained from 50+ countries across the world, unmatched knowledge honed over 30+ years, an attitude firmly rooted in design thinking, and lakhs of pleased clients.
      </Desc>
      <Product>
        <Granite>
          <img src={image} alt="img" />
          <h1>Granite</h1>
          <GContent>
            <p>Granite content</p>
            <button
             onClick={()=> navigate('/granite')}
            >Explore</button>
          </GContent>
        </Granite>
        <Marble>
          <img src={image} alt="img" />
          <h1>Marble</h1>
          <MContent>
            <p>Marble content</p>
            <button
            onClick={()=> navigate('/marble')}
            >Explore</button>
          </MContent>
        </Marble>
      </Product>
    </OurProductWrap>
  )
}

export default OurProduct