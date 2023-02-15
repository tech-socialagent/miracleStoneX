import React, { useState } from 'react'
import logo from '../../assets/logoElement.png'
import { Wrap, Left, Right, FormWrap, TopSection, Btn } from './GetInTouchElement'

const GetInTouch = () => {

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [location, setLocation] = useState('')
  const [Message, setMessage] = useState('')
  const [sending, setSending] = useState(false)


  const submitHandle = (e) => {
    e.preventDefault();
    setSending(true)
    const config = {
      SecureToken: "21ccf322-970a-4da2-a907-ef9ef75ba2b5",
      To: 'miraclestonex001@gmail.com',
      From: "info@miraclestonex.co.in",
      Subject: "Website Lead",
      Body: `Name: ${name} \n Email: ${email} \n Phone: +91${phone} Location: ${location} Message: ${Message}`,
    }
    if (window.Email && sending == false) {
      window.Email.send(config).then((err) => {
        alert('we will get back to you shortly')
        setSending(false)
        setName('')
        setEmail('')
        setPhone('')
        setLocation('')
        setMessage('')
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
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type='text' placeholder='Location' />
          <input required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type='tel' placeholder='Contact No.' />
          <input required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email' placeholder='Email id' />
          <textarea
            value={Message}
            onChange={(e) => setMessage(e.target.value)}
            type='text' placeholder='message' />
          <Btn sending={sending} >
            <input type='submit' />
          </Btn>
        </FormWrap>
      </Right>
      {/* zoho form */}








    </Wrap>
  )
}

export default GetInTouch