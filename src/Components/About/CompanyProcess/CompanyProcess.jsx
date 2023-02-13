import React, { useState } from 'react'
// import './CompanyProcess.css'
import { Wrap, Title, Desc, Process, ProcessLine, List, Line, ProcessContent, Content, Image, NumberWrap, NumberContent, Number, Text } from './CompanyProcessElements'

const CompanyProcess = () => {

  const numberData = [
    {
      number: "3000+",
      text: "Customer"
    },
    {
      number: "4+",
      text: "Location"
    },
    {
      number: "70+",
      text: "Products"
    },
  ]

  return (
    <Wrap>
      <Title>Company Process</Title>
      <Desc>Miracle Stone granite company ensures that each customer receives the highest quality products and services, and a seamless and stress-free experience.</Desc>
      {/* <Process>
        <ProcessLine>
          <List>Selection</List>
          <Line />
          <List>Measurment</List>
          <Line />
          <List>Fabrication</List>
          <Line />
          <List>Quality Control</List>
          <Line />
          <List>Installation</List>
          <Line />
          <List>Customer Service</List>
        </ProcessLine>
        <ProcessContent>
          <Content>
            Our customers can choose from a wide range of granite colours, patterns and textures to find the perfect stone for their project. Our team is available to assist with selecting the best stone for their needs.
          </Content>
          <Image src="" alt="Images" />
        </ProcessContent>
      </Process> */}
      <NumberWrap>
        {numberData.map((item, key) => (
          <NumberContent key={key} >
            <Number>{item.number} </Number>
            <Text>{item.text} </Text>
          </NumberContent>
        ))}

      </NumberWrap>
    </Wrap>
  )
}

export default CompanyProcess