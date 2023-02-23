import React, { useState, useContext, useEffect } from 'react'
import { SectionWrap, Filter, FilterMobile, FilterDesktop, ProductWrap, Color } from './ProductListElement'
import ProductCard from '../../ProductCard/ProductCard'
import { graniteData } from '../GraniteData'
import { marbleData } from '../MarbleData'
import { BsFillDiamondFill } from 'react-icons/bs'
import { ColorContext } from '../../../Context'
import { useLocation } from 'react-router-dom'
import { FiFilter } from 'react-icons/fi'

const ProductList = ({ page }) => {
  const { color, setColor } = useContext(ColorContext)
  const [filterActive, setFilterActive] = useState(false)


  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [color]);

  let data = [];
  let currentPage = ''
  if (pathname == '/granite') {
    data = graniteData
    currentPage = 'granite'
    console.log(currentPage);
  }
  else {
    data = marbleData;
    currentPage = 'marble'
    console.log(currentPage);
  }

  return (
    <SectionWrap>
      <Filter>
        <FilterMobile filterActive={filterActive} onClick={() => setFilterActive(!filterActive)} ><FiFilter />Filter</FilterMobile>
        <FilterDesktop ><FiFilter />Filter</FilterDesktop>
        <Color filterActive={filterActive}>
          <h2>Color</h2>
          <h3 style={color == '' ? { color: 'var(--secondary-color)' } : {}} onClick={() => { setColor(''); setFilterActive(false) }} ><BsFillDiamondFill style={{ marginRight: '10px' }} />All</h3>
          <h3 style={color == 'White' ? { color: 'var(--secondary-color)' } : {}} onClick={() => { setColor('White'); setFilterActive(false) }} ><BsFillDiamondFill style={{ marginRight: '10px' }} />White</h3>
          <h3 style={color == 'Black' ? { color: 'var(--secondary-color)' } : {}} onClick={() => { setColor('Black'); setFilterActive(false) }} ><BsFillDiamondFill style={{ marginRight: '10px' }} />Black</h3>
          <h3 style={color == 'Cream' ? { color: 'var(--secondary-color)' } : {}} onClick={() => { setColor('Cream'); setFilterActive(false) }} ><BsFillDiamondFill style={{ marginRight: '10px' }} />Cream</h3>
          <h3 style={color == 'gold' ? { color: 'var(--secondary-color)' } : {}} onClick={() => { setColor('gold'); setFilterActive(false) }} ><BsFillDiamondFill style={{ marginRight: '10px' }} />Gold</h3>
          <h3 style={color == 'Blue' ? { color: 'var(--secondary-color)' } : {}} onClick={() => { setColor('Blue'); setFilterActive(false) }}><BsFillDiamondFill style={{ marginRight: '10px' }} />Blue</h3>
          <h3 style={color == 'Green' ? { color: 'var(--secondary-color)' } : {}} onClick={() => { setColor('Green'); setFilterActive(false) }}><BsFillDiamondFill style={{ marginRight: '10px' }} />Green</h3>
          <h3 style={color == 'Brown' ? { color: 'var(--secondary-color)' } : {}} onClick={() => { setColor('Brown'); setFilterActive(false) }}><BsFillDiamondFill style={{ marginRight: '10px' }} />Brown</h3>
          <h3 style={color == 'Red' ? { color: 'var(--secondary-color)' } : {}} onClick={() => { setColor('Red'); setFilterActive(false) }}><BsFillDiamondFill style={{ marginRight: '10px' }} />Red</h3>
          <h3 style={color == 'Grey' ? { color: 'var(--secondary-color)' } : {}} onClick={() => { setColor('Grey'); setFilterActive(false) }}><BsFillDiamondFill style={{ marginRight: '10px' }} />Grey</h3>
          <h3 style={color == 'Silver' ? { color: 'var(--secondary-color)' } : {}} onClick={() => { setColor('Silver'); setFilterActive(false) }}><BsFillDiamondFill style={{ marginRight: '10px' }} />Silver</h3>
          <h3 style={color == 'Pink' ? { color: 'var(--secondary-color)' } : {}} onClick={() => { setColor('Pink'); setFilterActive(false) }}><BsFillDiamondFill style={{ marginRight: '10px' }} />Pink</h3>
        </Color>
      </Filter>
      <ProductWrap>
        {
          data.map((item, key) => {
            if (color == '')
              return <ProductCard key={key} name={item.Name} desc={item.desc} image={item.image} id={item.id} page={page} />
            if (color == item.color)
              return <ProductCard key={key} name={item.Name} desc={item.desc} image={item.image} id={item.id} page={page} />
          })
        }

      </ProductWrap>
    </SectionWrap>
  )
}

export default ProductList