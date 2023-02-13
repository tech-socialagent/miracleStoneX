import React, { useState } from 'react'
import { CardWrap, Image, Title, Desc, Btn } from './ProductCardElement'
import { useNavigate, useLocation } from 'react-router-dom';

const ProductCard = ({ name, desc, image, id, page }) => {
  const navigate = useNavigate();
  const [readActive, setReadActive] = useState(false);
  let navPage= '';
  if(page == 'granite'){
    navPage = 'granite'
  }
  else{
    navPage = 'marble'
  }
  
  return (
    <CardWrap>
      <Image style={{cursor: 'pointer'}} src={image} alt='product Img' onClick={() => navigate('/'+navPage+'/product/' + id)} />
      <Title style={{cursor: 'pointer'}} onClick={() => navigate('/'+navPage+'/product/' + id)} >{name}</Title>
      <Desc style={{cursor: 'pointer'}} onClick={() => navigate('/'+navPage+'/product/' + id)} >{readActive ? desc.substr(0, 600) : desc.substr(0, 200) + '...'}</Desc>
      <div
        onClick={() => setReadActive(!readActive)}
        style={{ color: 'blue', fontSize: '10px', marginTop: '5px', cursor: 'pointer' }} >{readActive ? 'Less..' : 'Read more'}</div>
      <Btn>
        <button style={{cursor: 'pointer'}} onClick={() => navigate('/GetInTouch')}>Enquiry</button>
      </Btn>
    </CardWrap>
  )
}
export default ProductCard
