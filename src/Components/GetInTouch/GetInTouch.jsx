import React, { useState } from 'react'
import logo from '../../assets/logoElement.png'
import { Wrap, Left, Right, FormWrap, TopSection, } from './GetInTouchElement'

const GetInTouch = () => {

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')


  const submitHandle = (e) => {

    e.preventDefault();
    const config = {
      SecureToken: "21ccf322-970a-4da2-a907-ef9ef75ba2b5",
      To: 'miraclestonex001@gmail.com',
      From: "info@miraclestonex.co.in",
      Subject: "This is the subject TEST",
      Body: `Name: ${name} \n Email: ${email} \n Phone: +91${phone}`,
    }
    if (window.Email) {
      window.Email.send(config).then((err) => {
        alert('data collected', err)
        // setSending(false)
        setName('')
        setEmail('')
        setPhone('')
      });
    }

  }




  return (
    <Wrap>
      <Left>
        <h1>WE'RE WAITING<br />
          TO HEAR FROM YOU!</h1>
      </Left>
      <Right>
        <FormWrap onSubmit={submitHandle} >
          <TopSection>
            <h2>Enquiry</h2>
            <img src={logo} alt="" />
          </TopSection>
          <p>Fill out this inquiry form and we will get in touch with you shortly.</p>
          <input type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='My Name' />
          <input type='text' placeholder='Location' />
          <input required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type='tel' placeholder='Contact No.' />
          <input required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email' placeholder='Email id' />
          <textarea type='text' placeholder='message' />
          <input type='submit' style={{ width: '30%', border: 'none', background: '#FF9634', borderRadius: '5px', color: '#fff' }} />
        </FormWrap>
      </Right>
      {/* zoho form */}








    </Wrap>
  )
}

export default GetInTouch