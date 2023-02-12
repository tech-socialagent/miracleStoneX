import React from 'react'
import { Title, Desc } from '../Map/MapElement'
import { OurClientWrap, ClientsList, TopSection, LeftSection, RightSection, LogoElement } from './OurClientsElement'
import logoIcon from '../../../assets/logoElement.png'

const OurClients = () => {

    const clientsList = [
        {
            alt: "clientName1",
            src: ""
        },
        {
            alt: "clientName2",
            src: ""
        },
        {
            alt: "clientName3",
            src: ""
        },
        {
            alt: "clientName4",
            src: ""
        },
        {
            alt: "clientName5",
            src: ""
        },
        {
            alt: "clientName6",
            src: ""
        },
        {
            alt: "clientName7",
            src: ""
        },
        {
            alt: "clientName8",
            src: ""
        },
        {
            alt: "clientName9",
            src: ""
        },
        {
            alt: "clientName10",
            src: ""
        }
    ]

    return (
        <OurClientWrap>
            <TopSection>
                <LeftSection>
                    <Title>
                        Our Clients
                    </Title>
                    <Desc>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Desc>
                </LeftSection>

            </TopSection>
            <ClientsList>
                {clientsList.map((item, key)=> (
                    <img key={key} src={item.src} alt={item.alt} />
                ))}
            </ClientsList>
        </OurClientWrap>
    )
}

export default OurClients