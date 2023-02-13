import React from 'react'
import { Title, Desc } from '../Map/MapElement'
import { OurClientWrap, ClientsList, TopSection, LeftSection, RightSection, LogoElement } from './OurClientsElement'
import client01 from '../../../assets/clients/client01.png'

const OurClients = () => {

    const clientsList = [
        {
            alt: "clientName1",
            src: client01
        },
        {
            alt: "clientName2",
            src: client01
        },
        {
            alt: "clientName3",
            src: client01
        },
        {
            alt: "clientName4",
            src: client01
        },
        {
            alt: "clientName5",
            src: client01
        },
        {
            alt: "clientName6",
            src: client01
        },
        {
            alt: "clientName7",
            src: client01
        },
        {
            alt: "clientName8",
            src: client01
        },
        {
            alt: "clientName9",
            src: client01
        },
        {
            alt: "clientName10",
            src: client01
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