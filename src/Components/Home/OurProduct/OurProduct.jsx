import React from 'react'
import { Title, Desc } from '../Map/MapElement'
import { OurProductWrap, Product, Granite, Marble, MContent, GContent } from './OurProductElement'
import image1 from "../../../assets/graniteHome.jpg"
import image2 from "../../../assets/graniteImages/Ice-Blue.jpg"
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
          <img src={image1} alt="img" />
          <h1>Granite</h1>
          <GContent>
            <p style={{ textAlign: 'center', paddingLeft: '10%', paddingRight: '10%' }} >Granite is formed from slow-cooling magma, which gives it its unique mineral composition and texture. It is known for its durability, strength, and beauty, making it a popular choice for counter tops, flooring, wall cladding, and more.</p>
            <button
              onClick={() => navigate('/granite')}
            >Explore</button>
          </GContent>
        </Granite>
        <Marble>
          <img src={image2} alt="img" />
          <h1>Marble</h1>
          <MContent>
            <p style={{ textAlign: 'center', paddingLeft: '10%', paddingRight: '10%' }} >Marbles are made from a variety of materials including natural stones like granite, limestone, and serpentine, as well as synthetic materials like glass, ceramics, and plastic..</p>
            <button
              onClick={() => navigate('/marble')}
            >Explore</button>
          </MContent>
        </Marble>
      </Product>
    </OurProductWrap>
  )
}

export default OurProduct