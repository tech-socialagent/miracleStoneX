import React from 'react'
import { FooterWrap, LogoSection, LinkSection, SocialIcon, ContactCard, PagewLink, MobileView } from './FooterElement'
import logo from '../../assets/logoElement.png';
import { BsFacebook, BsLinkedin } from 'react-icons/bs'
import { AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'



const Footer = () => {
    return (
        <>
            <div>
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
                        <a href=""><BsFacebook style={{ color: '#3C5A9A' }} /></a>
                        <a href=""><AiFillInstagram style={{ color: '#A2359D' }} /></a>
                        <a href=""><BsLinkedin style={{ color: ' #2878B7' }} /></a>
                        <a href=""><AiFillTwitterCircle style={{ color: '#1DA1F2' }} /></a>
                        <a href=""><AiFillYoutube style={{ color: '#FF0000' }} /></a>
                    </SocialIcon>
                    <ContactCard>
                        <h2 >Contact</h2>
                        <p>PLOT NO 33, APIIC BULIDING PRODUCTS SEZ
                            ANANGI VILLAGE MADDIPADU MANDAL, Andhra Pradesh 523211
                            PHONE NUMBER: +91 91771 95555,+91 9573148794
                            EMAIL ID: info@anaghastones.com</p>
                    </ContactCard>

                </FooterWrap>
                <h6 style={{ textAlign: 'center', marginTop: '10px' }}>
                    Miracle Stonex © 2023 All Right Reserved.
                </h6>
            </div>
            <MobileView>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <LogoSection>
                        <img src={logo} alt="Logo" />
                    </LogoSection>
                    <SocialIcon>
                        <a href=""><BsFacebook style={{ color: '#3C5A9A' }} /></a>
                        <a href=""><AiFillInstagram style={{ color: '#A2359D' }} /></a>
                        <a href=""><BsLinkedin style={{ color: ' #2878B7' }} /></a>
                        <a href=""><AiFillTwitterCircle style={{ color: '#1DA1F2' }} /></a>
                        <a href=""><AiFillYoutube style={{ color: '#FF0000' }} /></a>
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
                <h6 style={{ textAlign: 'center', marginTop: '10px' }}>
                    Miracle Stonex © 2023 All Right Reserved.
                </h6>
            </MobileView>
        </>
    )
}

export default Footer