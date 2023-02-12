import React from 'react'
import { FooterWrap, LogoSection, LinkSection, SocialIcon, ContactCard, PagewLink, MobileView } from './FooterElement'
import logo from '../../assets/logoElement.png';



const Footer = () => {
    return (
        <>
            <FooterWrap>
                <LogoSection>
                    <img src={logo} alt="Logo" />
                </LogoSection>
                <LinkSection>
                    <h2 style={{ color: "red", margin: '0' }} >Links</h2>
                    <PagewLink to='/' >Home</PagewLink>
                    <PagewLink to='/aboutUs' >About</PagewLink>
                    <PagewLink to='/products' >Products</PagewLink>
                    <PagewLink to='/getInTouch' >Get In Touch</PagewLink>
                </LinkSection>
                <SocialIcon>
                    <a href=""><img src="" alt="icons" /></a>
                    <a href=""><img src="" alt="icons" /></a>
                    <a href=""><img src="" alt="icons" /></a>
                    <a href=""><img src="" alt="icons" /></a>
                    <a href=""><img src="" alt="icons" /></a>
                </SocialIcon>
                <ContactCard>
                    <h2 >Contact</h2>
                    <p>PLOT NO 33, APIIC BULIDING PRODUCTS SEZ
                        ANANGI VILLAGE MADDIPADU MANDAL, Andhra Pradesh 523211
                        PHONE NUMBER: +91 91771 95555,+91 9573148794
                        EMAIL ID: info@anaghastones.com</p>
                </ContactCard>
            </FooterWrap>
            <MobileView>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <LogoSection>
                        <img src={logo} alt="Logo" />
                    </LogoSection>
                    <SocialIcon>
                        <a href=""><img src="" alt="icons" /></a>
                        <a href=""><img src="" alt="icons" /></a>
                        <a href=""><img src="" alt="icons" /></a>
                        <a href=""><img src="" alt="icons" /></a>
                        <a href=""><img src="" alt="icons" /></a>
                    </SocialIcon>
                </div>
                <LinkSection>
                    <h2 style={{ color: "red", margin: '0' }} >Links</h2>
                    <PagewLink to='/' >Home</PagewLink>
                    <PagewLink to='/aboutUs' >About</PagewLink>
                    <PagewLink to='/products' >Products</PagewLink>
                    <PagewLink to='/getInTouch' >Get In Touch</PagewLink>
                </LinkSection>
                <ContactCard>
                    <h2 >Contact</h2>
                    <p>PLOT NO 33, APIIC BULIDING PRODUCTS SEZ
                        ANANGI VILLAGE MADDIPADU MANDAL, Andhra Pradesh 523211<br />
                        <span style={{ fontWeight: 'bold' }}>PHONE NUMBER:</span> +91 91771 95555, +91 9573148794<br />
                        <span style={{ fontWeight: 'bold' }}>EMAIL ID:</span> info@anaghastones.com</p>
                </ContactCard>
                <h4 style={{textAlign: 'center'}}>
                    Miracle Stonex © 2023 All Right Reserved.
                </h4>
            </MobileView>
        </>
    )
}

export default Footer