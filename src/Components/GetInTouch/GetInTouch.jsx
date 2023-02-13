import React from 'react'
import logo from '../../assets/logoElement.png'
import { Wrap, Left, Right, FormWrap, TopSection, } from './GetInTouchElement'

const GetInTouch = () => {
  return (
    <Wrap>
      <Left>
        <h1>WE'RE WAITING<br />
          TO HEAR FROM YOU!</h1>
      </Left>
      <Right>
        <FormWrap>
          <TopSection>
            <h2>Enquiry</h2>
            <img src={logo} alt="" />
          </TopSection>
          <p>Fill out this inquiry form and we will get in touch with you shortly.</p>
          <input type='text' placeholder='My Name' />
          <input type='text' placeholder='Location' />
          <input type='tel' placeholder='Contact No.' />
          <input type='email' placeholder='Email id' />
          <input type='text' placeholder='message' />
          <input type='submit' style={{width: '30%', border: 'none', background: '#FF9634', borderRadius: '5px', color: '#fff'}} />
        </FormWrap>
      </Right>
    </Wrap>
  )
}

export default GetInTouch