import React, { useContext } from 'react'
import { Wrap, TopSection, Left, Right, Title, Desc, SecondSection, Card, CardTitle, CardDesc } from './AboutUsElement'

const AboutCom = () => {

  const data = [
    {
      title: "Quality of Products",
      desc: "If the company offers high-quality granite products that are durable and visually appealing, it can set them apart from other companies."
    },
    {
      title: "Customisation Options",
      desc: "ICustom sizes, shapes, and edge treatments can make their products more attractive to customers who want unique and personalised solutions."
    },
    {
      title: "Competitive Pricing",
      desc: "A company that offers competitive pricing can attract customers who are looking for quality products at an affordable price."
    },
  ]

  return (
    <Wrap >
      <TopSection>
        <Left>
          <Title>About Us</Title>
          <Desc>
            The Miracle StoneX is a premium provider of granite products and services. We have processed Indian ,Italian marbles, gangsaw granite slabs and established a reputation for quality and have grown to be a reliable source for clients. Our business is focused on providing superior customer service, offering a wide range of high-quality granite products, from counter tops and flooring to tiles and slabs.
            We extract, process, and finish our granite using state-of-the-art machinery, guaranteeing that every piece is of the greatest calibre. Our team of experts has the experience to offer specialized solutions and ensure that every project is finished to the satisfaction of the client.
            At Miracle StoneX , we prioritize giving our clients a stress-free experience and streamlining their construction , We collaborate closely with our clients and offer the best goods and services.
          </Desc>
        </Left>
        <Right>
          <img src="" alt="img" />
        </Right>
      </TopSection>
      <SecondSection>
        {data.map((item, key) => (
          <Card  key={key}>
            <CardTitle>{item.title} </CardTitle>
            <CardDesc>{item.desc} </CardDesc>
          </Card>
        ))}
      </SecondSection>
    </Wrap>
  )
}

export default AboutCom