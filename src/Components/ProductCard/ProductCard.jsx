import React from 'react'
import { CardWrap, Image, Title, Desc, Btn } from './ProductCardElement'

const ProductCard = ({name, desc, image}) => {
  return (
    <CardWrap>
      <Image src={image} alt='product Img' />
      <Title>{name} </Title>
      <Desc>{desc}</Desc>
      <Btn>
        <button>Enquiry</button>
      </Btn>
    </CardWrap>
  )
}

export default ProductCard