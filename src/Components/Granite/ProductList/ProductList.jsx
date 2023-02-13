import React, { useState, useContext } from 'react'
import { SectionWrap, Filter,FilterMobile, FilterDesktop, ProductWrap, Color } from './ProductListElement'
import ProductCard from '../../ProductCard/ProductCard'
import { graniteData } from '../GraniteData'
import { marbleData } from '../MarbleData'
import { BsFillDiamondFill } from 'react-icons/bs'
import { ColorContext } from '../../../Context'
import { useLocation } from 'react-router-dom'

const ProductList = () => {
  const { color, setColor } = useContext(ColorContext)
  const [filterActive, setFilterActive] = useState(false)


  const { pathname } = useLocation();
  console.log(pathname);
  let data = [];
  if(pathname == '/granite'){
    data = graniteData
  }
  else{
    data = marbleData;
  }

  return (
    <SectionWrap>
      <Filter >
        <FilterMobile onClick={()=> setFilterActive(!filterActive)} >Filter</FilterMobile>
        <FilterDesktop>Filter</FilterDesktop>
        <Color filterActive={filterActive}>
          <h2>Color</h2>
          <h3 style={color == 0 ? { color: 'var(--secondary-color)' } : {}} onClick={() => {setColor(0); setFilterActive(false)}} ><BsFillDiamondFill style={{ marginRight: '10px' }} />All</h3>
          <h3 style={color == 1 ? { color: 'var(--secondary-color)' } : {}} onClick={() => {setColor(1); setFilterActive(false)}} ><BsFillDiamondFill style={{ marginRight: '10px' }} />White</h3>
          <h3 style={color == 2 ? { color: 'var(--secondary-color)' } : {}} onClick={() => {setColor(2); setFilterActive(false)}} ><BsFillDiamondFill style={{ marginRight: '10px' }} />Black</h3>
          <h3 style={color == 3 ? { color: 'var(--secondary-color)' } : {}} onClick={() => {setColor(3); setFilterActive(false)}} ><BsFillDiamondFill style={{ marginRight: '10px' }} />Cream</h3>
          <h3 style={color == 4 ? { color: 'var(--secondary-color)' } : {}} onClick={() => {setColor(4); setFilterActive(false)}} ><BsFillDiamondFill style={{ marginRight: '10px' }} />4White</h3>
          <h3 style={color == 5 ? { color: 'var(--secondary-color)' } : {}} onClick={() => {setColor(5); setFilterActive(false)}}><BsFillDiamondFill style={{ marginRight: '10px' }} />5White</h3>
        </Color>
      </Filter>
      <ProductWrap>
        {
          data.map((item, key) => {
            if (color == 0)
              return <ProductCard key={key} name={item.Name} desc={item.desc} image={item.image} />
            if (color == item.color)
              return <ProductCard key={key} name={item.Name} desc={item.desc} image={item.image} />
          })
        }

      </ProductWrap>
    </SectionWrap>
  )
}

export default ProductList